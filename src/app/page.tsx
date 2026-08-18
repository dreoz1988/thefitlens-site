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

function AvatarArt() {
  return (
    <svg viewBox="0 0 300 220" role="img" aria-label="Annotated body outline with muscle, fat, and visceral fat markers" className="w-full h-auto max-w-xs">
      <circle cx="110" cy="34" r="16" fill="none" className="stroke-subtle" strokeWidth="1.5" />
      <path
        d="M85,52 C70,60 66,90 70,120 L78,180 L96,180 L100,120 L120,120 L124,180 L142,180 L150,120 C154,90 150,60 135,52 C122,44 98,44 85,52 Z"
        fill="none"
        className="stroke-subtle"
        strokeWidth="1.5"
      />
      <circle cx="110" cy="75" r="3" fill="var(--teal)" />
      <line x1="113" y1="75" x2="180" y2="60" className="stroke-border" strokeWidth="1" />
      <text x="184" y="64" fill="var(--teal)" className="text-xs">Muscle</text>

      <circle cx="112" cy="105" r="3" fill="var(--coral)" />
      <line x1="115" y1="105" x2="180" y2="105" className="stroke-border" strokeWidth="1" />
      <text x="184" y="109" fill="var(--coral)" className="text-xs">Fat</text>

      <circle cx="108" cy="128" r="3" fill="var(--amber)" />
      <line x1="111" y1="128" x2="180" y2="150" className="stroke-border" strokeWidth="1" />
      <text x="184" y="154" fill="var(--amber)" className="text-xs">Visceral fat</text>
    </svg>
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
    pending: true,
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
                {f.pending && (
                  <p className="text-xs text-subtle mt-4 uppercase tracking-widest">
                    Illustration shown, real capture pending
                  </p>
                )}
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
