import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Fit Lens — Body Composition, Not Just Weight",
  description:
    "The Fit Lens splits every weigh-in into fat, muscle, and visceral fat, then coaches on what actually changed. Android, Bluetooth smart scale and body tape required. Private beta.",
};

function ScreenshotFrame({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div
      className="w-full max-w-[240px] rounded-[2rem] border border-border p-1.5"
      style={{ background: "var(--surface)" }}
    >
      <div className="rounded-[1.6rem] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 220px, 240px"
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}

// Cropped from a real Body Avatar capture (wireframe mesh only — the
// original screen's numeric callouts are excluded from the crop, not
// masked, since they showed one real person's flagged health metrics).
// Labels below are a fresh overlay with the same demo figures already
// shown in the Body Score / Health Report sections on this page.
function AvatarArt() {
  return (
    <div className="relative w-full max-w-[240px]" style={{ aspectRatio: "390 / 1258" }}>
      <div
        className="absolute inset-0 rounded-[2rem] border border-border overflow-hidden"
        style={{ background: "var(--surface)" }}
      >
        <Image
          src="/screenshots/body-avatar.png"
          alt="A real 3D wireframe render of a body from The Fit Lens app, annotated with muscle, fat, and visceral fat callouts"
          fill
          sizes="240px"
          className="object-cover"
        />
      </div>
      <svg viewBox="0 0 390 1258" className="absolute inset-0 w-full h-full pointer-events-none">
        <circle cx="70" cy="458" r="7" fill="var(--teal)" />
        <line x1="78" y1="456" x2="200" y2="395" stroke="var(--border)" strokeWidth="2" />
        <rect x="196" y="360" width="150" height="66" rx="10" fill="var(--background)" opacity="0.92" />
        <text x="210" y="384" fill="var(--teal)" fontSize="24">Muscle</text>
        <text x="210" y="414" fill="var(--foreground)" fontSize="28" fontWeight="600">134.6 lbs</text>

        <circle cx="150" cy="592" r="7" fill="var(--coral)" />
        <line x1="158" y1="592" x2="200" y2="592" stroke="var(--border)" strokeWidth="2" />
        <rect x="196" y="557" width="120" height="66" rx="10" fill="var(--background)" opacity="0.92" />
        <text x="210" y="581" fill="var(--coral)" fontSize="24">Fat</text>
        <text x="210" y="611" fill="var(--foreground)" fontSize="28" fontWeight="600">17.6%</text>

        <circle cx="248" cy="635" r="7" fill="var(--amber)" />
        <line x1="244" y1="642" x2="200" y2="725" stroke="var(--border)" strokeWidth="2" />
        <rect x="196" y="717" width="150" height="66" rx="10" fill="var(--background)" opacity="0.92" />
        <text x="210" y="741" fill="var(--amber)" fontSize="24">Visceral fat</text>
        <text x="210" y="771" fill="var(--foreground)" fontSize="28" fontWeight="600">Level 6</text>
      </svg>
    </div>
  );
}

const FEATURES = [
  {
    title: "Body Score",
    image: { src: "/screenshots/body-score.png", width: 998, height: 2080 },
    alt: "The Fit Lens Body Score screen showing a 7.9 out of 10 gauge, a breakdown by body composition, activity, nutrition, and hydration, and body composition figures for body fat, muscle, visceral fat, and body water",
    body: "One number that blends composition, activity, and sleep into a single read of the week. Not a mood ring, a weighted score you can trace back to what moved it.",
  },
  {
    title: "3D body composition",
    art: AvatarArt,
    body: "Your scale readings mapped onto an annotated 3D model. Tap any region for the number behind it: fat, muscle, or visceral fat at that site.",
  },
  {
    title: "GLP-1 dashboard",
    image: { src: "/screenshots/glp1-protocol.png", width: 980, height: 2080 },
    alt: "The Fit Lens GLP-1 Protocol screen showing today's protein and hydration adherence, muscle and fat mass change since starting, and a written coaching note on the week's data",
    body: "Weight and lean mass tracked side by side, dosed protocol overlaid. The question isn't whether the number is dropping, it's what kind of mass you're losing.",
  },
  {
    title: "Food scanning",
    image: { src: "/screenshots/ai-chef.png", width: 970, height: 2080 },
    alt: "The Fit Lens AI Chef screen with Log Food, Food Library, and Check a Product actions, and a generated 7-day high-protein meal plan with per-meal macros",
    body: "Barcode or food scale, logged in one step. Protein tracked against a target that adjusts as your weigh-ins come in, not a fixed number set once at onboarding.",
  },
  {
    title: "Health report PDF",
    image: { src: "/screenshots/health-report.png", width: 1520, height: 2080 },
    alt: "The Fit Lens Health Summary Report PDF showing patient information, a GLP-1 medication alert, self-reported side effects, and a body composition metrics table",
    body: "A clean export of your trends for a doctor's visit or your own records. A convenience tool, not a clinical document, built to be read in under a minute.",
  },
];

const FAQS = [
  {
    q: "Do I need special hardware?",
    a: "Yes. Body composition tracking requires a Bluetooth smart scale and a Bluetooth body tape, currently Etekcity and Renpho models. Without both, most of the app has nothing to read. See the beta signup page for details and where to get them.",
  },
  {
    q: "Is it available on iOS?",
    a: "Not yet. The private beta is Android-only. iOS is planned for after beta.",
  },
  {
    q: "Is this medical advice?",
    a: "No. The Fit Lens is an informational and tracking tool. It does not diagnose, treat, or replace guidance from a licensed healthcare provider. Full detail is in the Terms of Service.",
  },
  {
    q: "What happens to my health data?",
    a: "It's used to run the Services you're using: tracking, coaching, and the features above. It is not sold. See the Privacy Policy for the full account of what's collected and why.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        <header className="py-8 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight">The Fit Lens</span>
          <nav className="text-sm text-muted flex gap-6">
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/beta#request" className="hover:text-foreground transition-colors">Request access</Link>
          </nav>
        </header>

        {/* Hero */}
        <section className="py-20 md:py-28 max-w-2xl">
          <p className="text-sm uppercase tracking-widest mb-6" style={{ color: "var(--teal)" }}>
            Private beta
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Your body is the scoreboard.
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-4 max-w-prose">
            Food is primary. Training is the multiplier. The Fit Lens reads your
            body composition, not just scale weight, and tells you what actually
            changed: fat, muscle, and visceral fat, tracked separately.
          </p>
          <p className="text-subtle mb-10 max-w-prose">
            Built for Android. Beta testing requires a Bluetooth body scale and
            body tape.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 items-center">
            <Link
              href="/beta#request"
              className="inline-block px-8 py-3 font-medium transition-colors"
              style={{ backgroundColor: "var(--teal)", color: "var(--background)" }}
            >
              Request beta access
            </Link>
            <a href="#features" className="text-sm text-muted underline underline-offset-4 hover:text-foreground transition-colors">
              See what it tracks
            </a>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16 md:py-24 scroll-mt-12">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="grid md:grid-cols-2 gap-x-16 gap-y-8 items-center border-t border-border py-12 md:py-16"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="text-2xl font-medium tracking-tight mb-3">{f.title}</h2>
                <p className="text-muted max-w-prose">{f.body}</p>
              </div>
              <div className={`flex justify-center md:justify-start ${i % 2 === 1 ? "md:order-1" : ""}`}>
                {f.image ? (
                  <ScreenshotFrame src={f.image.src} alt={f.alt} width={f.image.width} height={f.image.height} />
                ) : (
                  f.art?.()
                )}
              </div>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 border-t border-border">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
            Before you sign up
          </h2>
          <div className="max-w-2xl divide-y divide-border">
            {FAQS.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none font-medium">
                  {item.q}
                  <span className="text-subtle text-xl leading-none group-open:hidden">+</span>
                  <span className="text-subtle text-xl leading-none hidden group-open:inline">−</span>
                </summary>
                <p className="text-muted mt-3 max-w-prose">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
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
          <Link href="/about" className="hover:text-muted transition-colors">About</Link>
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
