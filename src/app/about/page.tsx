import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "About | The Fit Lens",
  description:
    "The Fit Lens is built by The Fit Lens LLC, an Arizona company, for people who track body composition, not just scale weight.",
};

export default function About() {
  return (
    <main id="main" tabIndex={-1} className="min-h-screen bg-background text-foreground focus:outline-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SiteHeader current="about" />

        <section className="py-16 md:py-24 max-w-2xl">
          <p className="text-sm uppercase tracking-widest mb-6" style={{ color: "var(--teal)" }}>
            About
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            A precise instrument, not a motivator.
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

        <SiteFooter />
      </div>
    </main>
  );
}
