"use client";

import { useActionState } from "react";
import { submitFeedback, type FeedbackState } from "./actions";

const initialState: FeedbackState = { status: "idle" };

const inputClass =
  "w-full bg-transparent border-0 border-b border-neutral-800 py-3 text-white " +
  "placeholder:text-neutral-600 focus:outline-none focus:border-gold transition-colors";

export function FeedbackForm({
  week,
  question,
}: {
  week: number | null;
  question: string | null;
}) {
  const [state, formAction, pending] = useActionState(submitFeedback, initialState);

  if (state.status === "success") {
    return (
      <div aria-live="polite" className="border-t border-neutral-800 pt-8">
        <p className="text-xl text-white mb-3">Sent.</p>
        <p className="text-neutral-400">Every response gets read.</p>
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
        <label htmlFor="email" className="block text-sm text-neutral-400 mb-1">
          Email <span className="text-neutral-600">(the one you signed up with)</span>
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

      {week !== null ? (
        <input type="hidden" name="week_number" value={week} />
      ) : (
        <div>
          <label htmlFor="week_number" className="block text-sm text-neutral-400 mb-1">
            Test week
          </label>
          <input
            id="week_number"
            name="week_number"
            type="number"
            required
            min={1}
            max={52}
            placeholder="1"
            className={inputClass}
          />
        </div>
      )}

      <div>
        {question ? (
          <label htmlFor="response_text" className="block text-neutral-300 leading-relaxed mb-3">
            {question}
          </label>
        ) : (
          <label htmlFor="response_text" className="block text-sm text-neutral-400 mb-1">
            Feedback
          </label>
        )}
        <textarea
          id="response_text"
          name="response_text"
          required
          rows={7}
          maxLength={5000}
          placeholder="What broke, what worked, what you'd change. Raw notes are fine."
          className={`${inputClass} resize-y border border-neutral-800 px-3 leading-relaxed`}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={pending}
          className="w-full sm:w-auto bg-gold text-neutral-950 font-medium px-8 py-3
                     hover:bg-neutral-300 transition-colors disabled:opacity-60
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          {pending ? "Sending..." : "Send feedback"}
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
