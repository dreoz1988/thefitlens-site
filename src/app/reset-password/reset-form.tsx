"use client";

import { useActionState, useEffect, useState } from "react";
import { updatePassword, type ResetState } from "./actions";

const initialState: ResetState = { status: "idle" };

const inputClass =
  "w-full bg-transparent border-0 border-b border-neutral-800 py-3 text-white " +
  "placeholder:text-neutral-600 focus:outline-none focus:border-inverse transition-colors";

// The recovery token arrives in the URL fragment (implicit flow):
//   /reset-password#access_token=...&type=recovery
// Expired or reused links arrive as:
//   /reset-password#error=access_denied&error_description=...
// The fragment never reaches the server, so it must be read here.
type LinkState =
  | { kind: "checking" }
  | { kind: "ready"; accessToken: string }
  | { kind: "invalid"; reason: string };

function parseFragment(hash: string): LinkState {
  const params = new URLSearchParams(hash.startsWith("#") ? hash.slice(1) : hash);
  const errorDescription = params.get("error_description");
  if (errorDescription) {
    return { kind: "invalid", reason: errorDescription.replace(/\+/g, " ") };
  }
  const accessToken = params.get("access_token");
  if (!accessToken || params.get("type") !== "recovery") {
    return {
      kind: "invalid",
      reason: "This page only works when opened from a password reset email.",
    };
  }
  return { kind: "ready", accessToken };
}

export function ResetForm() {
  const [link, setLink] = useState<LinkState>({ kind: "checking" });
  const [state, formAction, pending] = useActionState(updatePassword, initialState);

  useEffect(() => {
    setLink(parseFragment(window.location.hash));
  }, []);

  if (link.kind === "checking") {
    return <p className="text-neutral-400">Checking your reset link...</p>;
  }

  if (link.kind === "invalid") {
    return (
      <div aria-live="polite" className="border-t border-neutral-800 pt-8">
        <p className="text-xl text-white mb-3">This link isn't usable.</p>
        <p className="text-neutral-400 mb-3">{link.reason}</p>
        <p className="text-neutral-400">
          Open The Fit Lens app, tap Forgot Password on the Sign In screen, and
          use the newest email. Links expire after an hour and work once.
        </p>
      </div>
    );
  }

  if (state.status === "success") {
    return (
      <div aria-live="polite" className="border-t border-neutral-800 pt-8">
        <p className="text-xl text-white mb-3">Password updated.</p>
        <p className="text-neutral-400">
          Return to The Fit Lens app and sign in with your new password.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-10">
      <input type="hidden" name="access_token" value={link.accessToken} />

      <div>
        <label htmlFor="password" className="block text-sm text-neutral-400 mb-1">
          New password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          placeholder="At least 8 characters"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="confirm" className="block text-sm text-neutral-400 mb-1">
          Confirm new password
        </label>
        <input
          id="confirm"
          name="confirm"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          placeholder="Same password again"
          className={inputClass}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={pending}
          className="w-full sm:w-auto bg-inverse text-neutral-950 font-medium px-8 py-3
                     hover:bg-neutral-300 transition-colors disabled:opacity-60
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverse"
        >
          {pending ? "Updating..." : "Update password"}
        </button>
        {state.status === "error" && (
          <p aria-live="polite" className="mt-4 text-sm text-red-400">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
