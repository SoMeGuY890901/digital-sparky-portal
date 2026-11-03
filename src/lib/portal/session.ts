import { cache } from "react";
import { cookies } from "next/headers";
import { demoAccounts, type DemoAccount } from "@/lib/portal/data";

export const DEMO_COOKIE = "dss-demo-session";

export function findDemoAccount(email: string, password: string): DemoAccount | undefined {
  return demoAccounts.find(
    (account) => account.email === email && account.password === password,
  );
}

export function accountFromId(id: string | undefined): DemoAccount | undefined {
  return demoAccounts.find((account) => account.id === id);
}

export const getDemoSession = cache(async (): Promise<DemoAccount | undefined> => {
  const jar = await cookies();
  return accountFromId(jar.get(DEMO_COOKIE)?.value);
});
