import type { Metadata } from "next";
import { submitContact } from "@/app/contact/actions";
import { isPricingTierId, pricingTiers } from "@/lib/pricing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote from Digital Sparky Studios in Indianapolis.",
  alternates: {
    canonical: "/contact",
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string; plan?: string }>;
}) {
  const params = await searchParams;
  const plan = isPricingTierId(params.plan) ? params.plan : "";
  const selected = pricingTiers.find((tier) => tier.id === plan);
  const sent = params.sent === "1";
  const invalid = params.error === "check";

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
          {site.locality}
        </p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-paper sm:text-5xl">
          Contact the studio
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {selected
            ? `You are asking about ${selected.name} (${selected.price}). The range is a starting point, and the quote confirms the scope.`
            : "Tell the studio what you need. Package ranges on the homepage are a starting point, and the quote confirms the scope."}
        </p>

        <div className="mt-8 border border-line bg-raised p-5 leading-relaxed">
          <p>
            <span className="font-semibold text-gold">TODO:</span> This form does not deliver messages yet. Email{" "}
            <a className="prose-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            and it will go through.
          </p>
          <p className="mt-3 text-muted">
            TODO: Add the public studio phone number. No number is listed until one is confirmed.
          </p>
        </div>

        {sent ? (
          <p className="mt-6 border border-gold px-4 py-3" role="status">
            The form is complete, and the message was not delivered. TODO: connect this form to the studio inbox.
          </p>
        ) : null}
        {invalid ? (
          <p className="mt-6 border border-coral px-4 py-3" role="alert">
            Check the name, a real email address, and a message of at least a sentence. Nothing was sent.
          </p>
        ) : null}

        <form className="mt-8 space-y-5" action={submitContact} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={80} />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required maxLength={120} />
          </div>
          <div className="field">
            <label htmlFor="plan">Package</label>
            <select id="plan" name="plan" defaultValue={plan}>
              <option value="">Not sure yet</option>
              {pricingTiers.map((tier) => (
                <option key={tier.id} value={tier.id}>
                  {tier.name} ({tier.price})
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">What do you need?</label>
            <textarea id="message" name="message" required minLength={10} maxLength={2000} />
          </div>
          <button className="btn btn-primary" type="submit">
            Check message
          </button>
        </form>
      </div>
    </main>
  );
}
