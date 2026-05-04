import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arcticprecision.ca"),
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },
  description: "Residential HVAC services for GTA homes, with fast phone contact, clear quotes, and easy online form requests.",
  openGraph: {
    title: site.name,
    description: "Residential HVAC services for GTA homes, with fast phone contact, clear quotes, and easy online form requests.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "Residential HVAC services for GTA homes, with fast phone contact, clear quotes, and easy online form requests.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
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
              url: "https://arcticprecision.ca",
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
