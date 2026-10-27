import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthFragmentForwarder } from "./auth-fragment-forwarder";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Fit Lens | Body composition tracking",
  description: "Track body composition, nutrition, and activity with AI coaching. Android app in private beta.",
  verification: {
    google: "Kw0Ld_H8GTiibaRH4N4q513MqQSlVuTLoxP4NbEu84Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:inline-flex focus:min-h-11 focus:items-center focus:px-4 focus:bg-[var(--teal)] focus:text-background focus:font-medium"
        >
          Skip to content
        </a>
        <AuthFragmentForwarder />
        {children}
      </body>
    </html>
  );
}
