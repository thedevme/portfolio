import dynamic from "next/dynamic";
import Layout from "../src/layouts/Layout";
import SEO from "../src/components/SEO";
const PortfolioIsotopeList = dynamic(
  () => import("../src/components/PortfolioIsotopeList"),
  {
    ssr: false,
  }
);
const WorksList = () => {
  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Browse Craig Clayton's portfolio of iOS apps, SwiftUI projects, and UI/UX designs. Featuring App Store releases and design concepts."
      />
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        <div className="container">
          {/* Heading */}
          <div className="m-titles align-center">
            <h1
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Portfolio</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                All my <b>Work</b>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Works */}
      <section className="lui-section">
        {/* Works */}
        <div className="v-line v-line-right v-line-top">
          <div className="container">
            <PortfolioIsotopeList />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default WorksList;
