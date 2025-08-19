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
              <span>Raiders App</span>
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
              This project brought the Las Vegas Raiders’ digital presence to life with a modern mobile app that unites fans, players, and the game-day experience under one cohesive platform. Inspired by successful sports apps I previously designed, this Raiders app focuses on bold team branding, streamlined navigation, and a fan-first presentation. Users can dive into real-time scores, schedules, rosters, and depth charts, all organized in an intuitive design that puts their favorite team front and center. Fans can personalize their journey by filtering rosters, exploring detailed player profiles, and keeping track of upcoming matchups with dynamic live updates. The interface emphasizes quick access with a clean menu system and visually rich layouts that highlight the Raiders’ identity. From live stats to player performance breakdowns, every feature was crafted to create an engaging connection for fans on the go.  
              </p>  

              <p>  
                The app also integrates game-day essentials, including ticket purchasing, stadium information, and team store access, making it a one-stop hub for Raiders Nation. Push notifications ensure fans never miss a key play, update, or announcement, while the app switcher allows seamless transitions between Raiders, Allegiant Stadium, and UNLV Rebels experiences. Balancing team-specific detail with league-wide context, the app empowers fans to stay immersed in the action, whether they’re following live games, planning a stadium visit, or exploring highlights afterward. This unified digital approach strengthens the Raiders’ brand identity while delivering a smooth, dynamic, and interactive experience for one of football’s most passionate fan bases.  
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
                backgroundImage: "url(assets/images/raiders-header.png)",
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
                    src="/assets/images/raiders1.png"
                    alt="Roster Screen"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "425px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <div className="card-body text-white">
                  <h2 className="text-center">Schedule</h2>
                    <p className="card-text">
                    A live game update screen showing the Raiders leading the Broncos 14–0. Player stats for D. Locke and D. Carr are displayed alongside the score. The schedule section highlights upcoming Raiders matchups, including games against the Chiefs, Falcons, and Jets, with times and broadcast details.
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
                  <h2 className="text-center">Team Roster</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    A scrollable roster view displaying Raiders players with names, positions, jersey numbers, and profile photos. The layout highlights key players with bold typography and visual separation for clarity.
                    </p>
                  </div>
                  <img
                    src="/assets/images/raiders2.png"
                    alt="Schedule Screen"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "425px",
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
                <h2 className="text-center">Filter & Sort Options</h2>
                <p>
                An interactive filter and sort panel that allows users to refine the roster view. Filters include offense, defense, and special teams, along with starters and backups. Sorting can be customized by first name, last name, or jersey number for quick navigation.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/raiders3.png"
                  width="425"
                  alt="Navigation Drawer"
                  class="float-end"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Cards */}
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
                    src="/assets/images/raiders4.png"
                    alt="Team Overview"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "425px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <div className="card-body text-white">
                  <h2 className="text-center">Player Details</h2>
                    <p className="card-text">
                    A detailed stats page for Josh Jacobs, showing his rushing, receiving, and fumble performance across games. The design highlights his jersey number, position, and team branding while providing a clean breakdown of attempts, yards, averages, touchdowns, and longest plays.
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
                  <h2 className="text-center">App Switcher Navigation</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    A look at the Rebels app’s side navigation menu with quick links to home, schedule, team info, account management, game highlights, and more. At the top, an app switcher allows seamless movement between Allegiant Air Stadium, Las Vegas Raiders, and UNLV Rebels apps, giving fans connected experiences in one place.
                    </p>
                  </div>
                  <img
                    src="/assets/images/raiders5.png"
                    alt="Roster List"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "425px",
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
                <img
                  src="/assets/images/raiders6.png"
                  width="425"
                  alt="Roster Screen Fluid"
                  class="float-start"
                />
              </div>
              
              <div className="col-lg-6">
                <h2 className="text-center">Main Menu</h2>
                <p>Main navigation hub for the Raiders app with quick links to Home, Schedule, Team, Account Manager, Game Day Information, Live, Game Highlights, Raider Girls, Fan Zone, and Feedback. The App Switcher lets users jump between Allegiant Stadium, Raiders, and UNLV apps.
                </p>
              </div>

              
            </div>
          </div>
        </div>
        
        {/* Cards */}
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
                    src="/assets/images/raiders7.png"
                    alt="Roster Screen"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "425px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <div className="card-body text-white">
                  <h2 className="text-center">Stadium Navigation</h2>
                    <p className="card-text">
                    A streamlined menu for Allegiant Stadium that provides quick access to essential services and event details. Fans can manage tickets, check parking and transportation, view the event calendar, explore stadium amenities, and even book tours—all in one convenient place.
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
                  <h2 className="text-center">Depth Chart</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    A team roster breakdown highlighting starters, second-string, and third-string players. Features player photos, positions, and jersey numbers for quick fan reference.
                    </p>
                  </div>
                  <img
                    src="/assets/images/raiders8.png"
                    alt="Roster Screen"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      width: "425px",
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
            <Link legacyBehavior href="/nba-allstar">
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
                  <span>NBA All-Star App</span>
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
