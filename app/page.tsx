/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { ComponentType } from "react";
import { Check, ChevronRight, Clock3, Droplets, Flame, Gauge, PhoneCall, ShieldCheck, Snowflake, Wrench, Zap } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ServiceAreaMap } from "@/components/service-area-map";
import { coverageCities, site } from "@/lib/site";

const heatingImage = "/images/home/heating-systems.png";
const coolingImage = "/images/home/precision-cooling.png";
const heatPumpImage = "/images/services/heat-pumps/hero.png";

export default function HomePage() {
  return (
    <main className="pt-20">
        <header className="overflow-hidden bg-[var(--blue)] px-6 py-16 text-white lg:py-20">
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,69,0,0.35)] bg-white/10 px-5 py-2.5 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-[var(--orange)]" />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white">TSSA Registered &amp; Insured</span>
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-[60px] xl:text-[64px]">
              <span className="block">Expert Heating &amp; Cooling</span>
              <span className="block text-[var(--orange)]">Across the GTA</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Affordable rates with premium warranty. We deliver reliable residential HVAC service with clear communication and fast response.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[var(--orange)] px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_40px_rgba(216,57,0,0.32)] transition hover:bg-[var(--orange-deep)]"
              >
                Get an Instant Quote
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-lg border-2 border-white/25 px-8 py-4 text-lg font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <PhoneCall className="h-5 w-5" />
                {site.phone}
              </Link>
            </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.26)]">
                <img
                  alt="Residential furnace and ductwork installation"
                  src={heatingImage}
                  className="aspect-[16/11] w-full rounded-md object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 border-t border-white/15 pt-8 sm:flex-row lg:col-span-12 lg:justify-center">
              <TrustItem title="Free" text="Estimates & Quotes" icon={ShieldCheck} />
              <Divider />
              <TrustItem title="Same-Day" text="Service Available" icon={Clock3} />
              <Divider />
              <TrustItem title="24/7" text="Emergency Dispatch" icon={PhoneCall} />
            </div>
          </div>
        </header>

        <section className="border-b border-[var(--border)] bg-[var(--surface-alt)] py-12">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureItem
              icon={Zap}
              title="Price Match Guarantee"
              text="We beat any written competitor quote."
            />
            <FeatureItem
              icon={PhoneCall}
              title="24/7 Emergency Service"
              text="Rapid response when you need it most."
            />
            <FeatureItem
              icon={Wrench}
              title="Licensed Technicians"
              text="TSSA certified and factory trained experts."
            />
            <FeatureItem
              icon={ShieldCheck}
              title="Extended Labor Warranty"
              text="Long-term protection on all installations."
            />
          </div>
        </section>

        <section className="bg-[var(--surface)] py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mb-16 max-w-2xl">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--blue)]">Precision Climate Control</h2>
              <p className="text-lg leading-8 text-slate-600">
                Comprehensive HVAC services engineered for residential homes across the Greater Toronto Area.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ServicePanel
                title="Heating Systems"
                text="Furnace installation, rapid repair, and high-efficiency upgrades to keep your property warm during harsh winters."
                image={heatingImage}
                icon={Flame}
              />
              <ServicePanel
                title="Precision Cooling"
                text="Advanced climate control solutions designed for energy efficiency and quiet operation."
                image={coolingImage}
                icon={Snowflake}
                imagePosition="center center"
              />
              <ServicePanel
                title="Heat Pumps"
                text="Efficient year-round heating and cooling with cold-climate equipment sized for Ontario homes."
                image={heatPumpImage}
                icon={Gauge}
              />
              <ServicePanel
                title="Water Purification"
                text="Cleaner water for drinking, cooking, and everyday home comfort."
                image="/images/home/water-purification.png"
                icon={Droplets}
              />
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-container-low)] py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mb-8 lg:w-5/12">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--blue)]">Serving the Greater Toronto Area</h2>
              <p className="text-lg leading-8 text-slate-600">
                Rapid dispatch times across Mississauga, Brampton, Milton, Georgetown, and surrounding communities.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="space-y-4">
                  {coverageCities.map((city) => (
                    <div
                      key={city}
                      className="flex items-center justify-between rounded-[14px] border border-[var(--border)] bg-white px-6 py-5 shadow-sm transition hover:border-[var(--orange)] hover:shadow-[0_12px_24px_rgba(0,33,71,0.08)]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(255,69,0,0.1)] text-[var(--orange)]">
                          <Check className="h-5 w-5" />
                        </span>
                        <span className="text-lg font-semibold text-[var(--blue)]">{city}</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative isolate overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface-container)] shadow-sm lg:col-span-7">
                <ServiceAreaMap className="absolute inset-0 h-full w-full" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[rgba(0,33,71,0.8)] to-transparent p-8">
                  <div className="max-w-sm rounded-[16px] border border-[var(--border)] bg-white/90 p-6 backdrop-blur-sm">
                    <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--blue)]">Fleet Dispatch Center</div>
                    <p className="text-sm leading-7 text-slate-600">
                      Centralized monitoring ensures technicians are dispatched from the closest optimal node.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface)] py-20">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[rgba(255,69,0,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--orange)]">
                Contact
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-[var(--blue)]">Get in touch</h2>
              <div className="mt-8 space-y-6">
                <ContactLine label="Call us" value={site.phone} />
                <ContactLine label="Email us" value={site.email} />
                <ContactLine label="Find us" value={site.address} />
              </div>
              <div className="mt-10">
                <div className="mb-4 text-2xl font-bold text-[var(--orange)]">Follow us</div>
                <div className="flex gap-3">
                  <SocialDot label="Facebook" />
                  <SocialDot label="X" />
                  <SocialDot label="Instagram" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-[14px] border border-[var(--border)] bg-white p-12 shadow-[0_12px_24px_rgba(0,33,71,0.08)]">
                <div className="mb-8">
                  <h2 className="mb-2 text-4xl font-bold tracking-tight text-[var(--blue)]">Request Service</h2>
                  <p className="text-base leading-7 text-slate-600">
                    Fill out the details below. We respond to all requests within a few hours during business hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}

function TrustItem({ title, text, icon: Icon }: { title: string; text: string; icon: ComponentType<{ className?: string }> }) {
  return (
    <div className="flex items-center gap-3 text-white/90">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[var(--orange)]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-left">
        <div className="text-base font-semibold text-white">{title}</div>
        <div className="text-sm opacity-80">{text}</div>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="hidden h-10 w-px bg-white/15 sm:block" />;
}

function FeatureItem({ icon: Icon, title, text }: { icon: ComponentType<{ className?: string }>; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[rgba(0,33,71,0.05)]">
        <Icon className="h-6 w-6 text-[var(--orange)]" />
      </div>
      <div>
        <h3 className="mb-1 text-[18px] font-semibold text-[var(--blue)]">{title}</h3>
        <p className="text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function ServicePanel({
  title,
  text,
  image,
  icon: Icon,
  imagePosition = "center center",
}: {
  title: string;
  text: string;
  image: string;
  icon: ComponentType<{ className?: string }>;
  imagePosition?: string;
}) {
  return (
    <div className="group overflow-hidden rounded-lg border border-[var(--border)] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,33,71,0.12)]">
      <div className="aspect-[16/9] overflow-hidden bg-[var(--surface-warm)]">
        <img
          alt=""
          aria-hidden="true"
          src={image}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <div className="p-7">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(216,57,0,0.1)]">
          <Icon className="h-6 w-6 text-[var(--orange)]" />
        </div>
        <h3 className="mb-2 text-2xl font-semibold text-[var(--blue)]">{title}</h3>
        <p className="max-w-md text-sm leading-7 text-[var(--muted)]">{text}</p>
      </div>
    </div>
  );
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-2 text-[14px] font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">{label}</div>
      <div className="text-base font-semibold text-[var(--blue)]">{value}</div>
    </div>
  );
}

function SocialDot({ label }: { label: string }) {
  return (
    <div
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--blue)] text-sm font-semibold text-white shadow-sm"
    >
      {label.slice(0, 1)}
    </div>
  );
}
