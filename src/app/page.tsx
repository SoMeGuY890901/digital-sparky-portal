import type { Metadata } from "next";
import Link from "next/link";
import { SparkLogo } from "@/components/spark-logo";
import { pricingTiers } from "@/lib/pricing";
import { projectPlaceholders, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const services = [
  {
    title: "Websites",
    copy: "Marketing and brochure sites with a clear structure, a mobile layout, and a way for someone to get in touch.",
  },
  {
    title: "Software",
    copy: "Small operational tools for a business that has outgrown a stack of inboxes and spreadsheets.",
  },
  {
    title: "Booking and automation",
    copy: "Scheduling, intake, and the handoff between the public site and the work behind it. This is the higher-end band.",
  },
  {
    title: "Care",
    copy: "Monthly upkeep after launch: fixes, small edits, and a person who already knows the project.",
  },
];

export default function Home() {
  const projectTiers = pricingTiers.filter((tier) => tier.id !== "care");
  const care = pricingTiers.find((tier) => tier.id === "care");

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <section className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
            Indianapolis web and software studio
          </p>
          <h1 className="mt-5 font-display text-[2.75rem] leading-[0.98] font-medium tracking-tight text-paper sm:text-6xl lg:text-7xl">
            Websites, and the software behind them.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.name} is {site.founder}&apos;s practice in {site.locality}. We
            design and build the public site, then the booking tools and small
            operational software a business actually runs on.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/contact">
              Start a project
            </Link>
            <Link className="btn btn-secondary" href="/#pricing">
              See pricing
            </Link>
          </div>
        </div>
        <aside className="border border-line bg-raised p-6 sm:p-8">
          <div className="flex size-28 items-center justify-center">
            <SparkLogo size={112} />
          </div>
          <p className="mt-6 font-display text-2xl text-paper">What the practice builds</p>
          <ul className="mt-4 space-y-3 text-base text-muted">
            <li>Websites with a real structure</li>
            <li>Small operational software</li>
            <li>Booking and automation</li>
            <li>Care after launch</li>
          </ul>
        </aside>
      </section>

      <section id="services" className="border-t border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">Services</h2>
          <ol className="mt-10 grid gap-px bg-line sm:grid-cols-2">
            {services.map((service, index) => (
              <li key={service.title} className="bg-ink p-6 sm:p-8">
                <p className="text-sm font-semibold text-gold">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl text-paper">{service.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted">{service.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pricing" className="border-t border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">Pricing</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Ranges, not a cart. A quote confirms the scope. Each package starts a conversation on the contact page.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {projectTiers.map((tier) => (
              <article key={tier.id} className="flex flex-col border border-line bg-raised p-6">
                <h3 className="font-display text-2xl text-paper">{tier.name}</h3>
                <p className="mt-4 font-display text-3xl text-paper" aria-label={tier.priceLabel}>
                  {tier.price}
                </p>
                <p className="mt-4 leading-relaxed text-muted">{tier.summary}</p>
                <ul className="mt-5 flex-1 space-y-2 text-paper">
                  {tier.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="btn btn-primary mt-8" href={`/contact?plan=${tier.id}`}>
                  Request a quote
                  <span className="sr-only"> for {tier.name}</span>
                </Link>
              </article>
            ))}
          </div>
          {care ? (
            <article className="mt-4 flex flex-col gap-6 border border-line bg-raised p-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="font-display text-2xl text-paper">{care.name}</h3>
                <p className="mt-3 font-display text-3xl text-paper" aria-label={care.priceLabel}>
                  {care.price}
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{care.summary}</p>
              </div>
              <Link className="btn btn-primary shrink-0" href={`/contact?plan=${care.id}`}>
                Request a quote
                <span className="sr-only"> for {care.name}</span>
              </Link>
            </article>
          ) : null}
        </div>
      </section>

      <section id="work" className="border-t border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">Work</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            These are placeholders for real projects. They are not case studies, testimonials, or results.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {projectPlaceholders.map((project) => (
              <article key={project.name} className="border border-line p-6">
                <p className="text-sm font-semibold tracking-wide text-gold uppercase">Placeholder</p>
                <h3 className="mt-3 font-display text-2xl text-paper">{project.name}</h3>
                <p className="mt-4 leading-relaxed text-muted">{project.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="studio" className="border-t border-line">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">Studio</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              {site.founder} founded {site.name} in {site.locality}.
            </p>
          </div>
          <div className="space-y-6 border border-line bg-raised p-6">
            <p className="leading-relaxed text-paper">
              <span className="font-semibold text-gold">TODO:</span> Add {site.founder}&apos;s approved biography. No stand-in bio is published here.
            </p>
            <p className="leading-relaxed text-paper">
              <span className="font-semibold text-gold">TODO:</span> Add the public studio phone number. No number is listed until one is confirmed.
            </p>
            <p>
              <a className="prose-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
