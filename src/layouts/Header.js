import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { linkClick, toggleMenu } from "../utils";

const Header = () => {
  // Always apply dark theme
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.add("dark-skin");
      document.body.classList.remove("light-skin");
      // Force the body class
      document.body.className = 'dark-skin';
    }
  }, []);

  const [pageToggle, setPageToggle] = useState(true);

  return (
    <Fragment>
      {/* Header */}
      <header className="header">
        <div className="header__builder">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {/* logo */}
              <div className="logo">
                <Link href="/" legacyBehavior>
                  <a>
                    <img
                      width={240}
                      height={40}
                      src="/assets/images/mobile-logo-scaled.png"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 align-right">
              {/* menu btn */}
              <a href="#" className="menu-btn" onClick={(e) => toggleMenu(e)}>
                <span />
                <span />
              </a>
              {/* Menu Full Overlay */}
              <div className="menu-full-overlay">
                <div className="menu-full-container">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {/* menu full */}
                        <div className="menu-full">
                          <ul className="menu-full">
                            <li className="menu-item">
                              <Link legacyBehavior href="/">
                                <a
                                  className="splitting-text-anim-2"
                                  data-splitting="chars"
                                >
                                  Home
                                </a>
                              </Link>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#services-section"
                                onClick={() => linkClick()}
                              >
                                Services
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#skills-section"
                                onClick={() => linkClick()}
                              >
                                Skills
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#works-section"
                                onClick={() => linkClick()}
                              >
                                Works
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#resume-section"
                                onClick={() => linkClick()}
                              >
                                Resume
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#books-section"
                                onClick={() => linkClick()}
                              >
                                Books
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* social */}
                        <div className="menu-social-links">
                          <a
                            href="http://dribbble.com"
                            target="blank"
                            className="scrolla-element-anim-1"
                            title="dribbble"
                          >
                            <i className="fab fa-dribbble" />
                          </a>
                          <a
                            href="http://twitter.com"
                            target="blank"
                            className="scrolla-element-anim-1"
                            title="twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                          <a
                            href="http://behance.com"
                            target="blank"
                            className="scrolla-element-anim-1"
                            title="behance"
                          >
                            <i className="fab fa-behance" />
                          </a>
                        </div>
                        <div className="v-line-block">
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-overlay" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
