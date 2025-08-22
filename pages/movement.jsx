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
              <span>Movement App</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Design, Development, App Store</span>
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
                  href="https://apps.apple.com/ca/app/the-movement-ed-farm/id1590862954"
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
              This project showcases a mobile experience designed to educate and immerse users in pivotal moments of the Civil Rights Movement through storytelling and location-based interaction. The app’s “Magic Walks” feature guides users along curated historical routes, with stops like the Fred Shuttlesworth statue and Kelly Ingram Park. Users can choose between augmented reality or audio-only experiences to explore stories from youth storytellers and firsthand accounts of foot soldiers. Built-in mapping and narration tools allow participants to follow a walk at their own pace while receiving contextual information at each landmark.
              </p>  

              <p>  
              Beyond the walking tours, the app celebrates contributors who help bring these stories to life — from community leaders and writers to young narrators featured throughout the interface. Each contributor has a detailed profile, and their stories are showcased in the app’s content library, filtered by themes like leadership and cultural impact. With a balance of historical reverence and modern interaction, the platform offers an educational tool rooted in place-based storytelling, creating a powerful bridge between past events and present-day awareness.
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
                backgroundImage: "url(/assets/images/movement-header.png)",
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
                    src="/assets/images/movement1.png"
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
                  <h2 className="text-center">MLK Tribute Feature – Article Spotlight</h2>
                    <p className="card-text">
                    This screen highlights a featured article titled “Honoring Martin Luther King Jr.” written by Jamal Morant, presented within a visually impactful layout. A powerful image of Dr. King addressing a crowd sets the tone, capturing the historical weight of the subject. The screen includes content attribution to the Birmingham Civil Rights Institute, reinforcing the source’s authenticity. Below the headline, a short excerpt introduces the piece, with filtering options by theme—such as Cost of Segregation, Culture & Media, and more—allowing users to explore related stories. The clean, respectful design makes this a compelling entry point for deeper educational content.
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
                  <h2 className="text-center">Movement App – Navigation Menu</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    This screen displays the main navigation menu of the Movement app, designed to honor and educate through storytelling. The menu features four core sections: Stories, Magic Walks, Contributors, and Settings, each paired with an intuitive icon. A header section showcases key Movement Contributors, while the footer includes an inspiring quote by Fred Shuttlesworth: “You have to be prepared to die before you can be prepared to live.” The black-and-white design paired with bold typography and historical imagery sets a reflective, powerful tone for the user experience.
                    </p>
                  </div>
                  <img
                    src="/assets/images/movement2.png"
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
                <h2 className="text-left">Magic Walk – Fred Shuttlesworth Tour</h2>
                <p>
                This screen introduces a Magic Walk experience titled “The Life of Fred Shuttlesworth,” inviting users to follow a curated route of historically significant sites. The tour incorporates Augmented Reality (AR) for an immersive storytelling experience. Spanning 2.5 miles with an estimated duration of 1 hour and 5 minutes, the walk features stops including the BCRI Fred Shuttlesworth Statue, St. Paul United Methodist Church, AG Gaston Motel, and Kelly Ingram Park. Participants will hear powerful accounts from children of foot soldiers in the civil rights movement. The interface provides buttons to preview or begin the walk, blending tech and history into an engaging, educational journey.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/movement3.png"
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
                    src="/assets/images/movement4.png"
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
                  <h2 className="text-center">Walk Navigation – Fred Shuttlesworth Tour</h2>
                    <p className="card-text">
                    This screen showcases the live navigation interface of the Fred Shuttlesworth Magic Walk. Users are guided through the historical walking route with an interactive map view displaying clearly marked stops (1 through 4). The app indicates the current location with a blue dot and highlights the path to follow. The bottom panel confirms arrival at the Fred Shuttlesworth Statue, offering audio playback and AR content. Below that, it lists the next destination—St. Paul’s Cathedral—complete with an address and quick navigation options, creating a guided tour experience powered by storytelling and real-time tracking.
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
                  <h2 className="text-center">Arrival Experience Options – Fred Shuttlesworth Statue</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    This screen appears once users arrive at a stop on the Magic Walk. It confirms arrival at the Fred Shuttlesworth Statue and presents two immersive storytelling options. Users can choose between an Augmented Reality (AR) experience with audio or a standard audio-only experience, tailored to their preference and surroundings. A photo of the statue visually anchors the content, while clear navigation (with a dismiss button) gives users full control over how they engage with each moment of the walk.
                    </p>
                  </div>
                  <img
                    src="/assets/images/movement5.png"
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
                <h2 className="text-left">Contributors – Youth Storytellers</h2>
                <p>
                This screen highlights the young voices behind The Movement experience. Each contributor is presented with a name, portrait, and title — Youth Storyteller — celebrating the next generation’s role in preserving and sharing civil rights history. With bold typography, black-and-white imagery, and a clean grid layout, the design centers each individual while reinforcing the collective power of storytelling. This section personalizes the app, connecting users to the real people behind the narratives they hear during their Magic Walk.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/movement6.png"
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
                    src="/assets/images/movement7.png"
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
                  <h2 className="text-center">Contributors – Community Voices</h2>
                    <p className="card-text">
                    This screen showcases the powerful community voices featured in The Movement app. Each contributor is presented with their name, photo, and impactful title—ranging from Storyteller to Activist to Community Leader—along with personal labels like “Foot Soldier” and “The Queen.” The horizontal card layout emphasizes each individual’s identity, while the visual star icon hints at saved or favorited storytellers. This section highlights the app’s mission to preserve oral history and lived experience through a diverse set of authentic voices.
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
                  <h2 className="text-center">Contributor Profile – Jamal Morant</h2>
                  <div className="card-body text-white">
                    <p className="card-text text-white">
                    This detailed profile screen features Jamal Morant, affectionately known as “Big Man.” His portrait dominates the screen, framed in high-contrast black and white to emphasize his expression and personality. The bottom overlay highlights key details: age (99), roles (Storyteller, Content Writer), and pronouns (He/Him/His). A star icon in the corner suggests the ability to favorite or bookmark contributors. This view allows users to learn more about each individual voice within The Movement, enhancing connection and personalization through strong visual identity and clear role labeling.
                    </p>
                  </div>
                  <img
                    src="/assets/images/movement9.png"
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
                <h2 className="text-left">Contributor Bio & Story Detail – Gianna</h2>
                <p>
                This expanded contributor view provides a deeper look into Gianna’s profile. The top section reiterates core info—age, pronouns, and role—followed by a richly styled “About Gianna” section featuring a detailed personal bio. Below that is the “Gianna Stories” section, showcasing individual story cards titled “Parsonage Bombing” with accompanying thumbnails and preview text. The clean black-and-white aesthetic, use of script and bold typography, and consistent structure create a compelling, readable experience that highlights both identity and narrative contribution within The Movement app.
                </p>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/movement9.png"
                  width="425"
                  alt="Navigation Drawer"
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
                  <span>CHL App</span>
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
