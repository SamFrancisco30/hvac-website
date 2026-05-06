import type { Metadata } from "next";
import { Snowflake, Ruler, Truck, Wrench, ClipboardCheck, Flame, Gauge, ShieldCheck } from "lucide-react";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Air Conditioner Installation & Service | ArcticPrecision HVAC",
  description: "Central AC installation, replacement, and service for GTA homes. Proper sizing, same-day emergency calls, and transparent pricing.",
};

export default function AirConditionerPage() {
  return (
    <ServicePage
      title="Air Conditioner"
      summary="Cool, comfortable homes through Ontario summers. We handle AC replacements, new installs, and urgent service calls across the GTA — fast scheduling and straightforward pricing."
      intro="Whether your existing unit has failed or you're replacing an aging system before the heat arrives, we keep the process fast and practical. We carry central air conditioners properly sized for Toronto-area homes and handle everything from line set installation to electrical disconnect and full commissioning. No upselling, no unnecessary complexity — just a working system before summer gets uncomfortable."
      Icon={Snowflake}
      image="/images/services/air-conditioner/hero.png"
      imagePosition="right center"
      points={[
        "Central AC replacement and new installation",
        "Cooling load calculation for correct unit sizing",
        "Refrigerant line set installation",
        "Electrical disconnect and wiring included",
        "Old unit disconnection and responsible disposal",
        "TSSA-certified technicians on every job",
        "Same-day emergency service during cooling season",
        "Flat-rate written pricing before work begins",
      ]}
      included={[
        {
          icon: Ruler,
          title: "Cooling Load Assessment",
          description: "We calculate your home's cooling load before selecting any equipment. Right-sized units run quieter, cool more evenly, and last significantly longer than over- or under-sized units.",
        },
        {
          icon: Truck,
          title: "Old Unit Removal",
          description: "We disconnect, remove, and properly dispose of your existing air conditioner as part of every installation. No extra disposal fees.",
        },
        {
          icon: Wrench,
          title: "Full Installation",
          description: "Outdoor condenser placement, refrigerant line set, electrical disconnect wiring, and indoor evaporator coil connection — all handled to Ontario code.",
        },
        {
          icon: ClipboardCheck,
          title: "System Commissioning",
          description: "Refrigerant charge verification, airflow measurement, thermostat calibration, and a full cooling cycle test before we hand the system over.",
        },
      ]}
      process={[
        {
          title: "Contact & Scheduling",
          description: "Call or submit a request. We confirm a visit window quickly — same-day for emergencies, next available slot for planned replacements.",
        },
        {
          title: "Site Assessment & Quote",
          description: "We assess the home, inspect existing ductwork and the electrical panel, measure cooling load, and provide a written quote before any work begins.",
        },
        {
          title: "Installation Day",
          description: "Full installation typically completed in a single visit — outdoor condenser, line set, coil, electrical, and refrigerant charge all done the same day.",
        },
        {
          title: "Commissioning & Handover",
          description: "We test the system under load, verify refrigerant charge and airflow, and walk you through the thermostat settings and maintenance schedule.",
        },
      ]}
      faqs={[
        {
          q: "How do I know if I need a new AC or just a repair?",
          a: "If your unit is over 12 years old, requires repeated refrigerant refills, or the repair quote is more than 50% of replacement cost, a new unit is usually the smarter investment. We give you an honest assessment — we don't push replacements when a repair makes sense.",
        },
        {
          q: "How long does an AC installation take?",
          a: "A standard central AC replacement takes 4 to 6 hours. Homes that need new line sets run through exterior walls, or that require electrical panel upgrades, may take a full day.",
        },
        {
          q: "Do you service existing air conditioners, not just replace them?",
          a: "Yes. We handle diagnostic visits, refrigerant top-ups, capacitor and contactor replacements, coil cleaning, and other common AC repairs for existing systems.",
        },
        {
          q: "What brand of air conditioner do you install?",
          a: "We carry units from major manufacturers and select based on your home's cooling load and your budget. We explain the trade-offs between models and don't push any single brand.",
        },
        {
          q: "Can I get same-day service if my AC stops working?",
          a: "Yes. We maintain same-day emergency slots during the cooling season. Call us directly — same-day dispatch is faster over the phone than through online booking.",
        },
        {
          q: "What's the difference between a heat pump and a central AC?",
          a: "A central AC only cools. A heat pump can both cool in summer and heat in winter using the same outdoor unit. If you're replacing an older system, a heat pump may be worth considering for year-round efficiency.",
        },
      ]}
      related={[
        { title: "Heat Pumps", slug: "heat-pumps", Icon: Gauge },
        { title: "Furnace Installation", slug: "furnace-installation", Icon: Flame },
        { title: "Maintenance", slug: "maintenance", Icon: ShieldCheck },
      ]}
    />
  );
}
