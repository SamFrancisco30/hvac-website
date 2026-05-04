import type { Metadata } from "next";
import { Droplets } from "lucide-react";
import { ServicePage } from "@/components/service-page";

const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3yZ3Kebuj26N8bPj_eutwawzjOpGOGhE6o8IjYEU79hdroQweH-9eNZbD6yGQn9_7L9qA-a_2DW2GioBiD1QBuL6eoXQXXsvSPU3Xvv8hjL67BXl6PWVMQqzhxZMSg2qcxSJyXfpQUs8QhN44OcLX36Wnx5ymiwuyApdx5khbKUEMAYdZUgc8nLau_bxaja0NESFeICjfyt-m3XGOYu8NNpf7WII38Br2uK0vMZbmegrvB3xYd-Pi5vLPUTYvcACRB7QcXzZPKJC6";

export const metadata: Metadata = {
  title: "Water Purification and Treatment",
  description: "Water purification and treatment services for residential households.",
};

export default function WaterPurificationPage() {
  return (
    <ServicePage
      title="Water Purification and Treatment"
      summary="Cleaner water for everyday home use."
      intro="Water treatment and purification can improve taste, odor, and overall comfort in the home. We keep the offering practical and easy to understand."
      Icon={Droplets}
      image={image}
      points={["Cleaner drinking water", "Better taste and odor", "Treatment system support", "Home comfort add-on"]}
      serviceHref="/contact"
    />
  );
}
