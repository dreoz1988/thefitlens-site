import type { Metadata } from "next";
import Link from "next/link";
import { FeedbackForm } from "./feedback-form";

export const metadata: Metadata = {
  title: "Beta Feedback — The Fit Lens",
  description: "Report a bug, request a feature, or send general feedback for The Fit Lens beta.",
  robots: { index: false, follow: false },
};

export default function FeedbackPage() {
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

        <section className="pt-12 pb-24 md:pt-20 md:pb-32">
          <div className="max-w-md">
            <p className="text-sm uppercase tracking-widest mb-6" style={{ color: "var(--teal)" }}>
              Beta program
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              Beta feedback
            </h1>
            <p className="text-muted mb-12">
              Unfiltered beats polished. A bug report, a feature idea, or two
              sentences on what actually happened, all worth sending.
            </p>
            <FeedbackForm />
          </div>
        </section>

        <footer className="border-t border-border py-10 text-xs text-subtle flex flex-wrap gap-x-6 gap-y-2 items-center">
          <Link href="/" className="hover:text-muted transition-colors">Home</Link>
          <Link href="/about" className="hover:text-muted transition-colors">About</Link>
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
