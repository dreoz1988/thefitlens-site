import type { Metadata } from "next";
import { ResetForm } from "./reset-form";

export const metadata: Metadata = {
  title: "Reset Password | The Fit Lens",
  description: "Set a new password for your Fit Lens account.",
  robots: { index: false, follow: false },
};

export default function ResetPasswordPage() {
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
            <p className="text-sm text-gold uppercase tracking-widest mb-6">Account</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              Set a new password
            </h1>
            <p className="text-neutral-400 mb-12">
              You opened this page from a password reset email. Choose a new
              password for your account below.
            </p>
            <ResetForm />
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
