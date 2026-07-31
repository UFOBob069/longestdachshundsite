import Image from "next/image";

const amazonSearch =
  "https://www.amazon.com/s?k=Doxie+Dynasty+Card+Game";

const Paw = ({ className = "" }: { className?: string }) => (
  <span className={`paw ${className}`} aria-hidden="true">
    ●
  </span>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Doxie Dynasty home">
          <span className="brand-mark" aria-hidden="true">
            <span>♛</span>
          </span>
          <span className="brand-copy">
            <strong>DOXIE</strong>
            <span>DYNASTY</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#card-game">Card game</a>
          <a href="#app-game">App game</a>
          <a href="#about">Our world</a>
        </nav>

        <a className="button button-small button-gold header-cta" href="#card-game">
          Meet the games
        </a>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <div>
            <a href="#card-game">Card game</a>
            <a href="#app-game">App game</a>
            <a href="#about">Our world</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-noise" />
        <Paw className="paw-one" />
        <Paw className="paw-two" />
        <div className="hero-content">
          <p className="eyebrow">ONE DYNASTY · TWO WAYS TO PLAY</p>
          <h1>
            Big personality.
            <br />
            <span>Tiny legs.</span>
          </h1>
          <p className="hero-lede">
            A delightfully competitive card game and a wonderfully long mobile
            adventure—made for people who know dachshunds are never short on
            character.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#card-game">
              Explore the card game <span aria-hidden="true">→</span>
            </a>
            <a className="button button-ghost" href="#app-game">
              Preview the app <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-proof">
            <span>♛</span>
            <p>
              <strong>Built for the whole pack</strong>
              <br />
              Tabletop fun, tail-wagging adventure.
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-label="The Doxie Dynasty mascot">
          <div className="portrait-halo" />
          <div className="portrait-frame">
            <Image
              src="/images/royal-doxie.png"
              alt="A joyful black and tan long-haired dachshund wearing a tiny crown"
              fill
              priority
              sizes="(max-width: 900px) 82vw, 42vw"
            />
          </div>
          <div className="floating-tag tag-top">
            <span>NEW</span>
            Card game
          </div>
          <div className="floating-tag tag-bottom">
            <span>SOON</span>
            Mobile game
          </div>
          <div className="hero-seal">
            <span>THE</span>
            <strong>TOP</strong>
            <span>DOG</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>♛</span> CARD GAME <Paw /> <span>♛</span> MOBILE ADVENTURE{" "}
          <Paw /> <span>♛</span> BUILT FOR DOXIE PEOPLE <Paw />{" "}
          <span>♛</span> CARD GAME <Paw /> <span>♛</span> MOBILE ADVENTURE{" "}
          <Paw />
        </div>
      </div>

      <section className="card-game-section" id="card-game">
        <div className="section-heading card-heading">
          <div>
            <p className="eyebrow">THE CARD GAME</p>
            <h2>
              Make sets.
              <br />
              Build your <em>dynasty.</em>
            </h2>
          </div>
          <div className="heading-copy">
            <p>
              Collect irresistible doxies, build winning combinations, and
              chase the title every dog deserves: Top Dog.
            </p>
            <a
              className="text-link"
              href={amazonSearch}
              target="_blank"
              rel="noreferrer"
            >
              Find it on Amazon <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="card-showcase">
          <div className="product-stage">
            <div className="product-glow" />
            <Image
              className="product-cover"
              src="/images/card-game-cover.png"
              alt="Doxie Dynasty card game cover with three dachshunds"
              width={1080}
              height={1536}
              sizes="(max-width: 800px) 72vw, 38vw"
            />
            <Image
              className="sample-card"
              src="/images/andre-card.png"
              alt="Andre, a playful long-haired dachshund card"
              width={1024}
              height={1536}
              sizes="(max-width: 800px) 34vw, 18vw"
            />
            <span className="prototype-note">Product artwork</span>
          </div>

          <div className="game-details">
            <div className="launch-pill">
              <span />
              Amazon launch
            </div>
            <h3>Collect. Make sets. Win.</h3>
            <p>
              Easy to pick up and packed with personality, Doxie Dynasty turns
              every game night into a spirited showdown.
            </p>

            <dl className="game-stats">
              <div>
                <dt>84</dt>
                <dd>cards</dd>
              </div>
              <div>
                <dt>2–6</dt>
                <dd>players</dd>
              </div>
              <div>
                <dt>20–30</dt>
                <dd>minutes</dd>
              </div>
            </dl>

            <ol className="steps">
              <li>
                <span>01</span>
                <div>
                  <strong>Collect your doxies</strong>
                  <p>Meet a whole pack of one-of-a-kind personalities.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Make your sets</strong>
                  <p>Build the combinations that grow your dynasty.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Be the Top Dog</strong>
                  <p>Outplay the pack and claim the crown.</p>
                </div>
              </li>
            </ol>

            <a
              className="button button-gold button-wide"
              href={amazonSearch}
              target="_blank"
              rel="noreferrer"
            >
              Search on Amazon <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <figure className="real-game">
          <div className="real-game-image">
            <Image
              src="/images/card-game-prototype.png"
              alt="The physical Doxie Dynasty game box with a spread of cards"
              fill
              sizes="(max-width: 900px) 92vw, 60vw"
            />
          </div>
          <figcaption>
            <span>FROM THE TABLETOP</span>
            <strong>Every card has a story.</strong>
            <p>
              Doxies big and small. Smooth, wire, and long-haired. Build a
              dynasty that looks like your favorite pack.
            </p>
            <small>Prototype shown. Final packaging may vary.</small>
          </figcaption>
        </figure>
      </section>

      <section className="app-section" id="app-game">
        <div className="app-leaf app-leaf-one" />
        <div className="app-leaf app-leaf-two" />
        <div className="app-intro">
          <div className="app-copy">
            <p className="eyebrow">THE APP GAME · COMING SOON</p>
            <h2>
              Meet the
              <br />
              <em>longest</em> dachshund.
            </h2>
            <p className="app-lede">
              Snack, steer, and bark your way through a sunny backyard
              adventure. The farther you go, the longer your legend grows.
            </p>
            <ul className="app-beats" aria-label="Game actions">
              <li>
                <span>01</span> Snack
              </li>
              <li>
                <span>02</span> Steer
              </li>
              <li>
                <span>03</span> Bark
              </li>
              <li>
                <span>∞</span> Stretch
              </li>
            </ul>
            <a className="button button-cream" href="#app-preview">
              See the game <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="phone-stage">
            <div className="sun-orbit orbit-one" />
            <div className="sun-orbit orbit-two" />
            <div className="phone">
              <div className="phone-speaker" />
              <Image
                src="/images/app-gameplay.png"
                alt="The Longest Dachshund mobile game showing a dachshund stretching through a sunny backyard"
                fill
                sizes="(max-width: 800px) 72vw, 30vw"
              />
            </div>
            <span className="phone-callout callout-one">
              <b>+1</b> snack
            </span>
            <span className="phone-callout callout-two">
              <b>12</b> long
            </span>
          </div>
        </div>

        <div className="app-banner">
          <Image
            src="/images/app-hero.png"
            alt="The Longest Dachshund game artwork"
            fill
            sizes="100vw"
          />
        </div>

        <div className="app-preview" id="app-preview">
          <div className="preview-heading">
            <p className="eyebrow">A WORLD THAT&apos;S UNIQUELY YOURS</p>
            <h3>Play long. Live large.</h3>
            <p>
              Create your doxie, build a bond, and collect a closet full of
              personality along the way.
            </p>
          </div>

          <div className="preview-rail">
            <article className="preview-card preview-warm">
              <div className="preview-copy">
                <span>01</span>
                <h4>Make every dog your own</h4>
                <p>Choose a look, a name, and plenty of favorite things.</p>
              </div>
              <Image
                src="/images/app-create.png"
                alt="A preview of the dachshund creator"
                width={1080}
                height={1920}
                sizes="(max-width: 800px) 78vw, 28vw"
              />
            </article>

            <article className="preview-card preview-mint">
              <div className="preview-copy">
                <span>02</span>
                <h4>Meet your longest best friend</h4>
                <p>Care for your doxie, then head out for another long walk.</p>
              </div>
              <Image
                src="/images/app-home.png"
                alt="A preview of the app home screen with a customized dachshund"
                width={1080}
                height={1920}
                sizes="(max-width: 800px) 78vw, 28vw"
              />
            </article>

            <article className="preview-card preview-purple">
              <div className="preview-copy">
                <span>03</span>
                <h4>Collect a little personality</h4>
                <p>Unlock hats, collars, sweaters, bandanas, and more.</p>
              </div>
              <Image
                src="/images/app-closet.png"
                alt="A preview of the in-game clothing collection"
                width={1080}
                height={1920}
                sizes="(max-width: 800px) 78vw, 28vw"
              />
            </article>
          </div>
          <p className="preview-disclaimer">
            App preview imagery shows the creative direction; final features
            and screens may vary.
          </p>
        </div>
      </section>

      <section className="world-section" id="about">
        <div className="world-copy">
          <p className="eyebrow">WELCOME TO THE DYNASTY</p>
          <h2>Every doxie deserves a crown.</h2>
          <p>
            Doxie Dynasty is a playful world made for dachshund people—whether
            you&apos;re collecting cards around the table or chasing one more
            snack on your phone.
          </p>
        </div>
        <div className="world-grid">
          <article>
            <span className="world-number">01</span>
            <div className="world-icon">♛</div>
            <h3>Celebrate the breed</h3>
            <p>Big character, long backs, and a whole lot of charm.</p>
          </article>
          <article>
            <span className="world-number">02</span>
            <div className="world-icon">✦</div>
            <h3>Bring the pack together</h3>
            <p>Family game nights and mobile moments made to feel joyful.</p>
          </article>
          <article>
            <span className="world-number">03</span>
            <div className="world-icon">●</div>
            <h3>Build your dynasty</h3>
            <p>Collect favorites, chase rewards, and make the world your own.</p>
          </article>
        </div>
        <div className="closing-cta">
          <div>
            <p>READY TO JOIN THE PACK?</p>
            <h3>Pick your way to play.</h3>
          </div>
          <div>
            <a
              className="button button-gold"
              href={amazonSearch}
              target="_blank"
              rel="noreferrer"
            >
              Card game on Amazon <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-light-ghost" href="#app-game">
              App game coming soon
            </a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            <span>♛</span>
          </span>
          <span className="brand-copy">
            <strong>DOXIE</strong>
            <span>DYNASTY</span>
          </span>
        </a>
        <p>Two games. One very long world.</p>
        <div className="footer-links">
          <a href="#card-game">Card game</a>
          <a href="#app-game">App game</a>
          <a href="#about">About</a>
        </div>
        <small>© 2026 Doxie Dynasty. All rights reserved.</small>
      </footer>
    </main>
  );
}
