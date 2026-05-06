import type { Metadata } from "next";
import { Flame, Ruler, Truck, Wrench, ClipboardCheck, Snowflake, ShieldCheck, Gauge } from "lucide-react";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Furnace Installation | ArcticPrecision HVAC",
  description: "Professional furnace installation for GTA homeowners. Proper load sizing, clean install, old unit removal, and commissioning included.",
};

export default function FurnaceInstallationPage() {
  return (
    <ServicePage
      title="Furnace Installation"
      summary="Properly sized, cleanly installed furnaces that keep GTA homes warm through Ontario winters — from load assessment to final safety commissioning."
      intro="A furnace installation done right means years of reliable, efficient heating. We size equipment to your home's specific heat load using a Manual J calculation — not a rough estimate — and handle the full installation from old unit disconnection to final combustion test. Whether you're replacing a failing furnace mid-winter or upgrading ahead of the season, we keep the process clear and the timeline short."
      Icon={Flame}
      image="/images/services/furnace-installation/hero.jpg"
      points={[
        "Manual J heat load calculation for proper sizing",
        "High-efficiency models up to 98% AFUE available",
        "Old unit disconnection, removal, and disposal included",
        "Same-day and next-day installation slots available",
        "TSSA-certified technicians on every job",
        "10-year parts warranty on all new installs",
        "Full combustion and CO safety test post-install",
        "Upfront written pricing — no surprises",
      ]}
      included={[
        {
          icon: Ruler,
          title: "Heat Load Assessment",
          description: "We measure your home and calculate the exact BTU output needed before recommending any equipment. Right-sized units run more efficiently and last longer.",
        },
        {
          icon: Truck,
          title: "Old Unit Removal",
          description: "Your existing furnace is safely disconnected, removed from the home, and disposed of responsibly — included in the quoted price.",
        },
        {
          icon: Wrench,
          title: "Full Installation",
          description: "Ductwork connections, gas line hook-up, flue venting, electrical wiring, and condensate drain (for high-efficiency units) all handled to Ontario code.",
        },
        {
          icon: ClipboardCheck,
          title: "Safety Commissioning",
          description: "Post-install combustion analysis, carbon monoxide test, airflow verification, and a full system run-cycle before we hand over the keys.",
        },
      ]}
      process={[
        {
          title: "Assessment & Written Quote",
          description: "We visit the home, measure the space, inspect existing ductwork and gas lines, and deliver a written quote with no obligation. No vague estimates.",
        },
        {
          title: "Equipment Selection",
          description: "We recommend a unit matched to your heat load and budget. We carry high-efficiency gas furnaces from trusted manufacturers and explain the trade-offs clearly.",
        },
        {
          title: "Installation Day",
          description: "Our crew removes the old furnace, installs the new unit, connects gas and electrical, runs ductwork checks, and cleans up the work area before leaving.",
        },
        {
          title: "Commissioning & Handover",
          description: "We run a combustion analysis, check for CO, verify airflow, calibrate the thermostat, and walk you through the filter schedule and warranty terms.",
        },
      ]}
      faqs={[
        {
          q: "How long does a furnace installation take?",
          a: "Most residential replacements take 4 to 6 hours. A straightforward swap in an accessible mechanical room is typically completed in a single visit. Homes needing venting changes or gas line upgrades may run slightly longer.",
        },
        {
          q: "What size furnace does my home need?",
          a: "Furnace sizing is based on a heat load calculation (Manual J) that accounts for your home's square footage, insulation levels, window area, ceiling height, and local climate data. We always size to the calculation — we never guess or use rule-of-thumb estimates.",
        },
        {
          q: "Do you remove and dispose of the old furnace?",
          a: "Yes. Disconnection, removal, and disposal of your existing unit is included in every installation quote. There are no extra disposal fees.",
        },
        {
          q: "What warranty comes with a new furnace installation?",
          a: "New installs include a 10-year parts warranty and a 2-year labour warranty. Manufacturer heat exchanger warranties can extend to 20 years depending on the model selected.",
        },
        {
          q: "Can you install a furnace the same day I call?",
          a: "We maintain same-day and next-day slots depending on equipment availability and schedule. Call us directly for the fastest booking — we don't run you through a long online form when the heat is out.",
        },
        {
          q: "Do I need to upgrade my ductwork when replacing a furnace?",
          a: "Not always. We inspect the existing ductwork during the assessment and flag any issues. Many homes can reuse existing duct systems with a new furnace. If modifications are needed, we include that in the quote upfront.",
        },
      ]}
      related={[
        { title: "Heat Pumps", slug: "heat-pumps", Icon: Gauge },
        { title: "Air Conditioner", slug: "air-conditioner", Icon: Snowflake },
        { title: "Maintenance", slug: "maintenance", Icon: ShieldCheck },
      ]}
    />
  );
}
