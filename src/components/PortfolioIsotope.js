import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const PortfolioIsotope = ({ noViewMore }) => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
        horizontalOrder: true,
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
            className={`c-pointer lui-subtitle ${activeBtn("sorting-design")}`}
            onClick={handleFilterKeyChange("sorting-design")}
            data-href=".sorting-design"
          >
            Design
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-reactnative")}`}
            onClick={handleFilterKeyChange("sorting-reactnative")}
            data-href=".sorting-reactnative"
          >
            React Native
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-kotlin")}`}
            onClick={handleFilterKeyChange("sorting-kotlin")}
            data-href=".sorting-kotlin"
          >
            Android (Kotlin)
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
                  <Link legacyBehavior href="/projects/nike">
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
                  <Link legacyBehavior href="/projects/nike">
                    <a>Nike App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  A sneaker shopping app with light/dark themes, bold visuals, intuitive navigation, and a live SwiftUI coding <br/>tutorial.
                  </p>
                </div>
                <Link legacyBehavior href="/projects/nike">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(/assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/projects/bmw">
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
                  <Link legacyBehavior href="/projects/bmw">
                    <a>BMW App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  A premium BMW app concept combining connected-car data, driving insights, and curated content with sleek design and brand consistency.
                  </p>
                </div>
                <Link legacyBehavior href="/projects/bmw">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(/assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-appstore ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/projects/patriots">
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
                  <Link legacyBehavior href="/projects/patriots">
                    <a>Patriots App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  A fan-focused sports app concept with multi-team navigation, live updates, and a menu-first design blending branding and usability.
                  </p>
                </div>
                <Link legacyBehavior href="/projects/patriots">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(/assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-appstore ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/projects/chl">
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
                  <Link legacyBehavior href="/projects/chl">
                    <a>CHL App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  A CHL app concept featuring real-time scores, smart game schedules, player insights, and a streamlined design with intuitive controls.
                  </p>
                </div>
                <Link legacyBehavior href="/projects/chl">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(/assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/projects/nba-allstar">
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
                  <Link legacyBehavior href="/projects/nba-allstar">
                    <a>NBA All-Star App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  An interactive NBA All-Star voting app with drag-and-drop lineups, player stats, and dynamic court visuals for fan engagement.
                  </p>
                </div>
                <Link legacyBehavior href="/projects/nba-allstar">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(/assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-appstore ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/projects/sharks">
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
                  <Link legacyBehavior href="/projects/sharks">
                    <a>Sharks App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  A sharks dashboard offering real-time data, habitat tracking, migration patterns, risk analysis, and alerts with a responsive, user-friendly design
                  </p>
                </div>
                <Link legacyBehavior href="/projects/sharks">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(/assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-reactnative sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/projects/uber-shift-planner">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/raw/shiftplannerhome_ios.png"
                        alt="Uber Shift Planner"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> React Native, Design</span>
                <h5 className="name">
                  <Link legacyBehavior href="/projects/uber-shift-planner">
                    <a>Uber Shift Planner</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  A cross-platform planning concept helping rideshare drivers turn weekly earning goals into clear, actionable schedules.
                  </p>
                </div>
                <Link legacyBehavior href="/projects/uber-shift-planner">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(/assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-reactnative sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/projects/blueprint-math">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/raw/01_ios_blueprintmath_diagnostic.png"
                        alt="Blueprint Math"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> React Native, Education</span>
                <h5 className="name">
                  <Link legacyBehavior href="/projects/blueprint-math">
                    <a>Blueprint Math</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  A learning tool guiding students through math with step-by-step breakdowns.
                  </p>
                </div>
                <Link legacyBehavior href="/projects/blueprint-math">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(/assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-reactnative sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/projects/future-plan">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/raw/02_ios_futureplan_tools.png"
                        alt="Future Plan"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> React Native, Finance</span>
                <h5 className="name">
                  <Link legacyBehavior href="/projects/future-plan">
                    <a>Future Plan</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  A retirement planning concept with assessments and growth visualization.
                  </p>
                </div>
                <Link legacyBehavior href="/projects/future-plan">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(/assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-kotlin sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/projects/countdown2binge">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/raw/01_countdown2binge_home.png"
                        alt="Countdown2Binge"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Android, Kotlin, Entertainment</span>
                <h5 className="name">
                  <Link legacyBehavior href="/projects/countdown2binge">
                    <a>Countdown2Binge</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Track TV shows from anticipation to finale with timelines, countdowns, and binge-ready states.
                  </p>
                </div>
                <Link legacyBehavior href="/projects/countdown2binge">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(/assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-kotlin sorting-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/projects/cookmode">
                    <a>
                      <img
                        decoding="async"
                        src="/assets/images/raw/01_cookmode_home.png"
                        alt="CookMode"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Android, Kotlin, Cooking</span>
                <h5 className="name">
                  <Link legacyBehavior href="/projects/cookmode">
                    <a>CookMode</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  A focused cooking companion with hands-free recipes, timers, and step-by-step guidance.
                  </p>
                </div>
                <Link legacyBehavior href="/projects/cookmode">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(/assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="/works-list">
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
