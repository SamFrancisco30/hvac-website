import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Clock, FileText, Wrench, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About ArcticPrecision HVAC | GTA Residential Specialists",
  description: "ArcticPrecision HVAC is a residential-first HVAC company serving the Greater Toronto Area. TSSA registered, licensed technicians, transparent pricing.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="bg-[var(--blue)] px-6 py-20 text-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(255,69,0,0.3)] bg-white/10 px-4 py-2 backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-[var(--orange)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/90">TSSA Registered · Licensed & Insured</span>
              </div>
              <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tight lg:text-[56px]">
                Residential HVAC.<br />
                <span className="text-[var(--orange)]">Done Right.</span>
              </h1>
              <p className="text-lg leading-8 text-slate-300">
                {site.shortName} is a residential-first HVAC company serving eight communities across the GTA. We do one thing and do it well — keeping homes comfortable through honest assessments, proper installs, and fast response when things go wrong.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "8", label: "GTA Communities" },
                { value: "TSSA", label: "Registered" },
                { value: "Same-Day", label: "Emergency Dispatch" },
                { value: "100%", label: "Residential Focus" },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-1 text-3xl font-bold text-white">{value}</div>
                  <div className="text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why residential-only ── */}
      <section className="bg-[var(--surface-alt)] py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Our Focus</div>
              <h2 className="mb-6 text-4xl font-bold leading-tight text-[var(--blue)]">Why we focus on residential work</h2>
              <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>
                  Residential HVAC is different from commercial. Homes have smaller margins for error — a furnace that&apos;s 20% oversized doesn&apos;t just waste energy, it creates comfort problems that persist for the life of the equipment. Getting sizing, airflow, and installation right matters in a way that doesn&apos;t always apply to larger commercial systems.
                </p>
                <p>
                  We made a deliberate choice to stay residential. It means our technicians develop deep familiarity with the housing stock across the GTA — the pre-war detached homes in Etobicoke, the 1990s suburban builds in Mississauga, the newer large-footprint properties in Brampton and Milton. That familiarity shows in the work.
                </p>
                <p>
                  We don&apos;t chase commercial contracts or multi-unit work. Our dispatch, scheduling, and service model is built around the homeowner — someone who needs a clear answer, a fair price, and a technician who shows up when they say they will.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { title: "Proper equipment sizing", description: "We calculate heating and cooling loads before recommending any equipment. Oversizing is one of the most common HVAC installation errors — we don't take shortcuts here." },
                { title: "Written quotes before any work", description: "You see the price before we start. No surprises at the end of the job. If scope changes, we tell you before we proceed." },
                { title: "Work that's built to last", description: "We install equipment to manufacturer specifications and Ontario building code. The goal is a system that performs well for 15 to 20 years, not one that gets us back for a call-back." },
                { title: "Honest assessments", description: "If your existing system can be repaired rather than replaced, we'll tell you. We're not running a replacement quota. We recommend what makes sense for your home." },
              ].map(({ title, description }) => (
                <div key={title} className="flex gap-4 rounded-xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--orange)]" />
                  <div>
                    <div className="mb-1 text-sm font-semibold text-[var(--blue)]">{title}</div>
                    <p className="text-sm leading-7 text-[var(--muted)]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy cards ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">How We Work</div>
            <h2 className="text-4xl font-bold text-[var(--blue)]">Our approach to every job</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "Assess first, recommend second",
                description: "We diagnose before we quote. For replacements, that means understanding what equipment is currently in the home, how the ductwork is set up, and what the home actually needs — not what's fastest to install.",
              },
              {
                icon: Wrench,
                title: "Install to spec, not to schedule",
                description: "We don't rush installs to clear the schedule. A furnace or heat pump installed incorrectly will underperform for its entire lifespan. We take the time to do it properly, test it, and confirm operation before we leave.",
              },
              {
                icon: ShieldCheck,
                title: "Stand behind the work",
                description: "All our installations include a labour warranty. If something isn't right with our work, we come back and fix it. We also register manufacturer warranties on your behalf so you're covered from day one.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl border border-[var(--border)] p-8 shadow-[var(--shadow)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(255,69,0,0.1)]">
                  <Icon className="h-6 w-6 text-[var(--orange)]" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-[var(--blue)]">{title}</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-[var(--surface-alt)] py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-12">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">What We Stand For</div>
            <h2 className="text-4xl font-bold text-[var(--blue)]">Four things we don&apos;t compromise on</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Residential First", sub: "Every decision is made with the homeowner in mind. We don't divide our attention between residential and commercial work." },
              { title: "Honest Assessments", sub: "We tell you what your system actually needs. Upselling a replacement when a repair would do is not something we do." },
              { title: "Fast Response", sub: "When a furnace fails in January, every hour matters. We maintain emergency capacity across all eight communities we serve." },
              { title: "Transparent Pricing", sub: "Written quotes before any work starts. No line items that appear after the job. No dispatch fees buried in fine print." },
            ].map(({ title, sub }) => (
              <div key={title} className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)]">
                <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">{title}</div>
                <p className="text-sm leading-7 text-[var(--muted)]">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission strip ── */}
      <section className="bg-[var(--blue)] py-16 text-white">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Our Mission</div>
          <blockquote className="mx-auto max-w-3xl text-2xl font-bold leading-snug lg:text-3xl">
            &ldquo;Reliable HVAC service for GTA homeowners — delivered with honesty, built to last, and priced without surprises.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="rounded-2xl bg-[var(--surface-alt)] p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[var(--blue)]">Ready to get started?</h2>
            <p className="mx-auto mb-8 max-w-xl text-base leading-7 text-[var(--muted)]">
              Submit a service request online or call us directly. We serve eight communities across the GTA and confirm availability right away.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--orange)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--orange-deep)]"
              >
                Request Service <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--blue)] px-8 py-4 text-sm font-semibold text-[var(--blue)] transition hover:bg-[var(--blue)] hover:text-white"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
