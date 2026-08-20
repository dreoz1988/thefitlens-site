"use client";

import { useActionState, useState } from "react";
import { submitFeedback, type FeedbackState } from "./actions";

const initialState: FeedbackState = { status: "idle" };

const inputClass =
  "w-full bg-transparent border-0 border-b border-border py-3 text-foreground " +
  "placeholder:text-subtle focus:outline-none focus:border-[var(--teal)] transition-colors";

const CATEGORIES = [
  { value: "bug", label: "Bug" },
  { value: "feature_request", label: "Feature request" },
  { value: "general", label: "General feedback" },
];

const SEVERITIES = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

export function FeedbackForm() {
  const [state, formAction, pending] = useActionState(submitFeedback, initialState);
  const [category, setCategory] = useState<string>("");

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
          <p className="text-xl text-foreground font-medium">Sent.</p>
        </div>
        <p className="text-muted mb-2 max-w-prose">
          Every report gets read. If it&apos;s a bug and we fix it, you&apos;ll
          get a short email letting you know.
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

      <fieldset>
        <legend className="text-sm text-muted mb-3">What is this?</legend>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <label key={c.value} className="cursor-pointer">
              <input
                type="radio"
                name="category"
                value={c.value}
                required
                onChange={() => setCategory(c.value)}
                className="peer sr-only"
              />
              <span
                className="inline-block rounded-full border border-border px-4 py-2 text-sm text-muted
                           transition-colors peer-checked:border-transparent peer-checked:text-foreground
                           peer-checked:bg-[var(--azure)] peer-focus-visible:outline peer-focus-visible:outline-2
                           peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--azure)]"
              >
                {c.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {category === "bug" && (
        <fieldset>
          <legend className="text-sm text-muted mb-3">Severity</legend>
          <div className="flex flex-wrap gap-2">
            {SEVERITIES.map((s) => (
              <label key={s.value} className="cursor-pointer">
                <input type="radio" name="severity" value={s.value} required className="peer sr-only" />
                <span
                  className="inline-block rounded-full border border-border px-4 py-2 text-sm text-muted
                             transition-colors peer-checked:border-transparent peer-checked:text-foreground
                             peer-checked:bg-[var(--coral)] peer-focus-visible:outline peer-focus-visible:outline-2
                             peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--coral)]"
                >
                  {s.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div>
        <label htmlFor="message" className="block text-sm text-muted mb-1">
          Feedback
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          maxLength={5000}
          placeholder="What broke, what worked, what you'd change. Raw notes are fine."
          className={`${inputClass} resize-y border border-border px-3 leading-relaxed`}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-muted mb-1">
          Email <span className="text-subtle">(so we can follow up)</span>
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

      <div>
        <button
          type="submit"
          disabled={pending}
          className="w-full sm:w-auto px-8 py-3 font-medium transition-colors disabled:opacity-60
                     focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: "var(--teal)", color: "var(--background)" }}
        >
          {pending ? "Sending..." : "Send feedback"}
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
