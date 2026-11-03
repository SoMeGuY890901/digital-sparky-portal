export const pricingTiers = [
  {
    id: "basic",
    name: "Basic",
    price: "$1,500–$2,500",
    priceLabel: "1,500 to 2,500 US dollars",
    summary:
      "A short marketing site: a few pages, a mobile layout, metadata, and a contact path.",
    includes: [
      "A small brochure site",
      "Mobile layout and page titles",
      "A contact path back to the studio",
    ],
  },
  {
    id: "mid-range",
    name: "Mid-range",
    price: "$3,500–$5,000",
    priceLabel: "3,500 to 5,000 US dollars",
    summary:
      "A larger custom site with more room for services, pages, and light integrations.",
    includes: [
      "A custom site beyond a simple brochure",
      "A clearer structure for services and pages",
      "Light integrations scoped in the quote",
    ],
  },
  {
    id: "higher-end",
    name: "Higher-end",
    price: "$7,500–$12,000",
    priceLabel: "7,500 to 12,000 US dollars",
    summary:
      "Booking and automation: scheduling, intake, or another workflow tied to the site.",
    includes: [
      "Booking, intake, or other automation",
      "The public site connected to that workflow",
      "A scoped build inside this range",
    ],
  },
  {
    id: "care",
    name: "Care plan",
    price: "$100–$200/mo",
    priceLabel: "100 to 200 US dollars per month",
    summary:
      "Monthly care after launch: fixes, small edits, and someone who already knows the project.",
    includes: [
      "Fixes and small edits after launch",
      "A monthly rhythm, not a redesign",
      "Stop the plan when you no longer need it",
    ],
  },
] as const;

export type PricingTierId = (typeof pricingTiers)[number]["id"];

export function isPricingTierId(value: string | undefined): value is PricingTierId {
  return pricingTiers.some((tier) => tier.id === value);
}
