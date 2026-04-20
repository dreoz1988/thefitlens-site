export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          The Fit Lens
        </h1>
        <p className="text-lg text-neutral-400 mb-12">
          Food is primary. Training is the multiplier.
          <br />
          Your body is the scoreboard.
        </p>
        <div className="border-t border-neutral-800 pt-8">
          <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">
            Private Beta
          </p>
          <p className="text-neutral-300 mb-2">
            The Fit Lens is currently in invitation-only beta.
          </p>
          <p className="text-neutral-400 text-sm">
            For access inquiries:{" "}
            <a href="mailto:support@thefitlens.com" className="text-white underline underline-offset-4 hover:text-neutral-300">
              support@thefitlens.com
            </a>
          </p>
        </div>
        <footer className="mt-16 text-xs text-neutral-600">
          <a href="/privacy" className="hover:text-neutral-400 mr-6">Privacy Policy</a>
          <a href="/terms" className="hover:text-neutral-400">Terms of Service</a>
          <p className="mt-4">© {new Date().getFullYear()} The Lens Company</p>
        </footer>
      </div>
    </main>
  );
}
