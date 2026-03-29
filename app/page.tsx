import Image from "next/image";
import Link from "next/link";

import {
  APP_NAME,
  APP_TAGLINE,
  PLAY_STORE_UPDATED_AT,
  PLAY_STORE_URL,
  screenshots
} from "@/lib/site";

const featureCards = [
  {
    eyebrow: "01",
    title: "Unparalleled security",
    body:
      "The Play Store listing positions My Tunnel Proxy as a privacy-first VPN built to shield internet traffic while you browse, stream, and work online."
  },
  {
    eyebrow: "02",
    title: "Flexible protocol support",
    body:
      "OpenVPN, SSH, and UDP support give the app a practical range of connection options for speed, resilience, and device compatibility."
  },
  {
    eyebrow: "03",
    title: "No data collection claims",
    body:
      "The current Google Play data-safety disclosure states that no user data is collected and no data is shared with third parties."
  },
  {
    eyebrow: "04",
    title: "Global access",
    body:
      "The product messaging focuses on worldwide reach, quick server selection, and access to content across multiple regions."
  },
  {
    eyebrow: "05",
    title: "Fast, simple controls",
    body:
      "Across the screenshots, the UI keeps the primary task obvious: pick a server or package and connect with one tap."
  },
  {
    eyebrow: "06",
    title: "Listing-matched design language",
    body:
      "This site mirrors the same icon, screenshots, blue mobile chrome, world-map motif, and pink-violet shield accents shown on Google Play."
  }
] as const;

const trustPoints = [
  {
    value: "100K+",
    label: "Google Play downloads"
  },
  {
    value: "3+",
    label: "Play Store content rating"
  },
  {
    value: PLAY_STORE_UPDATED_AT,
    label: "Last Play Store update"
  },
  {
    value: "OpenVPN / SSH / UDP",
    label: "Supported protocols"
  }
] as const;

const privacySignals = [
  "No data shared with third parties",
  "No data collected",
  "Data encrypted in transit"
] as const;

const faqs = [
  {
    question: "What makes this site feel connected to the app?",
    answer:
      "It uses the same Play Store icon, screenshots, world-map presentation, bright blue action framing, and magenta-violet brand accents visible in the listing."
  },
  {
    question: "Where can I download the Android app?",
    answer:
      "Use the Google Play button to open the official Play Store listing for My Tunnel Proxy."
  },
  {
    question: "What privacy signals are reflected here?",
    answer:
      "The homepage and policy both reflect the current Play Store disclosure: no data shared, no data collected, and encryption in transit."
  },
  {
    question: "Is the site ready for Vercel?",
    answer:
      "Yes. This project is a standard Next.js App Router site and builds cleanly for Vercel deployment."
  }
] as const;

export default function HomePage() {
  return (
    <div className="page-root">
      <section className="hero-section">
        <div className="shell hero-shell">
          <div className="hero-copy">
            <span className="eyebrow">{APP_TAGLINE}</span>
            <h1>Secure browsing with the same bold identity shown on Google Play.</h1>
            <p className="hero-text">
              My Tunnel Proxy combines a bright blue mobile interface, a pink-violet
              shield crest, and server-first workflows into a VPN experience built for
              quick connections. This homepage carries that exact visual language onto
              the web while keeping the focus on speed, privacy, and simplicity.
            </p>

            <div className="hero-actions">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                Download on Google Play
              </a>
              <Link href="/privacy-policy" className="button button-secondary">
                Read Privacy Policy
              </Link>
            </div>

            <div className="pill-row" aria-label="Privacy and product highlights">
              {privacySignals.map((item) => (
                <span key={item} className="info-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="stats-grid">
              {trustPoints.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="signal-card signal-card-top">
              <span>Connected</span>
              <strong>World map + shield identity</strong>
            </div>

            <div className="hero-phone-frame">
              <div className="phone-topbar" />
              <Image
                src="/screenshots/shot-1.png"
                alt={screenshots[0].alt}
                width={260}
                height={592}
                priority
                className="hero-phone-image"
              />
            </div>

            <div className="signal-card signal-card-bottom">
              <span>Protocol-ready</span>
              <strong>OpenVPN, SSH, and UDP</strong>
            </div>

            <div className="mini-shot mini-shot-left">
              <Image
                src="/screenshots/shot-2.png"
                alt={screenshots[1].alt}
                width={260}
                height={592}
                className="mini-shot-image"
              />
            </div>

            <div className="mini-shot mini-shot-right">
              <Image
                src="/screenshots/shot-3.png"
                alt={screenshots[2].alt}
                width={260}
                height={592}
                className="mini-shot-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">Listing-inspired experience</span>
            <h2>Built from the actual visuals and messaging already visible in the app store.</h2>
            <p>
              The homepage keeps the app&apos;s strongest cues front and center: the crest
              logo, clean white canvas, vivid blue action blocks, rounded control cards,
              and the same screenshots users already recognize from the listing.
            </p>
          </div>

          <div className="feature-grid">
            {featureCards.map((feature) => (
              <article key={feature.title} className="feature-card">
                <span className="feature-index">{feature.eyebrow}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">App Screens</span>
            <h2>The same Play Store screenshots, presented as a polished product story.</h2>
            <p>
              Server picker flows, package lists, connected states, and the large stop
              button are all carried over from the live listing so the web experience
              remains visually faithful to the Android app.
            </p>
          </div>

          <div className="showcase-grid">
            {screenshots.map((shot, index) => (
              <article
                key={shot.src}
                className={`showcase-card showcase-card-${index + 1}`}
              >
                <div className="showcase-label">
                  <span>{shot.title}</span>
                </div>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={260}
                  height={592}
                  className="showcase-image"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-section">
          <div className="split-copy">
            <span className="eyebrow">Why it works</span>
            <h2>A simple product pitch anchored in privacy and fast actions.</h2>
            <p>
              The Google Play description emphasizes encrypted traffic, quick protocol
              selection, global reach, and one-click connection. This web version turns
              those same points into a clearer landing flow for new visitors.
            </p>
          </div>

          <div className="signal-grid">
            <article className="signal-panel">
              <h3>Recognizable branding</h3>
              <p>
                Laurel arcs, the central shield mark, and the blue world-map backdrop
                make the brand feel consistent across app and web.
              </p>
            </article>

            <article className="signal-panel">
              <h3>Clear product framing</h3>
              <p>
                The web copy is based on the live listing: fast and secure VPN, one-tap
                use, and supported connection modes.
              </p>
            </article>

            <article className="signal-panel">
              <h3>Privacy-forward messaging</h3>
              <p>
                The site highlights the current store disclosure and links directly to a
                dedicated privacy policy for easier trust-building.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-faq">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Quick answers for visitors arriving from search or social links.</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell cta-panel">
          <div>
            <span className="eyebrow">Get started</span>
            <h2>Take visitors straight from the site to the official Android listing.</h2>
            <p>
              If you are looking for the live app, head to Google Play. If you need the
              legal details first, the privacy policy is available as a dedicated page.
            </p>
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
            <Link href="/privacy-policy" className="button button-secondary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
