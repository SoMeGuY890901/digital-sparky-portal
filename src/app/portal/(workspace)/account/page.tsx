import type { Metadata } from "next";
import { demoSaveAccount } from "@/app/portal/actions";
import { demoClient } from "@/lib/portal/data";
import { getDemoSession } from "@/lib/portal/session";

export const metadata: Metadata = {
  title: "Account",
};

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const params = await searchParams;
  const account = await getDemoSession();
  const notSaved = params.saved === "0";
  const invalid = params.error === "1";

  return (
    <>
      <p className="portal-label">Profile</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Account</h1>
      <p className="portal-lede mt-4">
        The demo profile for this seat. Saving does not write a real account.
      </p>
      <form className="portal-card mt-8 space-y-5 p-5 sm:p-6" action={demoSaveAccount}>
        {notSaved ? (
          <p className="border border-[#e0c48a] px-3 py-2" role="status">
            Not saved. This demo does not store profile changes.
          </p>
        ) : null}
        {invalid ? (
          <p className="border border-[#c9553d] px-3 py-2" role="alert">
            Add a name of at least two characters. Nothing was saved.
          </p>
        ) : null}
        <div className="portal-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required minLength={2} maxLength={80} defaultValue={account?.name} />
        </div>
        <div className="portal-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" readOnly defaultValue={account?.email} />
        </div>
        <div className="portal-field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" readOnly defaultValue={demoClient.company} />
        </div>
        <div className="portal-field">
          <label htmlFor="role">Role</label>
          <input id="role" name="role" type="text" readOnly defaultValue={account?.role} />
        </div>
        <div className="portal-field">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="text" readOnly defaultValue="demo — not a stored credential" />
        </div>
        <label className="flex min-h-12 items-center gap-3">
          <input type="checkbox" name="notes" defaultChecked className="size-5" />
          Email me sample project notes
        </label>
        <button className="portal-btn" type="submit">
          Save demo profile
        </button>
      </form>
    </>
  );
}
