import Image from "next/image";
import { SiteFooter, SiteHeader } from "./_components/SiteChrome";

const Paw = ({ className = "" }: { className?: string }) => (
  <span className={`paw ${className}`} aria-hidden="true">
    <i />
  </span>
);

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="image-hero" id="top" aria-label="The Longest Dachshund">
        <Image
          src="/images/app-hero.png"
          alt="The Longest Dachshund running through a glowing backyard"
          fill
          priority
          sizes="100vw"
        />
      </section>

      <section className="stretch-section" id="gameplay">
        <div className="stretch-grain" />
        <Paw className="paw-one" />
        <Paw className="paw-two" />
        <div className="stretch-main">
          <div className="stretch-copy">
            <p className="eyebrow">A DELIGHTFULLY LONG MOBILE ADVENTURE</p>
            <h2>
              Stretch your
              <br />
              <em>legend.</em>
            </h2>
            <p className="stretch-lede">
              Snack, steer, and bark your way through a sunny backyard. The
              farther you go, the longer your dachshund grows.
            </p>
            <div className="stretch-actions">
              <a className="button button-gold" href="#screens">
                Meet your doxie <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-ghost" href="#features">
                Explore features
              </a>
            </div>
            <div className="coming-note">
              <span />
              Coming soon to iOS and Android
            </div>
          </div>

          <div className="hero-phone-stage" aria-label="The Longest Dachshund gameplay preview">
            <div className="hero-orbit orbit-a" />
            <div className="hero-orbit orbit-b" />
            <div className="hero-phone">
              <div className="phone-speaker" />
              <Image
                src="/images/app-gameplay.png"
                alt="A long dachshund running through a sunny backyard in The Longest Dachshund"
                fill
                sizes="(max-width: 850px) 78vw, 31vw"
              />
            </div>
            <span className="float-stat stat-snack"><b>+1</b> snack</span>
            <span className="float-stat stat-long"><b>12</b> long</span>
            <div className="sun-token">☀</div>
          </div>
        </div>

        <div className="gameplay-grid">
          <article>
            <span className="step-number">01</span>
            <div className="step-icon">●</div>
            <h3>Drag to steer</h3>
            <p>Guide your doxie around garden hazards with one easy gesture.</p>
          </article>
          <article>
            <span className="step-number">02</span>
            <div className="step-icon">✦</div>
            <h3>Snack to stretch</h3>
            <p>Scoop up treats and watch your tiny dog become a very long dog.</p>
          </article>
          <article>
            <span className="step-number">03</span>
            <div className="step-icon">◉</div>
            <h3>Bark at trouble</h3>
            <p>Get close, tap the hazard, and send it packing for bonus points.</p>
          </article>
        </div>
      </section>

      <section className="story-section story-create" id="screens">
        <div className="story-inner">
          <div className="story-copy">
            <p className="eyebrow">MORE THAN A WALK · 01</p>
            <h2>Make every dog your own.</h2>
            <p className="story-lede">
              Choose their name, coat, fur, and favorite finishing touches.
              Every detail makes your longest friend feel like yours.
            </p>
            <div className="story-details" aria-label="Dachshund customization features">
              <span>Name &amp; bond</span>
              <span>Coats &amp; fur</span>
              <span>Favorite things</span>
            </div>
          </div>
          <div className="story-visual">
            <span className="story-number" aria-hidden="true">01</span>
            <div className="story-device-crop">
              <Image
                src="/images/app-create.png"
                alt="Create and customize your dachshund"
                width={1080}
                height={1920}
                sizes="(max-width: 850px) 88vw, 38vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="story-section story-bond story-reverse">
        <div className="story-inner">
          <div className="story-copy">
            <p className="eyebrow">YOUR LONGEST BEST FRIEND · 02</p>
            <h2>Meet your longest best friend.</h2>
            <p className="story-lede">
              Feed, walk, play, and keep the daily dachshund bond growing.
              The more you care, the more personality shines through.
            </p>
            <div className="story-details" aria-label="Daily dachshund activities">
              <span>Feed</span>
              <span>Walk</span>
              <span>Play</span>
            </div>
          </div>
          <div className="story-visual">
            <span className="story-number" aria-hidden="true">02</span>
            <div className="story-device-crop">
              <Image
                src="/images/app-home.png"
                alt="Care for your dachshund and grow your daily bond"
                width={1080}
                height={1920}
                sizes="(max-width: 850px) 88vw, 38vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="story-section story-closet">
        <div className="story-inner">
          <div className="story-copy">
            <p className="eyebrow">A CLOSET FULL OF CHARACTER · 03</p>
            <h2>Collect a little personality.</h2>
            <p className="story-lede">
              Unlock hats, collars, sweaters, bandanas, and plenty more.
              Build a look for every walk, mood, and tiny-dog adventure.
            </p>
            <div className="story-details" aria-label="Dachshund closet items">
              <span>Hats</span>
              <span>Collars</span>
              <span>Sweaters</span>
            </div>
            <p className="story-note">Development preview. Final features and screens may vary.</p>
          </div>
          <div className="story-visual">
            <span className="story-number" aria-hidden="true">03</span>
            <div className="story-device-crop">
              <Image
                src="/images/app-closet.png"
                alt="Collect outfits in The Long Closet"
                width={1080}
                height={1920}
                sizes="(max-width: 850px) 88vw, 38vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section" id="features">
        <div className="feature-copy">
          <p className="eyebrow">A LITTLE DOG WITH A BIG LIFE</p>
          <h2>Every day deserves more zoomies.</h2>
        </div>
        <div className="feature-list">
          <article>
            <span>01</span>
            <div><h3>Daily adventures</h3><p>Fresh runs, challenges, rewards, and reasons to come back.</p></div>
          </article>
          <article>
            <span>02</span>
            <div><h3>A growing bond</h3><p>Care for your doxie and make every day together count.</p></div>
          </article>
          <article>
            <span>03</span>
            <div><h3>A closet full of character</h3><p>Turn every unlock into a new way to show off your dog.</p></div>
          </article>
          <article>
            <span>04</span>
            <div><h3>Parades worth barking about</h3><p>Celebrate big wins, new parks, and every longer legend.</p></div>
          </article>
        </div>
      </section>

      <section className="privacy-feature" id="privacy">
        <div className="privacy-copy">
          <p className="eyebrow">YOUR DATA. YOUR CHOICE.</p>
          <h2>Privacy controls within reach.</h2>
          <p>
            The app’s Settings area is designed to keep privacy information and
            account deletion easy to find. The same controls are always
            available here on the web.
          </p>
          <div className="privacy-actions">
            <a className="button button-gold" href="/privacy-policy">Read privacy policy</a>
            <a className="button button-light" href="/delete-account">Delete account</a>
          </div>
        </div>

        <div className="settings-mock" aria-label="Privacy and account controls preview">
          <div className="settings-top">
            <span className="settings-back">←</span>
            <div><small>SETTINGS</small><strong>Privacy &amp; account</strong></div>
            <span className="settings-dog">●</span>
          </div>
          <div className="settings-group">
            <a href="/privacy-policy">
              <span className="settings-icon">◎</span>
              <span><strong>Privacy Policy</strong><small>How your data is handled</small></span>
              <b>›</b>
            </a>
            <a href="/delete-account" className="danger-row">
              <span className="settings-icon">×</span>
              <span><strong>Delete Account</strong><small>Request permanent deletion</small></span>
              <b>›</b>
            </a>
          </div>
          <p>These links open the public web pages from inside the app.</p>
        </div>
      </section>

      <section className="launch-section" id="download">
        <Paw className="launch-paw" />
        <p className="eyebrow">COMING SOON</p>
        <h2>How long can you go?</h2>
        <p>Follow the trail. The Longest Dachshund is heading to iOS and Android.</p>
        <div className="store-row">
          <span className="store-badge"><b>●</b><small>Coming soon to</small><strong>App Store</strong></span>
          <span className="store-badge"><b>▶</b><small>Coming soon to</small><strong>Google Play</strong></span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
