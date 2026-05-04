/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Wrench } from "lucide-react";
import type { ComponentType } from "react";
import { site } from "@/lib/site";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBqFjppzIZZ1GNHkmI8Aq9N349s2xFO-zyEufm2vkcAATOxqMInyR1I4RijoSnP4WsOyj2dZO3ufroriOyuuMCh9pQ8aFYUxX84JxfoHmLVOevTZwT2C03Ueo07_yLulA_rDanmuc2k7Q_DtrjCxMD35Rdaghfh_WhdBor3K1crFb3909H-w1MGMt86ZwYO9XvZRlKIRDCAA6axTOZKp0r5kyTW2o73P3MQlpXemFEHtVmNOiThyXRklnchREyVxmXJwB3oLc1J0nUQ";

const blueprintImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAofGHkfK4ECavSW_TRBXQm9bBFaHanZ26O2BTsShViK0xLGpC70otXYG5wdtO7NMcGEDpTbb40RFDd--ycfuWlQ23z2JyB-8z6iUKggGMeBbPTFGX1ykB2BI72yvKB5cPRqlFjqcV3hnx9XDRwqDLwKAfkMmksZYjN2SD1c0lAV2txgez1EAY12rki257mQA-08stgmi3K5qua1RLgOy6losCBgnPy_YRoR623EvJYEj7AXhuQXZNTMAMXJ3D318NpAx7LJdu1d-kW";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how ArcticPrecision HVAC serves GTA homeowners with a residential-first approach.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <main>
        <section className="mx-auto max-w-[1280px] px-6 py-[80px]">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-[var(--blue)] sm:text-6xl">Expert Precision. Family Values.</h1>
              <p className="max-w-lg text-lg leading-8 text-[var(--muted)]">
                Serving the Canadian climate demands more than standard solutions. As a family-owned enterprise, {site.shortName} balances technical rigor with a commitment to home comfort.
              </p>
            </div>
            <div className="h-[500px] overflow-hidden rounded-xl bg-[var(--surface-alt)]">
              <img src={heroImage} alt="Commercial HVAC unit" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-[var(--blue)] py-[80px] text-white">
          <div className="mx-auto max-w-[1280px] px-6 text-center">
            <div className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[var(--orange)]">Our Mission</div>
            <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white">
              To deliver unfailing warmth and precision cooling through rigorous standards, accessible service, and uncompromising technical excellence.
            </h2>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 py-[80px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-5 flex flex-col justify-center">
              <h3 className="mb-4 text-3xl font-semibold text-[var(--blue)]">Certified Authority, Unwavering Trust.</h3>
              <p className="mb-6 text-base leading-8 text-[var(--muted)]">
                In an industry where precision is non-negotiable, our credentials are our foundation. {site.shortName} is a registered HVAC business committed to safety and proper installation.
              </p>
              <p className="text-base leading-8 text-[var(--muted)]">
                Our technicians are trained professionals who focus on clear communication, reliable service, and accountable results for homeowners.
              </p>
            </div>
            <div className="md:col-span-7 md:ml-12 h-[400px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface-alt)]">
              <img src={blueprintImage} alt="Technician reviewing blueprints" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-white py-[80px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <h2 className="mb-12 text-4xl font-bold text-[var(--blue)]">Why Choose ArcticPrecision</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <AboutCard icon={ShieldCheck} title="24/7 Emergency Response" text="When the northern climate strikes, our dispatch teams are ready." />
              <AboutCard icon={CheckCircle2} title="Price Match Guarantee" text="Premium service should not require a premium penalty." />
              <AboutCard icon={ShieldCheck} title="TSSA Registered" text="Fully compliant and strictly regulated for homeowner peace of mind." />
              <AboutCard icon={Wrench} title="Licensed Experts" text="Our team is built around precision, training, and accountability." />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function AboutCard({
  icon: Icon,
  title,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0px_12px_24px_rgba(0,33,71,0.04)] transition hover:border-[var(--orange)] hover:shadow-[0px_12px_24px_rgba(0,33,71,0.08)]">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(0,33,71,0.06)]">
        <Icon className="h-6 w-6 text-[var(--blue)]" />
      </div>
      <h4 className="mb-2 text-xl font-semibold text-[var(--blue)]">{title}</h4>
      <p className="text-sm leading-7 text-[var(--muted)]">{text}</p>
    </div>
  );
}
