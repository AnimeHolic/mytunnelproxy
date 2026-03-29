import type { Metadata } from "next";
import Link from "next/link";

import {
  APP_NAME,
  DEVELOPER_COUNTRY,
  DEVELOPER_NAME,
  PLAY_STORE_UPDATED_AT,
  PLAY_STORE_URL,
  PRIVACY_POLICY_EFFECTIVE_AT,
  SUPPORT_EMAIL
} from "@/lib/site";

const sections = [
  {
    title: "Overview",
    paragraphs: [
      `${APP_NAME} is published on Google Play by ${DEVELOPER_NAME}. This privacy policy explains how the website and the currently disclosed app experience handle privacy and personal information.`,
      `As of the current Google Play listing, the app's published data-safety disclosure states that no user data is collected, no user data is shared with third parties, and data is encrypted in transit.`
    ]
  },
  {
    title: "Information we do not collect through the app",
    paragraphs: [
      "Based on the current Play Store disclosure and app description, we do not collect personal information, browsing history, traffic contents, or activity profiles through the app experience described on the listing.",
      "We do not ask users to create an account on this site, and this website does not include analytics dashboards, marketing trackers, or sign-up forms."
    ]
  },
  {
    title: "Support communications",
    paragraphs: [
      `If you contact support at ${SUPPORT_EMAIL}, we will receive your email address and any information you choose to include in your message.`,
      "We use support correspondence only to respond to inquiries, troubleshoot issues, and maintain service communications."
    ]
  },
  {
    title: "How information is used",
    paragraphs: [
      "Because the current app disclosure states that no user data is collected, we do not use app activity data to build profiles, sell personal information, or share personal information with advertisers or data brokers.",
      "Any information voluntarily sent to us by email is used solely to respond to the specific request you make."
    ]
  },
  {
    title: "Security",
    paragraphs: [
      "The current Google Play data-safety section states that data is encrypted in transit. We also aim to keep this website lightweight and informational so visitors can review product information without unnecessary data exposure.",
      "No method of internet transmission or storage is perfect, but we work to limit access to support communications and operational materials to authorized parties."
    ]
  },
  {
    title: "Children's privacy",
    paragraphs: [
      "We do not knowingly collect personal information from children through this website.",
      "If you believe a child has provided personal information through support email, contact us and we will review the request."
    ]
  },
  {
    title: "International use",
    paragraphs: [
      `${APP_NAME} is associated with a developer listing in ${DEVELOPER_COUNTRY}. If you access the website or app from another region, your information may be processed in accordance with applicable laws in the locations where the service operates.`
    ]
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this privacy policy if the app's features, data practices, or support workflows change.",
      "When changes are made, the effective date at the top of this page will be revised so visitors can see when the policy was last updated."
    ]
  }
] as const;

const quickFacts = [
  ["Effective date", PRIVACY_POLICY_EFFECTIVE_AT],
  ["App name", APP_NAME],
  ["Developer", DEVELOPER_NAME],
  ["Support email", SUPPORT_EMAIL],
  ["Play Store listing updated", PLAY_STORE_UPDATED_AT]
] as const;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for My Tunnel Proxy, including the current Google Play data-safety claims and support contact details."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-root">
      <section className="policy-hero">
        <div className="shell policy-hero-shell">
          <div className="policy-copy">
            <span className="eyebrow">Privacy Policy</span>
            <h1>Your privacy information, organized in plain language.</h1>
            <p>
              This policy reflects the current product information published for{" "}
              {APP_NAME}, including the Google Play data-safety summary and the support
              contact listed on the app page.
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
          </div>

          <aside className="policy-summary">
            <h2>Quick facts</h2>
            <dl className="fact-list">
              {quickFacts.map(([label, value]) => (
                <div key={label} className="fact-row">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="shell policy-shell">
          <div className="policy-callout">
            <p>
              Current Google Play data-safety disclosure: <strong>No data shared</strong>,{" "}
              <strong>no data collected</strong>, and <strong>data encrypted in transit</strong>.
            </p>
          </div>

          <div className="policy-grid">
            {sections.map((section) => (
              <article key={section.title} className="policy-card">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>

          <div className="contact-panel">
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
      </section>
    </div>
  );
}
