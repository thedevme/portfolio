export function initCursor() {
  let mouseX = window.innerWidth / 2,
    mouseY = window.innerHeight / 2;

  let cursor = {
    el: document.querySelector(".cursor"),
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    w: 30,
    h: 30,
    update: function () {
      if (!this.el) return;
      let l = this.x - this.w / 2;
      let t = this.y - this.h / 2;
      this.el.style.transform = "translate3d(" + l + "px," + t + "px, 0)";
    },
  };

  if (!cursor.el) return () => {};

  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  window.addEventListener("mousemove", handleMouseMove);

  const links = document.querySelectorAll(
    "a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk"
  );

  const handleMouseEnter = () => {
    cursor.el.classList.add("cursor-zoom");
  };

  const handleMouseLeave = () => {
    cursor.el.classList.remove("cursor-zoom");
  };

  links.forEach((link) => {
    link.addEventListener("mouseenter", handleMouseEnter);
    link.addEventListener("mouseleave", handleMouseLeave);
  });

  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }

  let animationId;
  function move() {
    cursor.x = lerp(cursor.x, mouseX, 0.1);
    cursor.y = lerp(cursor.y, mouseY, 0.1);
    cursor.update();
    animationId = requestAnimationFrame(move);
  }
  animationId = requestAnimationFrame(move);

  // Return cleanup function
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    links.forEach((link) => {
      link.removeEventListener("mouseenter", handleMouseEnter);
      link.removeEventListener("mouseleave", handleMouseLeave);
    });
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  };
}
export const activeAnimation = () => {
  const progress_inner = document.querySelectorAll(".scroll-animate"),
    triggerBottom = (window.innerHeight / 5) * 5 - 20;
  progress_inner.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.style.visibility = "visible";
      box.classList.add("animate__active");
    }
  });
};

export const stickyNav = () => {
  let offset = window.scrollY;
  const sticky = document.querySelectorAll(".header");
  sticky.forEach((sticky) => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("animate-in", "sticky");
      } else {
        sticky.classList.remove("animate-in", "sticky");
      }
    }
  });
};

export const toggleMenu = (e) => {
  e.preventDefault();
  const menu = document.querySelector(".menu-btn");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menu.classList.add("no-touch");
    document.body.classList.remove("no-scroll");
    document.querySelector(".menu-full-overlay").classList.remove("is-open");
    document.querySelector(".menu-full-overlay").classList.remove("has-scroll");
    document
      .querySelector(".menu-full-overlay")
      .classList.remove("animate-active");
    setTimeout(function () {
      document.querySelector(".menu-full-overlay").classList.remove("visible");
      menu.classList.remove("no-touch");
    }, 1000);
  } else {
    menu.classList.add("active", "no-touch");
    document.body.classList.add("no-scroll");
    document
      .querySelector(".menu-full-overlay")
      .classList.add("is-open", "visible");
    setTimeout(function () {
      document
        .querySelector(".menu-full-overlay")
        .classList.add("has-scroll", "animate-active");
      menu.classList.remove("no-touch");
    }, 1000);
  }
  return false;
};

export const linkClick = () => {
  const menu = document.querySelector(".menu-btn");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menu.classList.add("no-touch");
    document.body.classList.remove("no-scroll");
    document.querySelector(".menu-full-overlay").classList.remove("is-open");
    document.querySelector(".menu-full-overlay").classList.remove("has-scroll");
    document
      .querySelector(".menu-full-overlay")
      .classList.remove("animate-active");
    setTimeout(function () {
      document.querySelector(".menu-full-overlay").classList.remove("visible");
      menu.classList.remove("no-touch");
    }, 1000);
  } else {
    menu.classList.add("active", "no-touch");
    document.body.classList.add("no-scroll");
    document
      .querySelector(".menu-full-overlay")
      .classList.add("is-open", "visible");
    setTimeout(function () {
      document
        .querySelector(".menu-full-overlay")
        .classList.add("has-scroll", "animate-active");
      menu.classList.remove("no-touch");
    }, 1000);
  }
  return false;
};

export const jarallaxAnimation = () => {
  let { jarallax, jarallaxVideo } = require("jarallax");
  jarallax(document.querySelectorAll(`.js-parallax`), {
    speed: 0.65,
    type: "scroll",
  });
};
