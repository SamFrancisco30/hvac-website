export const site = {
  name: "ArcticPrecision HVAC",
  shortName: "ArcticPrecision",
  slogan: "Expert precision. Unfailing warmth.",
  phone: "+1 (647) 960-4029",
  phoneHref: "tel:+16479604029",
  email: "service@arcticprecision.ca",
  emailHref: "mailto:service@arcticprecision.ca",
  serviceArea: "Greater Toronto Area, including Toronto, Mississauga, Brampton, Milton, and nearby communities.",
  address: "Toronto, Ontario",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export type ServiceItem = {
  title: string;
  slug: string;
  summary: string;
};

export type ServiceGroup = {
  title: string;
  items: ServiceItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Heating",
    items: [
      { title: "Furnace Installation", slug: "furnace-installation", summary: "Efficient replacements and new installs sized for your home." },
      { title: "Water Heater", slug: "water-heater", summary: "Repair and replacement for standard tank systems." },
      { title: "Tankless Water Heater", slug: "tankless-water-heater", summary: "Space-saving hot water systems with strong efficiency." },
      { title: "Heat Pumps", slug: "heat-pumps", summary: "All-in-one comfort for heating and cooling efficiency." },
    ],
  },
  {
    title: "Cooling",
    items: [{ title: "Air Conditioner", slug: "air-conditioner", summary: "Fast AC installs, service, and replacements for summer comfort." }],
  },
  {
    title: "Home Comfort",
    items: [{ title: "Water Purification and Treatment", slug: "water-purification", summary: "Cleaner water for drinking, cooking, and everyday use." }],
  },
];

export const serviceMenu = serviceGroups.flatMap((group) =>
  group.items.map((item) => ({
    group: group.title,
    ...item,
  })),
);

export const coverageCities = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Milton",
  "Georgetown",
  "Oakville",
  "Burlington",
  "Etobicoke",
] as const;

export const trustPoints = [
  "Residential-first service",
  "Licensed and insured",
  "Fast response for urgent calls",
  "Straightforward quotes",
] as const;

export const faqs = [
  {
    question: "Do you focus on residential work?",
    answer: "Yes. Residential customers are our main priority, while we still support selected commercial projects.",
  },
  {
    question: "Can I call before filling out the form?",
    answer: "Absolutely. We keep the phone number visible on every page so people can reach us quickly.",
  },
  {
    question: "Do you handle emergency service?",
    answer: "Yes. Emergency requests should be routed through the call-to-action in the hero and contact sections.",
  },
] as const;

export const knowledgeBaseTopics = [
  "How often should I service my furnace?",
  "Signs your AC needs replacement",
  "Tankless water heater vs. tank system",
  "What affects HVAC repair costs?",
] as const;
