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
                  A sneaker shopping app with light/dark themes, bold visuals, intuitive navigation, and a live SwiftUI coding <br/>tutorial.
                  </p>
                </div>
                <Link legacyBehavior href="/nike">
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
