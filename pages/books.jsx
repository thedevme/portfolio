import Link from "next/link";
import Layout from "../src/layouts/Layout";
import SEO from "../src/components/SEO";
const Blog = () => {
  return (
    <Layout>
      <SEO
        title="Books"
        description="Published iOS development books by Craig Clayton covering Swift, SwiftUI, iOS 10, iOS 11, and iOS 12 programming for beginners and experienced developers."
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
              <span> My Books </span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Recent Books </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Blog */}
      <div className="section section-inner m-archive">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* Blog Items */}
              <div className="articles-container">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/swiftui-projects">
                      <a>
                        <img
                          src="/assets/images/swiftui-projects.jpg"
                          alt="The Main Thing For The Designer"
                          loading="lazy"
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
                        SwiftUI Projectsis more than just a technical manual — it’s my way of showing developers how to build apps the way they’re built in the real world. …{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/swiftui-projects">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/ios12-programming-for-beginners">
                      <a>
                        <img
                          src="/assets/images/ios12.jpg"
                          alt="iOS 12 Programming for Beginners"
                          loading="lazy"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>December 11, 2020</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/ios12-programming-for-beginners">
                        <a>iOS 12 Programming for Beginners</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                        This isn’t another ‘hello world’ tour. Each chapter feels like
              pairing with a dev shipping a real feature. …{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/ios12-programming-for-beginners">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/learn-ios11-with-swift4">
                      <a>
                        <img
                          src="/assets/images/ios11.jpg"
                          alt="Learn iOS 11 with Swift 4"
                          loading="lazy"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>Janurary 31, 2018</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/learn-ios11-with-swift4">
                        <a>Learn iOS iOS 11 with Swift 4</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                       A beginner-friendly introduction that still feels practical.
                      The projects cover the essentials—navigation, data, and layout—
                      while layering in iOS 11’s new features like drag &amp; drop and
                      rich notifications.…{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/learn-ios11-with-swift4">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/learn-ios11-with-swift4">
                      <a>
                        <img
                          src="/assets/images/ios10.jpg"
                          alt="Learn iOS 11 with Swift 4"
                          loading="lazy"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>December 27, 2016</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/ios10-programming-for-beginners">
                        <a>iOS 10 Programming for Beginners</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                       A beginner-friendly introduction that still feels practical.
                      The projects cover the essentials—navigation, data, and layout—
                      while layering in iOS 11’s new features like drag &amp; drop and
                      rich notifications.…{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/ios10-programming-for-beginners">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="v-line-left v-line-top">
            <div className="v-line-block">
              <span />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
