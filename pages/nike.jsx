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
              <span>NIKE App</span>
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
                  This project was one of my earliest design explorations, created to reimagine the online sneaker shopping experience with a clean, modern interface built for both light and dark modes. The app flows through the full e-commerce journey—browsing featured and upcoming releases, refining results with detailed filters, viewing customizable product details, and managing items in the shopping cart. Each screen was intentionally designed to keep the sneaker imagery front and center, pairing bold product visuals with clear pricing, availability, and call-to-action elements for a streamlined shopping experience. 
                </p>
                <p>
                  Beyond design, the project became an interactive teaching tool when I hosted a live coding session on YouTube, walking viewers through the process of building the app in SwiftUI from start to finish. This allowed me to share not only the visual design choices but also the implementation details behind creating a fully functional, theme-switching shopping app. The final result blends aesthetic appeal, intuitive navigation, and practical functionality—offering sneaker fans a premium shopping experience while serving as a learning resource for the iOS development community.
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
                backgroundImage: "url(/assets/images/nike-header.png)",
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
                    src="/assets/images/nike1.png"
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
                  <h2 className="text-center">Sneaker Showcase</h2>
                    <p className="card-text">
                    A curated view of the latest sneaker drops, highlighting featured releases and upcoming launches. Users can explore pricing, availability, and release dates while browsing detailed product visuals. This layout makes it easy to track new arrivals, compare styles, and prepare for upcoming launches.
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
                  <h2 className="text-center">Sneaker Details</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    A detailed product view highlighting the Air Jordan 11 Retro “Bred 2019 Release.” The screen displays pricing, ratings, and a full product description. Users can review key features, assess reviews, and customize their selection, offering a complete shopping experience directly from the app.
                    </p>
                  </div>
                  <img
                    src="/assets/images/nike2.png"
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
                <h2 className="text-center">Shopping Cart</h2>
                <p>
                A clear and organized shopping cart that displays selected items, quantities, and prices. Users can easily adjust quantities with plus/minus buttons, ensuring flexibility before checkout. The layout keeps products visually distinct, making it simple to review selections and totals at a glance.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/nike3.png"
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
                    src="/assets/images/nike4.png"
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
                  <h2 className="text-center">Search Results</h2>
                    <p className="card-text">
                    A results screen displaying filtered sneaker options based on search criteria such as “Jordans,” “Lebrons,” and size. Each result includes product imagery, pricing, and labels for new arrivals, making it easy for shoppers to compare and choose their preferred sneakers.
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
                  <h2 className="text-center">Filter Options</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    A customizable filtering interface for sneakers, allowing users to refine search results by gender, price range, color, and size. The design provides quick toggles for men’s, women’s, or both collections, along with intuitive sliders and swatches for a personalized shopping experience.
                    </p>
                  </div>
                  <img
                    src="/assets/images/nike5.png"
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
                  src="/assets/images/nike6.png"
                  width="425"
                  alt="Roster Screen Fluid"
                  class="float-start"
                />
              </div>
              
              <div className="col-lg-6">
                <h2 className="text-center">Sneaker Showcase <br/>Dark Mode</h2>
                <p>A curated display of featured sneakers with pricing, alongside upcoming releases. Users can explore trending footwear, view product details, and preview launch dates for anticipated drops.
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
                    src="/assets/images/nike7.png"
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
                  <h2 className="text-center">Product Details <br/>Dark Mode</h2>
                    <p className="card-text">
                    A detailed product page displaying the Air Jordan 11 Retro “Bred 2019 Release.” Users can view multiple product images, select from available color options, and choose their shoe size. The interface highlights the price and provides a clear “Add to Cart” option for a streamlined shopping experience.
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
                  <h2 className="text-center">Search Results <br/>Dark Mode</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    A filtered results page showing sneakers that match user-selected categories like Jordans, LeBrons, and size 13. Each item highlights pricing, availability, and tags such as “New,” making it easy for users to browse and find their preferred pair.
                    </p>
                  </div>
                  <img
                    src="/assets/images/nike8.png"
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
        
        <div className="container-fluid bg-custom py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2>Shopping Cart <br/>Dark Mode</h2>
                <p>
                A detailed shopping cart view that displays selected sneakers, their prices, and adjustable quantities. Each item includes product details, allowing users to update or remove shoes before checkout for a smooth purchasing experience.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/nike9.png"
                  width="425"
                  alt="Navigation Drawer Fluid"
                  class="float-end"
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
            <Link legacyBehavior href="/shoe-pos">
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
                  <span>Shoe POS App</span>
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
