import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Fit Lens — Body Composition, Not Just Weight",
  description:
    "The Fit Lens splits every weigh-in into fat, muscle, and visceral fat, then coaches on what actually changed. Android, Bluetooth smart scale and body tape required. Private beta.",
};

function BodyScoreArt() {
  return (
    <svg viewBox="0 0 300 200" role="img" aria-label="Body Score gauge showing 7.9 out of 10" className="w-full h-auto max-w-xs">
      <path d="M35,170 A110,110 0 0 1 265,170" fill="none" className="stroke-border" strokeWidth="10" strokeLinecap="round" />
      <path d="M35,170 A110,110 0 0 1 223,79" fill="none" stroke="var(--teal)" strokeWidth="10" strokeLinecap="round" />
      <text x="150" y="140" textAnchor="middle" fill="var(--foreground)" fontSize="44" fontWeight="600">7.9</text>
      <text x="150" y="168" textAnchor="middle" className="fill-subtle text-xs">Body Score</text>
    </svg>
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

function Glp1Art() {
  return (
    <svg viewBox="0 0 360 180" role="img" aria-label="Chart of weight declining while lean mass is preserved across a GLP-1 protocol" className="w-full h-auto max-w-xs">
      <line x1="15" y1="90" x2="245" y2="90" className="stroke-border" strokeDasharray="2 6" />
      <polyline points="15,60 55,68 95,78 135,90 175,98 215,108" fill="none" stroke="var(--coral)" strokeWidth="2" />
      <polyline points="15,60 55,62 95,60 135,64 175,61 215,63" fill="none" stroke="var(--teal)" strokeWidth="2" />
      <circle cx="215" cy="108" r="3" fill="var(--coral)" />
      <circle cx="215" cy="63" r="3" fill="var(--teal)" />
      <text x="224" y="66" fill="var(--teal)" className="text-xs">Lean mass</text>
      <text x="224" y="112" fill="var(--coral)" className="text-xs">Weight</text>
      <line x1="95" y1="30" x2="95" y2="150" className="stroke-amber-400/40" strokeWidth="1" strokeDasharray="3 4" />
      <text x="95" y="20" textAnchor="middle" fill="var(--amber)" className="text-xs">Dose</text>
    </svg>
  );
}

function FoodScanArt() {
  return (
    <svg viewBox="0 0 300 180" role="img" aria-label="Barcode scan resolving into a protein, carb, and fat breakdown" className="w-full h-auto max-w-xs">
      {[0, 4, 7, 9, 13, 16, 18, 22, 25, 29, 32, 34, 38].map((x, i) => (
        <rect key={x} x={20 + x} y="50" width={i % 3 === 0 ? 3 : 1.5} height="70" className="fill-subtle" />
      ))}
      <path d="M100,85 L150,85" className="stroke-border" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className="fill-subtle" />
        </marker>
      </defs>
      <rect x="165" y="60" width="110" height="16" rx="2" fill="var(--teal)" />
      <rect x="165" y="82" width="80" height="16" rx="2" fill="var(--azure)" />
      <rect x="165" y="104" width="50" height="16" rx="2" fill="var(--amber)" />
      <text x="165" y="132" className="fill-subtle text-xs">Protein · Carbs · Fat</text>
    </svg>
  );
}

function ReportArt() {
  return (
    <svg viewBox="0 0 240 200" role="img" aria-label="Health summary PDF with a trend chart and a few lines of text" className="w-full h-auto max-w-xs">
      <rect x="30" y="10" width="160" height="180" rx="4" fill="none" className="stroke-border" strokeWidth="1.5" />
      <rect x="30" y="10" width="160" height="28" rx="4" fill="var(--surface)" className="stroke-border" strokeWidth="1.5" />
      <text x="44" y="28" className="fill-foreground text-xs" fontWeight="600">Health Summary</text>
      <polyline points="46,110 70,100 94,106 118,88 142,92 166,76" fill="none" stroke="var(--teal)" strokeWidth="2" />
      <line x1="46" y1="130" x2="166" y2="130" className="stroke-border" strokeWidth="1" />
      <line x1="46" y1="142" x2="150" y2="142" className="stroke-border" strokeWidth="1" />
      <line x1="46" y1="154" x2="160" y2="154" className="stroke-border" strokeWidth="1" />
      <line x1="46" y1="166" x2="130" y2="166" className="stroke-border" strokeWidth="1" />
      <rect x="150" y="150" width="34" height="16" rx="2" fill="var(--coral)" />
      <text x="167" y="161" textAnchor="middle" fill="var(--background)" className="text-xs" fontWeight="600">PDF</text>
    </svg>
  );
}

const FEATURES = [
  {
    title: "Body Score",
    art: BodyScoreArt,
    body: "One number that blends composition, activity, and sleep into a single read of the week. Not a mood ring, a weighted score you can trace back to what moved it.",
  },
  {
    title: "3D body composition",
    art: AvatarArt,
    body: "Your scale readings mapped onto an annotated 3D model. Tap any region for the number behind it: fat, muscle, or visceral fat at that site.",
  },
  {
    title: "GLP-1 dashboard",
    art: Glp1Art,
    body: "Weight and lean mass tracked side by side, dosed protocol overlaid. The question isn't whether the number is dropping, it's what kind of mass you're losing.",
  },
  {
    title: "Food scanning",
    art: FoodScanArt,
    body: "Barcode or food scale, logged in one step. Protein tracked against a target that adjusts as your weigh-ins come in, not a fixed number set once at onboarding.",
  },
  {
    title: "Health report PDF",
    art: ReportArt,
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
          {FEATURES.map((f, i) => {
            const Art = f.art;
            return (
              <div
                key={f.title}
                className={`grid md:grid-cols-2 gap-x-16 gap-y-8 items-center border-t border-border py-12 md:py-16 ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <h2 className="text-2xl font-medium tracking-tight mb-3">{f.title}</h2>
                  <p className="text-muted max-w-prose">{f.body}</p>
                </div>
                <div className={`flex justify-center md:justify-start ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <Art />
                </div>
              </div>
            );
          })}
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
