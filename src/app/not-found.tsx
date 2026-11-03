import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto w-full max-w-3xl px-5 py-24 sm:px-8">
        <h1 className="font-display text-4xl tracking-tight text-paper sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-muted">That address is not on this site.</p>
        <Link className="btn btn-primary mt-8" href="/">
          Back to the studio
        </Link>
      </div>
    </main>
  );
}
