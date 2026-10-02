import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Delete Account",
  alternates: { canonical: "/delete-account" },
  description: "Request deletion of your The Longest Dachshund account and associated data.",
};

const deletionEmail = "mailto:privacy@doxiedynasty.com?subject=The%20Longest%20Dachshund%20-%20Account%20Deletion%20Request&body=Account%20email%3A%0APlayer%20name%20(if%20different)%3A%0A%0AI%20request%20permanent%20deletion%20of%20my%20The%20Longest%20Dachshund%20account%20and%20associated%20data.";

export default function DeleteAccount() {
  return (
    <main className="delete-page">
      <SiteHeader />
      <section className="delete-hero">
        <div>
          <p className="eyebrow">ACCOUNT &amp; DATA CONTROLS</p>
          <h1>Delete your account</h1>
          <p>Request permanent deletion of your The Longest Dachshund account and associated game data.</p>
        </div>
        <div className="delete-badge"><span>×</span><strong>Permanent</strong><small>This cannot be undone</small></div>
      </section>

      <section className="delete-options">
        <article className="delete-primary">
          <span className="option-tag">RECOMMENDED</span>
          <h2>Delete from inside the app</h2>
          <p>If you can still open the game, use the built-in account control:</p>
          <ol className="app-path">
            <li><span>1</span><p>Open <strong>Settings</strong></p></li>
            <li><span>2</span><p>Choose <strong>Privacy &amp; Account</strong></p></li>
            <li><span>3</span><p>Tap <strong>Delete Account</strong> and confirm</p></li>
          </ol>
          <p className="small-note">The app may ask you to sign in again to verify that the account belongs to you.</p>
        </article>

        <article className="delete-secondary">
          <span className="option-tag">NO APP ACCESS?</span>
          <h2>Send a web request</h2>
          <p>Email us from the address connected to your account. The prepared message asks for the details we need to locate and verify it.</p>
          <a className="button button-gold button-wide" href={deletionEmail}>Email deletion request <span>→</span></a>
          <small>Requests go to privacy@doxiedynasty.com</small>
        </article>
      </section>

      <section className="delete-details">
        <div className="details-heading"><p className="eyebrow">WHAT TO EXPECT</p><h2>A clear path from request to deletion.</h2></div>
        <div className="detail-grid">
          <article><span>01</span><h3>We verify the request</h3><p>We may ask you to confirm access to the account email or provide limited details that match the account.</p></article>
          <article><span>02</span><h3>We delete associated data</h3><p>This includes your profile, saved progress, virtual inventory, customizations, and other data tied to the account.</p></article>
          <article><span>03</span><h3>We confirm completion</h3><p>Verified requests are ordinarily completed within 30 days. We will contact you if more time is required by law.</p></article>
        </div>
        <div className="retention-box">
          <h3>Information that may be retained</h3>
          <p>Limited records may be retained when reasonably necessary for security, fraud prevention, financial recordkeeping, dispute resolution, or legal compliance. Residual copies may remain in protected backups until they are overwritten through normal cycles.</p>
          <p>Deleting your game account does not delete purchase records maintained by Apple or Google and does not automatically provide a refund.</p>
        </div>
      </section>

      <section className="delete-help">
        <div><p className="eyebrow">NEED HELP?</p><h2>We’re here to untangle it.</h2></div>
        <div><p>For questions about deletion, access, or privacy, email our privacy contact.</p><a href="mailto:privacy@doxiedynasty.com">privacy@doxiedynasty.com →</a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
