import { coverageCities } from "@/lib/site";

export type CityData = {
  name: (typeof coverageCities)[number];
  slug: string;
  region: string;
  postalCodes: string;
  neighborhoods: string[];
  description: string;
  housingNote: string;
  commonIssues: string[];
  responseTime: string;
};

export const cityData: CityData[] = [
  {
    name: "Toronto",
    slug: "toronto",
    region: "City of Toronto",
    postalCodes: "M1 – M9",
    neighborhoods: ["North York", "Scarborough", "East York", "Leslieville", "The Beaches", "York", "Rexdale"],
    description:
      "Toronto's housing stock spans every era — pre-war detached homes in the east end, 1960s–80s bungalows across North York and Scarborough, and infill townhouses throughout the inner city. HVAC needs vary significantly by neighbourhood and building age. We dispatch from nearby service nodes to keep response times short across the city.",
    housingNote:
      "A large share of Toronto's residential properties were built before current efficiency standards. Furnace replacements and central AC upgrades are among the most common requests, particularly in properties built before 1990.",
    commonIssues: [
      "Aging gas furnaces in pre-1980s detached homes",
      "Undersized or missing central AC in older stock",
      "Boiler-to-forced-air conversion projects",
      "Heat pump retrofits in semi-detached and row homes",
    ],
    responseTime: "Under 45 minutes",
  },
  {
    name: "Mississauga",
    slug: "mississauga",
    region: "Peel Region",
    postalCodes: "L4T – L5V",
    neighborhoods: ["Port Credit", "Streetsville", "Meadowvale", "Erin Mills", "Clarkson", "Cooksville", "Malton"],
    description:
      "Mississauga covers a wide range of residential builds — from the older homes near Port Credit and Clarkson to the large newer detached properties in Meadowvale and Erin Mills. The city's scale means response time can vary; we maintain coverage across all major corridors from Dixie to the western boundary.",
    housingNote:
      "Mississauga's mid-to-late 1990s suburban builds are now entering the age range where original HVAC equipment requires replacement. Tankless water heater and heat pump inquiries are growing in newer western subdivisions.",
    commonIssues: [
      "Original HVAC equipment reaching end of life in 1990s builds",
      "Oversized furnaces causing comfort issues in newer homes",
      "AC failures during peak summer demand",
      "Water heater replacement in high-volume households",
    ],
    responseTime: "Under 50 minutes",
  },
  {
    name: "Brampton",
    slug: "brampton",
    region: "Peel Region",
    postalCodes: "L6P – L7A",
    neighborhoods: ["Bramalea", "Heart Lake", "Mount Pleasant", "Springdale", "Sandringham", "Fletcher's Creek"],
    description:
      "Brampton has seen substantial residential growth over the past two decades, with large detached and semi-detached homes now dominating newer neighbourhoods. Larger homes carry higher heating and cooling loads, and HVAC sizing errors are common from the original build. We cover the full city including newer developments along the northern and eastern edges.",
    housingNote:
      "Many Brampton homes from the 2000s–2010s were originally equipped with equipment sized for builder cost rather than actual load. Replacements frequently involve correct-sizing work alongside the install.",
    commonIssues: [
      "Oversized furnaces creating humidity and comfort problems",
      "High cooling demand in larger two-storey homes",
      "Multi-zone HVAC balancing in large detached properties",
      "Heat pump adoption in newer builds with good electrical capacity",
    ],
    responseTime: "Under 55 minutes",
  },
  {
    name: "Milton",
    slug: "milton",
    region: "Halton Region",
    postalCodes: "L9T – L9E",
    neighborhoods: ["Old Milton", "Beaty", "Dempsey", "Harrison", "Clarke", "Willmott", "Scott"],
    description:
      "Milton is one of the fastest-growing communities in Canada, with the majority of its housing stock built within the last 20 years. Newer construction typically features high-efficiency HVAC from the original build, but aging of first-generation equipment is beginning. We cover all Milton neighbourhoods with dispatch routed from our Halton-area node.",
    housingNote:
      "Milton's predominantly new-build housing stock is well-suited to heat pump installation and tankless water heater upgrades. A growing portion of inquiries involve efficiency upgrades rather than emergency replacement.",
    commonIssues: [
      "First-generation equipment replacement in early 2000s builds",
      "Heat pump installation interest in newer properties",
      "Tankless water heater upgrades from original tank systems",
      "HVAC commissioning issues in newly completed homes",
    ],
    responseTime: "Under 60 minutes",
  },
  {
    name: "Georgetown",
    slug: "georgetown",
    region: "Halton Hills, Halton Region",
    postalCodes: "L7G",
    neighborhoods: ["Georgetown", "Stewarttown", "Glen Williams", "Acton", "Limehouse"],
    description:
      "Georgetown and the surrounding Halton Hills communities blend older village-era homes with newer residential subdivisions. The area's semi-rural character means some properties have different infrastructure considerations — older gas line runs, propane-to-natural-gas conversion history, or well water systems that affect water heater and treatment equipment selection.",
    housingNote:
      "Older Georgetown properties frequently have aging infrastructure alongside the HVAC system itself — gas lines, ductwork, and electrical panels that may need attention as part of a broader upgrade.",
    commonIssues: [
      "Aging furnaces in pre-1980s village-area homes",
      "Propane system servicing and conversion work",
      "Well water affecting water heater and treatment systems",
      "Ductwork upgrades required alongside furnace replacements",
    ],
    responseTime: "Under 65 minutes",
  },
  {
    name: "Oakville",
    slug: "oakville",
    region: "Halton Region",
    postalCodes: "L6H – L6M",
    neighborhoods: ["Old Oakville", "Glen Abbey", "Bronte", "Joshua Creek", "River Oaks", "Uptown Core", "Palermo"],
    description:
      "Oakville's residential market includes some of the largest homes in the GTA, concentrated in Glen Abbey, Joshua Creek, and River Oaks. High-end properties often have complex multi-zone HVAC systems, higher-capacity equipment, and greater expectations for installation quality. We handle both routine replacement and more complex system work throughout Oakville.",
    housingNote:
      "Older Oakville estates near the lake and in Old Oakville often have aging heating systems in large footprint homes, where proper sizing and zoning are critical. Newer north Oakville builds are increasingly heat-pump ready.",
    commonIssues: [
      "Complex multi-zone system replacement in large detached homes",
      "High-capacity furnace and AC sizing for 3,000+ sq ft properties",
      "Aging systems in older Oakville estate properties",
      "Heat pump feasibility in high-demand large-format homes",
    ],
    responseTime: "Under 55 minutes",
  },
  {
    name: "Burlington",
    slug: "burlington",
    region: "Halton Region",
    postalCodes: "L7L – L7T",
    neighborhoods: ["Alton Village", "Millcroft", "Tyandaga", "Brant Hills", "Aldershot", "LaSalle", "Shoreacres"],
    description:
      "Burlington spans a wide age range of housing — from post-war bungalows near the lakefront in Aldershot and LaSalle to newer subdivisions in Alton Village and Millcroft. Lake Ontario proximity adds a humidity factor to indoor comfort considerations. We cover Burlington with dispatch from our Hamilton/Halton service corridor.",
    housingNote:
      "Burlington's lakefront and older neighbourhoods have a high concentration of homes requiring full HVAC system upgrades, while newer inland developments often seek efficiency improvements and heat pump conversions.",
    commonIssues: [
      "Full system replacement in older lakefront-area homes",
      "Humidity management in Lake Ontario-adjacent properties",
      "Heat pump adoption in newer Alton Village builds",
      "AC upgrades in post-war bungalow stock near the lake",
    ],
    responseTime: "Under 60 minutes",
  },
  {
    name: "Etobicoke",
    slug: "etobicoke",
    region: "City of Toronto (West)",
    postalCodes: "M8 – M9",
    neighborhoods: ["Islington", "Humber Valley", "Long Branch", "New Toronto", "Mimico", "Rexdale", "Thistletown"],
    description:
      "Etobicoke's residential areas include some of the older housing stock in the Toronto area, with significant 1950s–1970s construction in neighbourhoods like Islington, Humber Valley, and the lakefront communities. This era of construction frequently presents aging furnaces, older ductwork, and equipment that is long past its service life. We dispatch into Etobicoke directly from our west Toronto node.",
    housingNote:
      "A large proportion of Etobicoke homes are in the 40–70 year old range, making furnace replacement, AC installation, and water heater service among the most common calls. Heat exchanger failures and CO safety checks are particularly relevant in this housing era.",
    commonIssues: [
      "End-of-life furnaces in 1950s–1970s construction",
      "Heat exchanger cracks requiring urgent replacement",
      "Absent or undersized central AC in older stock",
      "Water heater replacement in older bungalows and semis",
    ],
    responseTime: "Under 40 minutes",
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cityData.find((c) => c.slug === slug);
}
