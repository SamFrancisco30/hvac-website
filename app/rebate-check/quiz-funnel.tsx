"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, ArrowRight, BadgeCheck, BellRing, CalendarCheck, Check, PhoneCall } from "lucide-react";
import { site } from "@/lib/site";

type HeatingSource = "gas" | "electric" | "oil" | "propane" | "wood" | "other";
type HomeType = "detached" | "semi" | "townhouse" | "mobile" | "condo" | "other";
type IncomeBand = "below" | "above" | "unknown";
type Intent = "assessment" | "waitlist";

const heatingOptions: { value: HeatingSource; label: string }[] = [
  { value: "gas", label: "Natural gas furnace / boiler" },
  { value: "electric", label: "Electricity (baseboards or electric furnace)" },
  { value: "oil", label: "Oil furnace / boiler" },
  { value: "propane", label: "Propane" },
  { value: "wood", label: "Wood" },
  { value: "other", label: "Other / not sure" },
];

const homeOptions: { value: HomeType; label: string }[] = [
  { value: "detached", label: "Detached house" },
  { value: "semi", label: "Semi-detached" },
  { value: "townhouse", label: "Townhouse / row house" },
  { value: "mobile", label: "Mobile home on a permanent foundation" },
  { value: "condo", label: "Condo or apartment" },
  { value: "other", label: "Other" },
];

const incomeOptions: { value: IncomeBand; label: string; hint: string }[] = [
  { value: "below", label: "Below the median", hint: "Likely the higher federal tier (up to $10,000)" },
  { value: "above", label: "Above the median", hint: "Federal $2,000 tier" },
  { value: "unknown", label: "Prefer not to say", hint: "We'll check both tiers with you" },
];

// Canadian postal code: no D, F, I, O, Q, U anywhere; no W or Z as the first letter.
const POSTAL_RE = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

type PostalArea = "gta" | "ontario" | "outside-ontario";

// First letter of the FSA: M = Toronto, L = the regions around it; K, N, P = the rest of Ontario.
function postalArea(code: string): PostalArea {
  const first = code.trim().charAt(0).toUpperCase();
  if (first === "M" || first === "L") return "gta";
  if (first === "K" || first === "N" || first === "P") return "ontario";
  return "outside-ontario";
}

// Rates and home types from homerenovationsavings.ca (cold-climate air-source heat pumps), checked Oct 2026.
function estimateHRS(source: HeatingSource, homeType: HomeType): { amount: string; note: string } {
  if (homeType === "condo") {
    return {
      amount: "Not covered",
      note: "Home Renovation Savings covers detached, semi-detached, row/townhouses and mobile homes on a permanent foundation — not condos or apartments.",
    };
  }
  const typeNote =
    homeType === "other"
      ? " It covers detached, semi-detached, row/townhouses and mobile homes on a permanent foundation — we'll confirm your home qualifies."
      : "";
  if (source === "gas") {
    return {
      amount: "up to $2,000",
      note: `Ontario's Home Renovation Savings pays Enbridge Gas-heated homes $500 per ton for a cold-climate air-source heat pump.${typeNote}`,
    };
  }
  if (source === "other") {
    return {
      amount: "$2,000 – $7,500",
      note: `It depends on your main heat source: $500 per ton (up to $2,000) for natural gas, or $1,250 per ton (up to $7,500) for electricity, oil, propane or wood.${typeNote}`,
    };
  }
  return {
    amount: "up to $7,500",
    note: `Ontario's Home Renovation Savings pays homes heated by electricity, oil, propane or wood $1,250 per ton for a cold-climate air-source heat pump.${typeNote}`,
  };
}

// From Canada.ca (National Heat Pump Rebate), checked Oct 2026. It doesn't say whether it stacks with Ontario's rebate, so don't claim it.
function federalLine(band: IncomeBand): string {
  if (band === "below") return "Low- to median-income households may qualify for up to $10,000 from Ottawa's new National Heat Pump Rebate.";
  if (band === "above") return "Your household may qualify for the $2,000 tier of Ottawa's new National Heat Pump Rebate.";
  return "Ottawa's new National Heat Pump Rebate pays up to $10,000 for low- to median-income households, or $2,000 for others.";
}

export function QuizFunnel() {
  const [step, setStep] = useState(0); // 0..3 questions, 4 = outcome, 5 = form, 6 = done
  const [postal, setPostal] = useState("");
  const [postalError, setPostalError] = useState("");
  const [postalWarning, setPostalWarning] = useState("");
  const [heating, setHeating] = useState<HeatingSource | null>(null);
  const [homeType, setHomeType] = useState<HomeType | null>(null);
  const [income, setIncome] = useState<IncomeBand | null>(null);
  const [intent, setIntent] = useState<Intent>("assessment");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const submittingRef = useRef(false);

  const totalQuestions = 4;
  const progress = Math.min(step, totalQuestions) / totalQuestions;

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  // Advance only from the question that was answered, so a double-click (two queued advances) can't skip the next one.
  function answer(fromStep: number, record: () => void) {
    record();
    setTimeout(() => setStep((s) => (s === fromStep ? fromStep + 1 : s)), 150);
  }

  function submitPostal() {
    const code = postal.trim();
    if (!POSTAL_RE.test(code)) {
      setPostalError("Enter a valid postal code, e.g. M5V 2T6.");
      return;
    }
    const area = postalArea(code);
    if (area === "outside-ontario") {
      setPostalError("That postal code is outside Ontario. Ontario's rebate only covers Ontario homes, and we serve the Greater Toronto Area.");
      return;
    }
    setPostalError("");
    // Elsewhere in Ontario: warn once, then let them continue on the second press.
    if (area === "ontario" && !postalWarning) {
      setPostalWarning("This looks like it's outside the Greater Toronto Area, where we install. Press Continue again to see your rebate anyway — we'll tell you if we can serve you.");
      return;
    }
    setStep(1);
  }

  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");
    if (!name.trim() || !phone.trim()) {
      setSubmitError("Please add your name and phone so we can call you back.");
      return;
    }
    if (intent === "waitlist" && !email.trim()) {
      setSubmitError("Email is needed for updates — we send one a month until the federal portal opens.");
      return;
    }
    if (submittingRef.current) return;
    submittingRef.current = true;
    setSubmitting(true);
    try {
      const res = await fetch("/api/quiz-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          postalCode: postal.trim().toUpperCase(),
          heatingSource: heating,
          homeType,
          incomeBand: income,
          intent,
          source: postalArea(postal) === "gta" ? "rebate-check-quiz" : "rebate-check-quiz (outside GTA)",
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      setStep(6);
    } catch {
      setSubmitError("Something went wrong. Please call us directly and we'll sort it out.");
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  const hrs = heating && homeType ? estimateHRS(heating, homeType) : null;

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[rgba(216,57,0,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">
          60-second check
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--blue)] sm:text-4xl">
          Ontario pays <span className="text-[var(--orange)]">up to $7,500</span> toward your heat pump
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Answer 4 quick questions. We estimate your Ontario rebate now and check your federal options for 2027.
        </p>
      </div>

      {/* Progress */}
      {step < 4 && (
        <div className="mb-8">
          <div className="mb-2 flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-500">
            <span>Question {Math.min(step + 1, 4)} of 4</span>
            <span>{Math.round(progress * 100)}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-[var(--orange)] transition-all duration-300" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      )}

      <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[0_12px_32px_rgba(0,33,71,0.08)] sm:p-10">
        {step > 0 && step < 4 && (
          <button onClick={back} className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-[var(--blue)]">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        )}

        {/* Q1: postal code */}
        {step === 0 && (
          <div>
            <h2 className="mb-2 text-2xl font-bold text-[var(--blue)]">What&apos;s your postal code?</h2>
            <p className="mb-6 text-sm text-slate-600">We check you&apos;re in our GTA service area and that Ontario&apos;s rebate applies to you.</p>
            <input
              value={postal}
              onChange={(e) => {
                setPostal(e.target.value);
                setPostalWarning("");
              }}
              onKeyDown={(e) => e.key === "Enter" && submitPostal()}
              placeholder="e.g. M5V 2T6"
              autoFocus
              className="h-14 w-full rounded-lg border border-[var(--border)] px-4 text-lg uppercase outline-none transition placeholder:text-slate-400 focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(216,57,0,0.15)]"
            />
            {postalError && <p className="mt-2 text-sm text-rose-600">{postalError}</p>}
            {postalWarning && (
              <p className="mt-3 flex gap-2 rounded-lg bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                {postalWarning}
              </p>
            )}
            <button
              onClick={submitPostal}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--orange)] px-6 py-4 text-base font-semibold text-white transition hover:bg-[var(--orange-deep)]"
            >
              Continue <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Q2: heating source */}
        {step === 1 && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[var(--blue)]">What heats your home right now?</h2>
            <div className="grid gap-3">
              {heatingOptions.map((o) => (
                <button
                  key={o.value}
                  onClick={() => answer(1, () => setHeating(o.value))}
                  className={`rounded-lg border-2 px-5 py-4 text-left text-base font-medium transition ${
                    heating === o.value
                      ? "border-[var(--orange)] bg-[rgba(216,57,0,0.06)] text-[var(--blue)]"
                      : "border-[var(--border)] text-slate-700 hover:border-[var(--orange)]"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Q3: home type */}
        {step === 2 && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[var(--blue)]">What type of home is it?</h2>
            <div className="grid gap-3">
              {homeOptions.map((o) => (
                <button
                  key={o.value}
                  onClick={() => answer(2, () => setHomeType(o.value))}
                  className={`rounded-lg border-2 px-5 py-4 text-left text-base font-medium transition ${
                    homeType === o.value
                      ? "border-[var(--orange)] bg-[rgba(216,57,0,0.06)] text-[var(--blue)]"
                      : "border-[var(--border)] text-slate-700 hover:border-[var(--orange)]"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Q4: income band */}
        {step === 3 && (
          <div>
            <h2 className="mb-2 text-2xl font-bold text-[var(--blue)]">Household income vs the provincial median?</h2>
            <p className="mb-6 text-sm text-slate-600">This decides your federal rebate tier. Ottawa hasn&apos;t published the exact thresholds yet, so a rough guess is fine.</p>
            <div className="grid gap-3">
              {incomeOptions.map((o) => (
                <button
                  key={o.value}
                  onClick={() => answer(3, () => setIncome(o.value))}
                  className={`rounded-lg border-2 px-5 py-4 text-left transition ${
                    income === o.value
                      ? "border-[var(--orange)] bg-[rgba(216,57,0,0.06)]"
                      : "border-[var(--border)] hover:border-[var(--orange)]"
                  }`}
                >
                  <div className="text-base font-semibold text-[var(--blue)]">{o.label}</div>
                  <div className="mt-1 text-sm text-slate-500">{o.hint}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Outcome */}
        {step === 4 && hrs && income && (
          <div>
            <button onClick={back} className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-[var(--blue)]">
              <ArrowLeft className="h-4 w-4" /> Change my answers
            </button>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <BadgeCheck className="h-6 w-6 text-emerald-700" />
              </span>
              <h2 className="text-2xl font-bold text-[var(--blue)]">Your rebate estimate</h2>
            </div>

            <div className="mb-4 rounded-xl bg-[var(--blue)] p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Ontario — available now</div>
              <div className="mt-2 text-4xl font-extrabold text-[var(--orange)]">{hrs.amount}</div>
              <p className="mt-3 text-sm leading-6 text-slate-200">{hrs.note}</p>
              {homeType !== "condo" && (
                <ul className="mt-4 grid gap-1.5 text-sm text-slate-200">
                  {[
                    "No energy audit needed for a heat-pump-only install",
                    "You must own the home (landlords apply for rented homes)",
                    "Pre-approval is required before installation — work done before approval doesn't qualify",
                    "The unit must be a cold-climate model on Natural Resources Canada's list",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mb-8 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Federal — portal opens early 2027</div>
              <p className="mt-2 text-sm leading-6 text-slate-700">{federalLine(income)}</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Canada.ca says eligible installs from November 1, 2026 can apply once the portal opens. Ottawa hasn&apos;t said yet how it combines with Ontario&apos;s rebate — we&apos;ll tell you straight what&apos;s confirmed.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => { setIntent("assessment"); setStep(5); }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--orange)] px-6 py-4 text-base font-semibold text-white transition hover:bg-[var(--orange-deep)]"
              >
                <CalendarCheck className="h-5 w-5" /> Book a free assessment
              </button>
              <button
                onClick={() => { setIntent("waitlist"); setStep(5); }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[var(--blue)] px-6 py-4 text-base font-semibold text-[var(--blue)] transition hover:bg-slate-100"
              >
                <BellRing className="h-5 w-5" /> Get federal rebate updates
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-slate-500">Estimates only — we confirm the exact amount at your free assessment.</p>
          </div>
        )}

        {/* Lead form */}
        {step === 5 && (
          <div>
            <button onClick={back} className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-[var(--blue)]">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <h2 className="mb-2 text-2xl font-bold text-[var(--blue)]">
              {intent === "assessment" ? "Where should we send your rebate estimate?" : "Get federal rebate updates"}
            </h2>
            <p className="mb-6 text-sm text-slate-600">
              {intent === "assessment"
                ? "We call back within 5 minutes during business hours — first call at 8am if it's late."
                : "One email a month until the portal opens. No spam, ever."}
            </p>
            <form onSubmit={submitLead} className="grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Name
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required
                  className="h-12 rounded-lg border border-[var(--border)] px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(216,57,0,0.15)]" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Phone
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 (___) ___-____" type="tel" required
                  className="h-12 rounded-lg border border-[var(--border)] px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(216,57,0,0.15)]" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Email {intent === "waitlist" ? "" : "(optional)"}
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" type="email" required={intent === "waitlist"}
                  className="h-12 rounded-lg border border-[var(--border)] px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(216,57,0,0.15)]" />
              </label>
              {submitError && <p className="text-sm text-rose-600">{submitError}</p>}
              <button type="submit" disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--orange)] px-6 py-4 text-base font-semibold text-white transition hover:bg-[var(--orange-deep)] disabled:opacity-70">
                {submitting ? "Sending..." : intent === "assessment" ? "Check My Rebate Eligibility" : "Save My Spot"}
              </button>
              <p className="text-center text-xs text-slate-500">No spam. One call, only about your rebate.</p>
            </form>
          </div>
        )}

        {/* Done */}
        {step === 6 && (
          <div className="text-center">
            <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
              <Check className="h-8 w-8 text-emerald-700" />
            </span>
            <h2 className="mb-3 text-2xl font-bold text-[var(--blue)]">
              {intent === "assessment" ? "You're in — we'll call within 5 minutes." : "You're on the early-bird list."}
            </h2>
            <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-slate-600">
              {intent === "assessment"
                ? "A licensed technician will confirm your rebate amount and book your free assessment. After 9pm? First call at 8am."
                : "We'll email you one update a month — and when the federal portal opens in early 2027, we'll help you check your eligibility and apply."}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/services/heat-pumps" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[var(--blue)] px-6 py-3 text-sm font-semibold text-[var(--blue)] transition hover:bg-slate-100">
                How heat pumps work
              </Link>
              <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--orange)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--orange-deep)]">
                <PhoneCall className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
        )}
      </div>

      <p className="mt-6 text-center text-xs leading-5 text-slate-500">
        Rebate figures: Ontario Home Renovation Savings (active now) and the federal National Heat Pump Rebate (portal opens early 2027), as published in October 2026. Amounts are estimates — confirmed at your assessment.
      </p>
    </div>
  );
}
