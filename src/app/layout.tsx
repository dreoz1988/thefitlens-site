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
  title: "The Fit Lens — Body Composition Tracking",
  description: "Track body composition, nutrition, and activity with AI-powered coaching. Android-first health app built for real results.",
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
        <AuthFragmentForwarder />
        {children}
      </body>
    </html>
  );
}
