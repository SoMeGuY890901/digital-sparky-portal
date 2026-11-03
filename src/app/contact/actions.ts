"use server";

import { isPricingTierId } from "@/lib/pricing";
import { redirect } from "next/navigation";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitContact(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const planValue = String(formData.get("plan") ?? "").trim();
  const plan = isPricingTierId(planValue) ? planValue : "";

  const valid =
    name.length >= 2 &&
    name.length <= 80 &&
    isEmail(email) &&
    message.length >= 10 &&
    message.length <= 2000;

  const params = new URLSearchParams();
  if (plan) params.set("plan", plan);

  if (!valid) {
    params.set("error", "check");
    redirect(`/contact?${params.toString()}`);
  }

  params.set("sent", "1");
  redirect(`/contact?${params.toString()}`);
}
