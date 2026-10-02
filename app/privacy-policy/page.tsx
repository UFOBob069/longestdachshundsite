import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
  description: "Privacy Policy for The Longest Dachshund mobile game.",
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <SiteHeader />
      <section className="legal-hero">
        <p className="eyebrow">YOUR DATA. YOUR CHOICE.</p>
        <h1>Privacy Policy</h1>
        <p>How The Longest Dachshund handles information when you play.</p>
        <span>Effective July 31, 2026</span>
      </section>
      <div className="legal-layout">
        <aside>
          <strong>On this page</strong>
          <a href="#overview">Overview</a>
          <a href="#collect">Information we collect</a>
          <a href="#use">How we use it</a>
          <a href="#share">How we share it</a>
          <a href="#choices">Your choices</a>
          <a href="#children">Children’s privacy</a>
          <a href="#contact">Contact</a>
        </aside>
        <article className="legal-content">
          <section id="overview">
            <span className="legal-number">01</span><h2>Overview</h2>
            <p>This Privacy Policy explains how The Longest Dachshund (“we,” “us,” or “our”) collects, uses, and protects information in connection with the mobile game, related support, and this website.</p>
            <div className="legal-callout">The game is currently in development. We will update this policy before release if the final app, service providers, or data practices differ from what is described here.</div>
          </section>
          <section id="collect">
            <span className="legal-number">02</span><h2>Information we may collect</h2>
            <h3>Account information</h3><p>If you create an account, we may collect your email address, display name, sign-in identifiers, and account preferences.</p>
            <h3>Game and profile data</h3><p>We may store your customized dachshund, game progress, scores, achievements, virtual items, settings, and interactions needed to provide and sync the game.</p>
            <h3>Device and diagnostics</h3><p>We may receive device type, operating system, app version, language, approximate region, crash reports, and performance data used to keep the game reliable.</p>
            <h3>Purchases</h3><p>Apple or Google processes payment details. We may receive a transaction identifier, product purchased, and purchase status so we can deliver and restore items.</p>
            <h3>Support communications</h3><p>If you contact us, we receive the information you include in your message and any details needed to resolve your request.</p>
          </section>
          <section id="use">
            <span className="legal-number">03</span><h2>How we use information</h2>
            <ul><li>Provide accounts, gameplay, progress syncing, and customer support.</li><li>Deliver purchases and restore eligible content.</li><li>Maintain safety, prevent abuse, troubleshoot, and improve performance.</li><li>Comply with legal obligations and enforce our terms.</li></ul>
          </section>
          <section id="share">
            <span className="legal-number">04</span><h2>How we share information</h2>
            <p>We may share limited information with vendors that host, secure, analyze, or support the game; with Apple or Google for purchases and platform services; or when required for legal, security, or business-transfer purposes. We do not sell personal information.</p>
          </section>
          <section id="retention">
            <span className="legal-number">05</span><h2>Retention and security</h2>
            <p>We keep information only as long as reasonably needed to provide the game, meet legal obligations, resolve disputes, and protect the service. We use administrative and technical safeguards designed to protect information, but no system is completely secure.</p>
          </section>
          <section id="choices">
            <span className="legal-number">06</span><h2>Your privacy choices</h2>
            <p>You can review app permissions in your device settings, update available account information in the app, and request permanent account deletion.</p>
            <a className="legal-action" href="/delete-account">Request account deletion <span>→</span></a>
          </section>
          <section id="children">
            <span className="legal-number">07</span><h2>Children’s privacy</h2>
            <p>The game is intended for a general audience and is not designed to knowingly collect personal information from children under 13 without any consent required by law. A parent or guardian who believes a child provided personal information may contact us to request its deletion.</p>
          </section>
          <section id="changes">
            <span className="legal-number">08</span><h2>Changes to this policy</h2>
            <p>We may update this policy as the game evolves. We will post the revised policy here and change the effective date. When required, we will provide additional notice in the app.</p>
          </section>
          <section id="contact">
            <span className="legal-number">09</span><h2>Contact us</h2>
            <p>Questions or privacy requests can be sent to:</p>
            <a className="contact-email" href="mailto:privacy@doxiedynasty.com">privacy@doxiedynasty.com</a>
          </section>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
