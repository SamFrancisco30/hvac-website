import type { Metadata } from "next";
import { Wrench, ClipboardList, Filter, Gauge, ClipboardCheck, Flame, Snowflake, Droplets } from "lucide-react";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "HVAC Maintenance | ArcticPrecision HVAC",
  description: "Annual HVAC maintenance for GTA homes. Furnace, AC, and heat pump tune-ups that prevent breakdowns and keep systems running at peak efficiency.",
};

export default function MaintenancePage() {
  return (
    <ServicePage
      title="HVAC Maintenance"
      summary="Preventive maintenance that catches problems before they become breakdowns. Annual tune-ups for furnaces, air conditioners, and heat pumps across the GTA."
      intro="Most HVAC failures don't happen without warning — they follow months of reduced efficiency, worn components, and ignored service intervals. A professional annual tune-up catches these issues before they escalate, keeps your system running at rated efficiency, preserves your warranty coverage, and gives you confidence heading into peak heating and cooling seasons. We cover furnaces, air conditioners, and heat pumps in a single comprehensive visit."
      Icon={Wrench}
      image="/images/services/maintenance/hero.png"
      imagePosition="right center"
      points={[
        "Annual furnace and AC tune-up packages",
        "Heat pump heating and cooling mode inspection",
        "Filter replacement included with every visit",
        "Combustion analysis for gas appliances",
        "Refrigerant level check for cooling systems",
        "Electrical connections and capacitor inspection",
        "Written service report after every visit",
        "Flexible scheduling — evenings and weekends available",
      ]}
      included={[
        {
          icon: ClipboardList,
          title: "Full System Inspection",
          description: "Visual inspection of all major components — heat exchanger, burners, blower, coils, refrigerant lines, electrical, and controls — to identify wear before failure.",
        },
        {
          icon: Filter,
          title: "Filter Replacement",
          description: "We replace your furnace or air handler filter at every maintenance visit. A clean filter is the single most impactful maintenance step a homeowner can take.",
        },
        {
          icon: Gauge,
          title: "Performance Testing",
          description: "We measure airflow, combustion efficiency, refrigerant charge, and electrical draw to confirm the system is running within manufacturer specifications.",
        },
        {
          icon: ClipboardCheck,
          title: "Written Service Report",
          description: "You receive a documented report of everything inspected, tested, and adjusted — including any items to watch for before the next service interval.",
        },
      ]}
      process={[
        {
          title: "Schedule Your Visit",
          description: "Book a maintenance visit online or by phone. We recommend scheduling furnace tune-ups in early fall before heating season, and AC tune-ups in spring before the first hot stretch.",
        },
        {
          title: "System Inspection",
          description: "Our technician inspects all major components, cleans accessible parts, tests controls and safeties, and checks electrical connections. This typically takes 60 to 90 minutes.",
        },
        {
          title: "Performance Testing",
          description: "We run the system through a full operating cycle and measure combustion efficiency (for gas appliances), refrigerant charge (for cooling systems), and airflow output.",
        },
        {
          title: "Report & Recommendations",
          description: "We provide a written service report documenting everything checked, with clear notes on any items that should be addressed before the next service interval. No pressure — just honest findings.",
        },
      ]}
      faqs={[
        {
          q: "How often should I have my HVAC system serviced?",
          a: "Annual maintenance is the standard recommendation — once per year for a heating-only system or heat pump. Combination systems (furnace + AC) ideally get two visits: a furnace tune-up in fall and an AC tune-up in spring. At minimum, one comprehensive visit per year.",
        },
        {
          q: "What happens if I skip annual maintenance?",
          a: "Skipping maintenance doesn't cause immediate failure, but it accelerates component wear, reduces efficiency, and often voids manufacturer labour warranty coverage. Most HVAC failures we respond to on emergency calls are systems that haven't been maintained in several years.",
        },
        {
          q: "What's included in a furnace tune-up?",
          a: "Heat exchanger inspection, burner cleaning, combustion analysis, blower motor check, filter replacement, thermostat calibration, flue venting inspection, and a check of all safety controls. We provide a written report with the findings.",
        },
        {
          q: "What's included in an AC or heat pump tune-up?",
          a: "Refrigerant charge check, coil cleaning (evaporator and condenser), electrical connection tightening, capacitor and contactor inspection, airflow measurement, filter replacement, and a full operating cycle test. For heat pumps, we test both heating and cooling modes.",
        },
        {
          q: "Do you offer service plans or annual contracts?",
          a: "We keep it simple — no mandatory contracts. You schedule when it suits you, and we show up and do the job properly. If you want to pre-book the same slot every year, we're happy to set that up.",
        },
        {
          q: "Does maintenance actually extend equipment life?",
          a: "Yes. Properly maintained furnaces and air conditioners routinely reach 18 to 22 years of service. Neglected systems commonly fail at 10 to 12 years. The cost of a few maintenance visits is a fraction of an early replacement.",
        },
      ]}
      related={[
        { title: "Furnace Installation", slug: "furnace-installation", Icon: Flame },
        { title: "Air Conditioner", slug: "air-conditioner", Icon: Snowflake },
        { title: "Water Heater", slug: "water-heater", Icon: Droplets },
      ]}
    />
  );
}
