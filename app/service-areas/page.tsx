import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { ServiceAreaMap } from "@/components/service-area-map";
import { cityData } from "@/lib/city-data";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Air We Go serves Toronto, Mississauga, Brampton, Milton, Georgetown, Oakville, Burlington, and Etobicoke. Fast residential HVAC dispatch across the GTA.",
};

export default function ServiceAreasPage() {
  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="bg-[var(--blue)] px-6 py-20 text-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(255,69,0,0.3)] bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-[var(--orange)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/90">Greater Toronto Area</span>
            </div>
            <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tight lg:text-[56px]">
              HVAC Service Across the GTA
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              We maintain dedicated residential coverage across eight communities in Toronto and the surrounding regions — with response times tuned to each service zone.
            </p>
          </div>
        </div>
      </section>

      {/* ── Map + city list ── */}
      <section className="bg-[var(--surface-alt)] py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* City cards */}
            <div className="lg:col-span-5">
              <h2 className="mb-2 text-3xl font-bold text-[var(--blue)]">Communities We Serve</h2>
              <p className="mb-8 text-base leading-7 text-[var(--muted)]">
                Select a city to see local HVAC details, neighbourhoods covered, and estimated response times.
              </p>
              <div className="space-y-3">
                {cityData.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/service-areas/${city.slug}`}
                    className="flex items-center justify-between rounded-[14px] border border-[var(--border)] bg-white px-6 py-4 shadow-sm transition hover:border-[var(--orange)] hover:shadow-[0_8px_24px_rgba(0,33,71,0.08)]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,69,0,0.1)] text-[var(--orange)]">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-base font-semibold text-[var(--blue)]">{city.name}</div>
                        <div className="text-xs text-[var(--muted)]">{city.region}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="hidden text-right sm:block">
                        <div className="flex items-center gap-1 text-xs text-[var(--muted)]">
                          <Clock className="h-3 w-3" />
                          {city.responseTime}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="relative isolate min-h-[380px] overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface-container)] shadow-sm lg:col-span-7 lg:min-h-0">
              <ServiceAreaMap className="absolute inset-0 h-full w-full" />
              <div className="pointer-events-none absolute left-4 top-4 z-10 max-w-[18rem] rounded-xl border border-[var(--border)] bg-white/95 px-4 py-3 shadow-[0_12px_24px_rgba(0,33,71,0.1)] backdrop-blur-sm sm:left-6 sm:top-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Coverage Area</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {cityData.length} communities across Toronto, Peel, and Halton. Technicians dispatched from the nearest crew.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="border-y border-[var(--border)] bg-white py-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "8 Communities", sub: "Dedicated residential coverage across Toronto and the GTA." },
            { title: "Same-Day Dispatch", sub: "Emergency slots available across all service zones." },
            { title: "TSSA Registered", sub: "Licensed for gas and HVAC work in Ontario." },
            { title: "Transparent Pricing", sub: "Written quotes before any work begins — no surprises." },
          ].map(({ title, sub }) => (
            <div key={title} className="flex flex-col gap-1">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">{title}</div>
              <p className="text-sm leading-6 text-[var(--muted)]">{sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
