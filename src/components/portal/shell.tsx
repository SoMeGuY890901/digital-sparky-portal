import Image from "next/image";
import Link from "next/link";
import { demoLogout } from "@/app/portal/actions";
import { PortalNav } from "@/components/portal/nav";
import { demoClient, type DemoAccount } from "@/lib/portal/data";

export function PortalShell({
  account,
  children,
}: {
  account: DemoAccount;
  children: React.ReactNode;
}) {
  return (
    <>
      <p className="border-b border-[#2e2a26] bg-[#141210] px-5 py-3 text-sm leading-relaxed sm:px-8">
        <strong className="text-[#e0c48a]">Demo data.</strong> {demoClient.company} and every
        record in this portal are fictional. No real client names or results are shown.
      </p>
      <div className="lg:grid lg:grid-cols-[16.5rem_minmax(0,1fr)]">
        <aside className="border-b border-[#2e2a26] px-4 py-5 lg:min-h-[calc(100vh-3.25rem)] lg:border-r lg:border-b-0 lg:px-3">
          <Link href="/portal/dashboard" className="mb-4 flex min-h-12 items-center gap-3 px-2">
            <Image src="/spark-mark.png" width={36} height={36} alt="" sizes="36px" />
            <span>
              <span className="block text-sm font-bold tracking-wide text-[#e0c48a] uppercase">
                Digital Sparky
              </span>
              <span className="block text-base">Client portal</span>
            </span>
          </Link>
          <p className="px-3 text-sm">
            <span className="block font-bold">{account.name}</span>
            <span className="portal-muted block">{account.role}</span>
            <span className="portal-muted mt-2 block">{demoClient.company}</span>
          </p>
          <div className="mt-4">
            <PortalNav />
          </div>
          <form action={demoLogout} className="mt-4 px-2">
            <button className="portal-btn-quiet w-full" type="submit">
              Log out of demo
            </button>
          </form>
        </aside>
        <div id="content" tabIndex={-1} className="px-5 py-8 outline-none sm:px-8 sm:py-10">
          <div className="mx-auto w-full max-w-4xl">{children}</div>
        </div>
      </div>
    </>
  );
}
