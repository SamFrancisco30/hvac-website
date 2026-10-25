"use client";

import { useEffect, useRef } from "react";
import { coverageCities } from "@/lib/site";

type ServiceAreaMapProps = {
  className?: string;
};

const cityPoints: Array<{ name: (typeof coverageCities)[number]; coordinates: [number, number] }> = [
  { name: "Toronto", coordinates: [-79.3832, 43.6532] },
  { name: "Etobicoke", coordinates: [-79.5656, 43.6436] },
  { name: "Mississauga", coordinates: [-79.6496, 43.589] },
  { name: "Brampton", coordinates: [-79.7599, 43.6858] },
  { name: "Oakville", coordinates: [-79.6667, 43.4474] },
  { name: "Burlington", coordinates: [-79.799, 43.3255] },
  { name: "Milton", coordinates: [-79.8829, 43.5183] },
  { name: "Georgetown", coordinates: [-79.918, 43.6501] },
];

// OpenFreeMap: free vector tiles, no API key. Carto's keyless basemaps now return "API KEY REQUIRED" tiles.
const styleUrl = "https://tiles.openfreemap.org/styles/positron";

// Keep the basemap quiet: our own markers carry the city names, so only water labels stay.
const keptLabelLayers = new Set(["water_name_point_label", "water_name_line_label"]);

// Repaint Positron's grays in the site palette: warm land, soft blue lake, peach-tinted highways.
const paletteOverrides: Record<string, Record<string, string | number>> = {
  background: { "background-color": "#f8f4ef" },
  landuse_residential: { "fill-color": "#f2ece5" },
  park: { "fill-color": "#e2ecd9" },
  landcover_wood: { "fill-color": "#dbe7d2" },
  water: { "fill-color": "#cfe3f1" },
  waterway: { "line-color": "#bcd8ec" },
  building: { "fill-color": "#ece4db" },
  road_area_pier: { "fill-color": "#f8f4ef" },
  road_pier: { "line-color": "#f8f4ef" },
  highway_path: { "line-color": "#efe8e0" },
  highway_minor: { "line-color": "#ffffff", "line-opacity": 0.7 },
  highway_major_casing: { "line-color": "#e6ddd3" },
  highway_major_inner: { "line-color": "#ffffff" },
  highway_major_subtle: { "line-color": "#ebe3da" },
  highway_motorway_casing: { "line-color": "#f1c9b4" },
  highway_motorway_inner: { "line-color": "#fde6d9" },
  highway_motorway_subtle: { "line-color": "#f6d6c4" },
  highway_motorway_bridge_casing: { "line-color": "#f1c9b4" },
  highway_motorway_bridge_inner: { "line-color": "#fde6d9" },
  tunnel_motorway_casing: { "line-color": "#f1d8ca" },
  tunnel_motorway_inner: { "line-color": "#fbeee6" },
  railway: { "line-color": "#e4dcd3" },
  railway_transit: { "line-color": "#e4dcd3" },
  railway_service: { "line-color": "#e4dcd3" },
  boundary_2: { "line-color": "#cfc4b8" },
  boundary_3: { "line-color": "#cfc4b8" },
  water_name_point_label: { "text-color": "#5b84ab", "text-halo-color": "rgba(255,255,255,0.6)" },
  water_name_line_label: { "text-color": "#5b84ab", "text-halo-color": "rgba(255,255,255,0.6)" },
};

export function ServiceAreaMap({ className = "" }: ServiceAreaMapProps) {
  const mapNode = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapNode.current) return;

    let map: import("maplibre-gl").Map | null = null;
    let cancelled = false;

    void import("maplibre-gl").then(({ default: maplibregl }) => {
      if (cancelled || !mapNode.current) return;

      const bounds = new maplibregl.LngLatBounds();
      cityPoints.forEach((city) => bounds.extend(city.coordinates));

      // Room for the overlay badge on top and the marker labels on the sides; narrow (mobile) maps get less side padding.
      const fitPadding = (width: number) =>
        width < 520 ? { top: 96, bottom: 32, left: 40, right: 40 } : { top: 120, bottom: 48, left: 96, right: 96 };

      map = new maplibregl.Map({
        container: mapNode.current,
        style: styleUrl,
        bounds,
        fitBoundsOptions: { padding: fitPadding(mapNode.current.clientWidth) },
        interactive: false,
        attributionControl: { compact: true },
      });

      const loadedMap = map;

      // MapLibre keeps the old zoom on resize (window resize, phone rotation); re-fit so every city stays framed.
      loadedMap.on("resize", () => {
        loadedMap.fitBounds(bounds, { padding: fitPadding(loadedMap.getContainer().clientWidth), animate: false });
      });

      // The map isn't interactive, so the compact attribution would otherwise stay expanded; start collapsed behind its (i) button.
      loadedMap.once("load", () => {
        mapNode.current?.querySelector(".maplibregl-ctrl-attrib")?.classList.remove("maplibregl-compact-show");
      });

      loadedMap.once("style.load", () => {
        loadedMap.getStyle().layers.forEach((layer) => {
          if (layer.type === "symbol" && !keptLabelLayers.has(layer.id)) {
            loadedMap.setLayoutProperty(layer.id, "visibility", "none");
          }
          Object.entries(paletteOverrides[layer.id] ?? {}).forEach(([property, value]) => {
            loadedMap.setPaintProperty(layer.id, property, value);
          });
        });
      });

      cityPoints.forEach((city) => {
        const labelSide = city.coordinates[0] < -79.68 ? "right" : "left";
        const element = document.createElement("span");
        element.className = `service-area-marker service-area-marker--${labelSide}`;
        element.innerHTML = `
          <span class="service-area-marker__dot"></span>
          <span class="service-area-marker__label">${city.name}</span>
        `;

        new maplibregl.Marker({ element, anchor: "center" }).setLngLat(city.coordinates).addTo(loadedMap);
      });
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return <div ref={mapNode} className={className} aria-label="Map of Air We Go service areas across the Greater Toronto Area" role="img" />;
}
