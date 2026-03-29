import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import {
  APP_NAME,
  APP_TAGLINE,
  DEVELOPER_COUNTRY,
  DEVELOPER_NAME,
  PLAY_STORE_UPDATED_AT,
  PLAY_STORE_URL,
  SUPPORT_EMAIL
} from "@/lib/site";

import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${APP_NAME} | Fast and Secure VPN`,
    template: `%s | ${APP_NAME}`
  },
  description:
    "Official web presence for My Tunnel Proxy, featuring the Play Store-inspired homepage and privacy policy.",
  applicationName: APP_NAME,
  icons: {
    icon: "/brand/icon.png",
    apple: "/brand/icon.png"
  },
  openGraph: {
    title: `${APP_NAME} | ${APP_TAGLINE}`,
    description:
      "Explore the Play Store-inspired homepage for My Tunnel Proxy and read the current privacy policy.",
    images: ["/brand/icon.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} | ${APP_TAGLINE}`,
    description:
      "Explore the Play Store-inspired homepage for My Tunnel Proxy and read the current privacy policy.",
    images: ["/brand/icon.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <div className="site-background" aria-hidden="true" />
        <header className="site-header">
          <div className="shell header-shell">
            <Link href="/" className="brand-link" aria-label={`${APP_NAME} home`}>
              <span className="brand-badge">
                <Image
                  src="/brand/icon.png"
                  alt=""
                  width={48}
                  height={48}
                  className="brand-icon"
                />
              </span>
              <span className="brand-copy">
                <strong>{APP_NAME}</strong>
                <span>{APP_TAGLINE}</span>
              </span>
            </Link>

            <nav className="nav-links" aria-label="Primary">
              <Link href="/">Overview</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="nav-cta"
              >
                Google Play
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="shell footer-shell">
            <div>
              <p className="footer-title">{APP_NAME}</p>
              <p className="footer-copy">
                A Play Store-inspired web presence for the VPN experience published by{" "}
                {DEVELOPER_NAME}.
              </p>
            </div>

            <div className="footer-meta">
              <p>
                Google Play listing updated on <strong>{PLAY_STORE_UPDATED_AT}</strong>.
              </p>
              <p>
                Contact:{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="footer-link">
                  {SUPPORT_EMAIL}
                </a>
              </p>
              <p>
                Developer location: <strong>{DEVELOPER_COUNTRY}</strong>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
