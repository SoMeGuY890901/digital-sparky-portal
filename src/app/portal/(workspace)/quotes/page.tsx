import type { Metadata } from "next";
import { paperwork, tiers } from "@/lib/portal/data";

export const metadata: Metadata = {
  title: "Quotes and invoices",
};

export default function QuotesPage() {
  return (
    <>
      <p className="portal-label">Paperwork</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Quotes and invoices</h1>
      <p className="portal-lede mt-4">
        Sample quotes and invoices for this demo client. Each line uses a published tier range. The sample figure is not a charge.
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {Object.values(tiers).map((tier) => (
          <li key={tier.name} className="portal-status">
            {tier.name} {tier.range}
          </li>
        ))}
      </ul>
      <div className="mt-8 space-y-6">
        {paperwork.map((doc) => (
          <article key={doc.id} className="portal-card p-5 sm:p-6" aria-labelledby={`${doc.id}-title`}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="portal-label">{doc.kind}</p>
                <h2 id={`${doc.id}-title`} className="mt-2 text-2xl">
                  {doc.number}
                </h2>
              </div>
              <p className="portal-status">{doc.status}</p>
            </div>
            <p className="portal-muted mt-2 text-sm">
              Issued <time dateTime={doc.issued}>{doc.issued}</time>
            </p>
            <p className="mt-3 leading-relaxed">{doc.summary}</p>
            <h3 className="mt-6 text-lg">Line items</h3>
            <ul className="mt-3 divide-y divide-[#2e2a26] border-y border-[#2e2a26]">
              {doc.items.map((item) => (
                <li key={`${doc.id}-${item.tier}-${item.detail}`} className="grid gap-3 py-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <p className="font-bold">{item.detail}</p>
                  </div>
                  <p>
                    <span className="portal-label block">Tier</span>
                    <span className="mt-1 block">{item.tier}</span>
                  </p>
                  <p>
                    <span className="portal-label block">Published range</span>
                    <span className="mt-1 block">{item.range}</span>
                  </p>
                  <p>
                    <span className="portal-label block">Sample figure</span>
                    <span className="mt-1 block">{item.sampleAmount}</span>
                    <span className="portal-muted block text-sm">Not a charge</span>
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
