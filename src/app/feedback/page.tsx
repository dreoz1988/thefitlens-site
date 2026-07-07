import type { Metadata } from "next";
import { FeedbackForm } from "./feedback-form";

export const metadata: Metadata = {
  title: "Beta Feedback — The Fit Lens",
  description: "Weekly feedback form for The Fit Lens beta testers.",
  robots: { index: false, follow: false },
};

export default async function FeedbackPage({
  searchParams,
}: {
  searchParams: Promise<{ week?: string | string[] }>;
}) {
  const raw = (await searchParams).week;
  const parsed = Number(Array.isArray(raw) ? raw[0] : raw);
  const week = Number.isInteger(parsed) && parsed >= 1 && parsed <= 52 ? parsed : null;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <header className="py-8">
          <a href="/" className="text-sm font-semibold tracking-tight hover:text-neutral-300">
            The Fit Lens
          </a>
        </header>

        <section className="pt-12 pb-24 md:pt-20 md:pb-32">
          <div className="max-w-md">
            <p className="text-sm text-gold uppercase tracking-widest mb-6">Beta program</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              {week !== null ? `Week ${week} feedback` : "Beta feedback"}
            </h1>
            <p className="text-neutral-400 mb-12">
              Unfiltered beats polished. Two sentences on what actually happened
              are worth more than a page of impressions.
            </p>
            <FeedbackForm week={week} />
          </div>
        </section>

        <footer className="border-t border-neutral-800 py-10 text-xs text-neutral-600">
          <a href="/privacy" className="hover:text-neutral-400 mr-6">Privacy Policy</a>
          <a href="/terms" className="hover:text-neutral-400">Terms of Service</a>
          <p className="mt-4">© {new Date().getFullYear()} The Lens Company</p>
        </footer>
      </div>
    </main>
  );
}
