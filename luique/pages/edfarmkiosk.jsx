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
              <span>EdFarm Prototype Design</span>
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
              The EdFarm Kiosk Prototype was created as an interactive, visually engaging display meant to serve dual purposes—welcoming guests in the EdFarm office and providing a dynamic experience at events such as conferences or special showcases. Designed with an inviting interface, the kiosk highlights EdFarm’s commitment to innovation in education while giving users quick access to information about its programs, initiatives, and community impact.
              </p>  

              <p>  
              Beyond being an office installation, the kiosk was envisioned as a portable tool that could travel with the EdFarm team to events, helping attendees learn about pathways to technology, fellowships, and community initiatives in an intuitive and accessible way. With bold visuals, interactive sections, and storytelling components, the design ensures that EdFarm’s mission and programs are communicated effectively to both casual visitors and event participants.
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
                backgroundImage: "url(/assets/images/edfarmkiosk-header.png)",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Portfolio Section with FullPhoneCards */}
      <section className="section section-inner">
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h2 className="text-center">Kiosk Home View</h2>
                <p>
                This is the default home view of the EdFarm Kiosk. From here, visitors can quickly explore different areas of the experience — whether it’s meeting the staff, learning about the Movement app, checking out adult education programs, or staying updated with community news. The home screen serves as the central hub, designed to help users jump into any topic with ease.
                </p>
              </div>
            </div>
            <div className="row align-items-middle">
              <div className="col-lg-12">
                <img
                  src="/assets/images/edfarmkiosk1.png"
                  width="1000"
                  alt="Navigation Drawer"
                  class="mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h2 className="text-center">Scrolling the Home Screen</h2>
                <p>
                A bold call-to-action screen showcasing diverse fellows and community members engaged in technology. This view highlights opportunities to explore pathways into coding, innovation, and creative problem-solving. Designed to inspire adults and students alike, it reinforces the kiosk’s mission to connect people with educational and professional growth in tech.
                </p>
              </div>
            </div>
            <div className="row align-items-middle">
              <div className="col-lg-12">
                <img
                  src="/assets/images/edfarmkiosk2.png"
                  width="1000"
                  alt="Navigation Drawer"
                  class="mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-custom py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h2 className="text-center">Meet the Teacher Fellows</h2>
                <p>
                An interactive directory of Teacher Fellows where visitors can tap on a fellow to watch a personalized video introduction. Each fellow shares their journey, expertise, and role in the program, helping learners and community members connect with the educators leading the movement.
                </p>
              </div>
            </div>
            <div className="row align-items-middle">
              <div className="col-lg-12">
                <img
                  src="/assets/images/edfarmkiosk5.png"
                  width="1000"
                  alt="Navigation Drawer"
                  class="mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h2 className="text-center">Department of Learning Home Screen</h2>
                <p>
                An engaging entry point for students, designed to introduce the Department of Learning and its programs. This screen highlights how education moves communities forward, encouraging exploration of available resources, initiatives, and support offered through the department. It serves as the central hub for new learners to connect with opportunities and pathways.
                </p>
              </div>
            </div>
            <div className="row align-items-middle">
              <div className="col-lg-12">
                <img
                  src="/assets/images/edfarmkiosk6.png"
                  width="1000"
                  alt="Navigation Drawer"
                  class="mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-custom py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h2 className="text-center">Movement App <br/>Demo & Download</h2>
                <p>
                A full-bleed showcase screen used at events to demonstrate The Movement app’s impact and core features. Staff can guide guests through stories and actions while a built-in QR flow lets visitors quickly download the app from the kiosk.
                </p>
              </div>
            </div>
            <div className="row align-items-middle">
              <div className="col-lg-12">
                <img
                  src="/assets/images/edfarmkiosk9.png"
                  width="1000"
                  alt="Navigation Drawer"
                  class="mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="h-titles h-navs">
            <Link legacyBehavior href="/bmw">
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
                  <span>BMW App</span>
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
