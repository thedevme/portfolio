import { useState, useEffect } from "react";
import Link from "next/link";
import SEO from "../src/components/SEO";

const TestingSwift = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(0);

  // Subscriber count - will need external service to persist
  useEffect(() => {
    setSubscriberCount(0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("https://formspree.io/f/mqegojge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Thanks for your interest!" });
        setEmail("");
        setSubscriberCount(prev => prev + 1);
      } else {
        setStatus({ type: "error", message: "Something went wrong" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong" });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="landing-page">
      <SEO
        title="Swift Testing by Design"
        description="Master the transition from BDD to TDD in Swift and SwiftUI. Build resilient, architecturally sound apps through two distinct testing tracks."
      />

      {/* Navigation */}
      <header className="nav">
        <nav className="nav__inner">
          <Link href="/" legacyBehavior>
            <a className="nav__brand">Swift Testing by Design</a>
          </Link>
          <div className="nav__links">
            <a href="#tracks" className="nav__link">Two Tracks</a>
            <a href="#toc" className="nav__link">ToC</a>
            <a href="#companion" className="nav__link">Companion</a>
            {/* <button className="nav__cta">Buy Now</button> */}
          </div>
          <button className="nav__mobile-toggle">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero section">
          <div className="hero__grid container">
            <div className="hero__content">
              <span className="hero__badge">Latest Edition · Swift 6 Ready</span>
              <h1 className="hero__title">
                Swift Testing <br /><span>by Design</span>
              </h1>
              <p className="hero__subtitle">Designing Tests from Different Perspectives</p>
              <p className="hero__description">
                Master the transition from BDD to TDD in Swift and SwiftUI. Build resilient, architecturally sound apps through two distinct testing tracks.
              </p>
              <div className="hero__ctas">
                {/* <button className="btn btn--primary">Buy Now</button> */}
                <button className="btn btn--secondary">Read a Sample</button>
              </div>
            </div>
            <div className="hero__book-wrapper">
              <div className="hero__book-glow"></div>
              <div className="hero__book">
                <img
                  src="/assets/images/book_cover_transparent.png"
                  alt="Swift Testing by Design Book Cover"
                  className="hero__book-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Validation / Signup Section */}
        <section className="validation">
          <div className="validation__grid">
            <div>
              <h2 className="validation__title">Help me decide if this <span>book should exist.</span></h2>
              <p className="validation__description">
                I believe in building things people actually want. To ensure this book is a valuable resource worth the hundreds of hours of writing, I won't finish the manuscript unless at least 100 developers show interest. This is a collaborative effort to validate the demand for modern Swift testing architecture.
              </p>

              {/* Progress Card */}
              <div className="progress-card">
                <div className="progress-card__header">
                  <span className="progress-card__label">Validation Progress</span>
                  <span className="progress-card__count">{subscriberCount} <span>/ 100</span></span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar__fill" style={{ width: `${Math.min(subscriberCount, 100)}%` }}></div>
                </div>
                <p className="progress-card__note">
                  {subscriberCount === 0
                    ? "Be the first! We need 100 people to commit to making this a reality."
                    : subscriberCount >= 100
                    ? "Goal reached! This book is happening!"
                    : `${100 - subscriberCount} more needed to make this a reality.`}
                </p>
              </div>

              {/* Countdown - commented out
              <div className="countdown">
                <div className="countdown__item">
                  <div className="countdown__box">
                    <span className="countdown__number">12</span>
                  </div>
                  <span className="countdown__label">Days</span>
                </div>
                <div className="countdown__item">
                  <div className="countdown__box">
                    <span className="countdown__number">08</span>
                  </div>
                  <span className="countdown__label">Hours</span>
                </div>
                <div className="countdown__item">
                  <div className="countdown__box">
                    <span className="countdown__number">45</span>
                  </div>
                  <span className="countdown__label">Mins</span>
                </div>
                <div className="countdown__item">
                  <div className="countdown__box">
                    <span className="countdown__number">30</span>
                  </div>
                  <span className="countdown__label">Secs</span>
                </div>
              </div>
              */}
            </div>

            {/* Signup Form */}
            <div className="signup-card">
              <div className="signup-card__header">
                <div className="signup-card__icon">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <h3 className="signup-card__title">Cast Your Vote: Make it Happen</h3>
              </div>
              <form className="signup-card__form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="signup-card__input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="signup-card__submit"
                  disabled={isSubmitting}
                  style={{ backgroundColor: '#5856D6', color: '#ffffff' }}
                >
                  {isSubmitting ? "Submitting..." : "I want this book"}
                </button>
              </form>
              {status.message && (
                <p className={`signup-card__status signup-card__status--${status.type}`}>
                  {status.message}
                </p>
              )}
              <p className="signup-card__note">Transparency first: Your interest directly determines if I write the final chapters.</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <div className="stats__grid">
            <div>
              <div className="stats__number">26</div>
              <div className="stats__label">Chapters</div>
            </div>
            <div>
              <div className="stats__number">4</div>
              <div className="stats__label">Bonus AI Docs</div>
            </div>
            <div>
              <div className="stats__number">2</div>
              <div className="stats__label">Real-World Apps</div>
            </div>
            <div>
              <div className="stats__number">1</div>
              <div className="stats__label">Live API</div>
            </div>
          </div>
        </section>

        {/* Tracks Section */}
        <section className="tracks" id="tracks">
          <div className="tracks__container">
            <div className="tracks__header">
              <h2 className="tracks__title">Master Testing Through Two Distinct Perspectives.</h2>
              <p className="tracks__description">This book covers both sides of testing TDD and BDD from both perspectives of starting from a new app as well as integrating it into an existing app. The main focus of this book is to cover BDD from the design perspective. SwiftUI Testing is built on TDD so this is the common way it is used this book will show it from the design perspective.</p>
            </div>

            <div className="tracks__grid">
              {/* Track 1 */}
              <div className="track-card">
                <div className="track-card__icon">
                  <span className="material-symbols-outlined">terminal</span>
                </div>
                <h3 className="track-card__title">Track 1: Swift Testing</h3>
                <p className="track-card__description">Focus on the official Swift Testing framework. Learn modern, macro-driven testing that integrates deeply with Swift's concurrency model and standard library.</p>
                <ul className="track-card__features">
                  <li className="track-card__feature">
                    <span className="material-symbols-outlined">check_circle</span>
                    Modern Swift Macros
                  </li>
                  <li className="track-card__feature">
                    <span className="material-symbols-outlined">check_circle</span>
                    Async/Await Testing
                  </li>
                  <li className="track-card__feature">
                    <span className="material-symbols-outlined">check_circle</span>
                    Native Integration
                  </li>
                </ul>
              </div>

              {/* Track 2 */}
              <div className="track-card">
                <div className="track-card__icon">
                  <span className="material-symbols-outlined">type_specimen</span>
                </div>
                <h3 className="track-card__title">Track 2: UserSpec</h3>
                <p className="track-card__description">Dive into Behavior Driven Development (BDD). Use UserSpec to write tests that read like requirements, bridging the gap between business logic and executable code.</p>
                <ul className="track-card__features">
                  <li className="track-card__feature">
                    <span className="material-symbols-outlined">check_circle</span>
                    BDD Methodology
                  </li>
                  <li className="track-card__feature">
                    <span className="material-symbols-outlined">check_circle</span>
                    Human-Readable Specs
                  </li>
                  <li className="track-card__feature">
                    <span className="material-symbols-outlined">check_circle</span>
                    Domain-Centric Testing
                  </li>
                </ul>
              </div>
            </div>

            {/* App Cards */}
            <div className="apps-grid">
              <div className="app-card">
                <h4 className="app-card__title">SkyTrack (New App)</h4>
                <p className="app-card__description">Architect for testability from the very first line of code in a greenfield SwiftUI project.</p>
              </div>
              <div className="app-card">
                <h4 className="app-card__title">SkyBook (Existing App)</h4>
                <p className="app-card__description">Learn how to introduce testing to an existing, complex codebase without breaking production features.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Companion Section */}
        <section className="companion" id="companion">
          <div className="companion__container">
            <div className="companion__grid">
              <div>
                <span className="companion__badge">Premium Add-on</span>
                <h2 className="companion__title">The Challenge <span>Companion</span></h2>
                <p className="companion__description">Every chapter ends with a challenge. The companion provides the solutions, split for your level of expertise.</p>

                <div className="companion__features">
                  <div className="companion__feature">
                    <div className="companion__feature-icon">
                      <span className="material-symbols-outlined">code</span>
                    </div>
                    <div>
                      <h4 className="companion__feature-title">Section 1 — Code Only</h4>
                      <p className="companion__feature-description">Just the solution code. Designed for experienced developers who want to check their work quickly without the fluff.</p>
                    </div>
                  </div>
                  <div className="companion__feature">
                    <div className="companion__feature-icon">
                      <span className="material-symbols-outlined">list_alt</span>
                    </div>
                    <div>
                      <h4 className="companion__feature-title">Section 2 — Step by Step</h4>
                      <p className="companion__feature-description">A full architectural walkthrough of how to think through the solution from scratch.</p>
                    </div>
                  </div>
                </div>

                <div className="companion__rationale">
                  <p><span>Rationale:</span> Keeps the main book clean. Covers the 20% of edge cases and deep-dives that advanced readers want to explore further.</p>
                </div>
              </div>

              {/* Companion Card */}
              <div className="companion-card">
                <div className="companion-card__glow"></div>
                <h3 className="companion-card__title">What's Inside</h3>
                <ul className="companion-card__list">
                  <li className="companion-card__item">
                    <span className="companion-card__check">
                      <span className="material-symbols-outlined">check</span>
                    </span>
                    26 Challenge Solutions
                  </li>
                  <li className="companion-card__item">
                    <span className="companion-card__check">
                      <span className="material-symbols-outlined">check</span>
                    </span>
                    Harder Edge Cases &amp; Variants
                  </li>
                  <li className="companion-card__item">
                    <span className="companion-card__check">
                      <span className="material-symbols-outlined">check</span>
                    </span>
                    Inside-Out Testing Patterns
                  </li>
                  <li className="companion-card__item">
                    <span className="companion-card__check">
                      <span className="material-symbols-outlined">check</span>
                    </span>
                    'Review &amp; Pay' Bonus Screen Challenge
                  </li>
                </ul>
                <div className="companion-card__footer">
                  <div className="companion-card__price-label">Standalone Price</div>
                  <div className="companion-card__price">$10</div>
                  <button className="companion-card__btn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="toc" id="toc">
          <div className="toc__container">
            <div className="toc__header">
              <div>
                <h2 className="toc__title">Table of Contents</h2>
                <p className="toc__subtitle">26 chapters. 4 bonus chapters. 2 apps. 1 live API.</p>
              </div>
              <div className="toc__badges">
                <span className="toc__badge toc__badge--swift">Swift 6.0</span>
                <span className="toc__badge toc__badge--ai">AI Ready</span>
              </div>
            </div>

            <div className="toc__grid">
              {/* Part 1A */}
              <div className="part-card">
                <div className="part-card__label">Part 1A</div>
                <h3 className="part-card__title">Swift Testing · New App</h3>
                <ul className="part-card__chapters">
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Introduction: Why I Avoided Testing</span>
                    </div>
                    <p className="chapter-item__desc">The honest story of how testing never clicked until it did. Jon Reid, the NBA All-Star Voting app, Deep Dish Swift, and the journey that led to UserSpec.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 1: The Testing Mindset</span>
                    </div>
                    <p className="chapter-item__desc">No code. Just thinking. The two schools of testing, red green refactor, and the vocabulary you need before you write your first test.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 2: Search</span>
                    </div>
                    <p className="chapter-item__desc">Your first tests against the SkyTrack search screen. Build the FlightSearch model and write your first tests using @Test, #expect, and #require.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 3: Flight Results</span>
                    </div>
                    <p className="chapter-item__desc">Results from a real API means async code. Write async tests with await and introduce test doubles — replacing the real API with a fake.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 4: Fare Selection</span>
                    </div>
                    <p className="chapter-item__desc">Pricing rules that depend on cabin class, route, and passenger count. Learn what it means to test code that depends on other code.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 5: Passenger Details</span>
                    </div>
                    <p className="chapter-item__desc">State-based tests and parameterized tests that cover all validation rules without repeating yourself.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 6: Seat Selection</span>
                    </div>
                    <p className="chapter-item__desc">The most complex screen. Seat maps change based on aircraft type. Tests for layout rules, section assignments, and capacity.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 7: Confirmation</span>
                    </div>
                    <p className="chapter-item__desc">Introduce SwiftData, write tests that confirm data is saved and loaded correctly, and learn the difference between a passing test and a meaningful one.</p>
                  </li>
                  <li className="ai-bonus">
                    <span className="material-symbols-outlined">auto_awesome</span>
                    Bonus: AI as a Testing Partner
                  </li>
                </ul>
              </div>

              {/* Part 1B */}
              <div className="part-card">
                <div className="part-card__label">Part 1B</div>
                <h3 className="part-card__title">Swift Testing · Existing App</h3>
                <ul className="part-card__chapters">
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 8: Live Flight Map</span>
                    </div>
                    <p className="chapter-item__desc">The app is already built. No tests. Develop a strategy for approaching an untested codebase and find the seams where code can be pulled apart.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 9: Flight List</span>
                    </div>
                    <p className="chapter-item__desc">Write tests against the existing flight list and find things you never knew were broken. Filtering logic and edge cases hiding in fast code.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 10: Flight Detail</span>
                    </div>
                    <p className="chapter-item__desc">Computed properties never designed for testing. Refactor just enough to make the code testable without breaking what already works.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 11: Airport Detail</span>
                    </div>
                    <p className="chapter-item__desc">Dependencies baked in that make it hard to test. Introduce protocol boundaries into existing code to replace real dependencies with fakes.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 12: Route Browser</span>
                    </div>
                    <p className="chapter-item__desc">28 routes, 20 cities, 6 aircraft types. Parameterized tests that discover edge cases the original implementation never handled.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 13: Stats</span>
                    </div>
                    <p className="chapter-item__desc">Live data that changes every day. Behavior-focused tests that confirm what the screen does rather than what it returns.</p>
                  </li>
                  <li className="ai-bonus">
                    <span className="material-symbols-outlined">auto_awesome</span>
                    Bonus: AI and Existing Codebases
                  </li>
                </ul>
              </div>

              {/* Part 2A */}
              <div className="part-card">
                <div className="part-card__label">Part 2A</div>
                <h3 className="part-card__title">UserSpec · New App</h3>
                <ul className="part-card__chapters">
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 14: Design-Driven Development</span>
                    </div>
                    <p className="chapter-item__desc">Step back from code and look at the design. Write your first user stories in Given, When, Then — and watch them become executable tests.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 15: Search</span>
                    </div>
                    <p className="chapter-item__desc">Write step definitions that map plain English to real Swift Testing code, and make those steps reusable across scenarios.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 16: Flight Results</span>
                    </div>
                    <p className="chapter-item__desc">One story, many examples. Scenario outlines let you run the same story with multiple data sets without writing separate scenarios.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 17: Fare Selection</span>
                    </div>
                    <p className="chapter-item__desc">Background steps set shared context once so every scenario starts clean without repeating setup code.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 18: Passenger Details</span>
                    </div>
                    <p className="chapter-item__desc">Tags let you group validation rules separately, run only what you need, and keep your suite organized as it grows.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 19: Seat Selection</span>
                    </div>
                    <p className="chapter-item__desc">Multi-step flows for single and multi-passenger bookings — including A380 upper deck scenarios a product manager could read.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 20: Confirmation</span>
                    </div>
                    <p className="chapter-item__desc">One spec from search to confirmed booking. The full user journey in plain English. Hooks set up state and clean up after.</p>
                  </li>
                  <li className="ai-bonus">
                    <span className="material-symbols-outlined">auto_awesome</span>
                    Bonus: AI and Design-Driven Development
                  </li>
                </ul>
              </div>

              {/* Part 2B */}
              <div className="part-card">
                <div className="part-card__label">Part 2B</div>
                <h3 className="part-card__title">UserSpec · Existing App</h3>
                <ul className="part-card__chapters">
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 21: Live Flight Map</span>
                    </div>
                    <p className="chapter-item__desc">Write user stories for a screen you didn't design. What does the user expect? When do those expectations break?</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 22: Flight List</span>
                    </div>
                    <p className="chapter-item__desc">Behavior-focused scenarios that confirm what the list does — how it filters, how it sorts — without hardcoding flight numbers.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 23: Flight Detail</span>
                    </div>
                    <p className="chapter-item__desc">Hooks let you set up specific live flight state before each scenario — control over a screen never designed with testing in mind.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 24: Airport Detail</span>
                    </div>
                    <p className="chapter-item__desc">Writing stories forces you to articulate behavior that was assumed, not documented. Find what the screen should do but doesn't.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 25: Route Browser</span>
                    </div>
                    <p className="chapter-item__desc">Scenario outlines against 28 routes. Edge cases become visible when you describe expected behavior for every combination.</p>
                  </li>
                  <li className="chapter-item-full">
                    <div className="chapter-item__header">
                      <span className="chapter-item__title">Chapter 26: Stats</span>
                    </div>
                    <p className="chapter-item__desc">A UserSpec suite that describes everything in plain English anyone can read. Living documentation that keeps specs in sync.</p>
                  </li>
                  <li className="ai-bonus">
                    <span className="material-symbols-outlined">auto_awesome</span>
                    Bonus: AI and UserSpec at Scale
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing">
          <div className="pricing__container">
            <h2 className="pricing__title">Choose Your Edition</h2>
            <p className="pricing__subtitle">Invest in your career as a professional Swift architect.</p>

            <div className="pricing__grid">
              {/* Early Access */}
              <div className="pricing-card">
                <div className="pricing-card__content">
                  <h3 className="pricing-card__name">Early Access</h3>
                  <p className="pricing-card__tagline">Chapters releasing live</p>
                  <div className="pricing-card__price">$29</div>
                  <ul className="pricing-card__features">
                    <li className="pricing-card__feature">
                      <span className="material-symbols-outlined">check</span>
                      Read chapters as written
                    </li>
                    <li className="pricing-card__feature">
                      <span className="material-symbols-outlined">check</span>
                      Beta source code access
                    </li>
                    <li className="pricing-card__feature">
                      <span className="material-symbols-outlined">check</span>
                      Feedback channel
                    </li>
                  </ul>
                </div>
                <button className="pricing-card__btn pricing-card__btn--default">Start Reading</button>
              </div>

              {/* Full Book */}
              <div className="pricing-card">
                <div className="pricing-card__content">
                  <h3 className="pricing-card__name">Full Book</h3>
                  <p className="pricing-card__tagline">PDF + ePub + Mobi</p>
                  <div className="pricing-card__price">$39</div>
                  <ul className="pricing-card__features">
                    <li className="pricing-card__feature">
                      <span className="material-symbols-outlined">check</span>
                      All 26 Chapters
                    </li>
                    <li className="pricing-card__feature">
                      <span className="material-symbols-outlined">check</span>
                      Full source code for 2 apps
                    </li>
                    <li className="pricing-card__feature">
                      <span className="material-symbols-outlined">check</span>
                      4 AI Bonus Chapters
                    </li>
                  </ul>
                </div>
                <button className="pricing-card__btn pricing-card__btn--default">Buy E-Book</button>
              </div>

              {/* Mastery Bundle */}
              <div className="pricing-card pricing-card--featured">
                <div className="pricing-card__ribbon">Best Value</div>
                <div className="pricing-card__content">
                  <h3 className="pricing-card__name">Mastery Bundle</h3>
                  <p className="pricing-card__tagline">Book + Companion</p>
                  <div className="pricing-card__price">$45</div>
                  <ul className="pricing-card__features">
                    <li className="pricing-card__feature">
                      <span className="material-symbols-outlined">check</span>
                      Complete 500+ page book
                    </li>
                    <li className="pricing-card__feature">
                      <span className="material-symbols-outlined">check</span>
                      Challenge Companion PDF
                    </li>
                    <li className="pricing-card__feature">
                      <span className="material-symbols-outlined">check</span>
                      Discord Community Access
                    </li>
                    <li className="pricing-card__feature">
                      <span className="material-symbols-outlined">check</span>
                      Live API Access Key
                    </li>
                  </ul>
                </div>
                <button className="pricing-card__btn pricing-card__btn--primary">Get the Bundle</button>
              </div>
            </div>

            <p className="pricing__note">
              Need just the companion? <a href="#companion">Get the Companion alone for $10</a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__grid">
          <div>
            <span className="footer__brand">Architectural Ledger</span>
            <p className="footer__description">Advancing the craft of Swift software engineering through intentional design and rigorous testing.</p>
          </div>
          <div>
            <h4 className="footer__section-title">Resources</h4>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Newsletter</a></li>
              <li><a href="#" className="footer__link">Sample Chapters</a></li>
              <li><a href="#" className="footer__link">API Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__section-title">Connect</h4>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Twitter / X</a></li>
              <li><a href="#" className="footer__link">GitHub Repo</a></li>
              <li><a href="#" className="footer__link">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__section-title">Support</h4>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Privacy Policy</a></li>
              <li><a href="#" className="footer__link">Terms of Sale</a></li>
              <li><a href="#" className="footer__link">Help Center</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">&copy; 2024 Architectural Ledger Press. All rights reserved.</p>
            <div className="footer__icons">
              <span className="material-symbols-outlined">terminal</span>
              <span className="material-symbols-outlined">shield</span>
              <span className="material-symbols-outlined">verified_user</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Inter:wght@400;500;600&family=Oswald:wght@600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        /* Reset and isolate from main site styles */
        .landing-page,
        .landing-page *,
        .landing-page *::before,
        .landing-page *::after {
          box-sizing: border-box !important;
          margin: 0;
          padding: 0;
        }

        .landing-page {
          --primary: #5856D6;
          --primary-accent: #adc6ff;
          --surface: #FFFFFF;
          --surface-variant: #F8F9FA;
          --surface-container: #F1F3F5;
          --on-surface: #1A1A1E;
          --on-surface-variant: #4A4A4E;
          --outline: #E1E1E6;
          --on-primary: #FFFFFF;
          --font-headline: 'Manrope', sans-serif;
          --font-body: 'Inter', sans-serif;
          --section-padding: 10rem;
          --container-max: 80rem;
          --radius-sm: 0.5rem;
          --radius-md: 1rem;
          --radius-lg: 1.5rem;
          --radius-xl: 2rem;
          --radius-2xl: 2.5rem;
          --radius-3xl: 3rem;
          --radius-full: 9999px;
          --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
          --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

          font-family: var(--font-body) !important;
          background-color: var(--surface) !important;
          color: var(--on-surface) !important;
          line-height: 1.5 !important;
          min-height: 100vh;
          font-size: 16px !important;
        }

        /* Reset global button styles that add green hover */
        .landing-page button:before,
        .landing-page button:after,
        .landing-page .btn:before,
        .landing-page .btn:after {
          display: none !important;
          background: transparent !important;
          content: none !important;
        }

        /* Override main site paragraph styles */
        .landing-page p {
          font-size: 1rem !important;
          font-family: var(--font-body) !important;
          line-height: 1.7 !important;
          margin: 0 !important;
        }

        /* Override main site heading styles */
        .landing-page h1,
        .landing-page h2,
        .landing-page h3,
        .landing-page h4,
        .landing-page h5,
        .landing-page h6 {
          font-family: var(--font-headline) !important;
          line-height: 1.2 !important;
          margin: 0 !important;
        }

        .landing-page ::selection {
          background-color: rgba(173, 198, 255, 0.3);
        }

        .landing-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .landing-page a {
          text-decoration: none !important;
          color: inherit;
          transition: color 0.2s ease;
        }

        .landing-page ul,
        .landing-page li {
          list-style: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .landing-page button,
        .landing-page input {
          font-family: inherit !important;
          font-size: inherit !important;
          border: none;
          outline: none;
          background: none;
          cursor: pointer;
        }

        .landing-page .container {
          width: 100%;
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 2rem;
        }

        .landing-page .section {
          padding: var(--section-padding) 2rem;
        }

        /* Override Bootstrap container if loaded */
        .landing-page .container {
          max-width: var(--container-max) !important;
          padding-left: 2rem !important;
          padding-right: 2rem !important;
        }
      `}</style>

      <style jsx>{`
        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--outline);
        }

        .nav__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 1.25rem 2rem;
        }

        .nav__brand {
          font-size: 1.25rem;
          font-weight: 900;
          letter-spacing: -0.025em;
          color: var(--primary);
        }

        .nav__links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav__link {
          font-weight: 600;
          color: var(--on-surface-variant);
        }

        .nav__link:hover {
          color: var(--primary);
        }

        .nav__cta {
          background-color: #5856D6 !important;
          color: #ffffff !important;
          padding: 0.625rem 1.5rem;
          border-radius: var(--radius-full);
          font-weight: 700;
          box-shadow: 0 10px 15px -3px rgba(88, 86, 214, 0.2);
          transition: all 0.2s ease;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          line-height: 1 !important;
        }

        .nav__cta:hover {
          background-color: #ffffff !important;
          color: #5856D6 !important;
          box-shadow: 0 10px 15px -3px rgba(88, 86, 214, 0.2);
          transform: translateY(-2px);
        }

        .nav__mobile-toggle {
          display: none;
          color: var(--primary);
          font-size: 1.5rem;
        }

        /* Hero */
        .hero {
          position: relative;
          padding-top: 10rem;
          padding-bottom: 10rem;
          overflow: hidden;
        }

        .hero__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          max-width: var(--container-max);
          margin: 0 auto;
        }

        .hero__content {
          position: relative;
          z-index: 10;
        }

        .hero__badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: rgba(173, 198, 255, 0.1);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
          margin-bottom: 2rem;
        }

        .hero__title {
          font-family: var(--font-headline);
          font-size: 5.5rem;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--on-surface);
          margin-bottom: 1.5rem;
        }

        .hero__title span {
          color: var(--primary);
        }

        .hero__subtitle {
          font-family: var(--font-headline);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--on-surface-variant);
          margin-bottom: 2.5rem;
        }

        .hero__description {
          font-size: 1.25rem !important;
          line-height: 1.7 !important;
          color: rgba(74, 74, 78, 0.8) !important;
          max-width: 36rem;
          margin-bottom: 3rem !important;
        }

        .hero__ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .hero__book-wrapper {
          position: relative;
          justify-self: center;
        }

        .hero__book-glow {
          display: none;
        }

        .hero__book {
          position: relative;
          aspect-ratio: 3 / 4;
          background-color: transparent;
          border: none;
          transform: rotate(2deg);
          transition: transform 0.7s ease;
        }

        .hero__book:hover {
          transform: rotate(0deg);
        }

        .hero__book-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero__book-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(2px);
        }

        .hero__book-label {
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.9);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
        }

        .hero__book-label-icon {
          font-size: 3.5rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .hero__book-label-title {
          font-family: var(--font-headline);
          font-size: 1.875rem;
          font-weight: 900;
          color: var(--on-surface);
        }

        /* Buttons */
        .btn {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          vertical-align: middle !important;
          padding: 1.25rem 2.5rem;
          border-radius: var(--radius-full);
          font-weight: 800;
          font-size: 1.25rem;
          transition: all 0.2s ease;
          cursor: pointer;
          line-height: 1 !important;
        }

        .btn--primary {
          background-color: #5856D6 !important;
          color: #ffffff !important;
          box-shadow: 0 25px 50px -12px rgba(88, 86, 214, 0.3);
        }

        .btn--primary:hover {
          background-color: #ffffff !important;
          color: #5856D6 !important;
          box-shadow: 0 25px 50px -12px rgba(88, 86, 214, 0.3);
        }

        .btn--secondary {
          background-color: var(--surface) !important;
          color: var(--on-surface) !important;
          border: 2px solid var(--outline) !important;
        }

        .btn--secondary:hover {
          background-color: #ffffff !important;
          color: #5856D6 !important;
          border-color: #5856D6 !important;
        }

        /* Validation Section */
        .validation {
          padding: 6rem 2rem;
          background-color: var(--surface-container);
          border-top: 1px solid var(--outline);
          border-bottom: 1px solid var(--outline);
          position: relative;
          overflow: hidden;
        }

        .validation__grid {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 4rem !important;
          align-items: center !important;
          max-width: var(--container-max) !important;
          margin: 0 auto !important;
          padding: 0 2rem !important;
          width: 100% !important;
        }

        .validation__grid > * {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        .validation__title {
          font-family: var(--font-headline);
          font-size: 3.75rem;
          font-weight: 900;
          letter-spacing: -0.025em;
          color: var(--on-surface);
          margin-bottom: 2rem;
        }

        .validation__title span {
          color: var(--primary);
        }

        .validation__description {
          font-size: 1.125rem !important;
          line-height: 1.7 !important;
          color: var(--on-surface-variant) !important;
          max-width: 36rem;
          margin-bottom: 2.5rem !important;
        }

        /* Progress Card */
        .progress-card {
          background-color: var(--surface);
          padding: 2rem;
          border-radius: var(--radius-2xl);
          border: 1px solid var(--outline);
          box-shadow: var(--shadow-sm);
          margin-bottom: 3rem;
        }

        .progress-card__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 1rem;
        }

        .progress-card__label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--on-surface-variant);
        }

        .progress-card__count {
          font-family: var(--font-headline);
          font-size: 1.875rem;
          font-weight: 900;
          color: var(--on-surface);
        }

        .progress-card__count span {
          color: rgba(74, 74, 78, 0.4);
        }

        .progress-bar {
          height: 1rem;
          background-color: var(--surface-container);
          border-radius: var(--radius-full);
          overflow: hidden;
          border: 1px solid var(--outline);
        }

        .progress-bar__fill {
          height: 100%;
          background-color: var(--primary);
          position: relative;
        }

        .progress-bar__fill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg,
            rgba(255,255,255,0.2) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255,255,255,0.2) 50%,
            rgba(255,255,255,0.2) 75%,
            transparent 75%,
            transparent
          );
          background-size: 20px 20px;
          opacity: 0.2;
        }

        .progress-card__note {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--on-surface-variant);
          margin-top: 1rem;
        }

        /* Countdown */
        .countdown {
          display: flex;
          gap: 2rem;
        }

        .countdown__item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .countdown__box {
          width: 6rem;
          height: 6rem;
          background-color: var(--surface);
          border: 1px solid var(--outline);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          box-shadow: var(--shadow-sm);
        }

        .countdown__number {
          font-family: 'Oswald', sans-serif;
          font-size: 4.5rem;
          font-weight: 600;
          line-height: 1;
          color: var(--primary);
        }

        .countdown__label {
          font-size: 0.625rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--on-surface-variant);
        }

        /* Signup Card */
        .signup-card {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          background-color: var(--surface) !important;
          border: 2px solid rgba(88, 86, 214, 0.1) !important;
          padding: 3rem !important;
          border-radius: var(--radius-3xl) !important;
          box-shadow: 0 25px 50px -12px rgba(88, 86, 214, 0.05) !important;
        }

        .signup-card__header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .signup-card__icon {
          width: 3.5rem;
          height: 3.5rem;
          background-color: rgba(88, 86, 214, 0.05);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .signup-card__icon :global(.material-symbols-outlined) {
          font-size: 1.875rem;
          color: var(--primary);
        }

        .signup-card__title {
          font-family: var(--font-headline);
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--on-surface);
        }

        .signup-card__form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .signup-card__input {
          width: 100% !important;
          background-color: var(--surface-variant) !important;
          border: 1px solid var(--outline) !important;
          border-radius: var(--radius-lg) !important;
          padding: 1.25rem !important;
          color: var(--on-surface) !important;
          transition: all 0.2s ease;
          font-size: 1rem !important;
        }

        .signup-card__input::placeholder {
          color: rgba(74, 74, 78, 0.5);
        }

        .signup-card__input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(88, 86, 214, 0.1);
        }

        .signup-card__submit {
          width: 100% !important;
          background-color: #5856D6 !important;
          color: #ffffff !important;
          padding: 1.25rem !important;
          border-radius: var(--radius-lg) !important;
          font-weight: 900 !important;
          font-size: 1.125rem !important;
          box-shadow: 0 10px 15px -3px rgba(88, 86, 214, 0.3) !important;
          transition: all 0.2s ease;
          border: none !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          line-height: 1 !important;
        }

        .signup-card__submit:hover {
          background-color: #ffffff !important;
          color: #5856D6 !important;
          box-shadow: 0 10px 15px -3px rgba(88, 86, 214, 0.3) !important;
          transform: translateY(-2px);
        }

        .signup-card__note {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(74, 74, 78, 0.7);
        }

        .signup-card__status {
          text-align: center;
          margin-top: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.75rem;
          border-radius: var(--radius-md);
        }

        .signup-card__status--success {
          background-color: rgba(88, 86, 214, 0.1);
          color: var(--primary);
        }

        .signup-card__status--error {
          background-color: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }

        .signup-card__submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Stats */
        .stats {
          padding: 6rem 2rem;
          background-color: var(--surface-variant);
          border-bottom: 1px solid var(--outline);
        }

        .stats__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          text-align: center;
          max-width: var(--container-max);
          margin: 0 auto;
        }

        .stats__number {
          font-family: 'Oswald', sans-serif;
          font-size: 7.5rem;
          font-weight: 600;
          line-height: 1;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .stats__label {
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--on-surface-variant);
        }

        /* Tracks */
        .tracks {
          padding: 20px 2rem 10rem 2rem;
          background-color: var(--surface);
        }

        .tracks__container {
          max-width: var(--container-max);
          margin: 0 auto;
        }

        .tracks__header {
          margin-bottom: 6rem;
        }

        .tracks__title {
          font-family: var(--font-headline);
          font-size: 3.75rem;
          font-weight: 900;
          letter-spacing: -0.025em;
          margin-bottom: 2rem;
          color: #5856CF !important;
        }

        .tracks__description {
          font-size: 1.5rem !important;
          line-height: 1.7 !important;
          color: var(--on-surface-variant) !important;
        }

        .tracks__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        .track-card {
          padding: 3rem;
          background-color: var(--surface-variant);
          border-radius: var(--radius-2xl);
          border: 1px solid var(--outline);
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .track-card:hover {
          background-color: var(--surface);
          box-shadow: 0 25px 50px -12px rgba(88, 86, 214, 0.05);
        }

        .track-card__icon {
          position: absolute;
          top: 0;
          right: 0;
          padding: 2.5rem;
          opacity: 0.05;
          transition: opacity 0.3s ease;
        }

        .track-card:hover .track-card__icon {
          opacity: 0.1;
        }

        .track-card__icon :global(.material-symbols-outlined) {
          font-size: 12rem;
        }

        .track-card__title {
          font-family: var(--font-headline);
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--primary);
          margin-bottom: 2rem;
        }

        .track-card__description {
          font-size: 1.125rem !important;
          line-height: 1.7 !important;
          color: var(--on-surface-variant) !important;
          margin-bottom: 2.5rem !important;
        }

        .track-card__features {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .track-card__feature {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 600;
          color: var(--on-surface);
        }

        .track-card__feature :global(.material-symbols-outlined) {
          font-size: 1.875rem;
          color: var(--primary);
        }

        /* App Cards */
        .apps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
          margin-top: 5rem;
        }

        .app-card {
          background-color: var(--surface);
          border-radius: var(--radius-2xl);
          padding: 2.5rem;
          border: 1px solid var(--outline);
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.3s ease;
        }

        .app-card:hover {
          box-shadow: var(--shadow-md);
        }

        .app-card__title {
          font-family: var(--font-headline);
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--on-surface);
          margin-bottom: 1rem;
        }

        .app-card__description {
          color: var(--on-surface-variant) !important;
          line-height: 1.7 !important;
          font-size: 1rem !important;
        }

        /* Companion */
        .companion {
          padding: 10rem 2rem;
          background-color: rgba(241, 243, 245, 0.5);
        }

        .companion__container {
          max-width: var(--container-max);
          margin: 0 auto;
        }

        .companion__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .companion__badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: rgba(88, 86, 214, 0.1);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
          margin-bottom: 2rem;
        }

        .companion__title {
          font-family: var(--font-headline);
          font-size: 3.75rem;
          font-weight: 900;
          letter-spacing: -0.025em;
          color: var(--on-surface);
          margin-bottom: 2rem;
        }

        .companion__title span {
          color: var(--primary);
        }

        .companion__description {
          font-size: 1.5rem !important;
          line-height: 1.7 !important;
          color: var(--on-surface-variant) !important;
          margin-bottom: 2.5rem !important;
        }

        .companion__features {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .companion__feature {
          display: flex;
          gap: 1.5rem;
        }

        .companion__feature-icon {
          width: 3.5rem;
          height: 3.5rem;
          flex-shrink: 0;
          background-color: var(--surface);
          border: 1px solid var(--outline);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .companion__feature-icon :global(.material-symbols-outlined) {
          color: var(--primary);
        }

        .companion__feature-title {
          font-family: var(--font-headline);
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--on-surface);
          margin-bottom: 0.5rem;
        }

        .companion__feature-description {
          font-weight: 500;
          color: var(--on-surface-variant);
          line-height: 1.7;
        }

        .companion__rationale {
          margin-top: 3rem;
          padding: 2rem;
          background-color: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(88, 86, 214, 0.1);
          border-radius: 1.5rem;
        }

        .companion__rationale p {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--on-surface-variant);
          line-height: 1.7;
        }

        .companion__rationale span {
          color: var(--primary);
          font-weight: 900;
        }

        /* Companion Card */
        .companion-card {
          background-color: var(--surface);
          padding: 3rem;
          border-radius: var(--radius-3xl);
          border: 1px solid var(--outline);
          box-shadow: var(--shadow-xl);
          position: relative;
          overflow: hidden;
        }

        .companion-card__glow {
          position: absolute;
          top: -2.5rem;
          right: -2.5rem;
          width: 10rem;
          height: 10rem;
          background-color: rgba(88, 86, 214, 0.05);
          border-radius: var(--radius-full);
          filter: blur(48px);
        }

        .companion-card__title {
          font-family: var(--font-headline);
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--on-surface);
          margin-bottom: 2rem;
        }

        .companion-card__list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .companion-card__item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 600;
          color: var(--on-surface);
        }

        .companion-card__check {
          width: 2rem;
          height: 2rem;
          flex-shrink: 0;
          background-color: rgba(88, 86, 214, 0.1);
          color: var(--primary);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .companion-card__check :global(.material-symbols-outlined) {
          font-size: 0.875rem;
        }

        .companion-card__footer {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--outline);
        }

        .companion-card__price-label {
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--on-surface-variant);
          margin-bottom: 0.5rem;
        }

        .companion-card__price {
          font-family: var(--font-headline);
          font-size: 3rem;
          font-weight: 900;
          color: var(--on-surface);
          margin-bottom: 1.5rem;
        }

        .companion-card__btn {
          width: 100%;
          background-color: var(--surface);
          color: var(--on-surface);
          padding: 1rem;
          border-radius: var(--radius-lg);
          border: 2px solid var(--outline);
          font-weight: 900;
          transition: background-color 0.2s ease;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          line-height: 1 !important;
        }

        .companion-card__btn:hover {
          background-color: var(--surface-variant);
        }

        /* TOC */
        .toc {
          padding: 20px 2rem 10rem 2rem;
          background-color: var(--surface-variant);
        }

        .toc__container {
          max-width: var(--container-max);
          margin: 0 auto;
        }

        .toc__header {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 6rem;
        }

        .toc__title {
          font-family: var(--font-headline);
          font-size: 3.75rem;
          font-weight: 900;
          letter-spacing: -0.025em;
          margin-bottom: 1.5rem;
          color: #5856CF !important;
        }

        .toc__subtitle {
          font-size: 1.5rem;
          color: var(--on-surface-variant);
        }

        .toc__badges {
          display: flex;
          gap: 1rem;
        }

        .toc__badge {
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          font-weight: 900;
          box-shadow: var(--shadow-sm);
        }

        .toc__badge--swift {
          background-color: var(--surface);
          color: var(--primary);
          border: 1px solid var(--outline);
        }

        .toc__badge--ai {
          background-color: rgba(173, 198, 255, 0.2);
          color: var(--primary);
          border: 1px solid rgba(173, 198, 255, 0.4);
        }

        .toc__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }

        /* Part Card */
        .part-card {
          padding: 2.5rem;
          background-color: var(--surface);
          border-radius: var(--radius-2xl);
          border: 1px solid var(--outline);
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.3s ease;
        }

        .part-card:hover {
          box-shadow: var(--shadow-lg);
        }

        .part-card__label {
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .part-card__title {
          font-family: var(--font-headline);
          font-size: 1.875rem;
          font-weight: 800;
          margin-bottom: 2rem;
        }

        .part-card__chapters {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .chapter-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(225, 225, 230, 0.5);
          font-size: 1rem;
          color: var(--on-surface-variant);
          transition: color 0.2s ease;
        }

        .chapter-item:hover {
          color: var(--primary);
        }

        .chapter-item-full {
          padding: 1rem 0;
          border-bottom: 1px solid rgba(225, 225, 230, 0.5);
        }

        .chapter-item-full:last-of-type {
          border-bottom: none;
        }

        .chapter-item__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .chapter-item__title {
          font-size: 1rem !important;
          font-weight: 700 !important;
          color: var(--on-surface) !important;
        }

        .chapter-item__desc {
          font-size: 0.875rem !important;
          line-height: 1.5 !important;
          color: var(--on-surface-variant) !important;
          margin: 0 !important;
        }

        .chapter-status {
          font-size: 0.625rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .chapter-status--completed {
          background-color: rgba(88, 86, 214, 0.1);
          color: var(--primary);
        }

        .chapter-status--not-started {
          background-color: var(--surface-container);
          color: rgba(74, 74, 78, 0.4);
          border: 1px solid rgba(225, 225, 230, 0.5);
        }

        .chapter-progress {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.375rem;
          width: 8rem;
        }

        .chapter-progress__label {
          font-size: 0.5625rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.025em;
          color: rgba(88, 86, 214, 0.6);
        }

        .chapter-progress__bar {
          width: 100%;
          height: 0.375rem;
          background-color: var(--surface-container);
          border-radius: var(--radius-full);
          overflow: hidden;
          border: 1px solid rgba(225, 225, 230, 0.2);
        }

        .chapter-progress__fill {
          height: 100%;
          background-color: var(--primary);
        }

        .ai-bonus {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem;
          margin-top: 1.5rem;
          background-color: rgba(173, 198, 255, 0.1);
          border: 1px solid rgba(173, 198, 255, 0.3);
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--primary);
        }

        .ai-bonus :global(.material-symbols-outlined) {
          font-weight: 700;
        }

        /* Pricing */
        .pricing {
          padding: 10rem 2rem;
          background-color: var(--surface);
        }

        .pricing__container {
          max-width: var(--container-max);
          margin: 0 auto;
          text-align: center;
        }

        .pricing__title {
          font-family: var(--font-headline);
          font-size: 3.75rem;
          font-weight: 900;
          letter-spacing: -0.025em;
          margin-bottom: 2.5rem;
        }

        .pricing__subtitle {
          font-size: 1.5rem;
          color: var(--on-surface-variant);
          margin-bottom: 5rem;
        }

        .pricing__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: stretch;
        }

        .pricing-card {
          display: flex;
          flex-direction: column;
          padding: 2.5rem;
          background-color: var(--surface);
          border: 2px solid var(--outline);
          border-radius: var(--radius-3xl);
          transition: border-color 0.5s ease;
        }

        .pricing-card:hover {
          border-color: rgba(173, 198, 255, 0.5);
        }

        .pricing-card--featured {
          background-color: rgba(88, 86, 214, 0.05);
          border: 3px solid var(--primary);
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(88, 86, 214, 0.2);
        }

        .pricing-card__ribbon {
          position: absolute;
          top: 1.25rem;
          right: -2.5rem;
          background-color: var(--primary);
          color: var(--on-primary);
          font-size: 0.625rem;
          font-weight: 900;
          text-transform: uppercase;
          padding: 0.5rem 3.5rem;
          transform: rotate(45deg);
        }

        .pricing-card__content {
          flex: 1;
        }

        .pricing-card__name {
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
        }

        .pricing-card--featured .pricing-card__name {
          color: var(--primary);
        }

        .pricing-card__tagline {
          font-size: 0.625rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--on-surface-variant);
          margin-bottom: 2rem;
        }

        .pricing-card--featured .pricing-card__tagline {
          color: var(--primary);
        }

        .pricing-card__price {
          font-family: var(--font-headline);
          font-size: 3.75rem;
          font-weight: 900;
          color: var(--on-surface);
          margin-bottom: 2.5rem;
        }

        .pricing-card__features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
          margin-bottom: 3rem;
        }

        .pricing-card__feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--on-surface-variant);
        }

        .pricing-card--featured .pricing-card__feature {
          font-weight: 600;
          color: var(--on-surface);
        }

        .pricing-card__feature :global(.material-symbols-outlined) {
          font-size: 0.875rem;
          font-weight: 900;
          color: var(--primary-accent);
        }

        .pricing-card--featured .pricing-card__feature :global(.material-symbols-outlined) {
          color: var(--primary);
        }

        .pricing-card__btn {
          width: 100%;
          padding: 1rem;
          border-radius: var(--radius-lg);
          font-weight: 900;
          font-size: 1rem;
          transition: all 0.2s ease;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          line-height: 1 !important;
        }

        .pricing-card__btn--default {
          background-color: var(--surface-variant) !important;
          color: var(--on-surface) !important;
        }

        .pricing-card__btn--default:hover {
          background-color: #ffffff !important;
          color: #5856D6 !important;
        }

        .pricing-card__btn--primary {
          background-color: #5856D6 !important;
          color: #ffffff !important;
          padding: 1.25rem;
          font-size: 1.125rem;
          box-shadow: 0 20px 25px -5px rgba(88, 86, 214, 0.3);
        }

        .pricing-card__btn--primary:hover {
          background-color: #ffffff !important;
          color: #5856D6 !important;
          transform: scale(1.03);
        }

        .pricing__note {
          margin-top: 3rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--on-surface-variant);
        }

        .pricing__note a {
          color: var(--primary);
          font-weight: 900;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .pricing__note a:hover {
          color: rgba(88, 86, 214, 0.8);
        }

        /* Footer */
        .footer {
          background-color: var(--surface-variant);
          border-top: 1px solid var(--outline);
        }

        .footer__grid {
          display: grid;
          grid-template-columns: 1fr repeat(3, auto);
          gap: 4rem;
          padding: 6rem 2rem;
          max-width: var(--container-max);
          margin: 0 auto;
        }

        .footer__brand {
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--primary);
          letter-spacing: -0.025em;
          margin-bottom: 1.5rem;
          display: block;
        }

        .footer__description {
          color: var(--on-surface-variant);
          margin-bottom: 2rem;
        }

        .footer__section-title {
          font-size: 0.875rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--on-surface);
          margin-bottom: 2rem;
        }

        .footer__links {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer__link {
          font-weight: 500;
          color: var(--on-surface-variant);
          transition: color 0.2s ease;
        }

        .footer__link:hover {
          color: var(--primary);
        }

        .footer__bottom {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 2rem 3rem;
        }

        .footer__bottom-inner {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding-top: 3rem;
          border-top: 1px solid var(--outline);
        }

        .footer__copyright {
          font-weight: 500;
          color: var(--on-surface-variant);
        }

        .footer__icons {
          display: flex;
          gap: 2rem;
        }

        .footer__icons :global(.material-symbols-outlined) {
          color: var(--primary-accent);
        }

        /* Responsive */
        @media (min-width: 768px) {
          .toc__header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }

          .footer__bottom-inner {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        @media (max-width: 1024px) {
          .hero__grid,
          .validation__grid,
          .companion__grid,
          .tracks__grid,
          .toc__grid,
          .pricing__grid {
            grid-template-columns: 1fr !important;
          }

          .hero__title {
            font-size: 3.5rem;
          }

          .apps-grid {
            grid-template-columns: 1fr;
          }

          .stats__grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer__grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .nav__links {
            display: none;
          }

          .nav__mobile-toggle {
            display: block;
          }

          .hero {
            padding-top: 7rem;
          }

          .hero__title {
            font-size: 2.5rem;
          }

          .hero__subtitle {
            font-size: 1.5rem;
          }

          .hero__ctas {
            flex-direction: column;
          }

          .validation__title,
          .tracks__title,
          .companion__title,
          .toc__title,
          .pricing__title {
            font-size: 2.5rem;
          }

          .countdown {
            flex-wrap: wrap;
            justify-content: center;
          }

          .countdown__box {
            width: 4.5rem;
            height: 4.5rem;
          }

          .countdown__number {
            font-size: 3rem;
          }

          .stats__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .stats__number {
            font-size: 4rem;
          }

          .footer__grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TestingSwift;
