import type { Metadata } from "next";
import { Snowflake } from "lucide-react";
import { ServicePage } from "@/components/service-page";

const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBTCfua_vPqz1ZfEYINeHHWHNt9aBm0291hqBze02zcyNUyar5nVadWGR8Gw9RtokKJwPDmq9IGt92af8UDVs9dEFiFS5VX0NwztQv1539J5vPoZmxmvVNpVo9YD4YCElBfbvbC-n0NJNmu2jbEiBr9tXXLAbnezNns3cgHfAzdR1gGMBFsKZR1cABQuN4K4QkF1MsW3f5Q5DMh4zmye4nOCWY4Ny43AjmXUYTXLwV7eJwn5QKaEKYYU8XX-S-eFQYQbXSTonawqS9u";

export const metadata: Metadata = {
  title: "Air Conditioner",
  description: "Air conditioner installation and service for residential properties.",
};

export default function AirConditionerPage() {
  return (
    <ServicePage
      title="Air Conditioner"
      summary="Cooling support that keeps homes comfortable during hot weather."
      intro="From replacement units to seasonal service calls, our AC work is focused on keeping the home cool without unnecessary complexity or pressure."
      Icon={Snowflake}
      image={image}
      points={["AC replacement and installation", "Fast diagnostic visits", "Summer-ready comfort", "Straightforward quotes"]}
      serviceHref="/contact"
    />
  );
}
