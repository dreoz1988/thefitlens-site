"use client";

import { useActionState } from "react";
import { requestBetaAccess, type SignupState } from "./actions";

const initialState: SignupState = { status: "idle" };

const inputClass =
  "w-full bg-transparent border-0 border-b border-border py-3 text-foreground " +
  "placeholder:text-subtle focus:outline-none focus:border-[var(--teal)] transition-colors";

function CustomCheckbox({
  name,
  required,
  accent = "var(--teal)",
}: {
  name: string;
  required?: boolean;
  accent?: string;
}) {
  return (
    <span
      className="relative mt-0.5 size-5 shrink-0"
      style={{ ["--cb-accent" as string]: accent }}
    >
      <input
        type="checkbox"
        name={name}
        required={required}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded border border-border bg-transparent
                   transition-colors peer-checked:border-transparent peer-checked:bg-[var(--cb-accent)]
                   peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2
                   peer-focus-visible:outline-[var(--cb-accent)]"
      />
      <svg
        viewBox="0 0 16 16"
        className="pointer-events-none absolute inset-0 m-auto size-3 opacity-0 transition-opacity peer-checked:opacity-100"
        fill="none"
        stroke="var(--background)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 8l3.5 3.5L13 5" />
      </svg>
    </span>
  );
}

export function BetaForm() {
  const [state, formAction, pending] = useActionState(requestBetaAccess, initialState);

  if (state.status === "success") {
    return (
      <div aria-live="polite" className="border-t border-border pt-8">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="flex size-6 items-center justify-center rounded-full shrink-0"
            style={{ backgroundColor: "var(--teal)" }}
          >
            <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="var(--background)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8l3.5 3.5L13 5" />
            </svg>
          </span>
          <p className="text-xl text-foreground font-medium">You&apos;re on the list.</p>
        </div>
        <p className="text-muted mb-2 max-w-prose">
          You&apos;ll get an email to join testing on Google Play, usually
          within a few minutes. Check your inbox, and spam, for a message
          from FitLens Beta.
        </p>
        <p className="text-sm text-subtle">
          Questions?{" "}
          <a href="mailto:support@thefitlens.com" className="underline hover:text-muted transition-colors">
            support@thefitlens.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-10">
      {/* Honeypot: invisible to people, irresistible to bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div>
        <label htmlFor="email" className="block text-sm text-muted mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div className="space-y-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <CustomCheckbox name="has_android" required accent="var(--teal)" />
          <span className="text-foreground">
            I have an Android phone
            <span className="block text-sm text-subtle">
              Testing is Android-only right now. iOS comes later.
            </span>
          </span>
        </label>

        <div>
          <label htmlFor="device_model" className="block text-sm text-muted mb-1">
            Device model <span className="text-subtle">(optional)</span>
          </label>
          <input
            id="device_model"
            name="device_model"
            type="text"
            maxLength={120}
            placeholder="Galaxy S25, Pixel 9..."
            className={inputClass}
          />
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <CustomCheckbox name="has_required_hardware" required accent="var(--coral)" />
          <span className="text-foreground">
            I have an Etekcity Bluetooth smart scale AND a Renpho Bluetooth
            body tape
          </span>
        </label>
      </div>

      <fieldset>
        <legend className="text-sm text-muted mb-3">
          Currently using a GLP-1 medication?{" "}
          <span className="text-subtle">(optional)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {[
            ["yes", "Yes"],
            ["no", "No"],
            ["prefer_not_to_say", "Prefer not to say"],
          ].map(([value, label]) => (
            <label key={value} className="cursor-pointer">
              <input type="radio" name="glp1_status" value={value} className="peer sr-only" />
              <span
                className="inline-block rounded-full border border-border px-4 py-2 text-sm text-muted
                           transition-colors peer-checked:border-transparent peer-checked:text-foreground
                           peer-checked:bg-[var(--azure)] peer-focus-visible:outline peer-focus-visible:outline-2
                           peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--azure)]"
              >
                {label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <button
          type="submit"
          disabled={pending}
          className="w-full sm:w-auto px-8 py-3 font-medium transition-colors disabled:opacity-60
                     focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: "var(--teal)", color: "var(--background)" }}
        >
          {pending ? "Sending..." : "Request beta access"}
        </button>
        {state.status === "error" && (
          <p aria-live="polite" className="mt-4 text-sm" style={{ color: "var(--coral)" }}>
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
