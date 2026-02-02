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
              <span>Fantasy Football Analyzer App</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Design, App Store</span>
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
                      <span>App Store, Design</span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/tradebait-ff-trade-analyzer/id1528859237"
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
              This project features a sleek and interactive Trade Analyzer app designed to evaluate the fairness and value of fantasy football trades. Users can assign players, picks, and other assets to either side of a proposed trade, then tap “Process Trade” to receive a visual, dial-based rating that scores the deal. The interface supports up to three players per team, displaying real-time rankings and average points to guide decision-making. The analyzer gives an immediate color-coded score along with concise verdicts like “You Can Do Better,” helping users understand trade balance with clarity and speed.
              </p>  

              <p>  
              The app also tracks trade history, storing previous evaluations and allowing users to revisit, compare, and refine proposals. Each recorded trade includes detailed asset breakdowns (e.g., player names, draft picks, and additions) and their individual score ratings, enabling users to assess changes over time. With options for visual meters and percentile-based evaluations, this tool makes fantasy sports trading more strategic, transparent, and engaging. It’s a smart assistant for fantasy players aiming to stay competitive while avoiding lopsided trades.
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
                backgroundImage: "url(/assets/images/analyzer-header.png)",
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
                    src="/assets/images/analyzer1.png"
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
                  <h2 className="text-center">Trade Analyzer – Fantasy Football</h2>
                    <p className="card-text">
                    This screen from the Trade Analyzer app provides a sleek interface for evaluating fantasy football trades. Users can compare players across two teams—in this case, Christian McCaffrey and Tom Brady—with detailed stats like position rank, bye week, and average points displayed prominently. A bold PROCESS TRADE button invites users to finalize the deal. Below, the History section lists previous trade scenarios, complete with players, picks, and visual rating meters that gauge trade balance (e.g., 75 rating). The high-contrast black-and-green design makes critical data pop, creating an engaging and intuitive trade evaluation experience.
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
                  <h2 className="text-center">Trade Analyzer with Player Photos & Rating Dial</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    This enhanced Trade Analyzer screen showcases a fantasy football trade scenario between Tom Brady and Christian McCaffrey, now including profile photos for added player recognition. Stats like position rank, bye week, and average points remain prominently displayed, and the large PROCESS TRADE button is centrally featured for quick action. The History section below visualizes past trade attempts with updated color-coded dials indicating trade fairness—this time leaning red and blue with a center needle pointing to 58, suggesting a less favorable balance. The dark theme and contrast-heavy design give the app a competitive, high-stakes feel tailored to serious fantasy players.
                    </p>
                  </div>
                  <img
                    src="/assets/images/analyzer2.png"
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
                <h2 className="text-left">Trade Results Summary</h2>
                <p>
                This Trade Analyzer results screen provides immediate feedback on a proposed fantasy football trade with a bold message: “YOU CAN DO BETTER.” A large circular gauge highlights a 75 Rating, displayed in bright green, signaling a moderately fair deal. The result encourages users to reconsider or explore better trade options. Below, the History section recaps previous trade offers, each visually scored with consistent 75-point gauges. The clean layout, dynamic meter, and attention-grabbing copy combine to deliver quick, digestible insight into trade value and fairness.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/analyzer3.png"
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
                    src="/assets/images/analyzer4.png"
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
                  <h2 className="text-center">Trade Analyzer – Mirror Trade Setup</h2>
                    <p className="card-text">
                    This Trade Analyzer screen presents a mirrored trade scenario, where Christian McCaffrey and Tom Brady appear on both Team One and Team Two. The layout allows users to compare trade values in both directions, with placeholder slots to add additional players. Each player’s position rank is clearly displayed (99 POS RNK), maintaining a high-level overview of their fantasy value. The PROCESS TRADE button anchors the interface, inviting action. Below, the History section highlights prior trade configurations, each evaluated with a 75 rating gauge for reference. The symmetry in this layout supports deeper trade analysis and experimentation.
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
                  <h2 className="text-center">Trade Analyzer – Duplicate Player Scenario</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    This Trade Analyzer screen humorously visualizes a trade setup where Christian McCaffrey appears in all slots for both Team One and Team Two. The interface still allows for adding players in the remaining empty slots, while the PROCESS TRADE button remains active, suggesting flexibility in testing even unlikely trade scenarios. Below, the History section displays previous trade offers, each accompanied by a red-and-blue 58 rating meter indicating imbalanced or unfavorable trades. This layout highlights the app’s robustness and tolerance for edge-case inputs while maintaining clear visual structure and consistent trade evaluation feedback.
                    </p>
                  </div>
                  <img
                    src="/assets/images/analyzer5.png"
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
                <h2 className="text-left">Trade Results – Low Rating Feedback</h2>
                <p>
                This Trade Analyzer results screen delivers a clear verdict: “YOU CAN DO BETTER,” based on a trade rating score of 38. The large meter graphic uses red and blue segments to visually emphasize the imbalance, with the needle pointing deep into the unfavorable zone. Below the results, the History section displays previous trade attempts, each consistently rated at 38, reinforcing the suboptimal nature of the deals. This feedback loop encourages users to revisit and revise their offers, making the interface both informative and motivational in helping fantasy players make smarter trade decisions.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/analyzer6.png"
                  width="425"
                  alt="Navigation Drawer"
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
                    src="/assets/images/analyzer7.png"
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
                  <h2 className="text-center">Empty Trade Setup – Ready for Input</h2>
                    <p className="card-text">
                    This Trade Analyzer screen is in its initial state, prompting users to begin a new trade scenario. Both Team One and Team Two have fully empty slots labeled Add Player, ready for lineup configuration. The Process Trade button is dimmed, visually reinforcing that selections must be made before proceeding. Meanwhile, the History section remains visible at the bottom, offering reference points from previous trade evaluations—including trade offers involving Tom Brady, Cam Newton, and Christian McCaffrey, each scored with a 58 rating. This layout creates a clean, neutral starting point for building and analyzing custom fantasy trade scenarios.
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
                  <h2 className="text-center">Empty State with Favorable History</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    This Trade Analyzer screen is in its default state, prompting users to begin building a trade by tapping Add Player slots for both Team One and Team Two. The Process Trade button is currently disabled, awaiting valid input. While the trade builder is empty, the History section below offers helpful context with two prior trade scenarios, both scored at a 75 rating and marked by green visual indicators. This reinforces balanced trade potential and encourages users to explore similar trade structures. The layout remains clean, intuitive, and ready for action.
                    </p>
                  </div>
                  <img
                    src="/assets/images/analyzer8.png"
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
        
      </section>

      {/* Section - Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="h-titles h-navs">
            <Link legacyBehavior href="/chl">
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
                  <span>CHL App</span>
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
