"use client";

import { useActionState } from "react";
import { requestBetaAccess, type SignupState } from "./actions";

const initialState: SignupState = { status: "idle" };

const inputClass =
  "w-full bg-transparent border-0 border-b border-neutral-800 py-3 text-white " +
  "placeholder:text-neutral-600 focus:outline-none focus:border-gold transition-colors";

export function BetaForm() {
  const [state, formAction, pending] = useActionState(requestBetaAccess, initialState);

  if (state.status === "success") {
    return (
      <div aria-live="polite" className="border-t border-neutral-800 pt-8">
        <p className="text-xl text-white mb-3">You&apos;re on the list.</p>
        <p className="text-neutral-400">
          We&apos;ll follow up by email once a spot opens up.
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
        <label htmlFor="email" className="block text-sm text-neutral-400 mb-1">
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
          <input
            type="checkbox"
            name="has_android"
            required
            className="mt-1 size-4 accent-(--gold)"
          />
          <span className="text-neutral-300">
            I have an Android phone
            <span className="block text-sm text-neutral-500">
              Testing is Android-only right now. iOS comes later.
            </span>
          </span>
        </label>

        <div>
          <label htmlFor="device_model" className="block text-sm text-neutral-400 mb-1">
            Device model <span className="text-neutral-600">(optional)</span>
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
      </div>

      <fieldset>
        <legend className="text-sm text-neutral-400 mb-3">
          Currently using a GLP-1 medication?{" "}
          <span className="text-neutral-600">(optional)</span>
        </legend>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {[
            ["yes", "Yes"],
            ["no", "No"],
            ["prefer_not_to_say", "Prefer not to say"],
          ].map(([value, label]) => (
            <label key={value} className="flex items-center gap-2 text-neutral-300 cursor-pointer">
              <input
                type="radio"
                name="glp1_status"
                value={value}
                className="size-4 accent-(--gold)"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <button
          type="submit"
          disabled={pending}
          className="w-full sm:w-auto bg-gold text-neutral-950 font-medium px-8 py-3
                     hover:bg-neutral-300 transition-colors disabled:opacity-60
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          {pending ? "Sending..." : "Request beta access"}
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
