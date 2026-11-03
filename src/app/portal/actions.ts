"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DEMO_COOKIE, findDemoAccount } from "@/lib/portal/session";

const cookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/portal",
  maxAge: 60 * 60 * 8,
};

export async function demoLogin(formData: FormData) {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");
  const account = findDemoAccount(email, password);

  if (!account) {
    redirect("/portal?error=1");
  }

  const jar = await cookies();
  jar.set(DEMO_COOKIE, account.id, cookieOptions);
  redirect("/portal/dashboard");
}

export async function demoLogout() {
  const jar = await cookies();
  jar.set(DEMO_COOKIE, "", { ...cookieOptions, maxAge: 0 });
  redirect("/portal");
}

export async function demoReply(formData: FormData) {
  const message = String(formData.get("message") ?? "").trim();
  if (message.length < 2) {
    redirect("/portal/messages?error=1");
  }
  redirect("/portal/messages?saved=0");
}

export async function demoSaveAccount(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  if (name.length < 2) {
    redirect("/portal/account?error=1");
  }
  redirect("/portal/account?saved=0");
}
