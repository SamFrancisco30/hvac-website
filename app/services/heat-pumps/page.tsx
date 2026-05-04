import type { Metadata } from "next";
import { Fan } from "lucide-react";
import { ServicePage } from "@/components/service-page";

const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDK31sd8Pah3d-HdwxEHv-MeieG3MWVNJHBkMP7hTBI_a3xE1R50Humq9y4eolTTVkj5GbUpLd6TZEfIA7fT1Hd7ya-ZiRJzAQTquXzAFgrcFLxNEPDEtHlLJZvFsLyzbnqpQ0kH2NloLVU4YmJtBjHP60iaBPmXJvtgOSQiI9usTEZC0Z9_l5xdU9HobCGHpL7gn_rPM1ntqGtvvSf-1uSpaAOp_eaWltPBMgXr6VbC-9v0n98R-tJYUfklUWup-wBVf60xFZgv6NU";

export const metadata: Metadata = {
  title: "Heat Pumps",
  description: "Heat pump installation and service for residential comfort and efficiency.",
};

export default function HeatPumpsPage() {
  return (
    <ServicePage
      title="Heat Pumps"
      summary="All-in-one heating and cooling for homes that want efficiency."
      intro="Heat pumps are a good fit when homeowners want one system that can handle both heating and cooling. We keep the decision and install process simple."
      Icon={Fan}
      image={image}
      points={["Heating and cooling in one system", "Efficiency upgrades", "Home comfort improvements", "Replacement support"]}
      serviceHref="/contact"
    />
  );
}
