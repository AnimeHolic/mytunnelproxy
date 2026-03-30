import Image from "next/image";
import Link from "next/link";

import {
  APP_NAME,
  PLAY_STORE_UPDATED_AT,
  PLAY_STORE_URL,
  screenshots
} from "@/lib/site";

const protocolChips = [
  "OpenVPN",
  "SSH",
  "UDP",
  "Auto Select Server",
  "Built-in Packages"
] as const;

const whyCards = [
  {
    title: "Multiple protocol paths",
    body:
      "My Tunnel Proxy presents OpenVPN, SSH, and UDP-oriented flows in a way that feels quick to understand from the first screen."
  },
  {
    title: "Privacy-first positioning",
    body:
      "The current Google Play disclosure highlights no data collection, no third-party data sharing, and encryption in transit."
  },
  {
    title: "One-tap connect rhythm",
    body:
      "The centered connection state, large primary action, and stacked cards make the next step obvious on mobile."
  },
  {
    title: "Server and package lists",
    body:
      "The interface is built around real package choices, auto-select entries, and country-specific server options."
  },
  {
    title: "Store-matched visual language",
    body:
      "Blue app bars, rounded white cards, map graphics, and the violet-pink shield all mirror the app listing."
  },
  {
    title: "Responsive web translation",
    body:
      "This version keeps the same landing-page cadence as the reference site while scaling cleanly across desktop, tablet, and phone."
  }
] as const;

const benefitBlocks = [
  {
    title: "Access packages fast",
    body:
      "Auto-select and country-targeted packages keep connection choices visible without burying them behind complex flows."
  },
  {
    title: "Protect browsing on the go",
    body:
      "The product messaging stays focused on secure, private browsing with simple status indicators and a quick start path."
  },
  {
    title: "Keep the setup familiar",
    body:
      "The site reuses the app's real screenshots so new visitors see the exact UI patterns they will get after downloading."
  }
] as const;

const quickStartSteps = [
  {
    title: "Choose a server",
    body:
      "Start with auto-select or switch to a listed country and package from the built-in selection view."
  },
  {
    title: "Check the status",
    body:
      "The app surfaces connection state, timer, and transfer details in a simple centered layout."
  },
  {
    title: "Tap once to connect",
    body:
      "A large action button anchors the screen so the connection flow stays easy on small devices."
  }
] as const;

const metrics = [
  {
    value: "100K+",
    label: "Google Play downloads"
  },
  {
    value: "3",
    label: "Core protocol paths highlighted"
  },
  {
    value: PLAY_STORE_UPDATED_AT,
    label: "Latest Play Store update"
  },
  {
    value: "3",
    label: "Curated screenshots on the homepage"
  }
] as const;

const galleryShots = [screenshots[0], screenshots[2], screenshots[3]] as const;

const trustCards = [
  {
    title: "Store-recognizable hero",
    body:
      "The top of the page now leans into device mockups, bright CTA buttons, and product-first messaging similar to the HTTP Injector landing flow."
  },
  {
    title: "More conversion-friendly structure",
    body:
      "The homepage now moves through features, benefits, screenshots, metrics, and a final download push in a much more familiar SaaS rhythm."
  },
  {
    title: "Responsive by default",
    body:
      "Every major section collapses cleanly on tablets and phones so the layout stays usable instead of just shrinking."
  }
] as const;

export default function HomePage() {
  return (
    <div className="page-root">
      <section className="reference-hero">
        <div className="shell reference-hero-shell">
          <div className="hero-visual-pane">
            <span className="floating-tag">Fast and secure VPN</span>

            <div className="device-panel device-panel-main">
              <Image
                src="/screenshots/shot-1.png"
                alt={screenshots[0].alt}
                width={260}
                height={592}
                priority
                className="device-image"
              />
            </div>

            <div className="brand-orb">
              <Image
                src="/brand/icon.png"
                alt={`${APP_NAME} logo`}
                width={480}
                height={480}
                className="brand-orb-image"
              />
            </div>

            <div className="detail-card detail-card-left">
              <span>Auto Select Server</span>
              <strong>Quick-start package flow</strong>
            </div>

            <div className="detail-card detail-card-right">
              <span>Current disclosure</span>
              <strong>No data collected</strong>
            </div>
          </div>

          <div className="hero-copy-pane">
            <span className="eyebrow">{APP_NAME}</span>
            <h1>{APP_NAME} VPN app for private, secure browsing on every screen.</h1>
            <p className="hero-copy-text">
              The homepage is now rebuilt around the same high-conversion structure used
              by the HTTP Injector website: a large device-led hero, a protocol strip,
              feature cards, alternating content blocks, screenshots, metrics, and a
              strong closing download section.
            </p>
            <p className="hero-copy-text">
              Instead of copying the other brand directly, this version keeps My Tunnel
              Proxy&apos;s own Play Store identity in focus with its real logo, actual
              screenshots, blue app chrome, and pink-violet shield accents.
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
          </div>
        </div>

        <div className="shell protocol-band">
          {protocolChips.map((chip) => (
            <div key={chip} className="protocol-chip">
              {chip}
            </div>
          ))}
        </div>
      </section>

      <section className="section reference-section">
        <div className="shell">
          <div className="section-heading centered-heading">
            <span className="eyebrow">Why My Tunnel Proxy?</span>
            <h2>Protect your browsing with a layout that feels direct, familiar, and mobile-first.</h2>
            <p>
              This section is intentionally closer to the HTTP Injector feature grid:
              compact benefit cards, fast-scanning titles, and a crisp pitch around
              protocol support, privacy, and one-tap usability.
            </p>
          </div>

          <div className="reference-feature-grid">
            {whyCards.map((card, index) => (
              <article key={card.title} className="reference-feature-card">
                <span className="reference-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell reference-split">
          <div className="reference-visual-stack">
            <div className="reference-shot-card reference-shot-card-main">
              <Image
                src="/screenshots/shot-4.png"
                alt={screenshots[3].alt}
                width={260}
                height={592}
                className="device-image"
              />
            </div>

            <div className="reference-note-card">
              <span>Package-first layout</span>
              <strong>Server lists and timer states stay easy to scan</strong>
            </div>
          </div>

          <div className="reference-copy-stack">
            <span className="eyebrow">Get the benefits</span>
            <h2>Faster scanning, clearer package choices, and a simpler web story.</h2>
            <p>
              The reference site is effective because it walks visitors through exactly
              what the product does without overloading them. This version applies that
              same structure to My Tunnel Proxy and leans into the actual app screens.
            </p>

            <div className="benefit-list">
              {benefitBlocks.map((item) => (
                <article key={item.title} className="benefit-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>

            <div className="hero-actions">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                Get Started
              </a>
              <Link href="/privacy-policy" className="button button-secondary">
                Privacy Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section reference-band">
        <div className="shell quickstart-shell">
          <div className="quickstart-copy">
            <span className="eyebrow">Quick start</span>
            <h2>Built to feel easy before the download even happens.</h2>
            <p>
              The second content band mirrors the reference site&apos;s confidence-building
              rhythm: show the workflow, surface a strong claim, and keep the next action
              visible.
            </p>

            <div className="quickstart-list">
              {quickStartSteps.map((step) => (
                <article key={step.title} className="quickstart-step">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="quickstart-visual">
            <div className="quickstart-device">
              <Image
                src="/screenshots/shot-3.png"
                alt={screenshots[2].alt}
                width={260}
                height={592}
                className="device-image"
              />
            </div>

            <div className="quickstart-note quickstart-note-top">
              <span>Status first</span>
              <strong>Connected, timer, and transfer info stay visible</strong>
            </div>

            <div className="quickstart-note quickstart-note-bottom">
              <span>Built-in packages</span>
              <strong>Server and package lists remain central to the flow</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="screenshots">
        <div className="shell">
          <div className="section-heading centered-heading">
            <span className="eyebrow">App Screenshots</span>
            <h2>A smaller, cleaner preview before you download.</h2>
            <p>
              Instead of showing too many large mockups, the homepage now highlights a
              focused set of app screens with cleaner framing and better spacing.
            </p>
          </div>

          <div className="shot-gallery-grid">
            {galleryShots.map((shot, index) => (
              <article key={shot.src} className="shot-gallery-card">
                <div className="shot-gallery-head">
                  <span>Screen {index + 1}</span>
                  <h3>{shot.title}</h3>
                </div>

                <div className="shot-gallery-frame">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={260}
                    height={592}
                    className="shot-gallery-image"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell metric-strip">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric-card-ref">
              <h3>{metric.value}</h3>
              <p>{metric.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading centered-heading">
            <span className="eyebrow">Why this direction works</span>
            <h2>Closer to the reference feel, without dropping My Tunnel Proxy&apos;s own identity.</h2>
          </div>

          <div className="voice-grid">
            {trustCards.map((card) => (
              <article key={card.title} className="voice-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
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
              <span className="eyebrow">Download {APP_NAME}</span>
              <h2>Get the Android app and keep the same UI story from web to mobile.</h2>
              <p>
                The homepage now follows a structure much closer to the HTTP Injector
                reference while staying faithful to the real My Tunnel Proxy listing and
                its public app visuals.
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
            <Link href="/privacy-policy" className="button button-secondary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
