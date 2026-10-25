import type { Metadata } from "next";
import Link from "next/link";
import { BellRing, ChevronRight, Gauge, Ruler, Zap, Wrench, ClipboardCheck, Flame, Snowflake, ShieldCheck } from "lucide-react";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Heat Pump Installation",
  description:
    "Heat pump installation in the GTA with rebate help: Ontario pays up to $7,500 now, and the federal rebate (up to $10,000) opens January 2027. Cold-climate models that heat at -25°C.",
};

export default function HeatPumpsPage() {
  return (
    <div>
      {/* Rebate dual-track banner */}
      <section className="bg-[var(--blue)] px-6 pb-12 pt-28 text-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--orange)]">Available now</div>
            <div className="mt-3 text-4xl font-extrabold">
              Ontario pays <span className="text-[var(--orange)]">up to $7,500</span>
            </div>
            <p className="mt-3 leading-7 text-slate-200">
              Home Renovation Savings covers cold-climate air-source heat pumps right now — $7,500 for non-gas homes,
              $2,000 for gas homes. No energy audit needed for a heat-pump-only install.
            </p>
            <Link
              href="/rebate-check"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--orange)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--orange-deep)]"
            >
              Check my Ontario rebate <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border-2 border-[var(--orange)] bg-white/5 p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--orange)]">Opens January 2027</div>
            <div className="mt-3 text-4xl font-extrabold">
              Federal adds <span className="text-[var(--orange)]">up to $10,000</span>
            </div>
            <p className="mt-3 leading-7 text-slate-200">
              The National Heat Pump Rebate portal opens January 2027 — up to $10,000 for below-median-income
              households, $2,000 for others, stackable with the Ontario rebate.
            </p>
            <Link
              href="/rebate-check"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <BellRing className="h-4 w-4" /> Join the early-bird waitlist
            </Link>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-[1280px] rounded-xl border border-amber-400/30 bg-amber-400/10 px-6 py-4 text-sm leading-6 text-amber-100">
          Furnace dying this winter? Don&apos;t wait for the federal program — Ottawa hasn&apos;t confirmed rebates for
          installs done before the portal opens. Use the Ontario rebate now; we&apos;ll tell you straight what&apos;s confirmed and what isn&apos;t.
        </p>
      </section>

      <ServicePage
        title="Heat Pumps"
        summary="One system for heating and cooling — and right now, Ontario covers up to $7,500 of it. Modern cold-climate heat pumps work efficiently through Ontario winters."
        intro="Heat pumps have advanced significantly — today's cold-climate models deliver reliable heating down to -25°C, making them a viable primary heat source for GTA homes. A heat pump replaces your central air conditioner and can supplement or replace your furnace, moving heat rather than generating it. We handle equipment selection, load calculations, electrical upgrades, full installation — and the rebate paperwork."
        Icon={Gauge}
        image="/images/services/heat-pumps/hero.png"
        imagePosition="right center"
        points={[
          "Year-round heating and cooling from one system",
          "Cold-climate models efficient to -25°C",
          "Ontario rebate: up to $7,500 available now (no audit)",
          "Federal rebate: up to $10,000 more from January 2027",
          "Replaces or supplements existing furnace",
          "2–4× more efficient than electric baseboard heating",
          "Dual-fuel pairing with existing gas furnace available",
          "Electrical panel assessment and upgrade if required",
          "TSSA and ESA certified installation",
          "We handle the rebate paperwork for you",
        ]}
        included={[
          {
            icon: Ruler,
            title: "Heating & Cooling Load Calculation",
            description: "We calculate your home's full heating and cooling load to select the right heat pump capacity — oversized units short-cycle and fail early.",
          },
          {
            icon: Zap,
            title: "Electrical Assessment & Upgrade",
            description: "Heat pumps require a dedicated 240V circuit. We assess your panel capacity and include any required electrical upgrade in the installation scope.",
          },
          {
            icon: Wrench,
            title: "Full System Installation",
            description: "Outdoor unit placement, refrigerant line set, indoor air handler or coil installation, electrical wiring, and thermostat replacement all handled to code.",
          },
          {
            icon: ClipboardCheck,
            title: "Commissioning & Rebate Paperwork",
            description: "Refrigerant charge verification, heating and cooling cycle testing, thermostat configuration — plus we prepare your Ontario rebate documentation.",
          },
        ]}
        process={[
          {
            title: "Home Assessment",
            description: "We visit the home, review your existing heating system, measure the heat and cooling load, and assess electrical capacity. This determines whether a heat pump replaces or supplements your current setup.",
          },
          {
            title: "System Design & Quote",
            description: "We recommend a unit type (air-source, cold-climate, dual-fuel) matched to your home's load and your heating cost goals — with the rebate math shown line by line. Written quote, no surprises.",
          },
          {
            title: "Installation",
            description: "Outdoor unit set and connected, refrigerant lines run, indoor components installed, electrical circuit wired, and smart thermostat configured for heat pump operation.",
          },
          {
            title: "Commissioning & Rebate Filing",
            description: "Full system test in both heating and cooling modes, refrigerant charge check, thermostat handover, and we file your Ontario rebate paperwork.",
          },
        ]}
        faqs={[
          {
            q: "Do heat pumps actually work in Ontario winters?",
            a: "Modern cold-climate heat pumps operate efficiently down to -15°C and continue functioning to -25°C. For the coldest days, a backup heating source — either electric resistance in the air handler or a paired gas furnace — takes over. The system switches automatically.",
          },
          {
            q: "What rebates can I get right now?",
            a: "Ontario's Home Renovation Savings program pays up to $7,500 for a cold-climate air-source heat pump in non-gas homes (oil, propane, electric) and up to $2,000 in natural-gas homes — no energy audit required for a heat-pump-only install. The federal National Heat Pump Rebate (up to $10,000) opens in January 2027 and stacks with the Ontario rebate. Note: the old Canada Greener Homes Grant closed in 2024 and is no longer available.",
          },
          {
            q: "Should I wait for the federal rebate in 2027?",
            a: "Only if your current system can safely make it through the winter. Ottawa hasn't confirmed rebates for installs completed before the January 2027 portal opens, so if your furnace is failing now, don't wait — claim the Ontario rebate today. If your system is healthy, join our early-bird waitlist and we'll book your install the week the portal opens.",
          },
          {
            q: "Can a heat pump replace my gas furnace entirely?",
            a: "In most GTA homes, a cold-climate heat pump can handle the majority of heating. Some homeowners choose a dual-fuel setup — heat pump as the primary source, existing furnace as backup below a set temperature — which maximises efficiency while retaining gas backup for extreme cold.",
          },
          {
            q: "How much does a heat pump save on energy bills?",
            a: "A heat pump moves 2 to 4 units of heat for every unit of electricity consumed, making it significantly cheaper to operate than electric baseboard or oil heating. Savings compared to gas depend on local electricity and gas rates — we walk you through the math at your free assessment.",
          },
          {
            q: "Does a heat pump need its own electrical panel upgrade?",
            a: "It depends on your current panel capacity. A heat pump requires a dedicated 240V circuit. Many older GTA homes with 100-amp panels need an upgrade to 200 amps to accommodate the added load. We assess this during the site visit and include it in the quote if needed.",
          },
        ]}
        related={[
          { title: "Furnace Installation", slug: "furnace-installation", Icon: Flame },
          { title: "Air Conditioner", slug: "air-conditioner", Icon: Snowflake },
          { title: "Maintenance", slug: "maintenance", Icon: ShieldCheck },
        ]}
      />
    </div>
  );
}
