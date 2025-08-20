"use strict";
exports.id = 935;
exports.ids = [935];
exports.modules = {

/***/ 2935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/utils.js
function initCursor() {
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let cursor = {
        el: document.querySelector(".cursor"),
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        w: 30,
        h: 30,
        update: function() {
            let l = this.x - this.w / 2;
            let t = this.y - this.h / 2;
            this.el.style.transform = "translate3d(" + l + "px," + t + "px, 0)";
        }
    };
    window.addEventListener("mousemove", (e)=>{
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    const link = document.querySelectorAll("a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk");
    link.forEach((link)=>{
        link.addEventListener("mouseenter", ()=>{
            cursor.el.classList.add("cursor-zoom");
        });
        link.addEventListener("mouseleave", ()=>{
            cursor.el.classList.remove("cursor-zoom");
        });
    });
    setInterval(move, 1000 / 60);
    function move() {
        cursor.x = lerp(cursor.x, mouseX, 0.1);
        cursor.y = lerp(cursor.y, mouseY, 0.1);
        cursor.update();
    }
    function lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
    }
}
const activeAnimation = ()=>{
    const progress_inner = document.querySelectorAll(".scroll-animate"), triggerBottom = window.innerHeight / 5 * 5 - 20;
    progress_inner.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.style.visibility = "visible";
            box.classList.add("animate__active");
        }
    });
};
const stickyNav = ()=>{
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".header");
    sticky.forEach((sticky)=>{
        if (sticky) {
            if (offset > 100) {
                sticky.classList.add("animate-in", "sticky");
            } else {
                sticky.classList.remove("animate-in", "sticky");
            }
        }
    });
};
const toggleMenu = (e)=>{
    e.preventDefault();
    const menu = document.querySelector(".menu-btn");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menu.classList.add("no-touch");
        document.body.classList.remove("no-scroll");
        document.querySelector(".menu-full-overlay").classList.remove("is-open");
        document.querySelector(".menu-full-overlay").classList.remove("has-scroll");
        document.querySelector(".menu-full-overlay").classList.remove("animate-active");
        setTimeout(function() {
            document.querySelector(".menu-full-overlay").classList.remove("visible");
            menu.classList.remove("no-touch");
        }, 1000);
    } else {
        menu.classList.add("active", "no-touch");
        document.body.classList.add("no-scroll");
        document.querySelector(".menu-full-overlay").classList.add("is-open", "visible");
        setTimeout(function() {
            document.querySelector(".menu-full-overlay").classList.add("has-scroll", "animate-active");
            menu.classList.remove("no-touch");
        }, 1000);
    }
    return false;
};
const linkClick = ()=>{
    const menu = document.querySelector(".menu-btn");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menu.classList.add("no-touch");
        document.body.classList.remove("no-scroll");
        document.querySelector(".menu-full-overlay").classList.remove("is-open");
        document.querySelector(".menu-full-overlay").classList.remove("has-scroll");
        document.querySelector(".menu-full-overlay").classList.remove("animate-active");
        setTimeout(function() {
            document.querySelector(".menu-full-overlay").classList.remove("visible");
            menu.classList.remove("no-touch");
        }, 1000);
    } else {
        menu.classList.add("active", "no-touch");
        document.body.classList.add("no-scroll");
        document.querySelector(".menu-full-overlay").classList.add("is-open", "visible");
        setTimeout(function() {
            document.querySelector(".menu-full-overlay").classList.add("has-scroll", "animate-active");
            menu.classList.remove("no-touch");
        }, 1000);
    }
    return false;
};
const jarallaxAnimation = ()=>{
    let { jarallax , jarallaxVideo  } = __webpack_require__(409);
    jarallax(document.querySelectorAll(`.js-parallax`), {
        speed: 0.65,
        type: "scroll"
    });
};

;// CONCATENATED MODULE: ./src/layouts/Footer.js

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "footer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "footer__builder",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-4 col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "social-links scrolla-element-anim-1 scroll-animate",
                                "data-animate": "active",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "nofollow",
                                        href: "https://x.com/thedevme",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            "aria-hidden": "true",
                                            className: "fab fa-twitter"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "nofollow",
                                        href: "https://dribbble.com/thedevme",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            "aria-hidden": "true",
                                            className: "fab fa-dribbble"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "nofollow",
                                        href: "https://www.linkedin.com/in/thedevme/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            "aria-hidden": "true",
                                            className: "fab fa-linkedin"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-4 col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "copyright-text align-center scrolla-element-anim-1 scroll-animate",
                                "data-animate": "active",
                                children: [
                                    "\xa9 2025 ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "Mobile Design Dev"
                                    }),
                                    ". All rights reserved"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layouts_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layouts/Header.js




const Header = ()=>{
    // Always apply dark theme
    (0,external_react_.useEffect)(()=>{
        if (typeof document !== "undefined") {
            document.body.classList.add("dark-skin");
            document.body.classList.remove("light-skin");
            // Force the body class
            document.body.className = "dark-skin";
        }
    }, []);
    const [pageToggle, setPageToggle] = (0,external_react_.useState)(true);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "header",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header__builder",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xs-4 col-sm-4 col-md-4 col-lg-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            width: 360,
                                            height: 60,
                                            src: "assets/images/mobile-logo-scaled.png",
                                            alt: ""
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-xs-8 col-sm-8 col-md-8 col-lg-8 align-right",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#",
                                    className: "menu-btn",
                                    onClick: (e)=>toggleMenu(e),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "menu-full-overlay",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-full-container",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "container",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "row",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "menu-full",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: "menu-full",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "menu-item",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                legacyBehavior: true,
                                                                                href: "/",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "splitting-text-anim-2",
                                                                                    "data-splitting": "chars",
                                                                                    children: "Home"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "menu-item",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                className: "splitting-text-anim-2",
                                                                                "data-splitting": "chars",
                                                                                href: "/#services-section",
                                                                                onClick: ()=>linkClick(),
                                                                                children: "Services"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "menu-item",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                className: "splitting-text-anim-2",
                                                                                "data-splitting": "chars",
                                                                                href: "/#skills-section",
                                                                                onClick: ()=>linkClick(),
                                                                                children: "Skills"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "menu-item",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                className: "splitting-text-anim-2",
                                                                                "data-splitting": "chars",
                                                                                href: "/#works-section",
                                                                                onClick: ()=>linkClick(),
                                                                                children: "Works"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "menu-item",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                className: "splitting-text-anim-2",
                                                                                "data-splitting": "chars",
                                                                                href: "/#resume-section",
                                                                                onClick: ()=>linkClick(),
                                                                                children: "Resume"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "menu-item",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                className: "splitting-text-anim-2",
                                                                                "data-splitting": "chars",
                                                                                href: "/#testimonials-section",
                                                                                onClick: ()=>linkClick(),
                                                                                children: "Testimonials"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "menu-item",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                className: "splitting-text-anim-2",
                                                                                "data-splitting": "chars",
                                                                                href: "/#pricing-section",
                                                                                onClick: ()=>linkClick(),
                                                                                children: "Pricing"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "menu-item",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                className: "splitting-text-anim-2",
                                                                                "data-splitting": "chars",
                                                                                href: "/#blog-section",
                                                                                onClick: ()=>linkClick(),
                                                                                children: "Blog"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "menu-item",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                className: "splitting-text-anim-2",
                                                                                "data-splitting": "chars",
                                                                                href: "/#contact-section",
                                                                                onClick: ()=>linkClick(),
                                                                                children: "Contact"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            className: `menu-item menu-item-has-children has-children ${pageToggle ? "opened" : "closed"}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                    className: "splitting-text-anim-2",
                                                                                    "data-splitting": "chars",
                                                                                    onClick: ()=>setPageToggle(!pageToggle),
                                                                                    children: [
                                                                                        "Pages",
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                            className: "fas fa-chevron-down"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                    className: "sub-menu",
                                                                                    style: {
                                                                                        marginTop: "1rem",
                                                                                        display: `${pageToggle ? "block" : "none"}`
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                            className: "menu-item",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                                legacyBehavior: true,
                                                                                                href: "/works-list",
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                    className: "splitting-text-anim-1",
                                                                                                    "data-splitting": "chars",
                                                                                                    children: "Works (List)"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                            className: "menu-item",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                                legacyBehavior: true,
                                                                                                href: "/works",
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                    className: "splitting-text-anim-1",
                                                                                                    "data-splitting": "chars",
                                                                                                    children: "Works (Grid)"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                            className: "menu-item",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                                legacyBehavior: true,
                                                                                                href: "/work-single",
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                    className: "splitting-text-anim-1",
                                                                                                    "data-splitting": "chars",
                                                                                                    children: "Work Single Page"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                            className: "menu-item",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                                legacyBehavior: true,
                                                                                                href: "/blog",
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                    className: " splitting-text-anim-1",
                                                                                                    "data-splitting": "chars",
                                                                                                    children: "Blog"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                            className: "menu-item",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                                legacyBehavior: true,
                                                                                                href: "/blog-single",
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                    className: "splitting-text-anim-1",
                                                                                                    "data-splitting": "chars",
                                                                                                    children: "Single Post"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "menu-social-links",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "http://dribbble.com",
                                                                        target: "blank",
                                                                        className: "scrolla-element-anim-1",
                                                                        title: "dribbble",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-dribbble"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "http://twitter.com",
                                                                        target: "blank",
                                                                        className: "scrolla-element-anim-1",
                                                                        title: "twitter",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-twitter"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "http://behance.com",
                                                                        target: "blank",
                                                                        className: "scrolla-element-anim-1",
                                                                        title: "behance",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-behance"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "v-line-block",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-overlay"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layouts_Header = (Header);

;// CONCATENATED MODULE: ./src/layouts/Layout.js





const Layout = ({ children , pageClassName  })=>{
    (0,external_react_.useEffect)(()=>{
        activeAnimation();
        initCursor();
        window.addEventListener("scroll", activeAnimation);
        window.addEventListener("scroll", stickyNav);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
        Splitting();
        jarallaxAnimation();
        document.querySelector("body").className = pageClassName ? pageClassName : "";
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container-page",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layouts_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "wrapper",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layouts_Footer, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "cursor"
            })
        ]
    });
};
/* harmony default export */ const layouts_Layout = (Layout);


/***/ })

};
;