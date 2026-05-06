/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, CheckCircle2, Flame, Snowflake, Droplets, FlameKindling, Gauge, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | ArcticPrecision HVAC",
  description: "Residential HVAC services for the Greater Toronto Area — furnace installation, air conditioning, heat pumps, water heaters, and water treatment.",
};

const services = [
  {
    title: "Furnace Installation",
    slug: "furnace-installation",
    group: "Heating",
    icon: Flame,
    summary: "Properly sized installs, old unit removal, and full commissioning for GTA homes.",
    image: "/images/services/furnace-installation/hero.png",
    points: ["Manual J load sizing", "High-efficiency models available", "Same-day and next-day slots", "10-year parts warranty"],
    large: true,
  },
  {
    title: "Air Conditioner",
    slug: "air-conditioner",
    group: "Cooling",
    icon: Snowflake,
    summary: "Central AC installation, replacement, and emergency service during cooling season.",
    image: "/images/services/air-conditioner/hero.png",
    points: ["Cooling load calculation", "Old unit removal included", "Same-day emergency service", "Flat-rate pricing"],
    large: false,
  },
  {
    title: "Heat Pumps",
    slug: "heat-pumps",
    group: "Heating & Cooling",
    icon: Gauge,
    summary: "One system for year-round comfort. Cold-climate models work through Ontario winters.",
    image: "/images/services/heat-pumps/hero.png",
    points: ["Efficient to −25°C", "Dual-fuel pairing available", "Rebate-eligible models", "Electrical upgrade included"],
    large: false,
  },
  {
    title: "Water Heater",
    slug: "water-heater",
    group: "Heating",
    icon: Droplets,
    summary: "Tank water heater repair and replacement. Same-day service for complete failures.",
    image: "/images/services/water-heater/hero.png",
    points: ["Same-day replacement available", "Tank removal and haul-away", "TSSA-certified gas techs", "Upfront written pricing"],
    large: false,
  },
  {
    title: "Tankless Water Heater",
    slug: "tankless-water-heater",
    group: "Heating",
    icon: FlameKindling,
    summary: "Endless hot water on demand with no standby energy loss. Gas line upgrades included.",
    image: "/images/services/tankless-water-heater/hero.png",
    points: ["On-demand hot water", "Gas line sizing included", "20+ year lifespan", "Wall-mounted, space-saving"],
    large: false,
  },
  {
    title: "Water Purification",
    slug: "water-purification",
    group: "Home Comfort",
    icon: Droplets,
    summary: "Whole-home filtration, water softeners, and reverse osmosis for cleaner GTA water.",
    image: "/images/services/water-purification/hero.png",
    points: ["Water quality assessment included", "Softeners reduce scale buildup", "RO drinking water systems", "Annual filter service"],
    large: false,
  },
  {
    title: "Maintenance",
    slug: "maintenance",
    group: "All Systems",
    icon: Wrench,
    summary: "Annual tune-ups for furnaces, AC, and heat pumps. Catch problems before they cost you.",
    image: "/images/services/maintenance/hero.png",
    points: ["Filter replacement included", "Written service report", "Combustion & refrigerant testing", "Flexible scheduling"],
    large: true,
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--blue-2)] px-6 py-[100px] text-white">
        <div className="absolute inset-0">
          <img
            alt=""
            aria-hidden="true"
            src="/images/services/overview/hero.png"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue)] via-[rgba(0,33,71,0.9)] to-[rgba(0,33,71,0.6)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(255,69,0,0.3)] bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/90">ArcticPrecision HVAC</span>
            </div>
            <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tight lg:text-[56px]">Expert Precision.<br />Unfailing Warmth.</h1>
            <p className="mb-8 text-lg leading-8 text-slate-300">
              Comprehensive residential HVAC services for Toronto, Mississauga, Brampton, Milton, and the broader GTA. Clear pricing, licensed technicians, and a short path from first call to finished job.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--orange)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_16px_40px_rgba(216,57,0,0.3)] transition hover:bg-[var(--orange-deep)]"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="tel:+16479604029"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/25 px-8 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                +1 (647) 960-4029
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <main className="bg-[var(--surface-alt)] py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold text-[var(--blue)]">All Services</h2>
            <p className="text-base leading-7 text-[var(--muted)]">
              Seven services. One company. We keep the list readable so you can find the right category before you call.
            </p>
          </div>
          <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-12">
            {services.map((service) => (
              <ServiceTile key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </main>

      {/* Trust strip */}
      <section className="border-y border-[var(--border)] bg-white py-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "TSSA Registered", sub: "Licensed for residential gas work in Ontario." },
            { title: "10-Year Warranty", sub: "Parts warranty on all new equipment installations." },
            { title: "Same-Day Service", sub: "Emergency dispatch available across the GTA." },
            { title: "Transparent Pricing", sub: "Written quotes before any work begins. No surprises." },
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

function ServiceTile({
  title,
  slug,
  group,
  icon: Icon,
  summary,
  image,
  points,
  large,
}: {
  title: string;
  slug: string;
  group: string;
  icon: ComponentType<{ className?: string }>;
  summary: string;
  image: string;
  points: readonly string[];
  large: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-[var(--shadow)] transition hover:border-[rgba(216,57,0,0.4)] hover:shadow-xl ${
        large ? "md:col-span-8" : "md:col-span-4"
      }`}
    >
      {/* Image header */}
      <div className={`relative overflow-hidden bg-[var(--blue-2)] ${large ? "h-48" : "h-40"}`}>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,33,71,0.95)] via-[rgba(0,33,71,0.5)] to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(255,69,0,0.2)] backdrop-blur-sm">
              <Icon className="h-5 w-5 text-[var(--orange)]" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">{group}</span>
          </div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="mt-1 text-xs leading-5 text-slate-300">{summary}</p>
        </div>
      </div>

      {/* Points + CTA */}
      <div className="p-6">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
              <span className="text-xs text-[var(--text)]">{point}</span>
            </div>
          ))}
        </div>
        <Link
          href={`/services/${slug}`}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[var(--orange)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[var(--orange-deep)]"
        >
          View service <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
