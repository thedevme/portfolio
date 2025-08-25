import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Resume from "../src/components/Resume";
import ContactForm from "../src/components/ContactForm";
import Layout from "../src/layouts/Layout";
import {
  servicesSliderProps,
  testimonialsSliderProps,
} from "../src/sliderProps";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>Craig</b> Clayton{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am <strong>Sr. iOS Developer</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                    With 10+ years in iOS design and development, I specialize in creating intuitive,
                    visually appealing apps. I love designing experiences that delight and connect with users.
                    </p>
                  </div>
                  <div className="social-links">
                    <a target="_blank" rel="nofollow" href="https://x.com/thedevme">
                      <i aria-hidden="true" className="fab fa-twitter" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://dribbble.com/thedevme">
                      <i aria-hidden="true" className="fab fa-dribbble" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/thedevme/">
                      <i aria-hidden="true" className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1w-YK5rsuZn2-9ZwNpXZCDZP1JNHQ4dLh/view?usp=share_link"
                    className="btn"
                  >
                    <span>Download CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    My Skills{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                {/* <div className="circle circle-1">
                   <img
                    decoding="async"
                    src="/assets/images/craig-clayton-profile.jpg"
                    alt="<b>Craig</b> Clayton"
                  />
                </div> */}
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(/assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(/assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="num">
                        10 <strong>+</strong>
                      </span>
                      <span className="value">
                        Years of <strong>Experience</strong>
                      </span>
                    </li>
                    <li>
                      <span className="num">5</span>
                      <span className="value">
                        Completed <strong>Books</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> iOS Developer </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Services */}
      <section
        className="lui-section lui-gradient-bottom"
        id="services-section"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> What I Do </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Services</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="v-line v-line-right">
          <div className="container">
            <Swiper
              {...servicesSliderProps}
              className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <SwiperSlide className="swiper-slide">
              <div className="services-item">
                  <div className="lui-subtitle">
                    <span>Mobile Excellence</span>
                  </div>
                  <h5 className="lui-title">
                    <span> iOS Development </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        From concept to App Store launch, I create iOS applications that are visually striking and user-focused.
                        My work blends creative design with the technical precision.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span>Desktop Precision</span>
                  </div>
                  <h5 className="lui-title">
                    <span> macOS Development </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                      I bring ideas to life on macOS through thoughtful design and precise engineering.
                      My goal is to deliver high-quality, engaging apps that feel at home in the Apple ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span>Interface Craft</span>
                  </div>
                  <h5 className="lui-title">
                    <span> iOS Design</span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                      My approach to iOS design blends creativity, usability, and attention to detail.
                      The result: interfaces that look great, perform flawlessly, and keep users engaged.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Services </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center" id="skills-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Professional Skills </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Talent</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="v-line v-line-left">
          <div className="container">
              <div className="skills-items-flexed">
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name">
                    <span> Swift </span>
                  </h6>
                  <div className="text">
                    <div>
                      <p>
                      I build robust, maintainable applications with Swift, applying clean
                      code principles and leveraging the latest language features for
                      performance and reliability.
                      </p>
                    </div>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name">
                    <span> SwiftUI </span>
                  </h6>
                  <div className="text">
                    <div>
                      <p>
                      I design and implement modern, responsive interfaces using SwiftUI,
                      creating seamless user experiences across iOS, macOS, watchOS, and tvOS.
                      </p>
                    </div>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name">
                    <span> iOS Development </span>
                  </h6>
                  <div className="text">
                    <div>
                      <p>
                      I craft high-quality iOS apps from concept
                      to App Store release, combining design expertise
                      with deep technical knowledge of Apple’s frameworks.
                      </p>
                    </div>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name">
                    <span> macOS Development </span>
                  </h6>
                  <div className="text">
                    <div>
                      <p>
                      I develop polished, high-performance macOS
                      applications that feel native, integrating
                      desktop-specific workflows and Apple ecosystem features.
                      </p>
                    </div>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name">
                    <span> UI/UX Design </span>
                  </h6>
                  <div className="text">
                    <div>
                      <p>
                      I design intuitive, visually appealing interfaces
                      with a strong focus on usability, ensuring each
                      interaction feels natural and engaging.
                      </p>
                    </div>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name">
                    <span> Figma / Sketch </span>
                  </h6>
                  <div className="text">
                    <div>
                      <p>
                      I create detailed, production-ready design assets
                      in Figma and Sketch, streamlining the handoff between
                      design and development for smooth, efficient project delivery.
                      </p>
                    </div>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: "85%" }}></div>
                  </div>
                </div>
            </div>
            <div className="lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Works */}
      <section className="lui-section lui-gradient-top" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Work</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Resume */}
      <Resume />

      {/* Section - Blog */}
      <section className="lui-section lui-gradient-top" id="books-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Published Books </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>iOS Books</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Archive */}
        <div className="v-line v-line-right">
          <div className="container">
            <div className="blog-items row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          decoding="async"
                          src="/assets/images/swiftui-projects.jpg"
                          alt="The Main Thing For The Designer"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>December 11, 2020</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/swiftui-projects">
                        <a>SwiftUI Projects</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                      Discover SwiftUI through six hands-on projects for iPhone, iPad, and watchOS.
                      Learn layouts, JSON APIs, and declarative design with Xcode.{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/swiftui-projects">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/ios12-programming-for-beginners">
                      <a>
                        <img
                          decoding="async"
                          src="/assets/images/ios12.jpg"
                          alt="iOS 12 Programming for Beginners"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>December 24, 2018</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/ios12-programming-for-beginners">
                        <a>iOS 12 Programming for Beginners</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                      Master iOS 12 development with Swift 4.2. From basics in Xcode to advanced
                      features like custom notifications, SiriKit, & TestFlight.{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/ios12-programming-for-beginners">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          decoding="async"
                          src="/assets/images/ios11.jpg"
                          alt="Usability Secrets to Create Better Interfaces"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>January 31, 2018</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/learn-ios11-with-swift4">
                        <a>Learn iOS 11 with Swift 4</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                      Learn iOS 11 with Swift 4 in a practical way.
                      From building your first app to adding advanced features
                      like drag & drop, SiriKit, and TestFlight.{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/learn-ios11-with-swift4">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="load-more">
              <Link legacyBehavior href="/books">
                <a
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>View Books</span>
                </a>
              </Link>
            </div>
            <div className="lui-bgtitle">
              <span> Books </span>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};
export default Index;
