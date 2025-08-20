import Link from "next/link";
import { useEffect } from "react";
import Layout from "../src/layouts/Layout";
import PhoneCards from "../src/components/PhoneCards";

const ShoePos = () => {
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
              <span>Shoe POS System</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Point of Sale, Retail Management</span>
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
                      <span>2023</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technology:</span>
                    <strong>
                      <span>React, Node.js, PostgreSQL</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span>Web App, Retail</span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://shoe-pos.com"
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>View Live Demo</span>
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
                  A comprehensive point-of-sale system specifically designed for shoe retail businesses. The application streamlines inventory management, sales processing, and customer relationship management. The interface prioritizes speed and accuracy for busy retail environments with intuitive touch-screen controls.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  The system includes advanced features such as barcode scanning, size and color tracking, customer loyalty programs, and detailed sales analytics. Integration with accounting software and e-commerce platforms provides seamless omnichannel retail experience. Real-time inventory updates prevent overselling and optimize stock levels.
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
                  title="Sales Interface"
                  copy="Streamlined sales interface with quick product lookup, barcode scanning, and multiple payment options. Process transactions efficiently with customer information and loyalty integration."
                  colorPop="Sales Interface"
                  deviceType="full-width"
                  imageSrc="/assets/images/bmw1-cropped.png"
                />
              </div>
              <div className="portfolio-container iphone-only">
                <PhoneCards 
                  title="Inventory Management"
                  copy="Comprehensive inventory tracking with size and color variants, low stock alerts, and automated reorder suggestions. Manage multiple locations and track product performance."
                  colorPop="Inventory Management"
                  imageSrc="/assets/images/bmw2-cropped.png"
                />
                <PhoneCards 
                  title="Analytics Dashboard"
                  copy="Detailed sales analytics with performance metrics, customer insights, and trend analysis. Generate reports for business intelligence and strategic planning."
                  colorPop="Analytics Dashboard"
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
                  Built with React for the frontend and Node.js with Express for the 
                  backend API. PostgreSQL database handles complex inventory relationships 
                  and transaction data. Real-time updates using WebSocket connections 
                  ensure synchronized data across multiple terminals and locations.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  Advanced features include barcode scanner integration, receipt 
                  printing, and payment gateway integration. Offline capability 
                  ensures business continuity during network interruptions. 
                  Comprehensive security measures protect sensitive customer and 
                  financial data with role-based access controls.
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
            <Link legacyBehavior href="/patriots">
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
                  <span>Patriots App</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ShoePos;
