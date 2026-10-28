import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="min-h-screen bg-background text-foreground focus:outline-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SiteHeader />
        <section className="py-20 max-w-xl">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Page not found</h1>
          <p className="text-muted mb-8">This page doesn&apos;t exist or has moved.</p>
          <Link href="/" className="inline-flex min-h-11 items-center underline underline-offset-4">
            Go to the home page
          </Link>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
