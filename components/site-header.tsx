import Link from "next/link";
import { Menu } from "lucide-react";
import { navLinks, serviceMenu, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-[var(--blue)] sm:text-2xl">
          {site.shortName}
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div key={link.href} className="group relative">
                <span className="cursor-default px-2 text-sm font-semibold uppercase tracking-wider text-[var(--blue)] transition-colors group-hover:text-[var(--orange)]">
                  {link.label}
                </span>
                <div className="invisible absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-3 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[0_20px_60px_rgba(0,33,71,0.16)]">
                    <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange)]">Services</div>
                    <div className="grid grid-cols-2 gap-3">
                      {serviceMenu.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/services/${item.slug}`}
                          className="rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium text-[var(--blue)] transition hover:border-[var(--orange)] hover:bg-[var(--surface-alt)]"
                        >
                          <div className="text-xs uppercase tracking-[0.18em] text-[var(--orange)]">{item.group}</div>
                          <div className="mt-1">{item.title}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-[var(--border)] pt-4">
                      <Link href={link.href} className="text-sm font-semibold text-[var(--blue)] transition hover:text-[var(--orange)]">
                        View all services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 text-sm font-semibold uppercase tracking-wider text-[var(--blue)] transition-colors hover:text-[var(--orange)]"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/contact" className="rounded border-2 border-[var(--blue)] px-6 py-3 text-sm font-semibold text-[var(--blue)] transition hover:bg-slate-100">
            Instant Quote
          </Link>
          <Link href={site.phoneHref} className="rounded bg-[var(--orange)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--orange-deep)]">
            Call Now
          </Link>
        </div>

        <details className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center p-2 text-[var(--blue)]">
            <Menu className="h-8 w-8" />
          </summary>
          <div className="absolute right-0 mt-3 w-80 rounded border border-[var(--border)] bg-white p-4 shadow-lg">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.label === "Services" ? (
                    <details>
                      <summary className="cursor-pointer px-3 py-2 text-sm font-semibold uppercase tracking-wider text-[var(--blue)] hover:text-[var(--orange)]">
                        {link.label}
                      </summary>
                      <div className="mt-2 grid grid-cols-1 gap-2 pl-3">
                        {serviceMenu.map((item) => (
                          <Link key={item.slug} href={`/services/${item.slug}`} className="rounded px-2 py-1 text-xs font-medium text-[var(--muted)] hover:bg-[var(--surface-alt)] hover:text-[var(--blue)]">
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link href={link.href} className="px-3 py-2 text-sm font-semibold uppercase tracking-wider text-[var(--blue)] hover:text-[var(--orange)]">
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Link href="/contact" className="rounded bg-[var(--blue)] px-4 py-2 text-center text-sm font-semibold text-white">
                Instant Quote
              </Link>
              <Link href={site.phoneHref} className="rounded bg-[var(--orange)] px-4 py-2 text-center text-sm font-semibold text-white">
                Call Now
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
