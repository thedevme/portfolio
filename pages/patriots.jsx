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
              <span>Patriots App</span>
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
                  This project reimagines the traditional sports app by
                  introducing a visually engaging, multi-team menu system
                  designed for quick navigation and a connected fan experience.
                  The app consolidates multiple team and venue experiences into
                  a single interface through its innovative app switcher,
                  allowing users to seamlessly move between their favorite
                  teams, live game updates, and stadium information. From live
                  scores and player stats to depth charts and roster filters,
                  each screen was designed with clarity and speed in mind,
                  ensuring fans can access the information they want in just a
                  few taps.
                </p>
                <p>
                  The menu-first design was the focal point of the project,
                  breaking away from the standard tab bar and side navigation
                  commonly found in sports apps. By using large, touch-friendly
                  icons and a visually distinct app switcher, the interface
                  encourages exploration while keeping important features—like
                  tickets, schedules, and team news—always within reach. This
                  approach proved so effective it was later adopted by other
                  sports organizations, including CHL teams, demonstrating the
                  versatility and scalability of the design. The result is a
                  fan-focused experience that blends live content, team
                  branding, and modern navigation into a cohesive, easy-to-use
                  platform.
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
                backgroundImage: "url(/assets/images/patriots-header.png)",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Portfolio Section with FullPhoneCards */}
      <section className="section section-inner">
        <div className="container my-5">
          <div className="container my-5">
            <div className="row">
              {/* First Card */}
              <div className="col-lg-6 mb-4">
                <div
                  className="card h-100 p-4"
                  style={{
                    backgroundColor: "#1d222a",
                    borderRadius: "20px", // <— Custom radius
                  }}
                >
                  <img
                    src="/assets/images/patriots1.png"
                    alt="Roster Screen"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "211px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <div className="card-body text-white">
                  <h2 className="text-center">Dynamic Home Hub</h2>
                    <p className="card-text">
                    The home screen serves as the central hub for fans, showcasing the latest scores, upcoming matchups, and highlighted content. Featured sections like “Articles,” “Videos,” and “Audio” keep users engaged, while spotlight cards draw attention to key events and breaking news.
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className="col-lg-6 mb-4">
                <div
                  className="card h-100 p-4"
                  style={{
                    backgroundColor: "#1d222a",
                    borderRadius: "20px",
                  }}
                >
                  <h2 className="text-center">Full Season Schedule</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    The schedule screen provides a clean, organized view of the Patriots’ preseason and regular season games. Fans can see matchups, dates, and kickoff times at a glance, with clear indicators for home and away games. Each game card is visually separated, making it easy to scan and plan ahead.
                    </p>
                  </div>
                  <img
                    src="/assets/images/patriots2.png"
                    alt="Roster Screen"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "211px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-custom py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2>Simplified Navigation Drawer</h2>
                <p>
                The slide-out navigation menu gives quick access to essential app sections like schedule, news, live radio, tickets, and the team shop. A Ticketmaster login option sits at the top for seamless ticket management. Clean iconography and team branding make the menu easy to use on the go.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/patriots4.png"
                  width="425"
                  alt="Roster Screen Fluid"
                  class="float-end"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="container my-5">
            <div className="row">
              {/* First Card */}
              <div className="col-lg-6 mb-4">
                <div
                  className="card h-100 p-4"
                  style={{
                    backgroundColor: "#1d222a",
                    borderRadius: "20px", // <— Custom radius
                  }}
                >
                  
                  <img
                    src="/assets/images/patriots3.png"
                    alt="Roster Screen"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "211px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <div className="card-body text-white">
                  <h2 className="text-center">Team Overview & Stats</h2>
                    <p className="card-text">
                    This screen highlights the Patriots’ season record, breaking down performance by division, home, road, and streaks. A bold, team-branded background keeps the focus on key stats, while additional sections like “Team Starters” give fans deeper insights into the lineup.
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className="col-lg-6 mb-4">
                <div
                  className="card h-100 p-4"
                  style={{
                    backgroundColor: "#1d222a",
                    borderRadius: "20px",
                  }}
                >
                  <h2 className="text-center">Interactive Roster List</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    The roster screen displays players in a sortable table with jersey numbers, names, positions, and physical details like height and weight. Each row includes a headshot for instant recognition, ensuring fans can quickly browse and get to know the entire team.
                    </p>
                  </div>
                  <img
                    src="/assets/images/patriots5.png"
                    alt="Roster Screen"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "211px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="h-titles h-navs">
            <Link legacyBehavior href="/raiders">
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
                  <span>Raiders App</span>
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
