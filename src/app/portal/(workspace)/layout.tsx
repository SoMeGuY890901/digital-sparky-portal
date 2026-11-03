import { redirect } from "next/navigation";
import { PortalShell } from "@/components/portal/shell";
import { getDemoSession } from "@/lib/portal/session";

export default async function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  const account = await getDemoSession();
  if (!account) redirect("/portal");

  return <PortalShell account={account}>{children}</PortalShell>;
}
