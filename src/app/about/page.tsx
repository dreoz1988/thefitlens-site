import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — The Fit Lens",
  description:
    "The Fit Lens is built by The Fit Lens LLC, an Arizona company, for people who track body composition, not just scale weight.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        <header className="py-8 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight hover:text-muted transition-colors">
            The Fit Lens
          </Link>
          <nav className="text-sm text-muted flex gap-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="/beta#request" className="hover:text-foreground transition-colors">Request access</Link>
          </nav>
        </header>

        <section className="py-16 md:py-24 max-w-2xl">
          <p className="text-sm uppercase tracking-widest mb-6" style={{ color: "var(--teal)" }}>
            About
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            A clinical instrument, not a motivator.
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-6 max-w-prose">
            Most tracking apps either bury you in tables or talk to you like a
            child. The Fit Lens is built for people who lift, cut, recomp, or
            run a GLP-1 protocol and want a straight answer: is it working,
            and if not, what&apos;s the one thing to change.
          </p>
          <p className="text-muted leading-relaxed max-w-prose">
            No streaks, no badges, no cartoon mascots. Findings are reported
            the way an instrument reports a reading: the number first, one
            sentence of context after.
          </p>
        </section>

        <section className="py-16 md:py-24 border-t border-border max-w-2xl">
          <h2 className="text-xl font-medium tracking-tight mb-4">The company</h2>
          <p className="text-muted leading-relaxed max-w-prose mb-2">
            The Fit Lens is developed and operated by The Fit Lens LLC, an
            Arizona Domestic Limited Liability Company (ACC Business ID:
            25083180).
          </p>
          <p className="text-subtle text-sm">
            <a href="mailto:support@thefitlens.com" className="underline underline-offset-4 hover:text-muted transition-colors">
              support@thefitlens.com
            </a>
          </p>
        </section>

        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
              Request beta access
            </h2>
            <p className="text-muted mb-8">
              Android, plus a Bluetooth smart scale and body tape. Details and
              hardware links are on the signup page.
            </p>
            <Link
              href="/beta#request"
              className="inline-block px-8 py-3 font-medium transition-colors"
              style={{ backgroundColor: "var(--teal)", color: "var(--background)" }}
            >
              Request beta access
            </Link>
          </div>
        </section>

        <footer className="border-t border-border py-10 text-xs text-subtle flex flex-wrap gap-x-6 gap-y-2 items-center">
          <Link href="/" className="hover:text-muted transition-colors">Home</Link>
          <Link href="/feedback" className="hover:text-muted transition-colors">Beta Feedback</Link>
          <Link href="/privacy" className="hover:text-muted transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-muted transition-colors">Terms of Service</Link>
          <a href="mailto:support@thefitlens.com" className="hover:text-muted transition-colors">
            support@thefitlens.com
          </a>
          <p className="w-full mt-2">© {new Date().getFullYear()} The Fit Lens LLC</p>
        </footer>
      </div>
    </main>
  );
}
