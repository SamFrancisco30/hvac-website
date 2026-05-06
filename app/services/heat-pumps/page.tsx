import type { Metadata } from "next";
import { Gauge, Ruler, Zap, Wrench, ClipboardCheck, Flame, Snowflake, ShieldCheck } from "lucide-react";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Heat Pump Installation | ArcticPrecision HVAC",
  description: "Heat pump installation and service for GTA homes. Year-round heating and cooling efficiency, cold-climate models available.",
};

export default function HeatPumpsPage() {
  return (
    <ServicePage
      title="Heat Pumps"
      summary="One system for heating and cooling. Modern cold-climate heat pumps work efficiently through Ontario winters and keep homes comfortable year-round."
      intro="Heat pumps have advanced significantly — today's cold-climate models deliver reliable heating down to -25°C, making them a viable primary heat source for GTA homes. A heat pump replaces your central air conditioner and can supplement or replace your furnace, moving heat rather than generating it and delivering more energy output per dollar spent on electricity. We handle equipment selection, load calculations, electrical upgrades, and full installation."
      Icon={Gauge}
      image="/images/services/heat-pumps/hero.png"
      imagePosition="right center"
      points={[
        "Year-round heating and cooling from one system",
        "Cold-climate models efficient to -25°C",
        "Replaces or supplements existing furnace",
        "2–4× more efficient than electric baseboard heating",
        "Dual-fuel pairing with existing gas furnace available",
        "Electrical panel assessment and upgrade if required",
        "TSSA and ESA certified installation",
        "Eligible for federal and provincial rebates",
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
          title: "Commissioning & Performance Test",
          description: "Refrigerant charge verification, heating and cooling cycle testing, thermostat configuration, and rebate paperwork support if applicable.",
        },
      ]}
      process={[
        {
          title: "Home Assessment",
          description: "We visit the home, review your existing heating system, measure the heat and cooling load, and assess electrical capacity. This determines whether a heat pump replaces or supplements your current setup.",
        },
        {
          title: "System Design & Quote",
          description: "We recommend a unit type (air-source, cold-climate, dual-fuel) matched to your home's load and your heating cost goals. Written quote with all scope included.",
        },
        {
          title: "Installation",
          description: "Outdoor unit set and connected, refrigerant lines run, indoor components installed, electrical circuit wired, and smart thermostat configured for heat pump operation.",
        },
        {
          title: "Commissioning & Rebate Support",
          description: "Full system test in both heating and cooling modes, refrigerant charge check, thermostat handover, and documentation for applicable government rebate programs.",
        },
      ]}
      faqs={[
        {
          q: "Do heat pumps actually work in Ontario winters?",
          a: "Modern cold-climate heat pumps (like those meeting the Canada Greener Homes specification) operate efficiently down to -15°C and continue functioning to -25°C. For the coldest days, a backup heating source — either electric resistance in the air handler or a paired gas furnace — takes over. The system switches automatically.",
        },
        {
          q: "Can a heat pump replace my gas furnace entirely?",
          a: "In most GTA homes, a cold-climate heat pump can handle the majority of heating. Some homeowners choose a dual-fuel setup — heat pump as the primary source, existing furnace as backup below a set temperature — which maximises efficiency while retaining gas backup for extreme cold.",
        },
        {
          q: "How much does a heat pump save on energy bills?",
          a: "A heat pump moves 2 to 4 units of heat for every unit of electricity consumed, making it significantly cheaper to operate than electric baseboard or oil heating. Savings compared to gas depend on local electricity and gas rates — we can walk you through an estimate based on your home's load.",
        },
        {
          q: "Are there government rebates for heat pump installation?",
          a: "Yes. The Canada Greener Homes Grant and Ontario rebate programs offer significant incentives for qualifying heat pump installations. Eligibility depends on the unit's efficiency rating and your existing heating system. We assist with documentation as part of the installation.",
        },
        {
          q: "Does a heat pump need its own electrical panel upgrade?",
          a: "It depends on your current panel capacity. A heat pump requires a dedicated 240V circuit. Many older GTA homes with 100-amp panels need an upgrade to 200 amps to accommodate the added load. We assess this during the site visit and include it in the quote if needed.",
        },
        {
          q: "Can a heat pump work with my existing ductwork?",
          a: "In most cases, yes. If your home has a forced-air furnace, the heat pump's air handler or indoor coil integrates with the existing duct system. We inspect the ductwork during the assessment and flag any modifications needed.",
        },
      ]}
      related={[
        { title: "Furnace Installation", slug: "furnace-installation", Icon: Flame },
        { title: "Air Conditioner", slug: "air-conditioner", Icon: Snowflake },
        { title: "Maintenance", slug: "maintenance", Icon: ShieldCheck },
      ]}
    />
  );
}
