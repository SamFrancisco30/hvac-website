import type { Metadata } from "next";
import { Wrench } from "lucide-react";
import { ServicePage } from "@/components/service-page";

const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAUeutG-XHfBafaBRqXD75myk5FkxlU7KhD9hoSKpnYQPKbBh_kLZQQuztkmlsTo3893HDpswmWLoLr2vTfgceKOFTBPOAI8Q44E5jyi-w5KD6mYs_vl2-i2xt6ox4nxbbnwXuM_uGz8_QiaXSw-Rmh5SV5LjoMcrYEgSG0Y2IaQchH6amJcaDA4C1soWMzaiZJMpAZ3IQW2hbH5B20I0ikYaGrKg2lGOEN27UMnw6C-PgXFlmrXInGF9HADQnBypHol0hioLtYtZez";

export const metadata: Metadata = {
  title: "Maintenance",
  description: "Maintenance plans and service visits for homeowners.",
};

export default function MaintenancePage() {
  return (
    <ServicePage
      title="Maintenance"
      summary="Routine checkups that help avoid bigger breakdowns later."
      intro="Maintenance visits help keep systems dependable before problems become urgent. This page should support a service mindset rather than a feature pitch."
      Icon={Wrench}
      image={image}
      points={["Preventive service", "System checks", "Seasonal tune-ups", "Maintenance reminders"]}
      serviceHref="/contact"
    />
  );
}
