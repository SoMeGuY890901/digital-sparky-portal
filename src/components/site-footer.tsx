import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl text-paper">{site.name}</p>
          <p className="mt-2 text-sm text-muted">
            {site.locality}, {site.regionName}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a className="prose-link min-h-12 inline-flex items-center" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="text-muted">
            TODO: Add the public studio phone number. No number is listed until one is confirmed.
          </p>
        </div>
      </div>
    </footer>
  );
}
