import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, MapPin, Clock, CheckCircle2, ChevronRight,
  Flame, Snowflake, Droplets, FlameKindling, Gauge, Wrench, Phone,
} from "lucide-react";
import { cityData, getCityBySlug } from "@/lib/city-data";
import { site } from "@/lib/site";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cityData.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `HVAC Service in ${city.name} | ArcticPrecision`,
    description: `Residential HVAC installation and repair in ${city.name}, ${city.region}. Furnace installation, air conditioning, heat pumps, and water heaters — fast dispatch, transparent pricing.`,
  };
}

const services = [
  { title: "Furnace Installation", slug: "furnace-installation", icon: Flame, group: "Heating" },
  { title: "Air Conditioner", slug: "air-conditioner", icon: Snowflake, group: "Cooling" },
  { title: "Heat Pumps", slug: "heat-pumps", icon: Gauge, group: "Heating & Cooling" },
  { title: "Water Heater", slug: "water-heater", icon: Droplets, group: "Heating" },
  { title: "Tankless Water Heater", slug: "tankless-water-heater", icon: FlameKindling, group: "Heating" },
  { title: "Water Purification", slug: "water-purification", icon: Droplets, group: "Home Comfort" },
  { title: "Maintenance", slug: "maintenance", icon: Wrench, group: "All Systems" },
];

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const otherCities = cityData.filter((c) => c.slug !== slug);

  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="bg-[var(--blue)] px-6 py-20 text-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--orange)]">
            <Link href="/service-areas" className="hover:underline">Service Areas</Link>
            <ChevronRight className="h-3 w-3" />
            <span>{city.name}</span>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight lg:text-[56px]">
                HVAC Service in<br />
                <span className="text-[var(--orange)]">{city.name}</span>
              </h1>
              <p className="mb-6 text-lg leading-8 text-slate-300">{city.description}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--orange)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--orange-deep)]"
                >
                  Request Service <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/25 px-8 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" /> {site.phone}
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Region</div>
                    <div className="text-sm font-semibold text-white">{city.region}</div>
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Postal Codes</div>
                    <div className="text-sm font-semibold text-white">{city.postalCodes}</div>
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Est. Response</div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Clock className="h-4 w-4 text-[var(--orange)]" />
                      {city.responseTime}
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Coverage</div>
                    <div className="text-sm font-semibold text-white">Residential</div>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Neighbourhoods</div>
                  <div className="flex flex-wrap gap-2">
                    {city.neighborhoods.map((n) => (
                      <span key={n} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-[var(--surface-alt)] py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

            {/* Left */}
            <div className="space-y-8 lg:col-span-8">

              {/* Housing note */}
              <div className="rounded-xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(255,69,0,0.1)]">
                    <MapPin className="h-5 w-5 text-[var(--orange)]" />
                  </div>
                  <h2 className="text-xl font-bold text-[var(--blue)]">About {city.name} Homes</h2>
                </div>
                <p className="text-base leading-8 text-[var(--muted)]">{city.housingNote}</p>
              </div>

              {/* Common issues */}
              <div className="rounded-xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]">
                <h2 className="mb-2 text-xl font-bold text-[var(--blue)]">Common HVAC Issues in {city.name}</h2>
                <p className="mb-6 text-sm text-[var(--muted)]">What we most frequently see and service in this area.</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {city.commonIssues.map((issue) => (
                    <div key={issue} className="flex items-start gap-3 rounded-lg border border-[var(--border)] p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--orange)]" />
                      <span className="text-sm text-[var(--text)]">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="rounded-xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]">
                <h2 className="mb-2 text-xl font-bold text-[var(--blue)]">Services Available in {city.name}</h2>
                <p className="mb-6 text-sm text-[var(--muted)]">All services are available throughout {city.name} and {city.region}.</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 rounded-lg border border-[var(--border)] p-4 transition hover:border-[rgba(216,57,0,0.4)] hover:bg-[var(--surface-alt)]"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,69,0,0.08)]">
                        <s.icon className="h-4 w-4 text-[var(--orange)]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[var(--blue)]">{s.title}</div>
                        <div className="text-xs text-[var(--muted)]">{s.group}</div>
                      </div>
                      <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0 text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other areas */}
              <div className="rounded-xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]">
                <h2 className="mb-2 text-xl font-bold text-[var(--blue)]">Other Areas We Serve</h2>
                <p className="mb-5 text-sm text-[var(--muted)]">ArcticPrecision covers the full Greater Toronto Area.</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                  {otherCities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/service-areas/${c.slug}`}
                      className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2.5 text-sm font-medium text-[var(--blue)] transition hover:border-[rgba(216,57,0,0.4)] hover:bg-[var(--surface-alt)]"
                    >
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-[var(--orange)]" />
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6 lg:col-span-4">
              <aside className="rounded-xl bg-[var(--blue)] p-8 text-white shadow-[var(--shadow)]">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange)]">
                  Serving {city.name}
                </div>
                <p className="text-2xl font-bold leading-snug">Fast dispatch. Clear pricing.</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Estimated response in {city.name}: <span className="font-semibold text-white">{city.responseTime}</span>. Call or submit a request and we confirm availability right away.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact"
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

              <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)]">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange)]">Coverage Details</div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-[var(--muted)]">Region</span>
                    <span className="font-semibold text-[var(--blue)]">{city.region}</span>
                  </div>
                  <div className="flex justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-[var(--muted)]">Postal codes</span>
                    <span className="font-semibold text-[var(--blue)]">{city.postalCodes}</span>
                  </div>
                  <div className="flex justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-[var(--muted)]">Response time</span>
                    <span className="font-semibold text-[var(--blue)]">{city.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--muted)]">Service type</span>
                    <span className="font-semibold text-[var(--blue)]">Residential</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow)]">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange)]">Neighbourhoods</div>
                <div className="flex flex-wrap gap-2">
                  {city.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-1 text-xs font-medium text-[var(--blue)]"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
