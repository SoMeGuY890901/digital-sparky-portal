import type { Metadata } from "next";
import { careExcluded, careIncluded, careUpdates, tiers } from "@/lib/portal/data";

export const metadata: Metadata = {
  title: "Care plan",
};

export default function CarePage() {
  return (
    <>
      <p className="portal-label">Monthly care</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Care plan</h1>
      <p className="portal-lede mt-4">
        What the sample monthly care plan covers, and a log of recent sample updates. The published range is {tiers.care.range}.
      </p>
      <p className="portal-card mt-6 p-5 text-2xl">
        {tiers.care.name}
        <span className="portal-muted mt-1 block text-base font-sans">{tiers.care.range} · sample figure $150 for November, not a bill</span>
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <section className="portal-card p-5" aria-labelledby="included-heading">
          <h2 id="included-heading" className="text-2xl">
            Included
          </h2>
          <p className="portal-lede mt-2">The kind of upkeep this sample plan is for.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {careIncluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="portal-card p-5" aria-labelledby="excluded-heading">
          <h2 id="excluded-heading" className="text-2xl">
            Not included
          </h2>
          <p className="portal-lede mt-2">Work that would be a separate quote.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {careExcluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <section className="mt-8" aria-labelledby="updates-heading">
        <h2 id="updates-heading" className="text-2xl">
          Recent updates
        </h2>
        <p className="portal-lede mt-2">A sample log. These edits were not made on a live client site.</p>
        <ol className="mt-5 space-y-3">
          {careUpdates.map((update) => (
            <li key={update.title} className="portal-card p-5">
              <time className="portal-label" dateTime={update.dateTime}>
                {update.date}
              </time>
              <h3 className="mt-2 text-xl">{update.title}</h3>
              <p className="mt-2 leading-relaxed">{update.detail}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
