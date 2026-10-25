"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { navLinks, serviceMenu, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const mobileMenu = useRef<HTMLDetailsElement | null>(null);

  // <details> stays open across client-side navigation; close it whenever the route changes.
  useEffect(() => {
    mobileMenu.current?.removeAttribute("open");
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        <Link href="/" className="shrink-0 whitespace-nowrap text-xl font-extrabold tracking-tight sm:text-2xl" aria-label="Air We Go home">
          <span className="text-[var(--blue)]">AIR</span> <span className="text-[var(--orange)]">WE GO</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex lg:gap-3 xl:gap-5">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  aria-haspopup="true"
                  className={`inline-flex items-center gap-1 px-2 py-2 text-sm font-semibold uppercase tracking-wider transition-colors group-hover:text-[var(--orange)] ${isActive(link.href) ? "text-[var(--orange)]" : "text-[var(--blue)]"}`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-150 group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-3 opacity-0 transition-[opacity,visibility] duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
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
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`whitespace-nowrap px-2 py-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[var(--orange)] ${isActive(link.href) ? "text-[var(--orange)]" : "text-[var(--blue)]"}`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/contact" className="whitespace-nowrap rounded-lg border-2 border-[var(--blue)] px-5 py-2.5 text-sm font-semibold text-[var(--blue)] transition hover:bg-[var(--blue)] hover:text-white">
            Instant Quote
          </Link>
          <Link href={site.phoneHref} className="whitespace-nowrap rounded-lg border-2 border-[var(--orange)] bg-[var(--orange)] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[var(--orange-deep)] hover:bg-[var(--orange-deep)]">
            Call Now
          </Link>
        </div>

        <details ref={mobileMenu} className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center p-2 text-[var(--blue)] [&::-webkit-details-marker]:hidden" aria-label="Open menu">
            <Menu className="h-8 w-8" />
          </summary>
          <div className="absolute right-0 mt-3 max-h-[calc(100dvh-6rem)] w-[min(20rem,calc(100vw-2rem))] overflow-y-auto rounded-xl border border-[var(--border)] bg-white p-4 shadow-[0_20px_60px_rgba(0,33,71,0.16)]">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.label === "Services" ? (
                    <details className="group/services">
                      <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2 text-sm font-semibold uppercase tracking-wider text-[var(--blue)] hover:text-[var(--orange)] [&::-webkit-details-marker]:hidden">
                        {link.label}
                        <ChevronDown className="h-4 w-4 transition-transform group-open/services:rotate-180" />
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
                    <Link href={link.href} className="block px-3 py-2 text-sm font-semibold uppercase tracking-wider text-[var(--blue)] hover:text-[var(--orange)]">
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Link href="/contact" className="rounded-lg bg-[var(--blue)] px-4 py-3 text-center text-sm font-semibold text-white">
                Instant Quote
              </Link>
              <Link href={site.phoneHref} className="rounded-lg bg-[var(--orange)] px-4 py-3 text-center text-sm font-semibold text-white">
                Call Now
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
