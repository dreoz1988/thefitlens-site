import type { Metadata } from "next";
import Link from "next/link";
import { devices, healthConnect, platforms } from "@/content/product";
import { PendingPlaceholder, SiteFooter, SiteHeader, StatusBadge } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Compatibility | The Fit Lens",
  description:
    "Supported Bluetooth scales, smart tape and Health Connect data for The Fit Lens Android app.",
};

export default function CompatibilityPage() {
  // Only devices confirmed in the released app are listed as supported.
  const supportedDevices = devices.filter((d) => d.status === "available");
  const notYetSupported = devices.filter((d) => d.status === "beta" || d.status === "planned");
  const shownPlatforms = platforms.filter((p) => p.status !== "unverified");
  const pendingPlatforms = platforms.filter((p) => p.status === "unverified");

  return (
    <main id="main" tabIndex={-1} className="min-h-screen bg-background text-foreground focus:outline-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SiteHeader current="compatibility" />

        <section className="pt-10 pb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Compatibility</h1>
          <p className="text-muted text-lg leading-relaxed max-w-prose">
            What works with The Fit Lens today. &ldquo;Available&rdquo; means it is in the current beta
            release. &ldquo;In development&rdquo; means it is being built and is not in the beta yet.
          </p>
        </section>

        <section aria-labelledby="platform-heading" className="border-t border-border py-10">
          <h2 id="platform-heading" className="text-2xl font-semibold tracking-tight mb-6">Phone</h2>
          <ul className="space-y-3">
            {shownPlatforms.map((p) => (
              <li key={p.id} className="flex flex-wrap items-center gap-3">
                <span className="font-medium">{p.label}</span>
                <StatusBadge status={p.status} />
              </li>
            ))}
          </ul>
          {pendingPlatforms.map((p) => (
            <div key={p.id} className="mt-4">
              <PendingPlaceholder label={p.label} note={p.note} />
            </div>
          ))}
        </section>

        <section aria-labelledby="device-heading" className="border-t border-border py-10">
          <h2 id="device-heading" className="text-2xl font-semibold tracking-tight mb-2">Bluetooth devices</h2>
          <p className="text-muted mb-6 max-w-prose">
            Body composition comes from the scale. The smart tape is optional and adds circumference
            measurements.
          </p>
          <ul className="divide-y divide-border border-y border-border">
            {supportedDevices.map((d) => (
              <li key={d.id} className="py-5 grid gap-2 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <p className="text-sm text-muted">{d.kind}</p>
                  <p className="text-lg font-medium">
                    {d.brand} {d.model}
                  </p>
                  <p className="text-muted mt-1 max-w-prose">{d.measures}</p>
                  {d.id === "renpho-rmsb01" && (
                    <p className="text-sm text-subtle mt-1">The beta signup form currently asks for an Etekcity scale.</p>
                  )}
                </div>
                <div>
                  <StatusBadge status={d.status} />
                </div>
              </li>
            ))}
          </ul>
          {notYetSupported.length > 0 && (
            <div className="mt-8">
              <h3 className="font-medium mb-3">Not yet supported</h3>
              <ul className="space-y-2 text-muted">
                {notYetSupported.map((d) => (
                  <li key={d.id}>
                    {d.brand} {d.model}. {d.kind}. Not available in the beta yet.
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section aria-labelledby="hc-heading" className="border-t border-border py-10">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2 id="hc-heading" className="text-2xl font-semibold tracking-tight">Health Connect</h2>
            <StatusBadge status={healthConnect.status} />
          </div>
          <p className="text-muted mb-6 max-w-prose">
            Activity, sleep and heart data come from Android Health Connect, from whichever watch or app
            writes there. {healthConnect.access} You choose which types to share.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-3">Needed for activity tracking</h3>
              <ul className="text-muted space-y-1 list-disc pl-5">
                {healthConnect.required.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Used when available</h3>
              <ul className="text-muted space-y-1 list-disc pl-5">
                {healthConnect.optional.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-10">
          <p className="text-muted max-w-prose">
            Have a device that is not listed?{" "}
            <Link href="/feedback" className="inline-flex min-h-11 items-center underline underline-offset-4 text-foreground">
              Tell us which one
            </Link>
          </p>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
