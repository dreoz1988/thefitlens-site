import type { Metadata } from "next";
import Link from "next/link";
import { features, heroImage } from "@/content/product";
import { PendingPlaceholder, ProductFigure, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "The Fit Lens | Body composition, not just weight",
  description:
    "The Fit Lens splits every weigh-in into fat, muscle and visceral fat. Android app in private beta. Requires a supported Bluetooth body composition scale.",
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
    a: "Not yet. The app is Android-only and reads activity data through Health Connect.",
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

export default function Home() {
  const withImage = features.filter((f) => f.status === "available" && f.image);
  const textOnly = features.filter((f) => f.status === "available" && !f.image);
  const pending = features.filter((f) => f.status === "unverified");

  return (
    <main id="main" tabIndex={-1} className="min-h-screen bg-background text-foreground focus:outline-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SiteHeader current="home" />

        <section className="pt-12 pb-16 md:pt-20 md:pb-24 max-w-3xl">
          <p className="text-sm uppercase tracking-widest mb-6 text-[var(--teal)]">Private beta</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Your body is the scoreboard.
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-4 max-w-prose">
            Food is primary. Training is the multiplier. The Fit Lens reads your Bluetooth scale and splits
            every weigh-in into fat, muscle and visceral fat, tracked separately.
          </p>
          <p className="text-subtle mb-10 max-w-prose">
            Android only. Requires a supported Bluetooth body composition scale.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
            <Link href="/beta#request" className={ctaClass}>
              Request beta access
            </Link>
            <Link href="/compatibility" className="inline-flex min-h-11 items-center text-muted underline underline-offset-4 hover:text-foreground">
              Check compatibility
            </Link>
          </div>
        </section>

        <div className="pb-16 md:pb-24">
          <ProductFigure image={heroImage} priority />
        </div>

        <section id="features" aria-labelledby="features-heading" className="scroll-mt-12">
          <h2 id="features-heading" className="sr-only">What it tracks</h2>
          {withImage.map((f) => {
            const narrow = f.image!.height > f.image!.width;
            return (
              <article
                key={f.id}
                className={`border-t border-border py-12 md:py-16 ${narrow ? "grid md:grid-cols-2 gap-10 items-center" : ""}`}
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
        </section>

        <section aria-labelledby="more-heading" className="border-t border-border py-12 md:py-16">
          <h2 id="more-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
            Also in the app
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {textOnly.map((f) => (
              <div key={f.id}>
                <h3 className="text-lg font-medium mb-2">{f.heading}</h3>
                <p className="text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          {pending.length > 0 && (
            <div className="mt-10 space-y-3">
              {pending.map((f) => (
                <PendingPlaceholder key={f.id} label={f.heading} note={f.pendingNote} />
              ))}
            </div>
          )}
        </section>

        <section aria-labelledby="faq-heading" className="py-12 md:py-16 border-t border-border">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Before you sign up
          </h2>
          <div className="max-w-2xl divide-y divide-border">
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
        </section>

        <section className="py-12 md:py-16 border-t border-border">
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
