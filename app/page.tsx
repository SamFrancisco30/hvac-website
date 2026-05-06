/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { ComponentType } from "react";
import { Check, ChevronRight, Clock3, Droplets, Flame, PhoneCall, ShieldCheck, Snowflake, Wrench, Zap } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ServiceAreaMap } from "@/components/service-area-map";
import { coverageCities, site } from "@/lib/site";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBUn9hMRuX-GmGybhrO68WuWDeWXZfAsFrvY-M-PYgkQe6qHJzAe8RQaLM81WAsHjJuJSEqT13ZblsP_Q6aTqNGLFqzJYgL0MllHjXvuGaHRbJQcAP6GpOB-_M_NT66QDp7T5dx3e1CrF3H9kGoSB4BGFPJiaYj_kUvzdd2nDVR59wfd3Fquvqaoskoo5jaJORM9gKWSEvDySwxoof5YblL_8bsB0cpAu9JuUY-OArOhJ13R25TAWkYuCP47kIZ_c2b7EfzRYIMl4KoQ";

const heatingImage = "/images/home/heating-systems.png";
const coolingImage = "/images/home/precision-cooling.png";

export default function HomePage() {
  return (
    <main className="pt-20">
        <header className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-[var(--blue)] text-white">
          <div className="absolute inset-0 z-0">
            <img
              alt="Hero background"
              src={heroImage}
              className="h-full w-full scale-105 object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,33,71,0.9)] via-[rgba(0,33,71,0.7)] to-[rgba(0,33,71,1)]" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col items-center gap-8 px-6 pb-16 pt-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,69,0,0.35)] bg-white/10 px-5 py-2.5 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-[var(--orange)]" />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white">TSSA Registered &amp; Insured</span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[72px]">
              Expert Heating &amp; Cooling <br />
              <span className="text-[var(--orange)]">Across the GTA</span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
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

            <div className="mt-6 flex w-full flex-col items-center justify-center gap-8 border-t border-white/15 pt-8 sm:flex-row">
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

            <div className="grid auto-rows-[320px] grid-cols-1 gap-6 lg:grid-cols-12">
              <ServicePanel
                large
                title="Heating Systems"
                text="Furnace installation, rapid repair, and high-efficiency upgrades to keep your property warm during harsh winters."
                image={heatingImage}
                icon={Flame}
              />
              <div className="grid gap-6 lg:col-span-5 lg:row-span-2 lg:grid-rows-2">
                <ServicePanel
                  title="Precision Cooling"
                  text="Advanced climate control solutions designed for energy efficiency and quiet operation."
                  image={coolingImage}
                  icon={Snowflake}
                  imagePosition="center 80%"
                  imageOffset="-8%"
                />
                <ServicePanel
                  title="Water Purification"
                  text="Cleaner water for drinking, cooking, and everyday home comfort."
                  image="/images/home/water-purification.png"
                  icon={Droplets}
                />
              </div>
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
  large = false,
  title,
  text,
  image,
  icon: Icon,
  imagePosition = "center center",
  imageOffset = "0%",
}: {
  large?: boolean;
  title: string;
  text: string;
  image: string;
  icon: ComponentType<{ className?: string }>;
  imagePosition?: string;
  imageOffset?: string;
}) {
  return (
    <div className={`group relative min-h-[320px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-container-low)] shadow-sm transition hover:shadow-xl ${large ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}`}>
      <img
        alt=""
        aria-hidden="true"
        src={image}
        className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-50"
        style={{
          transform: `translateY(${imageOffset}) scale(1.08)`,
          objectPosition: imagePosition,
          transformOrigin: "center center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,33,71,0.9)] via-[rgba(0,33,71,0.4)] to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-[rgba(255,69,0,0.18)] backdrop-blur-sm">
          <Icon className="h-6 w-6 text-[var(--orange)]" />
        </div>
        <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>
        <p className="max-w-md text-sm leading-7 text-slate-200">{text}</p>
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
