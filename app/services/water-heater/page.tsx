import type { Metadata } from "next";
import { Droplets, ClipboardList, Truck, Wrench, ClipboardCheck, FlameKindling, ShieldCheck, Gauge } from "lucide-react";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Water Heater Repair & Replacement | ArcticPrecision HVAC",
  description: "Hot water tank repair and replacement for GTA homes. Fast response, same-day service available, full installation with haul-away.",
};

export default function WaterHeaterPage() {
  return (
    <ServicePage
      title="Water Heater"
      summary="Reliable hot water restored fast. We repair and replace standard tank water heaters across the GTA — same-day service available when hot water can't wait."
      intro="A failed water heater is one of the most disruptive breakdowns a home can have. We respond quickly, diagnose the issue honestly, and replace units the same day when the situation calls for it. We work with natural gas tank water heaters in standard residential sizes and handle the full replacement — from draining the old tank to connecting gas and water lines and disposing of the old unit."
      Icon={Droplets}
      image="/images/services/water-heater/hero.jpg"
      points={[
        "Same-day service for complete failures",
        "Gas and water connection included",
        "Old tank draining and removal included",
        "Standard residential sizes in stock",
        "TSSA-certified gas technicians",
        "Leak diagnosis and repair for existing units",
        "Pilot light and thermostat troubleshooting",
        "Transparent flat-rate pricing",
      ]}
      included={[
        {
          icon: ClipboardList,
          title: "Diagnosis",
          description: "We assess the unit's condition, identify the root cause of the failure, and give you a clear recommendation — repair or replace — with honest reasoning.",
        },
        {
          icon: Truck,
          title: "Old Tank Removal",
          description: "We drain, disconnect, and haul away the old water heater. No extra fees for removal — it's included in the replacement quote.",
        },
        {
          icon: Wrench,
          title: "Full Installation",
          description: "Gas line connection, water supply and discharge hook-up, pressure relief valve installation, and all fittings to Ontario building code.",
        },
        {
          icon: ClipboardCheck,
          title: "Commissioning & Safety Check",
          description: "We verify gas connections for leaks, test water temperature, confirm the pressure relief valve operates correctly, and run the unit through a full heat cycle.",
        },
      ]}
      process={[
        {
          title: "Call or Request Service",
          description: "Reach us by phone or online request. For complete hot water failures, we prioritize same-day dispatch. We confirm an arrival window when you contact us.",
        },
        {
          title: "Diagnosis & Quote",
          description: "Our technician inspects the tank, diagnoses the issue, and provides a written quote for repair or replacement — no work starts without your approval.",
        },
        {
          title: "Replacement or Repair",
          description: "For replacements: we drain and remove the old unit, install the new tank, connect gas and water, and install all required fittings. Typically completed in 2 to 3 hours.",
        },
        {
          title: "Test & Handover",
          description: "We test for gas leaks, check water temperature output, verify the pressure relief valve, and walk you through the new unit's settings and anode rod schedule.",
        },
      ]}
      faqs={[
        {
          q: "How do I know if my water heater needs to be replaced?",
          a: "Common signs include water that takes longer to heat, rust-coloured water, a leaking tank, unusual rumbling or popping sounds, or a unit over 10 years old. We'll give you an honest assessment — we don't recommend replacement when a repair will solve the problem.",
        },
        {
          q: "Can you replace my water heater the same day?",
          a: "Yes, in most cases. We carry standard residential tank sizes and can typically complete a same-day replacement when the unit has fully failed. Call us directly for fastest scheduling.",
        },
        {
          q: "What size water heater does my home need?",
          a: "For most GTA homes, a 40- or 50-gallon tank is sufficient. Larger households may benefit from a 60-gallon tank or a switch to a tankless system. We'll recommend based on your household size and usage pattern.",
        },
        {
          q: "Should I repair or replace my water heater?",
          a: "If the tank is leaking, that's always a replacement. For other issues — failed thermostats, bad elements, or pilot light problems — repair may be cost-effective if the tank is under 8 years old. We'll give you the honest breakdown.",
        },
        {
          q: "Do you rent or lease water heaters?",
          a: "We sell and install — we don't offer rental programs. Owning your unit is more cost-effective over the long term and gives you full control over service decisions.",
        },
        {
          q: "Is a tankless water heater worth switching to?",
          a: "Tankless systems offer energy savings and unlimited hot water, but require a larger upfront investment and may need a gas line upgrade. We offer both and can walk you through which makes more sense for your home.",
        },
      ]}
      related={[
        { title: "Tankless Water Heater", slug: "tankless-water-heater", Icon: FlameKindling },
        { title: "Water Purification", slug: "water-purification", Icon: Droplets },
        { title: "Maintenance", slug: "maintenance", Icon: ShieldCheck },
      ]}
    />
  );
}
