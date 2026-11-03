import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { demoLogin } from "@/app/portal/actions";
import { demoAccounts, demoClient } from "@/lib/portal/data";
import { getDemoSession } from "@/lib/portal/session";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function PortalLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const session = await getDemoSession();
  if (session) redirect("/portal/dashboard");

  const params = await searchParams;
  const invalid = params.error === "1";

  return (
    <main id="content" tabIndex={-1} className="mx-auto grid min-h-screen w-full max-w-6xl outline-none lg:grid-cols-2">
      <section className="border-b border-[#2e2a26] px-6 py-12 sm:px-10 lg:border-r lg:border-b-0 lg:py-16">
        <p className="portal-label">Digital Sparky Studios</p>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">Client portal</h1>
        <p className="portal-lede mt-4">
          A mock sign-in for a sample workspace. Use a demo account on this page. No directory and no auth service is contacted.
        </p>
        <p className="portal-card mt-8 p-5 leading-relaxed">
          <strong className="text-[#e0c48a]">Demo data.</strong> {demoClient.note} The password
          below is the whole check.
        </p>
        <h2 className="mt-8 text-2xl">Demo accounts</h2>
        <ul className="mt-4 space-y-4">
          {demoAccounts.map((account) => (
            <li key={account.id} className="portal-card p-4">
              <p className="font-bold">
                {account.name} · {account.role}
              </p>
              <p className="mt-1">{demoClient.company}</p>
              <p className="portal-muted mt-2 text-sm">Email</p>
              <p>{account.email}</p>
              <p className="portal-muted mt-2 text-sm">Password</p>
              <p>demo</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="px-6 py-12 sm:px-10 lg:py-16">
        <h2 className="text-3xl">Sign in to the demo</h2>
        <p className="portal-lede mt-3">
          This form sets a demo cookie in your browser and opens the sample workspace.
        </p>
        {invalid ? (
          <p className="mt-5 border border-[#c9553d] px-4 py-3" role="alert">
            That email and password do not match a demo account. Use one of the accounts on this page. Nothing was signed in.
          </p>
        ) : null}
        <form className="mt-6 space-y-5" action={demoLogin}>
          <div className="portal-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              required
              defaultValue={demoAccounts[0].email}
            />
          </div>
          <div className="portal-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              defaultValue="demo"
            />
          </div>
          <button className="portal-btn" type="submit">
            Enter the demo workspace
          </button>
        </form>
        <p className="mt-8">
          <Link className="portal-link" href="/">
            Back to the public site
          </Link>
        </p>
      </section>
    </main>
  );
}
