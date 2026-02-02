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
              <span>American Handy App</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Swift, SwiftUI, Design & Development</span>
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
                      <span>2024</span>
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
                      <span>Swift, SwiftUI, Design & Development</span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/american-handy-consumer-app/id6749178677"
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
                  This project delivered a modern mobile solution for American Handy, designed to streamline how homeowners request and manage professional repair and maintenance services. The app provides a clear, step-by-step order flow where users can select from services such as drywall repair, flooring, painting, plumbing, and more. With a clean interface and service-specific options (like finish levels or patch selections), customers can easily create detailed requests that ensure accuracy for every job. Orders include appointment scheduling, service address details, and real-time status tracking, giving users complete visibility from pending requests through project completion.
                </p>
                <p>
                  Beyond service booking, the app centralizes the customer experience by offering photo uploads for context, appointment summaries, and quick access to customer support. Users can review service confirmations, track multiple orders simultaneously, and receive timely updates on scheduling. By combining intuitive navigation with professional service options, the American Handy app creates a dependable, all-in-one platform that simplifies home repair management while improving transparency between customers and service providers.
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
                backgroundImage: "url(/assets/images/american-header.png)",
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
                    src="/assets/images/american1.png"
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
                  <h2 className="text-center">Login Screen</h2>
                    <p className="card-text">
                    This is the app's authentication screen for user login. The interface features company branding at the top with login fields, sign up option, and password recovery functionality.
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
                  <h2 className="text-center">Home Dashboard</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    The home dashboard offers a personalized and action-driven experience, greeting users by name and immediately surfacing available services. With bold visuals and clear calls-to-action, users can quickly initiate a Service Request—in this case, for drywall repair. The top card visually distinguishes service categories like “Handyman Service,” while the lower banner drives engagement with a promo-style message encouraging users to “Get Repairs Started.” The bottom navigation provides direct access to Home and Orders, keeping the interface clean and easy to navigate. This screen is designed to move users from browsing to booking in just a few taps.
                    </p>
                  </div>
                  <img
                    src="/assets/images/american2.png"
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
                <h2 className="text-center">Service Categories & Membership</h2>
                <p>
                This screen presents a categorized view of available handyman services, allowing users to quickly find what they need with intuitive icons and labels—ranging from Appliance Repair and Carpentry to Basic Plumbing and Electrical. A persistent Service Request banner encourages quick action, while the “Upgrade Membership” section introduces a clear monthly pricing model for premium users. The plan is promoted with large, eye-catching typography and transparent pricing details: $69.99/month with discounted hourly rates for service visits. This layout combines usability with upsell potential, streamlining both service selection and subscription conversion.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/american3.png"
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
                    src="/assets/images/american4.png"
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
                  <h2 className="text-center">Service Selection – New Order</h2>
                    <p className="card-text">
                    This screen allows users to begin a new service request by selecting one or more service categories. A progress bar at the top provides clear visual feedback on the multi-step flow, reinforcing user confidence. The message at the top encourages flexibility: “You can select more services or continue with your current selection.” Options like Appliance Repair, Flooring, and General Repairs are presented in a clean list format with a checkmark confirming the selected service (in this case, Drywall Repair). A prominent Next button enables users to proceed smoothly once they’ve made their choices, supporting fast and intuitive order creation.
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
                  <h2 className="text-center">Date & Time Selection</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    This step in the service request flow allows users to select a preferred date and time for their appointment. The calendar interface, set to August 2025, makes it easy to choose a specific day—here, Thursday the 14th is selected. Below the calendar, available time slots such as 9AM and 1PM are presented as tappable buttons, giving users quick scheduling control. The clean layout, combined with a visible progress indicator and Next and Previous navigation buttons, keeps the experience streamlined and user-friendly as customers move through the order process.
                    </p>
                  </div>
                  <img
                    src="/assets/images/american5.png"
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
                  src="/assets/images/american6.png"
                  width="425"
                  alt="Roster Screen Fluid"
                  class="float-start"
                />
              </div>
              
              <div className="col-lg-6">
                <h2 className="text-center">Drywall Repair Details</h2>
                <p>This screen collects specific details about a Drywall Repair service as part of the new order request flow. Users are prompted to select relevant options such as Finishing levels (1–4) or whether a Patch is needed. The clean checkbox layout makes it easy to specify job requirements, ensuring technicians receive the necessary context ahead of time. A progress bar indicates the user is midway through the request process, while the Previous and Next buttons support smooth, guided navigation. This level of customization helps tailor the service to match the exact scope of work.
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
                    src="/assets/images/american7.png"
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
                  <h2 className="text-center">Photo Upload (Optional)</h2>
                    <p className="card-text">
                      This screen gives users the option to upload photos as part of the new order request. It encourages adding images with the message: “Photos help us understand your project better,” helping technicians assess the job more accurately before arrival. Users can choose between Take Photo or Add Photo, using built-in camera or gallery access. The light, icon-driven layout keeps things simple, while the Previous and Next buttons maintain a consistent flow through the multi-step request process. This step adds valuable context without slowing down users who prefer to skip it.
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
                  <h2 className="text-center">Order Confirmation</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    This final step confirms the full details of the user’s service order before submission. It displays the service address, selected plan (Pay-As-You-Go), number of requests, and the scheduled date and time — in this case, August 29, 2025 at 1PM. Below that, the app summarizes the Requested Service Items, including specific notes like Finishing, Level 1, and Patch for Drywall Repair. With a bold Submit button and a clear, structured layout, this screen gives users confidence and clarity before officially placing their order.
                    </p>
                  </div>
                  <img
                    src="/assets/images/american8.png"
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
                <h2>Active Orders Overview</h2>
                <p>
                The Orders screen gives users a clear, step-by-step view of their active service requests. Each order displays its unique ID, scheduled date and time, and current status within a four-step progress tracker. Orders #117 through #119 are all in the Pending state, visually indicated by a checkmark on step one. The tab-based layout allows users to switch easily between Active and History views, while icons next to each order provide quick visual cues for the type of service requested. This design keeps users informed and reassured throughout the lifecycle of their service orders.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/american9.png"
                  width="425"
                  alt="Active Orders Overview"
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
                    src="/assets/images/american10.png"
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
                  <h2 className="text-center">Order Details View</h2>
                    <p className="card-text">
                      This screen provides a detailed summary of a specific service order—in this case, Order #119. Users can view the current status via a four-step progress bar, which shows the order is still Pending. Below, important details such as the service address, appointment time (September 12, 2025, at 6:34 PM), and shift are clearly listed. Under Service Work, the task is labeled as Drywall Repair, with specifications like Finishing and Level 4, along with a user-uploaded photo that adds visual context. This detailed breakdown keeps customers informed and reassured at every stage.
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
                  <h2 className="text-center">Multi-Service Order Summary</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    This screen shows a breakdown of all services included in Order #119, offering a visual and descriptive summary for each. The listed services include Drywall Repair (Finishing, Level 4), Flooring (Wood), and Painting (Baseboards, Walls), each accompanied by user-uploaded photos that provide valuable context for the assigned technician. The layout keeps each service card clean and organized, making it easy to review details at a glance. A prominent Call Office button at the bottom ensures users can quickly get support or make last-minute changes to their request.
                    </p>
                  </div>
                  <img
                    src="/assets/images/american11.png"
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
            <Link legacyBehavior href="/chl">
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
                  <span>NBA Watch Draft App</span>
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
