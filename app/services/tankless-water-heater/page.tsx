import type { Metadata } from "next";
import { FlameKindling } from "lucide-react";
import { ServicePage } from "@/components/service-page";

const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBUn9hMRuX-GmGybhrO68WuWDeWXZfAsFrvY-M-PYgkQe6qHJzAe8RQaLM81WAsHjJuJSEqT13ZblsP_Q6aTqNGLFqzJYgL0MllHjXvuGaHRbJQcAP6GpOB-_M_NT66QDp7T5dx3e1CrF3H9kGoSB4BGFPJiaYj_kUvzdd2nDVR59wfd3Fquvqaoskoo5jaJORM9gKWSEvDySwxoof5YblL_8bsB0cpAu9JuUY-OArOhJ13R25TAWkYuCP47kIZ_c2b7EfzRYIMl4KoQ";

export const metadata: Metadata = {
  title: "Tankless Water Heater",
  description: "Tankless water heater installation and support for homeowners.",
};

export default function TanklessWaterHeaterPage() {
  return (
    <ServicePage
      title="Tankless Water Heater"
      summary="Space-saving hot water systems with efficient everyday use."
      intro="Tankless systems are a strong fit for many homes. We help with selection, installation, and service so the experience stays simple and efficient."
      Icon={FlameKindling}
      image={image}
      points={["Compact equipment", "Energy efficiency", "Hot water on demand", "Install and service"]}
      serviceHref="/contact"
    />
  );
}
