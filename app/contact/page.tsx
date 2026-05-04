/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Mail, MapPin, PhoneCall, TriangleAlert } from "lucide-react";
import type { ComponentType } from "react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

const contactHeroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAhsV5_-5fNpJiBj0hbjQRbG5DDDw6Y45_5b3o6AoUbkwTFx9pzAWx0C8m0LeL7wMRBmUgKboEbg8Xvn7zTzThWaYalF1EXjRyhRsWBQXKGkWay4mbNr_7BT_4SiJkbgMa2SW38rqtuQSab70nt2HBlZwoG3_JSDenN73YAJKAkRPrt3_AXJILaPbLamcwK9fgNWNvoGwd3aWc-ep2abVUUItCAsh9-g4fPU_4gGOh0c8lgrBvVYC0zylhy8ugQ-z-GHUurfDBJiIoS";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call or submit a form to contact ArcticPrecision HVAC for residential service in the GTA.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <header className="relative flex h-[409px] min-h-[300px] items-center overflow-hidden bg-[var(--blue)]">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img src={contactHeroImage} alt="Contact hero background" className="h-full w-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white">Contact Precision Support</h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--primary-fixed)]">
            Expert deployment for residential HVAC systems. Connect with our dispatch center for immediate assistance or planned service.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-6 py-[120px]">
        <div className="grid grid-cols-1 gap-[80px] lg:grid-cols-12">
          <div className="lg:col-span-5 flex flex-col gap-[40px]">
            <div className="rounded-lg border border-[rgba(255,255,255,0.2)] bg-[var(--blue)] p-[32px] shadow-[var(--shadow)]">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <TriangleAlert className="h-8 w-8 text-[var(--orange)]" />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-semibold text-white">24/7 Emergency Service</h3>
                  <p className="text-base leading-7 text-[var(--primary-fixed)]">
                    Immediate critical response for system failures. Priority dispatch for urgent home service.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <PhoneCall className="text-[var(--orange)]" />
                    <span className="text-3xl font-bold tracking-tight text-white">{site.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h2 className="mb-6 text-2xl font-semibold text-[var(--text)]">Corporate Headquarters</h2>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-[var(--muted)]" />
                <div>
                  <p className="font-semibold text-[var(--text)]">ArcticPrecision Engineering Building</p>
                  <p className="leading-7 text-[var(--muted)]">
                    100 Industrial Parkway, Suite 400
                    <br />
                    Toronto, ON M4B 1B3
                    <br />
                    Canada
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-[var(--border)]" />

            <div>
              <h2 className="mb-6 text-2xl font-semibold text-[var(--text)]">Direct Channels</h2>
              <div className="flex flex-col gap-6">
                <ContactLine icon={Mail} label="General Inquiries" value={site.email} />
                <ContactLine icon={PhoneCall} label="Direct Phone" value={site.phone} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-lg border border-[var(--border)] bg-white p-12 shadow-[var(--shadow)]">
              <div className="mb-8">
                <h2 className="mb-2 text-4xl font-bold tracking-tight text-[var(--text)]">Request Service</h2>
                <p className="text-base leading-7 text-[var(--muted)]">
                  Fill out the details below. Our team will respond as soon as possible during business hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <Icon className="text-[var(--muted)]" />
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">{label}</p>
        <p className="font-semibold text-[var(--text)]">{value}</p>
      </div>
    </div>
  );
}
