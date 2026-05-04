import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/contact",
  "/services",
  "/services/furnace-installation",
  "/services/air-conditioner",
  "/services/water-heater",
  "/services/tankless-water-heater",
  "/services/heat-pumps",
  "/services/water-purification",
  "/services/maintenance",
  "/service-areas",
  "/knowledge-base",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://arcticprecision.ca${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
