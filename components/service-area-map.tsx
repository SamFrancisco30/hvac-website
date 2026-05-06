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

const tiles = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png";

export function ServiceAreaMap({ className = "" }: ServiceAreaMapProps) {
  const mapNode = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!mapNode.current || mapRef.current) return;

    let map: import("leaflet").Map | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let cancelled = false;

    void import("leaflet").then((leaflet) => {
      if (cancelled || !mapNode.current || mapRef.current) return;

      map = leaflet.map(mapNode.current, {
        center: [43.52, -79.68],
        zoom: 9.8,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        dragging: true,
        boxZoom: false,
        keyboard: false,
        touchZoom: false,
      });

      mapRef.current = map;

      leaflet.tileLayer(tiles, {
        maxZoom: 18,
        subdomains: "abcd",
      }).addTo(map);

      const leafletMap = map;

      cityPoints.forEach((city) => {
        const labelSide = city.coordinates[0] < -79.68 ? "right" : "left";
        const marker = leaflet.marker([city.coordinates[1], city.coordinates[0]], {
          icon: leaflet.divIcon({
            className: "",
            html: `
              <span class="service-area-marker service-area-marker--${labelSide}">
                <span class="service-area-marker__dot"></span>
                <span class="service-area-marker__label">${city.name}</span>
              </span>
            `,
            iconSize: [0, 0],
            iconAnchor: [0, 0],
          }),
        });

        marker.addTo(leafletMap);
      });

      resizeObserver = new ResizeObserver(() => {
        map?.invalidateSize();
      });

      resizeObserver.observe(mapNode.current);
    });

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      map?.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={mapNode} className={className} aria-label="Interactive service area map of the Greater Toronto Area" role="img" />;
}
