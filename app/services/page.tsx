/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, CheckCircle2, Flame, Snowflake, Droplets, Wind, Filter, Zap } from "lucide-react";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAUeutG-XHfBafaBRqXD75myk5FkxlU7KhD9hoSKpnYQPKbBh_kLZQQuztkmlsTo3893HDpswmWLoLr2vTfgceKOFTBPOAI8Q44E5jyi-w5KD6mYs_vl2-i2xt6ox4nxbbnwXuM_uGz8_QiaXSw-Rmh5SV5LjoMcrYEgSG0Y2IaQchH6amJcaDA4C1soWMzaiZJMpAZ3IQW2hbH5B20I0ikYaGrKg2lGOEN27UMnw6C-PgXFlmrXInGF9HADQnBypHol0hioLtYtZez";

const sections = [
  {
    title: "Heating Systems",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDK31sd8Pah3d-HdwxEHv-MeieG3MWVNJHBkMP7hTBI_a3xE1R50Humq9y4eolTTVkj5GbUpLd6TZEfIA7fT1Hd7ya-ZiRJzAQTquXzAFgrcFLxNEPDEtHlLJZvFsLyzbnqpQ0kH2NloLVU4YmJtBjHP60iaBPmXJvtgOSQiI9usTEZC0Z9_l5xdU9HobCGHpL7gn_rPM1ntqGtvvSf-1uSpaAOp_eaWltPBMgXr6VbC-9v0n98R-tJYUfklUWup-wBVf60xFZgv6NU",
    icon: Flame,
    intro: "Furnace installation, water heater support, tankless systems, and heat pumps for home comfort.",
    href: "/services/furnace-installation",
    items: ["Furnace installation and replacement", "Water heater repair and replacement", "Tankless water heater support", "Heat pump installation and service"],
    large: true,
  },
  {
    title: "Precision Cooling",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTCfua_vPqz1ZfEYINeHHWHNt9aBm0291hqBze02zcyNUyar5nVadWGR8Gw9RtokKJwPDmq9IGt92af8UDVs9dEFiFS5VX0NwztQv1539J5vPoZmxmvVNpVo9YD4YCElBfbvbC-n0NJNmu2jbEiBr9tXXLAbnezNns3cgHfAzdR1GgMBFsKZR1cABQuN4K4QkF1MsW3f5Q5DMh4zmye4nOCWY4Ny43AjmXUYTXLwV7eJwn5QKaEKYYU8XX-S-eFQYQbXSTonawqS9u",
    icon: Snowflake,
    intro: "Air conditioner service with straightforward scheduling and no overcomplication.",
    href: "/services/air-conditioner",
    items: ["AC replacement and installation", "Fast diagnostic visits", "Summer-ready comfort", "Straightforward quotes"],
    large: false,
  },
  {
    title: "Water Treatment",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3yZ3Kebuj26N8bPj_eutwawzjOpGOGhE6o8IjYEU79hdroQweH-9eNZbD6yGQn9_7L9qA-a_2DW2GioBiD1QBuL6eoXQXXsvSPU3Xvv8hjL67BXl6PWVMQqzhxZMSg2qcxSJyXfpQUs8QhN44OcLX36Wnx5ymiwuyApdx5khbKUEMAYdZUgc8nLau_bxaja0NESFeICjfyt-m3XGOYu8NNpf7WII38Br2uK0vMZbmegrvB3xYd-Pi5vLPUTYvcACRB7QcXzZPKJC6",
    icon: Droplets,
    intro: "Cleaner water for the home with purification and treatment support.",
    href: "/services/water-purification",
    items: ["Cleaner drinking water", "Better taste and odor", "Treatment system support", "Home comfort add-on"],
    large: false,
  },
  {
    title: "Ventilation & Comfort",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUn9hMRuX-GmGybhrO68WuWDeWXZfAsFrvY-M-PYgkQe6qHJzAe8RQaLM81WAsHjJuJSEqT13ZblsP_Q6aTqNGLFqzJYgL0MllHjXvuGaHRbJQcAP6GpOB-_M_NT66QDp7T5dx3e1CrF3H9kGoSB4BGFPJiaYj_kUvzdd2nDVR59wfd3Fquvqaoskoo5jaJORM9gKWSEvDySwxoof5YblL_8bsB0cpAu9JuUY-OArOhJ13R25TAWkYuCP47kIZ_c2b7EfzRYIMl4KoQ",
    icon: Wind,
    intro: "Heat pumps, filters, and comfort upgrades for balanced indoor air all year.",
    href: "/services/heat-pumps",
    items: ["Heat pumps", "Maintenance", "Tankless water heater", "Balanced indoor comfort"],
    large: false,
  },
  {
    title: "Home Comfort Options",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3yZ3Kebuj26N8bPj_eutwawzjOpGOGhE6o8IjYEU79hdroQweH-9eNZbD6yGQn9_7L9qA-a_2DW2GioBiD1QBuL6eoXQXXsvSPU3Xvv8hjL67BXl6PWVMQqzhxZMSg2qcxSJyXfpQUs8QhN44OcLX36Wnx5ymiwuyApdx5khbKUEMAYdZUgc8nLau_bxaja0NESFeICjfyt-m3XGOYu8NNpf7WII38Br2uK0vMZbmegrvB3xYd-Pi5vLPUTYvcACRB7QcXzZPKJC6",
    icon: Filter,
    intro: "We keep the service list readable so homeowners can quickly find the right category before they call.",
    href: "/services/maintenance",
    items: ["Furnace installation", "Air conditioner", "Water heater", "Tankless water heater"],
    large: true,
  },
] as const;

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the HVAC services ArcticPrecision offers for GTA homeowners.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="relative bg-[var(--blue)] px-6 py-[120px] text-white">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Commercial HVAC rooftop unit" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue)] to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white">Expert Precision. Unfailing Warmth.</h1>
            <p className="text-lg leading-8 text-slate-300">
              Comprehensive HVAC solutions engineered for residential homes. We keep the service list clear and the contact path short.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1280px] px-6 py-[80px]">
        <section className="grid auto-rows-[320px] grid-cols-1 gap-6 md:grid-cols-12">
          {sections.map((section) => (
            <ServiceTile key={section.title} {...section} />
          ))}
        </section>
      </main>
    </div>
  );
}

function ServiceTile({
  title,
  image,
  icon: Icon,
  intro,
  href,
  items,
  large,
}: {
  title: string;
  image: string;
  icon: ComponentType<{ className?: string }>;
  intro: string;
  href: string;
  items: readonly string[];
  large: boolean;
}) {
  return (
    <article className={`group relative overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-[var(--shadow)] transition hover:border-[var(--orange)] ${large ? "md:col-span-8" : "md:col-span-4"}`}>
      <div className={`relative overflow-hidden bg-[var(--surface-alt)] ${large ? "h-64" : "h-48"}`}>
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,33,71,0.92)] via-[rgba(0,33,71,0.45)] to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-[rgba(255,69,0,0.18)] backdrop-blur-sm">
            <Icon className="h-6 w-6 text-[var(--orange)]" />
          </div>
          <h2 className="mb-2 text-3xl font-semibold text-white">{title}</h2>
          <p className="max-w-xl text-sm leading-7 text-slate-200">{intro}</p>
        </div>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 gap-3 border-t border-[var(--border)] pt-6 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="flex items-start">
              <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 text-[var(--orange)]" />
              <span className="text-sm text-[var(--text)]">{item}</span>
            </div>
          ))}
        </div>
        <Link href={href} className="mt-8 inline-flex items-center gap-2 rounded bg-[var(--orange)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--orange-deep)]">
          View service <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
