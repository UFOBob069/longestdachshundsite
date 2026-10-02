import Image from "next/image";
import Link from "next/link";
import { GOOGLE_PLAY_URL } from "../site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="The Longest Dachshund home">
        <span className="brand-mark" aria-hidden="true">
          <Image src="/images/royal-doxie.png" alt="" fill sizes="44px" />
        </span>
        <span className="brand-copy"><small>THE</small><strong>LONGEST</strong><span>DACHSHUND</span></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/#gameplay">Gameplay</Link>
        <Link href="/#screens">Your doxie</Link>
        <Link href="/#features">Features</Link>
        <Link href="/privacy-policy">Privacy</Link>
      </nav>
      <a className="button button-small button-gold header-cta" href={GOOGLE_PLAY_URL}>Get it on Google Play</a>
      <details className="mobile-nav">
        <summary aria-label="Open navigation"><span /><span /><span /></summary>
        <div>
          <Link href="/#gameplay">Gameplay</Link>
          <Link href="/#screens">Your doxie</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#faq">Game FAQ</Link>
          <a href={GOOGLE_PLAY_URL}>Get it on Google Play</a>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/delete-account">Delete account</Link>
        </div>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand footer-brand" href="/">
        <span className="brand-mark" aria-hidden="true">
          <Image src="/images/royal-doxie.png" alt="" fill sizes="38px" />
        </span>
        <span className="brand-copy"><small>THE</small><strong>LONGEST</strong><span>DACHSHUND</span></span>
      </Link>
      <p>Stretch. Snack. Become a legend.</p>
      <div className="footer-links">
        <a href={GOOGLE_PLAY_URL}>Google Play</a>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/delete-account">Delete Account</Link>
      </div>
      <small>© 2026 The Longest Dachshund. All rights reserved.</small>
    </footer>
  );
}
