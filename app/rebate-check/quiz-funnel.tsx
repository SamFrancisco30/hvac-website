"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgeCheck, BellRing, CalendarCheck, Check, PhoneCall } from "lucide-react";
import { site } from "@/lib/site";

type HeatingSource = "gas" | "oil" | "propane" | "electric" | "other";
type HomeType = "detached" | "semi" | "townhouse" | "other";
type IncomeBand = "below" | "above" | "unknown";
type Intent = "assessment" | "waitlist";

const heatingOptions: { value: HeatingSource; label: string }[] = [
  { value: "gas", label: "Natural gas furnace / boiler" },
  { value: "oil", label: "Oil furnace / boiler" },
  { value: "propane", label: "Propane" },
  { value: "electric", label: "Electric baseboards" },
  { value: "other", label: "Other / not sure" },
];

const homeOptions: { value: HomeType; label: string }[] = [
  { value: "detached", label: "Detached house" },
  { value: "semi", label: "Semi-detached" },
  { value: "townhouse", label: "Townhouse" },
  { value: "other", label: "Other" },
];

const incomeOptions: { value: IncomeBand; label: string; hint: string }[] = [
  { value: "below", label: "Below the median", hint: "Likely qualifies for the higher federal tier" },
  { value: "above", label: "Above the median", hint: "Federal $2,000 tier" },
  { value: "unknown", label: "Prefer not to say", hint: "We'll check both tiers with you" },
];

const POSTAL_RE = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

function estimateHRS(source: HeatingSource): { amount: string; note: string } {
  if (source === "gas") {
    return {
      amount: "up to $2,000",
      note: "Ontario's Home Renovation Savings pays gas-heated homes $500 per ton for a cold-climate air-source heat pump.",
    };
  }
  return {
    amount: "up to $7,500",
    note: "Ontario's Home Renovation Savings pays non-gas homes (oil, propane, electric) $1,250 per ton for a cold-climate air-source heat pump.",
  };
}

function federalLine(band: IncomeBand): string {
  if (band === "below")
    return "When the federal portal opens in January 2027, your household may qualify for up to $10,000 — on top of the Ontario rebate.";
  if (band === "above")
    return "When the federal portal opens in January 2027, your household may qualify for the $2,000 federal rebate — on top of the Ontario rebate.";
  return "When the federal portal opens in January 2027, the federal rebate adds up to $10,000 (below-median income) or $2,000 — on top of the Ontario rebate.";
}

export function QuizFunnel() {
  const [step, setStep] = useState(0); // 0..3 questions, 4 = outcome, 5 = form, 6 = done
  const [postal, setPostal] = useState("");
  const [postalError, setPostalError] = useState("");
  const [heating, setHeating] = useState<HeatingSource | null>(null);
  const [homeType, setHomeType] = useState<HomeType | null>(null);
  const [income, setIncome] = useState<IncomeBand | null>(null);
  const [intent, setIntent] = useState<Intent>("assessment");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const totalQuestions = 4;
  const progress = Math.min(step, totalQuestions) / totalQuestions;

  function next() {
    setStep((s) => Math.min(s + 1, 6));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function submitPostal() {
    if (!POSTAL_RE.test(postal.trim())) {
      setPostalError("Enter a valid postal code, e.g. L3R 5G5.");
      return;
    }
    setPostalError("");
    next();
  }

  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");
    if (!name.trim() || !phone.trim()) {
      setSubmitError("Please add your name and phone so we can call you back.");
      return;
    }
    if (intent === "waitlist" && !email.trim()) {
      setSubmitError("Email is needed for the waitlist — we send one update a month until January 2027.");
      return;
    }
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
          source: "rebate-check-quiz",
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      setStep(6);
    } catch {
      setSubmitError("Something went wrong. Please call us directly and we'll sort it out.");
    } finally {
      setSubmitting(false);
    }
  }

  const hrs = heating ? estimateHRS(heating) : null;

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
          Answer 4 quick questions. We estimate your Ontario rebate now and check your federal options for January 2027.
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
            <p className="mb-6 text-sm text-slate-600">We confirm you&apos;re in our GTA service area and personalize the rebate math.</p>
            <input
              value={postal}
              onChange={(e) => setPostal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submitPostal()}
              placeholder="e.g. L3R 5G5"
              autoFocus
              className="h-14 w-full rounded-lg border border-[var(--border)] px-4 text-lg uppercase outline-none transition placeholder:text-slate-400 focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(216,57,0,0.15)]"
            />
            {postalError && <p className="mt-2 text-sm text-rose-600">{postalError}</p>}
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
                  onClick={() => { setHeating(o.value); setTimeout(next, 150); }}
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
                  onClick={() => { setHomeType(o.value); setTimeout(next, 150); }}
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
            <p className="mb-6 text-sm text-slate-600">This decides your federal rebate tier in 2027. Rough guess is fine.</p>
            <div className="grid gap-3">
              {incomeOptions.map((o) => (
                <button
                  key={o.value}
                  onClick={() => { setIncome(o.value); setTimeout(next, 150); }}
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
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <BadgeCheck className="h-6 w-6 text-emerald-700" />
              </span>
              <h2 className="text-2xl font-bold text-[var(--blue)]">Your rebate estimate</h2>
            </div>

            <div className="mb-4 rounded-xl bg-[var(--blue)] p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Ontario — available now</div>
              <div className="mt-2 text-4xl font-extrabold text-[var(--orange)]">{hrs.amount}</div>
              <p className="mt-3 text-sm leading-6 text-slate-200">{hrs.note} No energy audit needed for a heat-pump-only install.</p>
            </div>

            <div className="mb-8 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Federal — opens January 2027</div>
              <p className="mt-2 text-sm leading-6 text-slate-700">{federalLine(income)}</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                The federal portal isn&apos;t open yet, and Ottawa hasn&apos;t confirmed rebates for installs done before launch — we&apos;ll tell you straight what&apos;s confirmed.
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
                <BellRing className="h-5 w-5" /> Join the $10k waitlist
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
              {intent === "assessment" ? "Where should we send your rebate estimate?" : "Save your spot for January 2027"}
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
                : "We'll email you one update a month — and the week the federal portal opens in January 2027, we check your eligibility and book your install."}
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
        Rebate figures: Ontario Home Renovation Savings (active now) and the federal National Heat Pump Rebate (portal opens January 2027). Amounts are estimates — confirmed at your assessment.
      </p>
    </div>
  );
}
