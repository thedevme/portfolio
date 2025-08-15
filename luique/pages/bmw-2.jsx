import Link from "next/link";
import { useEffect } from "react";
import Layout from "../src/layouts/Layout";
import PhoneCards from "../src/components/PhoneCards";

const BMW2 = () => {
  // Always apply dark theme
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.add("dark-skin");
      document.body.classList.remove("light-skin");
      // Force the body class
      document.body.className = 'dark-skin';
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
              <span>BMW App</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>iOS Development, UI/UX Design</span>
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
                      <span>2022</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technology:</span>
                    <strong>
                      <span>Sketch, Figma</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span>Design, Mobile App</span>
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
                <h4>Project Overview</h4>
              </div>
            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="post-content">
                    <p>
                      This project was conceived as a premium mobile experience tailored specifically for BMW drivers and fans. The goal was to create an app that brought together vehicle information, driving insights, and personalized services in one cohesive place. The design emphasized a sleek, modern interface inspired by BMW's own visual language, with a focus on delivering information quickly and elegantly.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="post-content">
                    <p>
                      From the start, the concept was built around seamless integration with connected-car data and driver-focused utilities. The app's roadmap included tools for tracking maintenance history, monitoring driving statistics, and exploring curated BMW content such as news, events, and model highlights. Although the project remained at the concept stage and was never coded, it was developed with a strong emphasis on usability, brand consistency, and a premium feel — demonstrating how technology could extend the BMW experience beyond the driver's seat.
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
                backgroundImage:
                  "url(assets/images/bmw-header.png)"
              }}
            />
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

              <div className="portfolio-container" style={{ marginTop: '70px' }}>
                <PhoneCards 
                  title="Detailed Vehicle Specs"
                  copy="Explore performance at a glance with key stats like engine power, acceleration, fuel consumption, and emissions — all paired with a vivid, full-side view of your selected BMW."
                  colorPop="Detailed Vehicle"
                  deviceType="full-width"
                  imageSrc="/assets/images/bmw1-cropped.png"
                />
              </div>
              <div className="portfolio-container iphone-only">
                <PhoneCards 
                  title="Interactive Color Preview"
                  copy="Get a closer look at your chosen model in stunning detail. Instantly switch between color options to see how each finish transforms the car's personality and style."
                  colorPop="Interactive Color"
                  imageSrc="/assets/images/bmw2-cropped.png"
                />
                <PhoneCards 
                  title="Model & Color Selection"
                  copy="Easily browse BMW's lineup and view each model in its available colors. Select from a range of finishes like Melbourne Red, Mineral Grey, and Jet Black to visualize your perfect match."
                  colorPop="Model & Color"
                  imageSrc="/assets/images/bmw3-cropped.png"
                />
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
                <h4>Technical Implementation</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  The app architecture follows MVVM pattern with SwiftUI, ensuring 
                  clean separation of concerns and maintainable code. Core Data 
                  manages local weather data caching, while Combine framework 
                  handles asynchronous data flow and state management.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  Performance optimization includes efficient image caching, 
                  background refresh capabilities, and minimal battery usage. 
                  The app supports both light and dark modes, accessibility 
                  features, and localization for multiple languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="h-titles h-navs">
            <Link legacyBehavior href="/work-single">
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
                  <span>macOS Productivity App</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BMW2;

