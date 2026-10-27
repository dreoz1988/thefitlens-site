"use server";

import { after } from "next/server";
import { clientIp, RATE_LIMITED_MESSAGE } from "@/lib/form-request";
import { buildSignupAlert } from "@/lib/signup-alert";

export type SignupState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const GLP1_VALUES = new Set(["yes", "no", "prefer_not_to_say"]);

const ALERT_TO = "dreoz1988@gmail.com";
const ALERT_FROM = "FitLens Alerts <alerts@mail.thefitlens.com>";

async function sendSignupAlert(signup: {
  email: string;
  device_model: string | null;
  has_required_hardware: boolean;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("beta signup alert: RESEND_API_KEY not configured, skipping");
    return;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: ALERT_FROM,
        to: [ALERT_TO],
        ...buildSignupAlert({ ...signup, signedUpAt: new Date() }),
      }),
    });
    if (!res.ok) {
      console.error("beta signup alert failed:", res.status, await res.text().catch(() => ""));
    }
  } catch (err) {
    console.error("beta signup alert failed:", err);
  }
}

export async function requestBetaAccess(
  _prev: SignupState,
  formData: FormData
): Promise<SignupState> {
  // Honeypot: hidden field real users never fill. Pretend success for bots.
  if (formData.get("website")) {
    return { status: "success" };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const hasAndroid = formData.get("has_android") === "on";
  const hasRequiredHardware = formData.get("has_required_hardware") === "on";
  const deviceModel = String(formData.get("device_model") ?? "").trim();
  const glp1Raw = String(formData.get("glp1_status") ?? "");

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }
  if (!hasAndroid) {
    return {
      status: "error",
      message: "The beta is Android-only right now. Confirm you have an Android phone.",
    };
  }
  if (!hasRequiredHardware) {
    return {
      status: "error",
      message:
        "The beta requires an Etekcity Bluetooth smart scale and a Renpho Bluetooth body tape. Confirm you have both.",
    };
  }

  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    console.error("beta_signups: SUPABASE_URL / SUPABASE_ANON_KEY not configured");
    return {
      status: "error",
      message: "Something went wrong on our end. Email support@thefitlens.com and we'll add you directly.",
    };
  }

  const ip = await clientIp();
  const res = await fetch(`${url}/rest/v1/beta_signups`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
      ...(ip ? { "x-client-ip": ip } : {}),
    },
    body: JSON.stringify({
      email,
      has_android: hasAndroid,
      has_required_hardware: hasRequiredHardware,
      device_model: deviceModel.slice(0, 120) || null,
      glp1_status: GLP1_VALUES.has(glp1Raw) ? glp1Raw : null,
    }),
  }).catch(() => null);

  // 409 = this email is already on the list. Same outcome for the visitor.
  if (res && (res.ok || res.status === 409)) {
    if (res.ok) {
      // New row only (not a duplicate). Runs after the response is sent,
      // so a slow or failed send can never affect the visitor.
      after(() =>
        sendSignupAlert({
          email,
          device_model: deviceModel.slice(0, 120) || null,
          has_required_hardware: hasRequiredHardware,
        })
      );
    }
    return { status: "success" };
  }

  if (res?.status === 429) {
    return { status: "error", message: RATE_LIMITED_MESSAGE };
  }

  console.error("beta_signups insert failed:", res?.status, await res?.text().catch(() => ""));
  return {
    status: "error",
    message: "Something went wrong on our end. Email support@thefitlens.com and we'll add you directly.",
  };
}
