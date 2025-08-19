import Link from "next/link";
import { useEffect } from "react";
import Layout from "../src/layouts/Layout";
import FullPhoneCards from "../src/components/FullPhoneCards";
import PadCards from "../src/components/PadCards";

const Patriots = () => {
  // Always apply dark theme
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.classList.add("dark-skin");
      document.body.classList.remove("light-skin");
      // Force the body class
      document.body.className = "dark-skin";
    }
  }, []);

  return (
    <Layout pageClassName={"portfolio-template"}>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        {/* Heading */}
        <div className="container">
          <div className="m-titles align-left">
            <h1
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>NBA All-Star Prototype App</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Mobile Gaming, Unity Development</span>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="v-line v-line-right v-line-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div className="m-details">
                  <div className="details-label">
                    <span>Year:</span>
                    <strong>
                      <span>2019</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technology:</span>
                    <strong>
                      <span>Swift, SwiftUI, Sketch/Figma</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span>Mobile Game, Entertainment</span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://apps.apple.com"
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>View on App Store</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Description */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="post-content">
                <h1>Project Overview</h1>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="post-content">
              <p>  
              The NBA All-Star App prototype was my chance to finally bring an idea I’d been thinking about for years to life. With the All-Star break quickly approaching, I set out to replicate the web version of the fan voting experience, while making it feel completely at home on the iPad. I focused heavily on UI/UX adjustments so that player cards, team layouts, and sorting features were optimized for touch interaction and large-screen usability.
              </p>  

              <p>  
              The result was a working prototype that allowed users to search for players, sort by stats like points, rebounds, and assists, and drag players into starting lineups for the East and West. By redesigning the interface around iPad-first interactions, I created a smoother and more engaging way to experience All-Star voting. This project highlights my ability to quickly prototype, adapt existing concepts, and reimagine digital experiences for mobile platforms while keeping the core spirit of the original intact.
                </p>  

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Image */}
      <div className="section section-inner">
        {/* Image */}
        <div className="m-image-large">
          <div className="image">
            <div
              className="img js-parallax"
              style={{
                backgroundImage: "url(assets/images/nba-allstar-header.png)",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Portfolio Section with FullPhoneCards */}
      <section className="section section-inner">
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h2 className="text-center">NBA All-Star Voting</h2>
                <p>
                A fan engagement platform that lets users browse players by stats, sort by performance, and select their picks for the NBA All-Star game. Features an interactive lineup builder to visualize West vs. East matchups and simplify the voting experience.
                </p>
              </div>
            </div>
            <div className="row align-items-middle">
              <div className="col-lg-12">
                <img
                  src="/assets/images/nbaallstar1.png"
                  width="1000"
                  alt="Navigation Drawer"
                  class="mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-custom py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h2 className="text-center">Search View</h2>
                <p>
                A player search interface that allows fans to quickly find and filter All-Star candidates. Users can type in a name, refine results with sort options such as points, rebounds, or assists, and view player cards that update in real time. This view emphasizes discoverability and comparison, making it easy to select and evaluate players for the All-Star ballot.
                </p>
              </div>
            </div>
            <div className="row align-items-middle">
              <div className="col-lg-12">
                <img
                  src="/assets/images/nbaallstar2.png"
                  width="1000"
                  alt="Navigation Drawer"
                  class="mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h2 className="text-center">Drag and Drop Voting</h2>
                <p>
                A hands-on interface for NBA All-Star voting where fans can drag and drop players directly onto the court to cast their votes. This interactive design highlights both conference rosters and allows users to customize their selections seamlessly in real time.
                </p>
              </div>
            </div>
            <div className="row align-items-middle">
              <div className="col-lg-12">
                <img
                  src="/assets/images/nbaallstar3.png"
                  width="1000"
                  alt="Navigation Drawer"
                  class="mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="h-titles h-navs">
            <Link legacyBehavior href="/designair">
              <a>
                <span
                  className="nav-arrow scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>Next Project</span>
                </span>
                <span
                  className="h-title splitting-text-anim-2 scroll-animate"
                  data-splitting="chars"
                  data-animate="active"
                >
                  <span>Design Air App</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Patriots;
