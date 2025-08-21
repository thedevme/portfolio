import Link from "next/link";
import Layout from "../src/layouts/Layout";
const BlogSingle = () => {
  return (
    <Layout>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        <div className="container">
          {/* Heading */}
          <div className="m-titles align-center">
            <div
              className="m-category scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <Link legacyBehavior href="/blog">
                <a>Book</a>
              </Link>
              ,{" "}
              <Link legacyBehavior href="/blog">
                <a>UIKit</a>
              </Link>{" "}
              / Janurary 31, 2018 / by Craig Clayton
            </div>
            <h1
              className="m-title scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              Learn iOS 11 with Swift 4
            </h1>
          </div>
        </div>
      </section>
      {/* Single Post Image */}
      <div className="section section-inner m-image-large">
        <div className="container">
          <div className="v-line-right v-line-top">
            <div className="v-line-block">
              <span />
            </div>
          </div>
        </div>
        <div className="image">
          <div
            className="img scrolla-element-anim-1 scroll-animate"
            data-animate="active"
            style={{ backgroundImage: "url(/assets/images/ios11.jpg)" }}
          />
        </div>
      </div>
      {/* Section - Blog */}
      <section className="section section-inner m-archive">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">
              {/* content */}
              <div className="description">
                <div
                  className="post-content scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p>
                    <strong>iOS 11 Projects for Beginners</strong> is a practical second edition designed to help you learn Swift 4 and Xcode 9 while building apps that look and feel real. Each project reflects challenges I’ve worked through on teams: connecting data, shaping layouts, and shipping features that run smoothly on iPhone and iPad. Instead of stopping at “hello world,” the book shows how to manage data, integrate iOS features like photos and GPS, and prepare your app for the App Store. The goal is to give you a clear path from your first line of code to complete, working projects you can confidently share.
                  </p>

                  <h3>Key Features</h3>
                  <ul className="book-list">
                    <li>Hands-on projects that teach by doing, from first app to final build</li>
                    <li>Explore iOS 11 features like drag &amp; drop, notifications, and SiriKit</li>
                    <li>Work with photos, GPS, and data storage to add real-world functionality</li>
                    <li>Step-by-step guidance using Swift 4 and Xcode 9</li>
                  </ul>

                  <h3>Book Description</h3>
                  <p>
                    iOS 11 introduces new APIs and refinements that make UIKit even more powerful. This guide goes beyond theory with apps built from scratch so you can see how real products take shape. You’ll learn to structure your projects in Xcode, write clean Swift code, and design adaptive interfaces that look great across devices. Each project layers in core skills like data persistence, notifications, and animations so you learn not just what Swift and iOS 11 can do, but how to apply them under practical constraints. By the end, you’ll have patterns and techniques you can reuse in your own apps, whether you’re just starting out or adding the latest features to existing projects.
                  </p>

                  <ul>
                    <li><strong>Foundations:</strong> Swift basics · Xcode setup · Interface building</li>
                    <li><strong>Core Apps:</strong> Notifications · Location services · Image filters</li>
                    <li><strong>Platform:</strong> Drag &amp; drop · SiriKit · TestFlight submission</li>
                  </ul>

                  <blockquote>
                    <p>
                      “A beginner-friendly introduction that still feels practical.
                      The projects cover the essentials—navigation, data, and layout—
                      while layering in iOS 11’s new features like drag &amp; drop and
                      rich notifications. By the end you don’t just know Swift 4, you
                      understand how to bring an app from concept to the App Store.”
                    </p>
                    <p>
                      <cite>— Reader Review</cite>
                    </p>
                  </blockquote>

                  <h3>What You Will Learn</h3>
                  <ul>
                    <li>Use Swift 4 and Xcode 9 to build real iOS apps step by step</li>
                    <li>Understand variables, constants, strings, and control flow</li>
                    <li>Design responsive UIs with Auto Layout and adaptive principles</li>
                    <li>Integrate photos, GPS, and privacy controls into your projects</li>
                    <li>Create custom-rich notifications and simple animations</li>
                    <li>Leverage SiriKit and TestFlight to polish and release your app</li>
                  </ul>

                  <h3>Who This Book Is For</h3>
                  <p>
                    For beginners and aspiring iOS developers who want a project-based
                    introduction to iOS 11. Concepts start from first principles and
                    build toward production-ready skills, with a focus on learning by
                    building real apps you can run, test, and submit to the App Store.
                  </p>

                  <span className="tags-links">
                    <span>Tags:</span>
                    <a href="#">iOS 11</a>
                    <a href="#">Swift 4</a>
                    <a href="#">Xcode 9</a>
                    <a href="#">UIKit</a>
                  </span>
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
      </section>
      {/* Section Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">
              <div className="h-titles h-navs">
                <Link legacyBehavior href="/ios10-programming-for-beginners">
                  <a>
                    <span
                      className="nav-arrow splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Next Article
                    </span>
                    <span
                      className="h-title splitting-text-anim-2 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >iOS 10 Programming for Beginners
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogSingle;
