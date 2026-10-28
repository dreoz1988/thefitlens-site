import Image from "next/image";
import Link from "next/link";
import type { FeatureStatus, ProductImage } from "@/content/product";
import { STATUS_LABEL } from "@/content/product";

// Tap targets: every header and footer link is at least 44px tall.
const navLink =
  "inline-flex min-h-11 items-center px-1 hover:text-foreground transition-colors";

export function SiteHeader({ current }: { current?: "home" | "compatibility" | "about" }) {
  return (
    <header className="py-4 flex items-center justify-between gap-4">
      <Link href="/" className={`${navLink} text-sm font-semibold tracking-tight text-foreground`}>
        The Fit Lens
      </Link>
      <nav aria-label="Main" className="text-sm text-muted flex flex-wrap justify-end gap-x-4">
        {current !== "home" && (
          <Link href="/" className={navLink}>
            Home
          </Link>
        )}
        <Link href="/compatibility" className={navLink} aria-current={current === "compatibility" ? "page" : undefined}>
          Compatibility
        </Link>
        <Link href="/beta#request" className={navLink}>
          Request access
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 text-sm text-subtle">
      <nav aria-label="Footer" className="flex flex-wrap gap-x-5">
        <Link href="/about" className={navLink}>About</Link>
        <Link href="/compatibility" className={navLink}>Compatibility</Link>
        <Link href="/feedback" className={navLink}>Beta Feedback</Link>
        <Link href="/privacy" className={navLink}>Privacy Policy</Link>
        <Link href="/terms" className={navLink}>Terms of Service</Link>
        <a href="mailto:support@thefitlens.com" className={navLink}>support@thefitlens.com</a>
      </nav>
      <p className="mt-4">© {new Date().getFullYear()} The Fit Lens LLC</p>
    </footer>
  );
}

/** Framed product image. */
export function ProductFigure({
  image,
  narrow = false,
  priority = false,
}: {
  image: ProductImage;
  narrow?: boolean;
  priority?: boolean;
}) {
  return (
    <figure className={narrow ? "w-full max-w-[240px]" : "w-full"}>
      {/* Frame uses the darker --subtle token: on the white page, parts of some
          images' edges (e.g. report-preview's bright counter) are near-white. */}
      <div className="relative overflow-hidden rounded-xl border border-subtle bg-surface">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          sizes={narrow ? "240px" : "(max-width: 1024px) 100vw, 1024px"}
          className="block h-auto w-full"
        />
      </div>
    </figure>
  );
}

const STATUS_STYLE: Record<FeatureStatus, string> = {
  available: "border-[var(--teal)] text-foreground",
  beta: "border-[var(--azure)] text-foreground",
  planned: "border-border text-muted",
  unverified: "border-[var(--amber)] text-foreground",
};

export function StatusBadge({ status }: { status: FeatureStatus }) {
  return (
    <span className={`inline-block whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLE[status]}`}>
      {STATUS_LABEL[status]}
    </span>
  );
}

/**
 * Unconfirmed claims render as a visible placeholder on previews and render
 * nothing in production, so a guess can never reach the live site.
 */
export function PendingPlaceholder({ label, note }: { label: string; note?: string }) {
  if (process.env.VERCEL_ENV === "production") return null;
  return (
    <div role="note" className="rounded-lg border border-dashed border-[var(--amber)] p-4 text-sm text-muted">
      <p className="font-medium text-foreground">Placeholder, not published: {label}</p>
      {note && <p className="mt-1">{note}</p>}
    </div>
  );
}
