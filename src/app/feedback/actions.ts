"use server";

import { after } from "next/server";

export type FeedbackState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const CATEGORY_VALUES = new Set(["bug", "feature_request", "general"]);
const SEVERITY_VALUES = new Set(["low", "medium", "high"]);
const CATEGORY_LABELS: Record<string, string> = {
  bug: "Bug",
  feature_request: "Feature request",
  general: "General feedback",
};

const ALERT_TO = "dreoz1988@gmail.com";
const ALERT_FROM = "FitLens Alerts <alerts@mail.thefitlens.com>";

async function sendFeedbackAlert(report: {
  category: string;
  severity: string | null;
  message: string;
  email: string;
  device_model: string | null;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("feedback alert: RESEND_API_KEY not configured, skipping");
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
        subject: `New feedback: ${CATEGORY_LABELS[report.category] ?? report.category}${report.severity ? ` (${report.severity})` : ""}`,
        text: [
          `Category: ${CATEGORY_LABELS[report.category] ?? report.category}`,
          `Severity: ${report.severity ?? "n/a"}`,
          `From: ${report.email}`,
          `Device: ${report.device_model ?? "not provided"}`,
          "",
          report.message,
        ].join("\n"),
      }),
    });
    if (!res.ok) {
      console.error("feedback alert failed:", res.status, await res.text().catch(() => ""));
    }
  } catch (err) {
    console.error("feedback alert failed:", err);
  }
}

export async function submitFeedback(
  _prev: FeedbackState,
  formData: FormData
): Promise<FeedbackState> {
  // Honeypot: hidden field real users never fill. Pretend success for bots.
  if (formData.get("website")) {
    return { status: "success" };
  }

  const category = String(formData.get("category") ?? "");
  const severityRaw = String(formData.get("severity") ?? "");
  const message = String(formData.get("message") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const deviceModel = String(formData.get("device_model") ?? "").trim();

  if (!CATEGORY_VALUES.has(category)) {
    return { status: "error", message: "Choose what kind of feedback this is." };
  }
  const severity = category === "bug" ? severityRaw : null;
  if (category === "bug" && !SEVERITY_VALUES.has(severityRaw)) {
    return { status: "error", message: "Choose a severity for the bug report." };
  }
  if (!message) {
    return { status: "error", message: "Write something first." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    console.error("feedback_reports: SUPABASE_URL / SUPABASE_ANON_KEY not configured");
    return {
      status: "error",
      message: "Something went wrong on our end. Email support@thefitlens.com and we'll log it directly.",
    };
  }

  const deviceModelValue = deviceModel.slice(0, 120) || null;

  const res = await fetch(`${url}/rest/v1/feedback_reports`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      category,
      severity,
      message: message.slice(0, 5000),
      email,
      device_model: deviceModelValue,
    }),
  }).catch(() => null);

  if (res?.ok) {
    after(() =>
      sendFeedbackAlert({
        category,
        severity,
        message: message.slice(0, 5000),
        email,
        device_model: deviceModelValue,
      })
    );
    return { status: "success" };
  }

  console.error("feedback_reports insert failed:", res?.status, await res?.text().catch(() => ""));
  return {
    status: "error",
    message: "Something went wrong on our end. Email support@thefitlens.com and we'll log it directly.",
  };
}
