import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-appstore")}`}
            onClick={handleFilterKeyChange("sorting-appstore")}
            data-href=".sorting-appstore"
          >
            App Store
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-design"
            )}`}
            onClick={handleFilterKeyChange("sorting-design")}
            data-href=".sorting-design"
          >
            Design
          </a>
        </div>
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/nike">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/nike-main.png"
                        alt="Nike App"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Swift, Design, YouTube</span>
                <h5 className="name">
                  <Link legacyBehavior href="/nike">
                    <a>Nike App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    A sneaker shopping app with light/dark themes, bold visuals, intuitive navigation, and a live SwiftUI coding <br />tutorial.
                  </p>
                </div>
                <Link legacyBehavior href="/nike">
                  <a className="lnk">See project</a>
                </Link>
              </div>

            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/bmw">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/bmw-main.png"
                        alt="BMW App"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">Design, SwiftUI Projects</span>
                <h5 className="name">
                  <Link legacyBehavior href="/bmw">
                    <a>BMW App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    A premium BMW app concept combining connected-car data, driving insights, and curated content with sleek design and brand consistency.
                  </p>
                </div>
                <Link legacyBehavior href="/bmw">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-appstore ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/patriots">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/patriots-main.png"
                        alt="Patriots App"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">Development, Design, App Store </span>
                <h5 className="name">
                  <Link legacyBehavior href="/patriots">
                    <a>Patriots App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    A fan-focused sports app concept with multi-team navigation, live updates, and a menu-first design blending branding and usability.
                  </p>
                </div>
                <Link legacyBehavior href="/patriots">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-appstore ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/chl">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/tesla-main.png"
                        alt="CHL App"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, Design, App Store </span>
                <h5 className="name">
                  <Link legacyBehavior href="/chl">
                    <a>CHL App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    A CHL app concept featuring real-time scores, smart game schedules, player insights, and a streamlined design with intuitive controls.
                  </p>
                </div>
                <Link legacyBehavior href="/tesla">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/nba-allstar">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/allstar-main.png"
                        alt="NBA All-Star App"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, UI UX Design </span>
                <h5 className="name">
                  <Link legacyBehavior href="/nba-allstar">
                    <a>NBA All-Star App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    An interactive NBA All-Star voting app with drag-and-drop lineups, player stats, and dynamic court visuals for fan engagement.
                  </p>
                </div>
                <Link legacyBehavior href="/nba-allstar">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-appstore ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/sharks">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/sharks-main.png"
                        alt="Sharks"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, Design, App Store</span>
                <h5 className="name">
                  <Link legacyBehavior href="/sharks">
                    <a>Sharks App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    A sharks dashboard offering real-time data, habitat tracking, migration patterns, risk analysis, and alerts with a responsive, user-friendly design
                  </p>
                </div>
                <Link legacyBehavior href="/sharks">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>




          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-appstore ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/american-handy">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/american-main.png"
                        alt="Sharks"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, Design, App Store</span>
                <h5 className="name">
                  <Link legacyBehavior href="/american-handy">
                    <a>American Handy App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    American Handy app offering real-time booking, service tracking, order management, cost estimates, and alerts with a responsive, user-friendly design.
                  </p>
                </div>
                <Link legacyBehavior href="/american-handy">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-appstore ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/analyzer">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/analyzer-main.png"
                        alt="Sharks"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">Design, App Store</span>
                <h5 className="name">
                  <Link legacyBehavior href="/analyzer">
                    <a>Fantast Football Analyzer App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    A fantasy trade tool built to track players in real time, grade offers, analyze value shifts, and review past trades — all in a clean, intuitive interface.
                  </p>
                </div>
                <Link legacyBehavior href="/analyzer">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-appstore ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/movement">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/movement-main.png"
                        alt="Sharks"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, Design, App Store</span>
                <h5 className="name">
                  <Link legacyBehavior href="/movement">
                    <a>Movement App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    A civil rights storytelling app featuring immersive walks, historic landmarks, & AR experiences with a powerful, engaging design.
                  </p>
                </div>
                <Link legacyBehavior href="/movement">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/shoe-pos">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/shoe-pos-main.png"
                        alt="ShoePOS"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">Prototype Design, SwiftUI Projects</span>
                <h5 className="name">
                  <Link legacyBehavior href="/shoe-pos">
                    <a>Shoe POS App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    A sneaker POS system offering product management, real-time inventory by size, brand catalogs, sales tracking, and checkout with a clean, intuitive design.
                  </p>
                </div>
                <Link legacyBehavior href="/shoe-pos">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/designair">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/designair-main.png"
                        alt="ShoePOS"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">Prototype Design</span>
                <h5 className="name">
                  <Link legacyBehavior href="/designair">
                    <a>Design Air App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    The DesignAir prototype app is a booking solution with one-way, roundtrip, and multi-city flights, ticket seletion, baggage add-ons, seat selection, and a clean, responsive design.
                  </p>
                </div>
                <Link legacyBehavior href="/designair">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/financial">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/financial-main.png"
                        alt="Financial App"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">Prototype Design</span>
                <h5 className="name">
                  <Link legacyBehavior href="/financial">
                    <a>Financial App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    A financial management app with account creation, credit tracking, multi-card support, detailed transactions, spending analysis, budgeting tools, and user-friendly design.
                  </p>
                </div>
                <Link legacyBehavior href="/financial">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/raiders">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/raiders-main.png"
                        alt="Financial App"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">Prototype Design</span>
                <h5 className="name">
                  <Link legacyBehavior href="/raiders">
                    <a>Raiders App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    The Raiders app is your ultimate game-day and season companion, featuring live scores, detailed schedules, team rosters, depth charts, ticket management, highlights, and stadium information in one place.
                  </p>
                </div>
                <Link legacyBehavior href="/raiders">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/tesla">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/tesla-main.png"
                        alt="Financial App"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">Prototype Design</span>
                <h5 className="name">
                  <Link legacyBehavior href="/tesla">
                    <a>Tesla App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    The Tesla rental app prototype offers a streamlined way to book luxury cars with flexible rental periods, real-time tracking, clear pricing, interior previews, and quick order management, all within a, responsive design.
                  </p>
                </div>
                <Link legacyBehavior href="/tesla">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/hornets">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/hornets-main.png"
                        alt="Hornets App"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">Prototype Design</span>
                <h5 className="name">
                  <Link legacyBehavior href="/hornets">
                    <a>Hornets App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    The Hornets app delivers live game updates, detailed stats, team schedules, and player insights in real time. Fans can track matchups, view box scores, follow leaders in points, rebounds, and assists.
                  </p>
                </div>
                <Link legacyBehavior href="/tesla">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/edfarmkiosk">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/edfarmkiosk-main.png"
                        alt="Hornets App"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">Prototype Design</span>
                <h5 className="name">
                  <Link legacyBehavior href="/edfarmkiosk">
                    <a>EdFarm Kiosk App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    The EdFarm kiosk app highlights learning, history, and innovation with interactive stories, educator programs, and youth voices, guiding visitors through civil rights history and modern education.
                  </p>
                </div>
                <Link legacyBehavior href="/edfarmkiosk">
                  <a className="lnk">See project</a>
                </Link>
              </div>
            </div>
          </div>

        </div>
        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="/works">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
