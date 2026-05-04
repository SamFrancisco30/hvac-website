/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

type ServicePageProps = {
  title: string;
  summary: string;
  intro: string;
  Icon: LucideIcon;
  image: string;
  points: string[];
  serviceHref: string;
};

export function ServicePage({ title, summary, intro, Icon, image, points, serviceHref }: ServicePageProps) {
  return (
    <div className="pt-20">
      <section className="relative bg-[var(--blue)] px-6 py-[120px] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt={title} src={image} className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue)] to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white">{title}</h1>
            <p className="text-lg leading-8 text-slate-300">{summary}</p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1280px] px-6 py-[80px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-[var(--shadow)] lg:col-span-8">
            <div className="p-8">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded bg-[rgba(255,69,0,0.12)]">
                  <Icon className="h-6 w-6 text-[var(--orange)]" />
                </div>
                <h2 className="text-4xl font-bold text-[var(--blue)]">{title}</h2>
              </div>
              <p className="mb-6 max-w-2xl text-base leading-8 text-[var(--muted)]">{intro}</p>
              <div className="grid grid-cols-1 gap-4 border-t border-[var(--border)] pt-6 sm:grid-cols-2">
                {points.map((point) => (
                  <div key={point} className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 text-[var(--orange)]" />
                    <span className="text-sm text-[var(--text)]">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={serviceHref}
                  className="inline-flex items-center justify-center gap-2 rounded bg-[var(--orange)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--orange-deep)]"
                >
                  Request {title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded border-2 border-[var(--blue)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--blue)] transition hover:bg-[var(--surface-alt)]"
                >
                  Call {site.phone}
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-4">
            <aside className="rounded-xl border border-[var(--border)] bg-[var(--blue)] p-8 text-white shadow-[var(--shadow)]">
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--orange)]">Need help now?</div>
              <p className="text-3xl font-bold leading-tight text-white">Fast response. Clear next steps.</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                When the system stops working, call first and we will route you to the right service path.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded bg-[var(--orange)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--orange-deep)]"
              >
                Go to Contact
                <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>

            <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)]">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--orange)]">Service notes</div>
              <div className="space-y-3 text-sm leading-7 text-[var(--muted)]">
                <p>Residential-first support.</p>
                <p>Clear scheduling and quotes.</p>
                <p>Built for local homeowner searches and ads.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
