import type { Metadata } from "next";
import { BetaForm } from "./beta-form";

export const metadata: Metadata = {
  title: "Request Beta Access — The Fit Lens",
  description:
    "The Fit Lens tracks fat, muscle, and visceral fat, not just weight. Android-first. Works with your existing wearable and smart scale. No new hardware required. Request beta access.",
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
        className="stroke-neutral-800"
        strokeDasharray="2 6"
      />

      {/* scale weight: barely moves */}
      <polyline
        points="20,160 67,165 114,160 161,168 208,163 255,170 302,166 349,173 396,170 443,176 490,173 537,179"
        fill="none"
        className="stroke-neutral-600"
        strokeWidth="1.5"
      />
      {/* fat mass: falls */}
      <polyline
        points="20,160 67,170 114,165 161,179 208,192 255,189 302,211 349,224 396,240 443,259 490,253 537,275"
        fill="none"
        className="stroke-neutral-200"
        strokeWidth="2"
      />
      {/* muscle mass: rises */}
      <polyline
        points="20,160 67,155 114,158 161,149 208,144 255,147 302,138 349,133 396,125 443,122 490,123 537,112"
        fill="none"
        className="stroke-inverse"
        strokeWidth="2"
      />

      <circle cx="537" cy="112" r="3" className="fill-inverse" />
      <circle cx="537" cy="179" r="3" className="fill-neutral-600" />
      <circle cx="537" cy="275" r="3" className="fill-neutral-200" />

      <text x="552" y="116" className="fill-inverse text-xs">Muscle</text>
      <text x="552" y="183" className="fill-neutral-500 text-xs">Scale weight</text>
      <text x="552" y="279" className="fill-neutral-200 text-xs">Fat mass</text>

      <text x="20" y="308" className="fill-neutral-600 text-xs">Week 0</text>
      <text x="537" y="308" textAnchor="end" className="fill-neutral-600 text-xs">Week 12</text>
    </svg>
  );
}

const DIFFERENTIATORS = [
  {
    n: "01",
    title: "Composition, not weight",
    body: "Body fat, muscle mass, and visceral fat from your BIA scale. Every weigh-in becomes three numbers that mean something, not one that doesn't.",
  },
  {
    n: "02",
    title: "The hardware you already own",
    body: "Your wearable, plus Renpho and Etekcity scales, with more being added. Nothing proprietary, nothing new to buy.",
  },
  {
    n: "03",
    title: "Coaching that ends in an action",
    body: "A daily read of your data that tells you what to do next. Not another chart to interpret.",
  },
];

export default function BetaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <header className="py-8">
          <a href="/" className="text-sm font-semibold tracking-tight hover:text-neutral-300">
            The Fit Lens
          </a>
        </header>

        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center pt-12 pb-24 md:pt-20 md:pb-32">
          <div className="min-w-0">
            <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">Private beta</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              <span className="block">Lose fat.</span>
              <span className="block">Keep muscle.</span>
              <span className="block">Know the difference.</span>
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-4 max-w-prose">
              The scale says you&apos;re down. It can&apos;t say what you lost. The Fit
              Lens splits every weigh-in into fat, muscle, and visceral fat, so a
              cut, a recomp, or a GLP-1 protocol is judged on what actually changed.
            </p>
            <p className="text-neutral-500 mb-10 max-w-prose">
              Built for Android. Works with your existing wearable and smart
              scale. No new hardware required.
            </p>
            <a
              href="#request"
              className="inline-block border border-neutral-700 px-8 py-3 font-medium
                         hover:border-white transition-colors"
            >
              Request beta access
            </a>
          </div>
          <figure className="min-w-0">
            <CompositionChart />
            <figcaption className="text-sm text-neutral-500 mt-4">
              Twelve weeks. The scale line hides the other two.
            </figcaption>
          </figure>
        </section>

        {/* What makes it different */}
        <section className="pb-24 md:pb-32">
          {DIFFERENTIATORS.map((d) => (
            <div
              key={d.n}
              className="grid sm:grid-cols-[4rem_16rem_1fr] gap-x-8 gap-y-2 border-t border-neutral-800 py-8"
            >
              <span className="text-sm text-neutral-600 pt-1">{d.n}</span>
              <h2 className="text-lg font-medium tracking-tight">{d.title}</h2>
              <p className="text-neutral-400 max-w-prose">{d.body}</p>
            </div>
          ))}
        </section>

        {/* Signup */}
        <section id="request" className="pb-24 md:pb-32 scroll-mt-12">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
              Request beta access
            </h2>
            <p className="text-neutral-400 mb-12">
              Spots are limited, so sign up now and we&apos;ll email you once
              there&apos;s an open spot for you.
            </p>
            <BetaForm />
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
