import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  APP_NAME,
  APP_TAGLINE,
  DEVELOPER_COUNTRY,
  DEVELOPER_NAME,
  PLAY_STORE_UPDATED_AT,
  PLAY_STORE_URL,
  PRIVACY_POLICY_EFFECTIVE_AT,
  SUPPORT_EMAIL,
  screenshots
} from "@/lib/site";

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    paragraphs: [
      `${APP_NAME} is published on Google Play by ${DEVELOPER_NAME}. This privacy policy explains how the website and the currently disclosed app experience handle privacy and personal information.`,
      `As of the current Google Play listing, the published data-safety disclosure states that no user data is collected, no user data is shared with third parties, and data is encrypted in transit.`
    ]
  },
  {
    id: "data-practices",
    title: "2. Information we do not collect through the app",
    paragraphs: [
      "Based on the current Play Store disclosure and app description, we do not collect personal information, browsing history, traffic contents, or activity profiles through the app experience described on the listing.",
      "This website is informational. It does not ask visitors to create an account, submit forms, or use embedded marketing trackers."
    ]
  },
  {
    id: "support",
    title: "3. Support communications",
    paragraphs: [
      `If you contact support at ${SUPPORT_EMAIL}, we will receive your email address and any information you choose to include in your message.`,
      "Support correspondence is used only to respond to questions, troubleshoot issues, and maintain service communications."
    ]
  },
  {
    id: "usage",
    title: "4. How information is used",
    paragraphs: [
      "Because the current app disclosure states that no user data is collected, we do not use app activity data to build profiles, sell personal information, or share personal information with advertisers or data brokers.",
      "Any information voluntarily sent to us by email is used solely to respond to the specific request you make."
    ]
  },
  {
    id: "security",
    title: "5. Security",
    paragraphs: [
      "The current Google Play data-safety section states that data is encrypted in transit. We also keep this website lightweight so visitors can review product information without unnecessary data exposure.",
      "No method of transmission or storage is perfect, but we work to limit access to operational materials and support communications to authorized parties."
    ]
  },
  {
    id: "children",
    title: "6. Children's privacy",
    paragraphs: [
      "We do not knowingly collect personal information from children through this website.",
      "If you believe a child has provided personal information through support email, contact us and we will review the request."
    ]
  },
  {
    id: "international",
    title: "7. International use",
    paragraphs: [
      `${APP_NAME} is associated with a developer listing in ${DEVELOPER_COUNTRY}. If you access the website or app from another region, your information may be processed in accordance with applicable laws in the locations where the service operates.`
    ]
  },
  {
    id: "changes",
    title: "8. Changes to this policy",
    paragraphs: [
      "We may update this privacy policy if the app's features, support workflows, or published data practices change.",
      "When changes are made, the effective date at the top of this page will be updated so visitors can see when the policy was last revised."
    ]
  }
] as const;

const quickFacts = [
  ["Last modified", PRIVACY_POLICY_EFFECTIVE_AT],
  ["App", APP_NAME],
  ["Developer", DEVELOPER_NAME],
  ["Support", SUPPORT_EMAIL],
  ["Listing updated", PLAY_STORE_UPDATED_AT]
] as const;

const privacySignals = [
  "No data collected",
  "No data shared with third parties",
  "Data encrypted in transit"
] as const;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for My Tunnel Proxy, including the current Google Play data-safety claims and support contact details."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-root">
      <section className="reference-hero policy-reference-hero">
        <div className="shell reference-hero-shell">
          <div className="hero-visual-pane policy-visual-pane">
            <span className="floating-tag">Last modified: {PRIVACY_POLICY_EFFECTIVE_AT}</span>

            <div className="device-panel device-panel-main">
              <Image
                src="/screenshots/shot-3.png"
                alt={screenshots[2].alt}
                width={260}
                height={592}
                className="device-image"
              />
            </div>

            <div className="brand-orb policy-brand-orb">
              <Image
                src="/brand/icon.png"
                alt={`${APP_NAME} logo`}
                width={480}
                height={480}
                className="brand-orb-image"
              />
            </div>

            <div className="detail-card detail-card-left">
              <span>Published app</span>
              <strong>{APP_TAGLINE}</strong>
            </div>

            <div className="detail-card detail-card-right">
              <span>Current disclosure</span>
              <strong>No data collected</strong>
            </div>
          </div>

          <div className="hero-copy-pane policy-copy-pane">
            <span className="eyebrow">Privacy Policy</span>
            <h1>How My Tunnel Proxy handles privacy, support, and public data disclosures.</h1>
            <p className="hero-copy-text">
              This page now follows the same website system as the homepage so it feels
              like part of one product site, much closer to the overall UI rhythm of the
              HTTP Injector website.
            </p>
            <p className="hero-copy-text">
              The contents are still based on My Tunnel Proxy&apos;s own Play Store listing,
              app support email, and current data-safety statements.
            </p>

            <div className="hero-actions">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                View on Google Play
              </a>
              <Link href="/" className="button button-secondary">
                Back to Homepage
              </Link>
            </div>

            <div className="policy-signal-row">
              {privacySignals.map((item) => (
                <span key={item} className="policy-signal-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell policy-reference-shell">
          <aside className="policy-summary-card">
            <div>
              <span className="eyebrow">Quick facts</span>
              <h2>Policy summary</h2>
            </div>

            <dl className="policy-fact-list">
              {quickFacts.map(([label, value]) => (
                <div key={label} className="policy-fact-row">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <div className="policy-links-card">
              <p className="policy-links-title">Jump to section</p>
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="policy-anchor-link">
                  {section.title}
                </a>
              ))}
            </div>
          </aside>

          <div className="policy-article-card">
            <div className="policy-article-intro">
              <p>
                The current Google Play disclosure for {APP_NAME} states:{" "}
                <strong>no data shared</strong>, <strong>no data collected</strong>, and{" "}
                <strong>data encrypted in transit</strong>.
              </p>
            </div>

            <div className="policy-section-list">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="policy-section-block">
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>

            <div className="policy-contact-card">
              <h2>Contact</h2>
              <p>
                For privacy questions or support requests, email{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
              </p>
              <p>
                You can also review the current public app listing on{" "}
                <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                  Google Play
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell download-band">
          <div className="download-brand">
            <Image
              src="/brand/icon.png"
              alt={`${APP_NAME} logo`}
              width={480}
              height={480}
              className="download-brand-image"
            />
            <div>
              <span className="eyebrow">Official app page</span>
              <h2>Read the policy here, then continue to the My Tunnel Proxy listing.</h2>
              <p>
                This privacy page is styled to match the rest of the site while staying
                grounded in the public information currently shown on Google Play.
              </p>
            </div>
          </div>

          <div className="cta-actions">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Open Google Play
            </a>
            <Link href="/" className="button button-secondary">
              Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
