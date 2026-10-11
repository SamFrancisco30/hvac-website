import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://airwego.ca"),
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },
  description: "Air We Go is a GTA HVAC contractor. Cold-climate heat pumps, furnaces and AC — we check every rebate you qualify for, including Ontario's Home Renovation Savings up to $7,500.",
  openGraph: {
    title: site.name,
    description: "Air We Go is a GTA HVAC contractor. Cold-climate heat pumps, furnaces and AC — we check every rebate you qualify for, including Ontario's Home Renovation Savings up to $7,500.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "Air We Go is a GTA HVAC contractor. Cold-climate heat pumps, furnaces and AC — we check every rebate you qualify for, including Ontario's Home Renovation Savings up to $7,500.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              name: site.name,
              url: "https://airwego.ca",
              telephone: site.phone,
              email: site.email,
              areaServed: site.serviceArea,
            }),
          }}
        />
      </body>
    </html>
  );
}
