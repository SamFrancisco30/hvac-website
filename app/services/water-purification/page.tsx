import type { Metadata } from "next";
import { Droplets, FlaskConical, Wrench, ClipboardCheck, Filter, FlameKindling, ShieldCheck, Activity } from "lucide-react";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Water Purification & Treatment | ArcticPrecision HVAC",
  description: "Whole-home water purification and treatment for GTA households. Filtration, softening, and reverse osmosis systems installed and serviced.",
};

export default function WaterPurificationPage() {
  return (
    <ServicePage
      title="Water Purification & Treatment"
      summary="Cleaner, better-tasting water throughout your home. We install and service whole-home filtration, water softeners, and reverse osmosis systems across the GTA."
      intro="GTA municipal water is safe but not always pleasant — hard water, chlorine taste, and sediment are common complaints in the region. A water treatment system addresses these issues at the source, improving water quality for drinking, cooking, and everyday use while reducing scale buildup in appliances and plumbing. We assess your water first, recommend the right solution, and handle the full installation."
      Icon={Droplets}
      image="/images/services/water-purification/hero.jpg"
      points={[
        "Whole-home water softener installation",
        "Reverse osmosis drinking water systems",
        "Sediment and carbon filtration",
        "Scale reduction to protect appliances",
        "Improved taste and odour from tap water",
        "Filter media replacement and maintenance",
        "System troubleshooting for existing units",
        "Transparent product and installation pricing",
      ]}
      included={[
        {
          icon: FlaskConical,
          title: "Water Quality Assessment",
          description: "We assess your water for hardness, sediment, chlorine levels, and other common GTA water issues before recommending any system.",
        },
        {
          icon: Filter,
          title: "System Selection",
          description: "We recommend the right combination — softener, carbon filter, RO unit, or whole-home filtration — based on your water test results and household priorities.",
        },
        {
          icon: Wrench,
          title: "Professional Installation",
          description: "System installed at the main water supply entry point or under-sink for point-of-use units. All plumbing connections made to Ontario building code.",
        },
        {
          icon: ClipboardCheck,
          title: "System Commissioning",
          description: "We program the softener regeneration schedule, flush new filter media, test output water quality, and walk you through the maintenance intervals.",
        },
      ]}
      process={[
        {
          title: "Water Assessment",
          description: "We test your incoming water for hardness, chlorine, sediment, and any specific concerns you've noticed — taste, staining, scale buildup on fixtures.",
        },
        {
          title: "System Recommendation & Quote",
          description: "Based on the assessment, we recommend a solution and provide a written quote covering equipment and installation. We explain what each system does and what it doesn't — no overselling.",
        },
        {
          title: "Installation",
          description: "The system is installed at the correct point in your plumbing — whole-home softeners at the main entry, RO units under the kitchen sink. Typically completed in 2 to 4 hours.",
        },
        {
          title: "Commissioning & Handover",
          description: "We programme the system, run an output water test, and walk you through filter replacement intervals and what to watch for. You leave with a clear maintenance schedule.",
        },
      ]}
      faqs={[
        {
          q: "Does GTA tap water actually need treatment?",
          a: "GTA municipal water meets safety standards, but it's classified as moderately hard (roughly 120–180 mg/L) which causes scale buildup in appliances, water heaters, and pipes. Chlorination also affects taste and odour. A treatment system addresses these without implying the water is unsafe.",
        },
        {
          q: "What's the difference between a water softener and a water filter?",
          a: "A water softener removes hardness minerals (calcium and magnesium) through ion exchange, preventing scale. A water filter removes sediment, chlorine, organic compounds, and other contaminants affecting taste and odour. Many homes benefit from both — a softener at the whole-home level and a carbon or RO filter for drinking water.",
        },
        {
          q: "How does a reverse osmosis system work?",
          a: "An RO system forces water through a semi-permeable membrane that removes dissolved solids, heavy metals, nitrates, and many other contaminants. It's typically installed under the kitchen sink and provides purified water at a dedicated tap. It produces a small amount of wastewater during the process.",
        },
        {
          q: "How much maintenance does a water treatment system need?",
          a: "A water softener needs salt refilled every 4 to 8 weeks and a resin bed cleaning once a year. Carbon filters need media replacement annually. RO membrane replacement is typically every 2 to 3 years. We build a maintenance schedule into every installation.",
        },
        {
          q: "Will a water softener affect my hot water heater?",
          a: "Positively, yes. Scale buildup from hard water is one of the leading causes of premature water heater failure. A softener reduces scale accumulation in your tank and throughout your plumbing, extending appliance life.",
        },
        {
          q: "Do you service water treatment systems installed by other companies?",
          a: "Yes. We can assess, service, and replace filter media for most common residential water treatment systems regardless of the original installer.",
        },
      ]}
      related={[
        { title: "Water Heater", slug: "water-heater", Icon: Droplets },
        { title: "Tankless Water Heater", slug: "tankless-water-heater", Icon: FlameKindling },
        { title: "Maintenance", slug: "maintenance", Icon: ShieldCheck },
      ]}
    />
  );
}
