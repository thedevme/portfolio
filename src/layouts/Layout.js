import { Fragment, useEffect } from "react";
import {
  activeAnimation,
  initCursor,
  jarallaxAnimation,
  stickyNav,
} from "../utils";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, pageClassName }) => {
  // Force dark theme on all pages
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.classList.add("dark-skin");
      document.body.classList.remove("light-skin");
    }
  }, []);

  useEffect(() => {
    activeAnimation();
    const cleanupCursor = initCursor();
    window.addEventListener("scroll", activeAnimation);
    window.addEventListener("scroll", stickyNav);

    return () => {
      window.removeEventListener("scroll", activeAnimation);
      window.removeEventListener("scroll", stickyNav);
      if (cleanupCursor) cleanupCursor();
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Splitting = require("splitting");
    }
    Splitting();
    jarallaxAnimation();
    const body = document.querySelector("body");
    if (body && pageClassName) {
      body.classList.add(pageClassName);
    }

    return () => {
      if (body && pageClassName) {
        body.classList.remove(pageClassName);
      }
    };
  }, [pageClassName]);

  return (
    <Fragment>
      <div className="container-page">
        <Header />
        {/* Wrapper */}
        <div className="wrapper">{children}</div>
        {/* Footer */}
        <Footer />
      </div>
      {/* cursor */}
      <div className="cursor" />
    </Fragment>
  );
};
export default Layout;
