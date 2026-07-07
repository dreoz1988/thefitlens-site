"use server";

export type SignupState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const GLP1_VALUES = new Set(["yes", "no", "prefer_not_to_say"]);

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

  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    console.error("beta_signups: SUPABASE_URL / SUPABASE_ANON_KEY not configured");
    return {
      status: "error",
      message: "Something went wrong on our end. Email support@thefitlens.com and we'll add you directly.",
    };
  }

  const res = await fetch(`${url}/rest/v1/beta_signups`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      email,
      has_android: hasAndroid,
      device_model: deviceModel.slice(0, 120) || null,
      glp1_status: GLP1_VALUES.has(glp1Raw) ? glp1Raw : null,
    }),
  }).catch(() => null);

  // 409 = this email is already on the list. Same outcome for the visitor.
  if (res && (res.ok || res.status === 409)) {
    return { status: "success" };
  }

  console.error("beta_signups insert failed:", res?.status, await res?.text().catch(() => ""));
  return {
    status: "error",
    message: "Something went wrong on our end. Email support@thefitlens.com and we'll add you directly.",
  };
}
