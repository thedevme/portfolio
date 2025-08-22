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
              <span>NBA Draft Watch App</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Design, SwiftUI Projects</span>
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
              This custom-designed Apple Watch app delivers an interactive, fan-focused experience for following the NBA Draft right from the wrist. Users can easily switch between rounds, view draft picks in order, and explore rich, scrollable player cards. Each pick includes the player’s position, stats, college, and personal analysis—streamlined for quick reference on the small screen.
              </p>  

              <p>  
              The design combines team colors, logos, and intuitive layout to highlight draft order and player identity at a glance. With seamless navigation and real-time updates, it creates an immersive mini-dashboard for fans to track the draft as it unfolds—bringing the excitement of draft night to wearable tech.
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
                backgroundImage: "url(/assets/images/nba-draft-header.png)",
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
                    src="/assets/images/nba-draft1.png"
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
                  <h2 className="text-center">Draft Pick View</h2>
                    <p className="card-text">
                    This screen presents a bold, card-style draft pick layout featuring the team logo, draft number, and player information. In this example, the New Orleans Pelicans select Zion Williamson as the #1 pick, shown clearly at the top of the card. The next pick (#2) is previewed below, allowing users to swipe or scroll through draft selections. Designed with team colors and large typography, the interface delivers at-a-glance recognition of players and picks in a visually engaging, compact format tailored for Apple Watch.
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
                  <h2 className="text-center">Draft Player Profile View</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    This Apple Watch screen focuses on the individual draft pick, showcasing the selected player’s photo, name, draft position, and team branding in a striking, clean layout. Zion Williamson is featured as the #1 pick with a full-color headshot layered against the New Orleans Pelicans logo. At the bottom, stat categories like points, rebounds, assists, and efficiency are accessible for quick tap-through. The design prioritizes player identity and interaction, offering fans instant access to vital stats in a compact visual display.

                    </p>
                  </div>
                  <img
                    src="/assets/images/nba-draft2.png"
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
                <h2 className="text-left">Player Stats & Bio Detail</h2>
                <p>
                This Apple Watch screen delivers a detailed snapshot of a player’s college performance and background. Key stats like points, rebounds, assists, and effective field goal percentage are featured prominently at the top for easy scanning. Below, users can view position, school, experience, and birthplace—helping fans get a complete picture of each prospect. The layout is optimized for glanceable content, making it ideal for draft night insights or quick comparisons between top players.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/nba-draft3.png"
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
                    src="/assets/images/nba-draft4.png"
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
                  <h2 className="text-center">Player Profile & Scouting Analysis</h2>
                    <p className="card-text">
                    This screen dives deeper into the player’s bio and scouting breakdown. It includes hometown, height/weight, and a written analysis summarizing the player’s potential. The format highlights a mix of raw data and qualitative insight, helping fans and scouts alike evaluate what makes this athlete a standout draft prospect. Designed for clarity and quick consumption, the layout brings player stories to life on your wrist.
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
                  <h2 className="text-center">Draft Order Spotlight</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    This bold visual layout highlights Zion Williamson as the number one overall pick, placing him above the next draft slot in a clean, card-stacked format. His name, position, and team branding are front and center, with vibrant colors distinguishing each pick. The modern, swipeable card interface is optimized for the small screen, making draft rankings feel interactive and alive on Apple Watch.
                    </p>
                  </div>
                  <img
                    src="/assets/images/nba-draft5.png"
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
            <Link legacyBehavior href="/hornets">
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
                  <span>Hornets App</span>
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
