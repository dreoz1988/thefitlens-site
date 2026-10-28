import type { Metadata } from "next";
import Link from "next/link";
import { devices, features, type HomeSection } from "@/content/product";
import { PendingPlaceholder, ProductFigure, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "The Fit Lens | Body composition, not just weight",
  description:
    "See your weight trend and how far you are from your goal, log food by barcode, by weight or by search, and check packaged foods before you buy. Android app in private beta.",
};

const ctaClass =
  "inline-flex min-h-12 items-center px-8 font-medium transition-colors bg-[var(--teal)] text-background " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--teal)]";

const FAQS = [
  {
    q: "What hardware do I need?",
    a: "A supported Bluetooth body composition scale. The private beta currently asks for an Etekcity smart scale and a Renpho smart tape. The compatibility page lists every supported model.",
  },
  {
    q: "Is it available on iPhone?",
    a: "Not yet. The app is Android-only.",
  },
  {
    q: "Is this medical advice?",
    a: "No. The Fit Lens is an informational tracking tool. It does not diagnose or treat anything, and it does not replace a licensed healthcare provider. Details are in the Terms of Service.",
  },
  {
    q: "What happens to my health data?",
    a: "It is used to run the features you use. It is not sold. The Privacy Policy explains what is collected and who processes it.",
  },
];

/** Published features for one outline section, plus preview-only placeholders. */
function sectionFeatures(section: HomeSection) {
  const inSection = features.filter((f) => f.section === section);
  return {
    withImage: inSection.filter((f) => f.status === "available" && f.image),
    textOnly: inSection.filter((f) => f.status === "available" && !f.image),
    pending: inSection.filter((f) => f.status !== "available"),
  };
}

function FeatureRows({ section }: { section: HomeSection }) {
  const { withImage, textOnly, pending } = sectionFeatures(section);
  return (
    <>
      {withImage.map((f) => {
        const narrow = f.image!.height > f.image!.width;
        return (
          <article
            key={f.id}
            className={`border-t border-border py-12 ${narrow ? "grid md:grid-cols-2 gap-10 items-center" : ""}`}
          >
            <div className={narrow ? "" : "max-w-2xl mb-8"}>
              <h3 className="text-2xl font-medium tracking-tight mb-3">{f.heading}</h3>
              <p className="text-muted leading-relaxed max-w-prose">{f.body}</p>
            </div>
            <div className={narrow ? "flex justify-center" : ""}>
              <ProductFigure image={f.image!} narrow={narrow} />
            </div>
          </article>
        );
      })}
      {textOnly.length > 0 && (
        <div className="border-t border-border py-12 grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {textOnly.map((f) => (
            <div key={f.id}>
              <h3 className="text-lg font-medium mb-2">{f.heading}</h3>
              <p className="text-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      )}
      {pending.length > 0 && (
        <div className="pb-4 space-y-3">
          {pending.map((f) => (
            <PendingPlaceholder key={f.id} label={`${f.heading} (${f.status})`} note={f.pendingNote} />
          ))}
        </div>
      )}
    </>
  );
}

export default function Home() {
  const supportedDevices = devices.filter((d) => d.status === "available");

  return (
    <main id="main" tabIndex={-1} className="min-h-screen bg-background text-foreground focus:outline-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SiteHeader current="home" />

        {/* 1. Hero */}
        {/* Layout follows hero concept B (2026-10-28): centered text over the image. */}
        <section aria-labelledby="hero-heading" className="pt-12 pb-10 md:pt-16 md:pb-12 max-w-4xl mx-auto text-center">
          <h1 id="hero-heading" className="text-4xl md:text-7xl font-semibold tracking-tight leading-tight mb-6">
            Your body is the scoreboard.
          </h1>
          <p className="text-muted text-lg md:text-xl leading-relaxed mb-4 max-w-3xl mx-auto">
            See your weight trend and how far you are from your goal. Log food by barcode, by weight or by
            search, and check packaged foods before you buy.
          </p>
          <p className="text-subtle mb-10">Android only. Requires a supported Bluetooth body composition scale.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 items-center justify-center">
            <Link href="/beta#request" className={ctaClass}>
              Request beta access
            </Link>
            <Link href="/compatibility" className="inline-flex min-h-11 items-center text-muted underline underline-offset-4 hover:text-foreground">
              Check compatibility
            </Link>
          </div>
        </section>

        {/* 2. What the app does */}
        <section id="features" aria-labelledby="what-heading" className="scroll-mt-12 border-t border-border pt-12">
          <h2 id="what-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">What the app does</h2>
          <FeatureRows section="what" />
        </section>

        {/* 2b. Track more than weight (its own section, added 2026-10-28) */}
        {features
          .filter((f) => f.section === "beyond-weight" && f.status === "available" && f.image)
          .map((f) => (
            <section
              key={f.id}
              id="more-than-weight"
              aria-labelledby="beyond-weight-heading"
              className="scroll-mt-12 border-t border-border pt-12 mt-8 pb-4"
            >
              <h2 id="beyond-weight-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                {f.heading}
              </h2>
              <p className="text-muted leading-relaxed max-w-prose mb-8">{f.body}</p>
              <ProductFigure image={f.image!} />
            </section>
          ))}

        {/* 3. Connected data */}
        <section id="connected" aria-labelledby="connected-heading" className="scroll-mt-12 border-t border-border pt-12 mt-8">
          <h2 id="connected-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Connected data</h2>
          <FeatureRows section="connected" />
        </section>

        {/* 4. Compatibility */}
        <section id="compatibility" aria-labelledby="compat-heading" className="scroll-mt-12 border-t border-border py-12 mt-8">
          <h2 id="compat-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Compatibility</h2>
          <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4 mb-8">
            {supportedDevices.map((d) => (
              <li key={d.id}>
                <p className="text-sm text-muted">{d.kind}</p>
                <p className="font-medium">
                  {d.brand} {d.model}
                </p>
              </li>
            ))}
          </ul>
          <Link href="/compatibility" className="inline-flex min-h-11 items-center underline underline-offset-4">
            Full compatibility details
          </Link>
        </section>

        {/* 5. Closing: questions, then the call to action */}
        <section aria-labelledby="faq-heading" className="py-12 border-t border-border">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Before you sign up</h2>
          <div className="max-w-2xl divide-y divide-border mb-16">
            {FAQS.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex min-h-12 items-center justify-between gap-4 py-3 cursor-pointer list-none font-medium">
                  {item.q}
                  <span aria-hidden="true" className="text-muted text-xl leading-none group-open:hidden">+</span>
                  <span aria-hidden="true" className="text-muted text-xl leading-none hidden group-open:inline">−</span>
                </summary>
                <p className="text-muted pb-5 max-w-prose">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Request beta access</h2>
            <p className="text-muted mb-8">Android, plus a supported Bluetooth scale. Hardware details are on the signup page.</p>
            <Link href="/beta#request" className={ctaClass}>
              Request beta access
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
