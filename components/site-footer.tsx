import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[var(--blue-2)] bg-[var(--blue)] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-8 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="text-xl font-bold text-white">{site.shortName}</div>
          <p className="mt-4 text-sm opacity-80">{site.slogan}</p>
        </div>

        <div className="md:col-span-1">
          <div className="mb-4 text-lg font-bold text-[var(--orange)]">Quick Links</div>
          <div className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-300 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="mb-4 text-lg font-bold text-[var(--orange)]">Follow Us</div>
          <div className="flex gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">f</div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">x</div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">ig</div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="mb-4 text-lg font-bold text-[var(--orange)]">Contact Us</div>
          <div className="space-y-2 text-sm text-slate-300">
            <div>{site.phone}</div>
            <div>{site.email}</div>
            <div>{site.address}</div>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--blue-2)]">
        <div className="mx-auto max-w-7xl px-8 py-4 text-sm text-slate-300">
          © 2026 {site.name}. Expert Precision. Unfailing Warmth.
        </div>
      </div>
    </footer>
  );
}
