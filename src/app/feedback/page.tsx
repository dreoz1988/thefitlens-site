import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { FeedbackForm } from "./feedback-form";

export const metadata: Metadata = {
  title: "Beta feedback | The Fit Lens",
  description: "Report a bug, request a feature, or send general feedback for The Fit Lens beta.",
  robots: { index: false, follow: false },
};

export default function FeedbackPage() {
  return (
    <main id="main" tabIndex={-1} className="min-h-screen bg-background text-foreground focus:outline-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SiteHeader />

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

        <SiteFooter />
      </div>
    </main>
  );
}
