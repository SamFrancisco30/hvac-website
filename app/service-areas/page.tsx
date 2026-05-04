/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { ChevronRight, MapPin } from "lucide-react";
import { site } from "@/lib/site";

const mapImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3yZ3Kebuj26N8bPj_eutwawzjOpGOGhE6o8IjYEU79hdroQweH-9eNZbD6yGQn9_7L9qA-a_2DW2GioBiD1QBuL6eoXQXXsvSPU3Xvv8hjL67BXl6PWVMQqzhxZMSg2qcxSJyXfpQUs8QhN44OcLX36Wnx5ymiwuyApdx5khbKUEMAYdZUgc8nLau_bxaja0NESFeICjfyt-m3XGOYu8NNpf7WII38Br2uK0vMZbmegrvB3xYd-Pi5vLPUTYvcACRB7QcXzZPKJC6";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "See the GTA neighborhoods served by ArcticPrecision HVAC.",
};

const areas = ["Mississauga", "Brampton", "Milton", "Georgetown"];

export default function ServiceAreasPage() {
  return (
    <div className="pt-20">
      <main className="flex flex-col items-center">
        <section className="w-full max-w-[1280px] px-6 py-[80px] text-center">
          <h1 className="mb-6 max-w-3xl text-5xl font-bold tracking-tight text-[var(--blue)] mx-auto">
            Serving the Greater Toronto Area with Precision
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[var(--muted)]">
            From routine maintenance to emergency home repairs, {site.shortName} delivers unfailing warmth across major urban centers.
          </p>
        </section>

        <section className="w-full max-w-[1280px] px-6 pb-[80px]">
          <div className="grid grid-cols-1 gap-6 items-start lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="mb-4 text-4xl font-bold text-[var(--blue)]">Core Regions</h2>
              <p className="mb-8 text-base leading-7 text-[var(--muted)]">
                We maintain dedicated coverage in key hubs to keep response times short during severe weather.
              </p>
              <div className="flex flex-col gap-4">
                {areas.map((area) => (
                  <AreaItem key={area} label={area} />
                ))}
                <div className="mt-4 rounded-lg bg-[var(--blue)] p-6 text-white">
                  <div className="flex items-center gap-4">
                    <MapPin className="h-7 w-7 text-[var(--orange)]" />
                    <div>
                      <div className="mb-1 text-2xl font-semibold text-white">Greater Toronto Area</div>
                      <div className="text-sm text-[var(--primary-fixed)]">Comprehensive residential coverage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[500px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] shadow-sm lg:col-span-7">
              <img src={mapImage} alt="Map of Greater Toronto Area showing service zones" className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-multiply" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[rgba(0,33,71,0.8)] to-transparent p-8">
                <div className="max-w-sm rounded-lg border border-[var(--border)] bg-white/90 p-6 backdrop-blur-sm">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--blue)]">Fleet Dispatch Center</div>
                  <p className="text-sm leading-7 text-[var(--muted)]">Technicians are dispatched from the closest available area whenever possible.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full border-y border-[var(--border)] bg-[var(--surface-alt)] py-[80px]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[var(--blue)]">Check Your Coverage</h2>
            <p className="mb-8 text-base leading-7 text-[var(--muted)]">
              Enter your postal code to verify whether your home falls within our active service zones.
            </p>
            <form className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="relative w-full max-w-md">
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted)]" />
                <input
                  className="h-[56px] w-full rounded border border-[var(--border)] bg-white pl-12 pr-4 text-sm uppercase text-[var(--text)] outline-none transition focus:border-[var(--orange)]"
                  placeholder="Enter Postal Code (e.g. L5B 1M5)"
                  type="text"
                />
              </div>
              <button
                className="h-[56px] w-full whitespace-nowrap rounded bg-[var(--orange)] px-8 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[var(--orange-deep)] sm:w-auto"
                type="button"
              >
                Verify Zone
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

function AreaItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] p-6 transition hover:border-[var(--orange)] hover:shadow-[0_12px_24px_rgba(0,33,71,0.08)]">
      <div className="flex items-center gap-4">
        <MapPin className="h-8 w-8 text-[var(--orange)]" />
        <span className="text-2xl font-semibold text-[var(--blue)]">{label}</span>
      </div>
      <ChevronRight className="h-5 w-5 text-[var(--border)]" />
    </div>
  );
}
