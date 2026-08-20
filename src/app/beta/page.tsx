import type { Metadata } from "next";
import Link from "next/link";
import { BetaForm } from "./beta-form";

export const metadata: Metadata = {
  title: "Request Beta Access — The Fit Lens",
  description:
    "The Fit Lens tracks fat, muscle, and visceral fat, not just weight. Android-first. Beta testing requires a Bluetooth body scale and body tape. Request beta access.",
};

function CompositionChart() {
  return (
    <svg
      viewBox="0 95 640 235"
      role="img"
      aria-label="Line chart of change over twelve weeks: scale weight nearly flat, fat mass falling, muscle mass rising"
      className="w-full h-auto"
    >
      {/* baseline: week zero */}
      <line
        x1="20"
        y1="160"
        x2="540"
        y2="160"
        className="stroke-border"
        strokeDasharray="2 6"
      />

      {/* scale weight: barely moves — the boring line, deliberately muted */}
      <polyline
        points="20,160 67,165 114,160 161,168 208,163 255,170 302,166 349,173 396,170 443,176 490,173 537,179"
        fill="none"
        className="stroke-subtle"
        strokeWidth="1.5"
      />
      {/* fat mass: falls */}
      <polyline
        points="20,160 67,170 114,165 161,179 208,192 255,189 302,211 349,224 396,240 443,259 490,253 537,275"
        fill="none"
        stroke="var(--coral)"
        strokeWidth="2"
      />
      {/* muscle mass: rises */}
      <polyline
        points="20,160 67,155 114,158 161,149 208,144 255,147 302,138 349,133 396,125 443,122 490,123 537,112"
        fill="none"
        stroke="var(--teal)"
        strokeWidth="2"
      />

      <circle cx="537" cy="112" r="3" fill="var(--teal)" />
      <circle cx="537" cy="179" r="3" className="fill-subtle" />
      <circle cx="537" cy="275" r="3" fill="var(--coral)" />

      <text x="552" y="116" fill="var(--teal)" className="text-xs">Muscle</text>
      <text x="552" y="183" className="fill-subtle text-xs">Scale weight</text>
      <text x="552" y="279" fill="var(--coral)" className="text-xs">Fat mass</text>

      <text x="20" y="308" className="fill-subtle text-xs">Week 0</text>
      <text x="537" y="308" textAnchor="end" className="fill-subtle text-xs">Week 12</text>
    </svg>
  );
}

const DIFFERENTIATORS = [
  {
    n: "01",
    accent: "var(--teal)",
    title: "Composition, not weight",
    body: "Body fat, muscle mass, and visceral fat from your BIA scale. Every weigh-in becomes three numbers that mean something, not one that doesn't.",
  },
  {
    n: "02",
    accent: "var(--azure)",
    title: "Off-the-shelf hardware",
    body: "Renpho and Etekcity Bluetooth devices, not anything proprietary or sold by us. Beta testing needs one of each; more brands are being added.",
  },
  {
    n: "03",
    accent: "var(--amber)",
    title: "Coaching that ends in an action",
    body: "A daily read of your data that tells you what to do next. Not another chart to interpret.",
  },
];

const HARDWARE = [
  {
    accent: "var(--teal)",
    name: "Etekcity Bluetooth smart scale",
    detail: "Weight and body composition via bioelectrical impedance.",
    href: "https://etekcity.com/products/smart-fitness-scale-esf551",
  },
  {
    accent: "var(--coral)",
    name: "Renpho Bluetooth body tape",
    detail: "Circumference: waist, hips, arms.",
    href: "https://renpho.com/pages/renpho-smart-body-tape-measure-2",
  },
];

export default function BetaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        <header className="py-8 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight hover:text-muted transition-colors">
            The Fit Lens
          </Link>
          <nav className="text-sm text-muted flex gap-6">
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <a href="#request" className="hover:text-foreground transition-colors">
              Request access
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center pt-12 pb-24 md:pt-20 md:pb-32">
          <div className="min-w-0">
            <p
              className="text-sm uppercase tracking-widest mb-6"
              style={{ color: "var(--teal)" }}
            >
              Private beta
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              <span className="block">Lose fat.</span>
              <span className="block">Keep muscle.</span>
              <span className="block">Know the difference.</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-4 max-w-prose">
              The scale says you&apos;re down. It can&apos;t say what you lost. The Fit
              Lens splits every weigh-in into fat, muscle, and visceral fat, so a
              cut, a recomp, or a GLP-1 protocol is judged on what actually changed.
            </p>
            <p className="text-subtle mb-10 max-w-prose">
              Built for Android. Beta testing requires a Bluetooth body scale
              and body tape, most people already own something close.{" "}
              <a href="#hardware" className="underline underline-offset-4 hover:text-muted transition-colors">
                Details below.
              </a>
            </p>
            <a
              href="#request"
              className="inline-block px-8 py-3 font-medium transition-colors"
              style={{ backgroundColor: "var(--teal)", color: "var(--background)" }}
            >
              Request beta access
            </a>
          </div>
          <figure className="min-w-0">
            <CompositionChart />
            <figcaption className="text-sm text-subtle mt-4">
              Twelve weeks. The scale line hides the other two.
            </figcaption>
          </figure>
        </section>

        {/* What makes it different */}
        <section className="pb-24 md:pb-32">
          {DIFFERENTIATORS.map((d) => (
            <div
              key={d.n}
              className="grid sm:grid-cols-[4rem_16rem_1fr] gap-x-8 gap-y-2 border-t border-border py-8"
            >
              <span className="text-sm font-medium pt-1" style={{ color: d.accent }}>
                {d.n}
              </span>
              <h2 className="text-lg font-medium tracking-tight">{d.title}</h2>
              <p className="text-muted max-w-prose">{d.body}</p>
            </div>
          ))}
        </section>

        {/* Hardware requirement — stated before the form, not inside it */}
        <section id="hardware" className="pb-24 md:pb-32 scroll-mt-12">
          <div className="max-w-2xl border border-border p-8 md:p-10">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "var(--amber)" }}>
              Hardware required
            </p>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight mb-3">
              Two Bluetooth devices, both required
            </h2>
            <p className="text-muted mb-8 max-w-prose">
              Body composition doesn&apos;t come from a phone. It comes from these
              two devices over Bluetooth. Without both, most of what the app
              does, fat, muscle, and visceral fat tracking, has nothing to
              read.
            </p>
            <ul className="space-y-5 mb-8">
              {HARDWARE.map((h) => (
                <li key={h.name} className="flex items-start gap-4">
                  <span
                    className="mt-1.5 size-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: h.accent }}
                    aria-hidden="true"
                  />
                  <span>
                    <a
                      href={h.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-4 hover:text-muted transition-colors"
                    >
                      {h.name}
                    </a>
                    <span className="block text-sm text-subtle mt-0.5">{h.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-subtle">
              Don&apos;t have these yet? The links above go to each
              manufacturer&apos;s product page. Come back and sign up once
              you&apos;ve got both, we&apos;ll be here.
            </p>
          </div>
        </section>

        {/* Signup */}
        <section id="request" className="pb-24 md:pb-32 scroll-mt-12">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
              Request beta access
            </h2>
            <p className="text-muted mb-12">
              Android only, and you&apos;ll need both devices above. Confirm
              both below and you&apos;re on the list.
            </p>
            <BetaForm />
          </div>
        </section>

        <footer className="border-t border-border py-10 text-xs text-subtle flex flex-wrap gap-x-6 gap-y-2 items-center">
          <Link href="/" className="hover:text-muted transition-colors">Home</Link>
          <Link href="/about" className="hover:text-muted transition-colors">About</Link>
          <Link href="/feedback" className="hover:text-muted transition-colors">Beta Feedback</Link>
          <a href="/privacy" className="hover:text-muted transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-muted transition-colors">Terms of Service</a>
          <a href="mailto:support@thefitlens.com" className="hover:text-muted transition-colors">
            support@thefitlens.com
          </a>
          <p className="w-full mt-2">© {new Date().getFullYear()} The Fit Lens LLC</p>
        </footer>
      </div>
    </main>
  );
}
