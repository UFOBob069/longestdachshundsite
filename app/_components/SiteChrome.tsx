import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="The Longest Dachshund home">
        <span className="brand-mark" aria-hidden="true">
          <Image src="/images/royal-doxie.png" alt="" fill sizes="44px" />
        </span>
        <span className="brand-copy"><small>THE</small><strong>LONGEST</strong><span>DACHSHUND</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="/#gameplay">Gameplay</a>
        <a href="/#screens">Your doxie</a>
        <a href="/#features">Features</a>
        <a href="/privacy-policy">Privacy</a>
      </nav>
      <a className="button button-small button-gold header-cta" href="/#download">Coming soon</a>
      <details className="mobile-nav">
        <summary aria-label="Open navigation"><span /><span /><span /></summary>
        <div>
          <a href="/#gameplay">Gameplay</a>
          <a href="/#screens">Your doxie</a>
          <a href="/#features">Features</a>
          <a href="/privacy-policy">Privacy policy</a>
          <a href="/delete-account">Delete account</a>
        </div>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <a className="brand footer-brand" href="/">
        <span className="brand-mark" aria-hidden="true">
          <Image src="/images/royal-doxie.png" alt="" fill sizes="38px" />
        </span>
        <span className="brand-copy"><small>THE</small><strong>LONGEST</strong><span>DACHSHUND</span></span>
      </a>
      <p>Stretch. Snack. Become a legend.</p>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/delete-account">Delete Account</a>
      </div>
      <small>© 2026 The Longest Dachshund. All rights reserved.</small>
    </footer>
  );
}
