"use client";

import { useEffect, useRef } from "react";
import { coverageCities } from "@/lib/site";

type ServiceAreaMapProps = {
  className?: string;
};

const cityPoints: Array<{ name: (typeof coverageCities)[number]; coordinates: [number, number] }> = [
  { name: "Toronto", coordinates: [-79.3832, 43.6532] },
  { name: "Etobicoke", coordinates: [-79.5761, 43.6205] },
  { name: "Mississauga", coordinates: [-79.6496, 43.589] },
  { name: "Brampton", coordinates: [-79.7605, 43.7315] },
  { name: "Oakville", coordinates: [-79.6877, 43.4675] },
  { name: "Burlington", coordinates: [-79.799, 43.3255] },
  { name: "Milton", coordinates: [-79.8829, 43.5183] },
  { name: "Georgetown", coordinates: [-79.918, 43.6501] },
];

// OpenFreeMap: free vector tiles, no API key. Carto's keyless basemaps now return "API KEY REQUIRED" tiles.
const styleUrl = "https://tiles.openfreemap.org/styles/positron";

// Keep the basemap quiet: our own markers carry the city names, so only water labels stay.
const keptLabelLayers = new Set(["water_name_point_label", "water_name_line_label"]);

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
      const narrow = mapNode.current.clientWidth < 520;

      map = new maplibregl.Map({
        container: mapNode.current,
        style: styleUrl,
        bounds,
        fitBoundsOptions: { padding: narrow ? { top: 96, bottom: 32, left: 40, right: 40 } : { top: 120, bottom: 48, left: 96, right: 96 } },
        interactive: false,
        attributionControl: { compact: true },
      });

      const loadedMap = map;

      // The map isn't interactive, so the compact attribution would otherwise stay expanded; start collapsed behind its (i) button.
      loadedMap.once("load", () => {
        mapNode.current?.querySelector(".maplibregl-ctrl-attrib")?.classList.remove("maplibregl-compact-show");
      });

      loadedMap.once("style.load", () => {
        loadedMap.getStyle().layers.forEach((layer) => {
          if (layer.type === "symbol" && !keptLabelLayers.has(layer.id)) {
            loadedMap.setLayoutProperty(layer.id, "visibility", "none");
          }
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
