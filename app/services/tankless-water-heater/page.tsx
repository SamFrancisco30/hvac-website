import type { Metadata } from "next";
import { FlameKindling, Ruler, Zap, Wrench, ClipboardCheck, Droplets, ShieldCheck, Gauge } from "lucide-react";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Tankless Water Heater Installation | ArcticPrecision HVAC",
  description: "Tankless water heater installation and service for GTA homes. On-demand hot water, energy savings, and professional gas line work.",
};

export default function TanklessWaterHeaterPage() {
  return (
    <ServicePage
      title="Tankless Water Heater"
      summary="Endless hot water on demand with no standby energy waste. We install and service tankless water heaters across the GTA — gas line upgrades included when needed."
      intro="Tankless water heaters heat water only when you need it, eliminating the standby heat loss of a conventional tank and providing a continuous supply that won't run out mid-shower. They're a strong fit for homes where the existing tank is undersized, space is limited, or energy efficiency is a priority. We handle the full installation — including gas line sizing and upgrade if required — and make the process straightforward from the first call."
      Icon={FlameKindling}
      image="/images/services/tankless-water-heater/hero.jpg"
      points={[
        "Continuous hot water — never runs out",
        "Significant energy savings versus tank systems",
        "Compact wall-mounted unit frees up space",
        "Gas line sizing and upgrade included when needed",
        "TSSA-certified gas technicians",
        "Indoor and outdoor unit options",
        "10-year heat exchanger warranty on most models",
        "Retrofit installation into existing homes",
      ]}
      included={[
        {
          icon: Ruler,
          title: "Flow Rate Assessment",
          description: "We calculate your household's peak hot water demand to select a unit with the correct flow rate — undersized tankless units are a common and frustrating mistake.",
        },
        {
          icon: Zap,
          title: "Gas Line Evaluation & Upgrade",
          description: "High-efficiency tankless units require a larger gas supply than most tank heaters. We assess your existing line and upgrade it if needed — included in the installation scope.",
        },
        {
          icon: Wrench,
          title: "Full Installation",
          description: "Wall mounting, gas connection, water supply and discharge, condensate drain (for condensing units), and venting — all installed to Ontario code.",
        },
        {
          icon: ClipboardCheck,
          title: "Commissioning & Efficiency Setup",
          description: "We configure the unit's temperature set point, run a full demand test at peak flow, check for gas leaks, and register the manufacturer warranty.",
        },
      ]}
      process={[
        {
          title: "Assessment & Recommendation",
          description: "We visit the home, assess your hot water usage, review the gas supply and venting options, and recommend a unit matched to your actual demand — not the biggest model on the shelf.",
        },
        {
          title: "Written Quote",
          description: "You receive a full written quote covering the unit, all gas line work, venting, permits if required, and installation labour. No hidden costs after the fact.",
        },
        {
          title: "Installation Day",
          description: "We remove the old tank or existing heater if applicable, mount the new unit, run gas and water connections, install venting, and set up the condensate drain.",
        },
        {
          title: "Commissioning & Handover",
          description: "Full demand test, gas leak check, temperature calibration, and a walkthrough of the unit's controls, maintenance intervals, and warranty coverage.",
        },
      ]}
      faqs={[
        {
          q: "Will a tankless water heater work in a Canadian winter?",
          a: "Yes. Properly sized gas tankless units deliver consistent hot water regardless of incoming cold water temperature. We account for Ontario's incoming groundwater temperatures when sizing the unit.",
        },
        {
          q: "Does my gas line need to be upgraded?",
          a: "Often yes. High-efficiency tankless units typically require a 3/4\" or 1\" gas supply, where most homes have a 1/2\" line to the water heater location. We assess this during the site visit and include any required upgrade in the quote.",
        },
        {
          q: "How much can I save on energy bills?",
          a: "Tankless units eliminate standby heat loss, which can account for 15–30% of a conventional tank's energy use. Actual savings depend on your household's hot water usage. Most homeowners see meaningful reductions in gas bills over time.",
        },
        {
          q: "How long does a tankless water heater last?",
          a: "With annual descaling and routine maintenance, a quality gas tankless unit typically lasts 15 to 20 years — roughly double the lifespan of a conventional tank heater.",
        },
        {
          q: "Can I install a tankless heater in any location?",
          a: "Wall-mounted units can go in utility rooms, closets, garages, and in some cases outdoors (with a weatherproof-rated model). Venting requirements and gas supply location are the main factors — we'll assess during the visit.",
        },
        {
          q: "What maintenance does a tankless unit need?",
          a: "Annual descaling is recommended in GTA water conditions (moderately hard water). We also recommend flushing the heat exchanger and checking the inlet filter annually. We can set up a maintenance schedule as part of the installation.",
        },
      ]}
      related={[
        { title: "Water Heater", slug: "water-heater", Icon: Droplets },
        { title: "Heat Pumps", slug: "heat-pumps", Icon: Gauge },
        { title: "Maintenance", slug: "maintenance", Icon: ShieldCheck },
      ]}
    />
  );
}
