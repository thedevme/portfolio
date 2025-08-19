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
              <span>Shoe POS App</span>
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
              A comprehensive point-of-sale system specifically designed for shoe retail businesses. The application streamlines inventory management, sales processing, and customer relationship management. The interface prioritizes speed and accuracy for busy retail environments with intuitive touch-screen controls.
              </p>  

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
                backgroundImage: "url(assets/images/shoe-pos-header.png)",
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
              <h2 className="text-center">Product Inventory Management</h2>
                <p>
                A companion iPhone app for admins that displays available products, pricing, and sales volume in real time. It provides a quick overview of items like Air Jordans, including inventory counts, sales history, and order management. The app ensures staff can monitor stock levels and place replenishment orders seamlessly while on the go.
                </p>
              </div>
            </div>
            <div className="row align-items-middle">
              <div className="col-lg-12">
                <img
                  src="/assets/images/shoe-pos-ipad1.png"
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
                <h2 className="text-center">roduct Size Inventory</h2>
                <p>
                This screen shows a detailed product view for the Air Jordan 1, highlighting the total items in stock and breaking down inventory by shoe size. The grid layout allows an admin to quickly see available quantities across different sizes, making it easier to track stock levels and identify restocking needs.
                </p>
              </div>
            </div>
            <div className="row align-items-middle">
              <div className="col-lg-12">
                <img
                  src="/assets/images/shoe-pos-ipad2.png"
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
                <h2 className="text-center">Product Editing Screen</h2>
                <p>
                An editable product detail view where admins can update product information such as name, price, and available sizes. The screen includes an image selector for updating the product photo and structured input fields for managing shoe size inventory.
                </p>
              </div>
            </div>
            <div className="row align-items-middle">
              <div className="col-lg-12">
                <img
                  src="/assets/images/shoe-pos-ipad3.png"
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
                <h2 className="text-center">Edit Product Screen</h2>
                <p>
                A product detail page that allows an admin to edit shoe information. Features fields for product name, price, and detailed inventory management by shoe size, ensuring accurate stock control for every variation.
                </p>
              </div>
            </div>
            <div className="row align-items-middle">
              <div className="col-lg-12">
                <img
                  src="/assets/images/shoe-pos-ipad4.png"
                  width="1000"
                  alt="Navigation Drawer"
                  class="mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>

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
                    src="/assets/images/shoe-pos-admin5.png"
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
                  <h2 className="text-center">Create New Product Screen</h2>
                    <p className="card-text">
                    A product creation interface where admins can add new sneakers to the inventory. Includes fields for product name, pricing, and total stock count, with the ability to randomize inventory distribution by size. The screen also provides direct controls for editing size-specific quantities to ensure accurate and balanced stock management.
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
                  <h2 className="text-center">Home Screen</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    A tablet-based product listing interface showcasing multiple styles of Jumpman Air Jordans. Includes category tabs for navigating between brands, detailed product cards with pricing, and a right-side cart summary showing customer selections, subtotal, and tax breakdown. Designed for quick product browsing and seamless checkout.
                    </p>
                  </div>
                  <img
                    src="/assets/images/shoe-pos-ipad1.png"
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

        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="text-left">Product Detail Screen</h2>
                <p>
                A detailed view of an individual sneaker, showing size availability and quick add-to-cart options. The interface allows users to browse multiple sizes, view style information, and manage purchase quantities in a single glance. Designed for speed and simplicity in retail environments, this screen ensures seamless product selection and checkout flow.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/shoe-pos-ipad2.png"
                  width="425"
                  alt="Navigation Drawer"
                  class="float-end"
                />
              </div>
            </div>
          </div>
        </div>

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
                    src="/assets/images/shoe-pos-admin4.png"
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
                  <h2 className="text-center">Product Filter Screen</h2>
                    <p className="card-text">
                    A filter overlay that lets customers quickly refine their shopping experience by brand, size, and gender. The interface highlights available options like Nike, Adidas, and Jordan, along with men’s and women’s sizing. Users can apply filters seamlessly while browsing, keeping the shopping cart and product list visible for a smooth point-of-sale experience.
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
                  <h2 className="text-center">Cart View</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    A streamlined checkout interface showing selected items, quantities, and pricing with dynamic subtotal calculations. The screen includes options for adding discounts, shipping, and applying state/county taxes before presenting the final total. Designed for quick transactions with clear cost breakdowns to improve the customer checkout experience.
                    </p>
                  </div>
                  <img
                    src="/assets/images/shoe-pos-admin5.png"
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
      </section>

      {/* Section - Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="h-titles h-navs">
            <Link legacyBehavior href="/designair">
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
                  <span>Design Air App</span>
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
