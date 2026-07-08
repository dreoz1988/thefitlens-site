"use server";

export type ResetState = {
  status: "idle" | "success" | "error";
  message?: string;
};

// Completes a Supabase password recovery. The recovery access token arrives
// in the URL fragment on the client (implicit flow, so it never touches our
// server logs); the client component hands it to this action, which calls
// GoTrue's user endpoint with it. The anon key stays server-side, matching
// the beta and feedback actions.
export async function updatePassword(
  _prev: ResetState,
  formData: FormData
): Promise<ResetState> {
  const accessToken = String(formData.get("access_token") ?? "");
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");

  if (!accessToken) {
    return {
      status: "error",
      message: "This reset link is missing its token. Request a new link from the app.",
    };
  }
  if (password.length < 8) {
    return { status: "error", message: "Password must be at least 8 characters." };
  }
  if (password !== confirm) {
    return { status: "error", message: "Passwords do not match." };
  }

  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    console.error("reset-password: SUPABASE_URL / SUPABASE_ANON_KEY not configured");
    return {
      status: "error",
      message: "Something went wrong on our end. Email support@thefitlens.com and we'll help directly.",
    };
  }

  const res = await fetch(`${url}/auth/v1/user`, {
    method: "PUT",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  }).catch(() => null);

  if (res?.ok) {
    return { status: "success" };
  }

  const body = await res?.json().catch(() => null);
  const code = res?.status ?? 0;
  console.error("reset-password: update failed", code, body?.error_code ?? body?.msg ?? "");

  if (code === 401 || code === 403) {
    return {
      status: "error",
      message: "This reset link has expired or was already used. Request a new one from the app's Sign In screen.",
    };
  }
  if (code === 422 && typeof body?.msg === "string") {
    // GoTrue validation message (e.g. password shorter than the project
    // minimum, or same as the old password). Safe to show as-is.
    return { status: "error", message: body.msg };
  }
  return {
    status: "error",
    message: "Something went wrong on our end. Try again, or email support@thefitlens.com.",
  };
}
