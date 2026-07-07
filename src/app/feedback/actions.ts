"use server";

export type FeedbackState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function submitFeedback(
  _prev: FeedbackState,
  formData: FormData
): Promise<FeedbackState> {
  // Honeypot: hidden field real users never fill. Pretend success for bots.
  if (formData.get("website")) {
    return { status: "success" };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const week = Number(formData.get("week_number"));
  const responseText = String(formData.get("response_text") ?? "").trim();

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }
  if (!Number.isInteger(week) || week < 1 || week > 52) {
    return { status: "error", message: "Enter a week number between 1 and 52." };
  }
  if (!responseText) {
    return { status: "error", message: "Write something first." };
  }

  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    console.error("beta_feedback: SUPABASE_URL / SUPABASE_ANON_KEY not configured");
    return {
      status: "error",
      message: "Something went wrong on our end. Email support@thefitlens.com and we'll log it directly.",
    };
  }

  const res = await fetch(`${url}/rest/v1/beta_feedback`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      email,
      week_number: week,
      response_text: responseText.slice(0, 5000),
    }),
  }).catch(() => null);

  if (res?.ok) {
    return { status: "success" };
  }

  console.error("beta_feedback insert failed:", res?.status, await res?.text().catch(() => ""));
  return {
    status: "error",
    message: "Something went wrong on our end. Email support@thefitlens.com and we'll log it directly.",
  };
}
