"use client";

import { useEffect } from "react";

// Safety net for password reset links that land on the wrong page.
//
// Supabase reset links redirect to the requester's redirect_to, but app
// builds that predate the redirectTo fix (2026-07-08) omit it, so GoTrue
// falls back to the project site_url: the homepage. The recovery token
// arrives intact in the URL fragment and dies there unused; the tester
// sees "reset didn't work". Seen live 2026-07-09.
//
// This forwards any auth-recovery fragment (success or error) from any
// page to /reset-password, fragment preserved, so the reset form or its
// proper error state renders. The fragment never reaches the server, so
// this must run client-side.
export function AuthFragmentForwarder() {
  useEffect(() => {
    if (window.location.pathname === "/reset-password") return;
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    const params = new URLSearchParams(hash.slice(1));
    const isRecoverySuccess =
      params.has("access_token") && params.get("type") === "recovery";
    const isAuthError =
      params.get("error_code") === "otp_expired" ||
      (params.has("error") && params.has("error_description"));
    if (isRecoverySuccess || isAuthError) {
      window.location.replace("/reset-password" + hash);
    }
  }, []);

  return null;
}
