import type { Metadata } from "next";
import { Mail, MapPin, PhoneCall, TriangleAlert, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | ArcticPrecision HVAC",
  description: "Call or submit a service request to reach ArcticPrecision HVAC. Residential HVAC service across the GTA — same-day dispatch available.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="bg-[var(--blue)] px-6 py-20 text-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tight lg:text-[56px]">
              Get in Touch
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              For urgent issues, call us directly — we keep lines open for emergency dispatch. For planned work, submit the form below and we&apos;ll confirm availability.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-[var(--surface-alt)] py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* Left sidebar */}
            <div className="flex flex-col gap-6 lg:col-span-4">

              {/* Emergency card */}
              <div className="rounded-xl bg-[var(--blue)] p-8 text-white shadow-[var(--shadow)]">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,69,0,0.2)]">
                    <TriangleAlert className="h-5 w-5 text-[var(--orange)]" />
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Emergency Service</div>
                    <h3 className="text-lg font-bold text-white">No heat or no cooling?</h3>
                  </div>
                </div>
                <p className="mb-6 text-sm leading-7 text-slate-300">
                  Call us directly for same-day emergency dispatch. We maintain emergency capacity across all eight GTA communities we serve.
                </p>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-3 rounded-lg bg-[var(--orange)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--orange-deep)]"
                >
                  <PhoneCall className="h-4 w-4" />
                  {site.phone}
                </a>
              </div>

              {/* Info rows */}
              <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)]">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,69,0,0.1)]">
                      <PhoneCall className="h-4 w-4 text-[var(--orange)]" />
                    </div>
                    <div>
                      <div className="mb-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Phone</div>
                      <a href={site.phoneHref} className="text-sm font-semibold text-[var(--blue)] hover:underline">{site.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,69,0,0.1)]">
                      <Mail className="h-4 w-4 text-[var(--orange)]" />
                    </div>
                    <div>
                      <div className="mb-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Email</div>
                      <a href={site.emailHref} className="text-sm font-semibold text-[var(--blue)] hover:underline">{site.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,69,0,0.1)]">
                      <MapPin className="h-4 w-4 text-[var(--orange)]" />
                    </div>
                    <div>
                      <div className="mb-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Service Area</div>
                      <p className="text-sm font-semibold text-[var(--blue)]">{site.address}</p>
                      <p className="mt-0.5 text-xs text-[var(--muted)]">GTA — 8 communities covered</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,69,0,0.1)]">
                      <Clock className="h-4 w-4 text-[var(--orange)]" />
                    </div>
                    <div>
                      <div className="mb-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Hours</div>
                      <p className="text-sm font-semibold text-[var(--blue)]">Mon – Sat: 8am – 8pm</p>
                      <p className="mt-0.5 text-xs text-[var(--muted)]">Emergency line available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <div className="rounded-xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)] lg:p-12">
                <div className="mb-8">
                  <h2 className="mb-2 text-3xl font-bold text-[var(--blue)]">Request Service</h2>
                  <p className="text-base leading-7 text-[var(--muted)]">
                    Fill out the details below. We respond to all requests within a few hours during business hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
