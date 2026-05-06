/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2, Phone, Clock, Shield, Star, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";

export type IncludedItem = { icon: LucideIcon; title: string; description: string };
export type ProcessStep = { title: string; description: string };
export type FAQ = { q: string; a: string };
export type RelatedService = { title: string; slug: string; Icon: LucideIcon };

type ServicePageProps = {
  title: string;
  summary: string;
  intro: string;
  Icon: LucideIcon;
  image: string;
  points: string[];
  included: IncludedItem[];
  process: ProcessStep[];
  faqs: FAQ[];
  related: RelatedService[];
  serviceHref?: string;
};

export function ServicePage({
  title,
  summary,
  intro,
  Icon,
  image,
  points,
  included,
  process,
  faqs,
  related,
  serviceHref = "/contact",
}: ServicePageProps) {
  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--blue-2)] px-6 py-[100px] text-white">
        <div className="absolute inset-0">
          <img alt="" aria-hidden="true" src={image} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue)] via-[rgba(0,33,71,0.9)] to-[rgba(0,33,71,0.5)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(255,69,0,0.3)] bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Icon className="h-4 w-4 text-[var(--orange)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/90">GTA Residential HVAC</span>
            </div>
            <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tight lg:text-[56px]">{title}</h1>
            <p className="mb-8 text-lg leading-8 text-slate-300">{summary}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={serviceHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--orange)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_16px_40px_rgba(216,57,0,0.3)] transition hover:bg-[var(--orange-deep)]"
              >
                Request Service
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/25 px-8 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-[var(--surface-alt)] py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

            {/* Left column */}
            <div className="space-y-8 lg:col-span-8">

              {/* Overview */}
              <div className="rounded-xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,69,0,0.1)]">
                    <Icon className="h-6 w-6 text-[var(--orange)]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--blue)]">Service Overview</h2>
                </div>
                <p className="mb-6 text-base leading-8 text-[var(--muted)]">{intro}</p>
                <div className="grid grid-cols-1 gap-3 border-t border-[var(--border)] pt-6 sm:grid-cols-2">
                  {points.map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--orange)]" />
                      <span className="text-sm text-[var(--text)]">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's included */}
              <div className="rounded-xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]">
                <h2 className="mb-1 text-2xl font-bold text-[var(--blue)]">What&apos;s Included</h2>
                <p className="mb-6 text-sm text-[var(--muted)]">Every service visit covers the following as standard.</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {included.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-lg border border-[var(--border)] p-5 transition hover:border-[rgba(216,57,0,0.3)] hover:shadow-[0_4px_16px_rgba(0,33,71,0.06)]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,33,71,0.05)]">
                        <item.icon className="h-5 w-5 text-[var(--orange)]" />
                      </div>
                      <div>
                        <div className="mb-1 text-sm font-semibold text-[var(--blue)]">{item.title}</div>
                        <p className="text-xs leading-5 text-[var(--muted)]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How it works */}
              <div className="rounded-xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]">
                <h2 className="mb-1 text-2xl font-bold text-[var(--blue)]">How It Works</h2>
                <p className="mb-8 text-sm text-[var(--muted)]">A clear process from first contact to finished job.</p>
                <div>
                  {process.map((step, i) => (
                    <div key={step.title} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--orange)] text-xs font-bold text-white">
                          {i + 1}
                        </div>
                        {i < process.length - 1 && (
                          <div className="my-1 min-h-[32px] w-px flex-1 bg-[var(--border)]" />
                        )}
                      </div>
                      <div className="pb-8 pt-1">
                        <div className="mb-1 text-sm font-semibold text-[var(--blue)]">{step.title}</div>
                        <p className="text-sm leading-6 text-[var(--muted)]">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="rounded-xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]">
                <h2 className="mb-1 text-2xl font-bold text-[var(--blue)]">Common Questions</h2>
                <p className="mb-6 text-sm text-[var(--muted)]">Answers to what homeowners ask most about this service.</p>
                <div className="space-y-2">
                  {faqs.map((faq) => (
                    <details key={faq.q} className="group rounded-lg border border-[var(--border)]">
                      <summary className="flex cursor-pointer list-none items-center justify-between p-5">
                        <span className="text-sm font-semibold text-[var(--blue)]">{faq.q}</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="border-t border-[var(--border)] px-5 pb-5 pt-4 text-sm leading-7 text-[var(--muted)]">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="flex flex-col gap-6 lg:col-span-4">

              {/* CTA card */}
              <aside className="rounded-xl bg-[var(--blue)] p-8 text-white shadow-[var(--shadow)]">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange)]">Need help now?</div>
                <p className="text-2xl font-bold leading-snug">Fast response. Clear next steps.</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Submit a request or call directly. Our dispatch team confirms availability and explains the next steps before any work begins.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href={serviceHref}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--orange)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--orange-deep)]"
                  >
                    Request Service <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={site.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" /> {site.phone}
                  </Link>
                </div>
              </aside>

              {/* Trust signals */}
              <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)]">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange)]">Why ArcticPrecision</div>
                <div className="space-y-4">
                  {[
                    { I: Shield, label: "TSSA Registered & Insured", sub: "Licensed for residential work in Ontario." },
                    { I: Clock, label: "Same-Day Service Available", sub: "Fast dispatch for urgent calls." },
                    { I: Star, label: "10-Year Parts Warranty", sub: "Long-term protection on all installs." },
                  ].map(({ I, label, sub }) => (
                    <div key={label} className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,69,0,0.08)]">
                        <I className="h-4 w-4 text-[var(--orange)]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[var(--blue)]">{label}</div>
                        <div className="text-xs leading-5 text-[var(--muted)]">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related services */}
              {related.length > 0 && (
                <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)]">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange)]">Related Services</div>
                  <div className="space-y-2">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/services/${r.slug}`}
                        className="flex items-center gap-3 rounded-lg border border-[var(--border)] p-3 text-sm font-medium text-[var(--blue)] transition hover:border-[rgba(216,57,0,0.4)] hover:bg-[var(--surface-alt)]"
                      >
                        <r.Icon className="h-4 w-4 shrink-0 text-[var(--orange)]" />
                        <span>{r.title}</span>
                        <ArrowRight className="ml-auto h-3.5 w-3.5 text-slate-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[var(--blue)] px-6 py-20 text-white">
        <div className="mx-auto max-w-[1280px] text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--orange)]">
            GTA Service Coverage
          </div>
          <h2 className="mb-4 text-3xl font-bold">Ready to get started?</h2>
          <p className="mx-auto mb-8 max-w-xl text-slate-300">
            We serve Toronto, Mississauga, Brampton, Milton, Georgetown, Oakville, Burlington, and Etobicoke. Request a quote or call us directly — no pressure.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={serviceHref}
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--orange)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--orange-deep)]"
            >
              Request {title} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/25 px-8 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Call {site.phone}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
