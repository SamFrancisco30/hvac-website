import type { Metadata } from "next";
import { Flame } from "lucide-react";
import { ServicePage } from "@/components/service-page";

const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDK31sd8Pah3d-HdwxEHv-MeieG3MWVNJHBkMP7hTBI_a3xE1R50Humq9y4eolTTVkj5GbUpLd6TZEfIA7fT1Hd7ya-ZiRJzAQTquXzAFgrcFLxNEPDEtHlLJZvFsLyzbnqpQ0kH2NloLVU4YmJtBjHP60iaBPmXJvtgOSQiI9usTEZC0Z9_l5xdU9HobCGHpL7gn_rPM1ntqGtvvSf-1uSpaAOp_eaWltPBMgXr6VbC-9v0n98R-tJYUfklUWup-wBVf60xFZgv6NU";

export const metadata: Metadata = {
  title: "Furnace Installation",
  description: "Professional furnace installation for residential homes in the GTA.",
};

export default function FurnaceInstallationPage() {
  return (
    <ServicePage
      title="Furnace Installation"
      summary="Efficient installs sized for homeowner comfort, winter reliability, and long-term value."
      intro="Engineered for cold-weather homes, our furnace installation service focuses on clean sizing, reliable setup, and a straightforward experience from estimate to installation."
      Icon={Flame}
      image={image}
      points={["Proper sizing for the home", "Clean installation and haul-away", "Reliable winter performance", "Clear next steps and pricing"]}
      serviceHref="/contact"
    />
  );
}
