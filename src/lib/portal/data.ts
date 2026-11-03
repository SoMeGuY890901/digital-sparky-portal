export const demoClient = {
  company: "Maple Street Supply",
  note: "Fictional demo client. Not a real customer, and not a real project.",
} as const;

export const demoAccounts = [
  {
    id: "avery",
    name: "Avery Quinn",
    role: "Owner",
    email: "avery.quinn@maple-street-demo.example",
    password: "demo",
  },
  {
    id: "jordan",
    name: "Jordan Hale",
    role: "Shop lead",
    email: "jordan.hale@maple-street-demo.example",
    password: "demo",
  },
] as const;

export type DemoAccount = (typeof demoAccounts)[number];

export const tiers = {
  starter: { name: "Starter", range: "$1,500–$2,500" },
  growth: { name: "Growth", range: "$3,500–$5,000" },
  pro: { name: "Pro + Automation", range: "$7,500–$12,000" },
  care: { name: "Care Plan", range: "$100–$200/mo" },
} as const;

export const projectStatus = {
  name: "Order desk",
  phase: "Design review",
  packageName: tiers.pro.name,
  range: tiers.pro.range,
  updated: "28 Oct 2026",
} as const;

export const milestones = [
  {
    name: "Discovery",
    state: "Complete",
    date: "2 Sep 2026",
    dateTime: "2026-09-02",
    detail: "Sample kickoff. The demo brief lists a shop page, hours, and a custom-order path.",
  },
  {
    name: "Outline",
    state: "Complete",
    date: "18 Sep 2026",
    dateTime: "2026-09-18",
    detail: "Sample sitemap agreed in the demo thread. No client approval is on file because this shop is fictional.",
  },
  {
    name: "Design",
    state: "In review",
    date: "28 Oct 2026",
    dateTime: "2026-10-28",
    detail: "Sample homepage direction is waiting on a look from Avery in this demo.",
  },
  {
    name: "Build",
    state: "Not started",
    date: "Queued",
    dateTime: undefined,
    detail: "Starts in the sample plan after the design direction is marked reviewed.",
  },
  {
    name: "Launch",
    state: "Not started",
    date: "Queued",
    dateTime: undefined,
    detail: "No launch date is set. This milestone is a placeholder.",
  },
] as const;

export const nextSteps = [
  "Review the sample homepage direction in Files.",
  "Send the fictional product list (a demo CSV is already in Files).",
  "Confirm whether the sample Care Plan should start the month after launch.",
] as const;

export type LineItem = {
  tier: string;
  range: string;
  sampleAmount: string;
  detail: string;
};

export type Paperwork = {
  id: string;
  kind: "Quote" | "Invoice";
  number: string;
  status: string;
  issued: string;
  summary: string;
  items: LineItem[];
};

export const paperwork: Paperwork[] = [
  {
    id: "q-240",
    kind: "Quote",
    number: "DEMO-Q-240",
    status: "In review",
    issued: "28 Oct 2026",
    summary: "Sample quote for the order desk. The figure sits inside the Pro + Automation range and is not a bill.",
    items: [
      {
        tier: tiers.pro.name,
        range: tiers.pro.range,
        sampleAmount: "$9,600",
        detail: "Booking and order intake tied to the sample shop site.",
      },
    ],
  },
  {
    id: "q-221",
    kind: "Quote",
    number: "DEMO-Q-221",
    status: "Open",
    issued: "4 Sep 2026",
    summary: "Sample quote for a larger site plus a monthly care plan. Both figures are inside the published ranges.",
    items: [
      {
        tier: tiers.growth.name,
        range: tiers.growth.range,
        sampleAmount: "$4,400",
        detail: "Sample shop site with a clearer catalog structure.",
      },
      {
        tier: tiers.care.name,
        range: tiers.care.range,
        sampleAmount: "$150/mo",
        detail: "Sample monthly care, noted separately from the build.",
      },
    ],
  },
  {
    id: "inv-077",
    kind: "Invoice",
    number: "DEMO-INV-077",
    status: "Sample paid",
    issued: "12 Jun 2026",
    summary: "Sample invoice for an earlier brochure site. Marked paid only inside this demo.",
    items: [
      {
        tier: tiers.starter.name,
        range: tiers.starter.range,
        sampleAmount: "$2,200",
        detail: "Short sample brochure site: a few pages and a contact path.",
      },
    ],
  },
  {
    id: "inv-118",
    kind: "Invoice",
    number: "DEMO-INV-118",
    status: "Sample open",
    issued: "1 Nov 2026",
    summary: "Sample care invoice for November. It is not payable and was not sent.",
    items: [
      {
        tier: tiers.care.name,
        range: tiers.care.range,
        sampleAmount: "$150",
        detail: "November sample month of the Care Plan.",
      },
    ],
  },
];

export const pastWork = [
  {
    slug: "shop",
    title: "Shop page",
    when: "June 2026",
    status: "Sample, marked launched",
    summary:
      "A sample shop page for this fictional client: hours, a short catalog, and a contact path. No traffic or sales figures are attached.",
    image: "shop" as const,
    alt: "Placeholder cover for the sample shop page. A coral spark on a near-black field, labeled as a demo cover, not a screenshot of a live site.",
  },
  {
    slug: "seasonal",
    title: "Seasonal sheet",
    when: "August 2026",
    status: "Sample, filed",
    summary:
      "A sample one-page sheet for a fictional seasonal list. The cover is a generated pattern, not a photo of the work.",
    image: "seasonal" as const,
    alt: "Placeholder cover for the sample seasonal sheet. Gold and coral bands on a near-black field, labeled as a demo cover.",
  },
  {
    slug: "intake",
    title: "Custom-order intake",
    when: "October 2026",
    status: "Sample, folded into the current quote",
    summary:
      "A sample intake form that the Pro + Automation quote would build. It is not a finished tool and has no submission counts.",
    image: "intake" as const,
    alt: "Placeholder cover for the sample intake form. A drawn form layout in coral and gold, labeled as a demo cover.",
  },
] as const;

export const careIncluded = [
  "Small text and image edits on pages in this demo",
  "Fixes for something the sample build already shipped",
  "A short monthly note of what changed",
] as const;

export const careExcluded = [
  "A new feature outside the care range",
  "A redesign or a new site",
  "Anything for a real client — this log is fictional",
] as const;

export const careUpdates = [
  {
    date: "12 Oct 2026",
    dateTime: "2026-10-12",
    title: "Sample hero crop",
    detail: "Swapped the placeholder crop on the sample shop page. No public site was changed.",
  },
  {
    date: "28 Sep 2026",
    dateTime: "2026-09-28",
    title: "Sample form label",
    detail: "Corrected the label on the demo contact form in the sample file.",
  },
  {
    date: "4 Sep 2026",
    dateTime: "2026-09-04",
    title: "Seasonal sheet filed",
    detail: "Filed the sample seasonal sheet in this workspace.",
  },
] as const;

export const messages = [
  {
    id: "m1",
    from: "Digital Sparky Studios",
    role: "Studio",
    date: "3 Oct 2026",
    dateTime: "2026-10-03",
    body: "Demo message: the sample homepage outline is in Files and ready for a look.",
  },
  {
    id: "m2",
    from: "Avery Quinn",
    role: "Demo client",
    date: "4 Oct 2026",
    dateTime: "2026-10-04",
    body: "Demo reply: the outline looks right for this sample. Please keep the hours near the top.",
  },
  {
    id: "m3",
    from: "Digital Sparky Studios",
    role: "Studio",
    date: "6 Oct 2026",
    dateTime: "2026-10-06",
    body: "Demo message: noted in the sample. Next is the fictional product list.",
  },
] as const;

export const libraryFiles = [
  {
    name: "DEMO-homepage-outline.txt",
    href: "/portal/files/DEMO-homepage-outline.txt",
    detail: "Sample outline. Plain text, safe to open.",
    added: "3 Oct 2026",
  },
  {
    name: "DEMO-product-list.csv",
    href: "/portal/files/DEMO-product-list.csv",
    detail: "Three fictional catalog rows.",
    added: "6 Oct 2026",
  },
] as const;
