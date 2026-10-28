import type { ReactNode } from "react";

// Review markers for the DRAFT privacy policy (2026-10-28). Every change to the
// attorney-final text is wrapped in one of these so it stays visible until
// Andre (and counsel) approve it. Remove the markers, the banner and this file
// when the text is final.

export function DraftBanner() {
  return (
    <div role="note" className="mb-10 rounded-lg border-2 border-[var(--amber)] p-4 text-sm">
      <p className="font-semibold text-foreground">Draft for review. This is not the published Privacy Policy.</p>
      <p className="mt-1 text-muted">
        Highlighted text is new. Struck-through text would be removed. Items marked
        &ldquo;Confirm&rdquo; need a decision before publishing.
      </p>
    </div>
  );
}

/** New or reworded text. `confirm` explains what still needs a decision. */
export function Added({ children, confirm }: { children: ReactNode; confirm?: string }) {
  return (
    <ins className="no-underline rounded bg-[var(--amber)]/15 px-1 text-foreground">
      {children}
      {confirm && <span className="ml-1 text-xs font-semibold text-[var(--amber)]">[Confirm: {confirm}]</span>}
    </ins>
  );
}

/** Text the draft would remove, with the reason. */
export function Removed({ children, reason }: { children: ReactNode; reason: string }) {
  return (
    <span>
      <del className="text-muted">{children}</del>
      <span className="ml-1 text-xs font-semibold text-[var(--amber)]">[Remove: {reason}]</span>
    </span>
  );
}
