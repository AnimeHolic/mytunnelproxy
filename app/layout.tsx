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
  PLAY_STORE_DOWNLOADS,
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

            <div className="header-menu" aria-label="Site highlights">
              <p className="header-menu-title">{APP_TAGLINE}</p>
              <div className="header-chip-row">
                <span className="header-chip">{PLAY_STORE_DOWNLOADS} installs</span>
                <span className="header-chip">No data collected</span>
                <span className="header-chip">Encrypted in transit</span>
              </div>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="shell footer-shell">
            <div className="footer-brand">
              <div className="footer-brand-row">
                <Image
                  src="/brand/icon.png"
                  alt=""
                  width={56}
                  height={56}
                  className="footer-brand-icon"
                />
                <div>
                  <p className="footer-title">{APP_NAME}</p>
                  <p className="footer-copy">
                    {APP_TAGLINE}
                  </p>
                </div>
              </div>
              <p className="footer-description">
                {APP_NAME} is a VPN experience presented on the web using My Tunnel
                Proxy&apos;s Play Store branding, screenshots, and privacy signals.
              </p>
            </div>

            <div className="footer-columns">
              <div className="footer-column">
                <p className="footer-column-title">Services</p>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  Android App
                </a>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  Google Play Listing
                </a>
              </div>

              <div className="footer-column">
                <p className="footer-column-title">About Us</p>
                <Link href="/" className="footer-link">
                  Homepage
                </Link>
                <Link href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
                <p className="footer-note">Published by {DEVELOPER_NAME}</p>
              </div>

              <div className="footer-column">
                <p className="footer-column-title">Contact Info</p>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="footer-link">
                  {SUPPORT_EMAIL}
                </a>
                <p className="footer-note">Developer location: {DEVELOPER_COUNTRY}</p>
                <p className="footer-note">
                  Listing updated: {PLAY_STORE_UPDATED_AT}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
