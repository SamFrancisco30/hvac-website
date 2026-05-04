import type { Metadata } from "next";
import { Droplets } from "lucide-react";
import { ServicePage } from "@/components/service-page";

const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBqFjppzIZZ1GNHkmI8Aq9N349s2xFO-zyEufm2vkcAATOxqMInyR1I4RijoSnP4WsOyj2dZO3ufroriOyuuMCh9pQ8aFYUxX84JxfoHmLVOevTZwT2C03Ueo07_yLulA_rDanmuc2k7Q_DtrjCxMD35Rdaghfh_WhdBor3K1crFb3909H-w1MGMt86ZwYO9XvZRlKIRDCAA6axTOZKp0r5kyTW2o73P3MQlpXemFEHtVmNOiThyXRklnchREyVxmXJwB3oLc1J0nUQ";

export const metadata: Metadata = {
  title: "Water Heater",
  description: "Water heater service for residential homes in the GTA.",
};

export default function WaterHeaterPage() {
  return (
    <ServicePage
      title="Water Heater"
      summary="Repair and replacement support for standard hot water tank systems."
      intro="We help homeowners restore reliable hot water with replacement and service support that is direct, practical, and easy to schedule."
      Icon={Droplets}
      image={image}
      points={["Hot water issue diagnosis", "Replacement and swap-out support", "Residential-friendly pricing", "Fast callback options"]}
      serviceHref="/contact"
    />
  );
}
