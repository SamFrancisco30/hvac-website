import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site, serviceGroups, coverageCities } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[rgba(255,255,255,0.08)] bg-[var(--blue)] text-white">
      <div className="mx-auto max-w-[1280px] px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-3">
            <div className="mb-2 text-xl font-extrabold tracking-tight text-white" aria-label="Air We Go">
              <span>AIR</span> <span className="text-[var(--orange)]">WE GO</span>
            </div>
            <p className="mb-6 text-sm leading-7 text-slate-400">{site.slogan}</p>
            <div className="space-y-2 text-sm text-slate-400">
              <a href={site.phoneHref} className="flex items-center gap-2 transition hover:text-white">
                <Phone className="h-3.5 w-3.5 text-[var(--orange)]" />
                {site.phone}
              </a>
              <a href={site.emailHref} className="flex items-center gap-2 transition hover:text-white">
                <Mail className="h-3.5 w-3.5 text-[var(--orange)]" />
                {site.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[var(--orange)]" />
                {site.address}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Services</div>
            <div className="flex flex-col gap-2.5">
              {serviceGroups.flatMap((group) =>
                group.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Service Areas</div>
            <div className="flex flex-col gap-2.5">
              {coverageCities.map((city) => (
                <Link
                  key={city}
                  href={`/service-areas/${city.toLowerCase()}`}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">Company</div>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Service Areas", href: "/service-areas" },
                { label: "Rebate Check", href: "/rebate-check" },
                { label: "Homeowner Guides", href: "/knowledge-base" },
              ].map(({ label, href }) => (
                <Link key={href} href={href} className="text-sm text-slate-400 transition hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.08)]">
        <div className="mx-auto max-w-[1280px] px-8 py-5 text-sm text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
