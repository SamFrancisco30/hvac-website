import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ChevronRight, PhoneCall } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Homeowner Guides",
  description: "Plain-language HVAC guides for GTA homeowners: furnace service, AC replacement, water heaters, and repair costs.",
};

const guides = [
  { title: "How often should I service my furnace?", service: "Maintenance", href: "/services/maintenance" },
  { title: "Signs your AC needs replacement", service: "Air Conditioner", href: "/services/air-conditioner" },
  { title: "Tankless water heater vs. tank system", service: "Tankless Water Heater", href: "/services/tankless-water-heater" },
  { title: "What affects HVAC repair costs?", service: "Furnace Installation", href: "/services/furnace-installation" },
];

export default function KnowledgeBasePage() {
  return (
    <div className="pt-20">
      <section className="bg-[var(--blue)] px-6 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]">
            <BookOpen className="h-4 w-4 text-[var(--orange)]" />
            Homeowner guides
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Straight answers about your home&apos;s heating and cooling
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            We&apos;re writing short, practical guides for GTA homeowners. Until they&apos;re published, our technicians are happy to answer any of these over the phone.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface-alt)] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 px-6 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="group flex flex-col justify-between rounded-[14px] border border-[var(--border)] bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--orange)] hover:shadow-[var(--shadow)]"
            >
              <div>
                <span className="inline-block rounded-full bg-[var(--surface-alt)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Guide coming soon
                </span>
                <h2 className="mt-4 text-xl font-semibold text-[var(--blue)]">{guide.title}</h2>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--orange)]">
                Related: {guide.service}
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-[1280px] px-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[14px] border border-[var(--border)] bg-white p-7 sm:flex-row sm:items-center">
            <div>
              <div className="text-lg font-semibold text-[var(--blue)]">Have a question that can&apos;t wait?</div>
              <p className="mt-1 text-sm text-[var(--muted)]">Call us and a licensed technician will walk you through it.</p>
            </div>
            <a
              href={site.phoneHref}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[var(--orange)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--orange-deep)]"
            >
              <PhoneCall className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
