"use strict";
exports.id = 982;
exports.ids = [982];
exports.modules = {

/***/ 6703:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FullPhoneCards = ({ title , copy , colorPop , devicePosition ="top" , imageSrc ="/assets/images/sample1.png" , isHorizontal =false  })=>{
    const renderDevice = ()=>/*#__PURE__*/ _jsx("div", {
            className: "device",
            style: {
                width: "212px",
                height: "429px",
                background: `url(${imageSrc}) center/cover`,
                borderRadius: "28px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                padding: devicePosition === "top" || devicePosition === "bottom" ? "10px 0" : "0"
            }
        });
    const renderTextContent = ()=>/*#__PURE__*/ _jsx("div", {
            className: "text-content",
            style: {
                fontSize: "0.9rem",
                lineHeight: "1.4",
                color: "#ffffff",
                fontWeight: "400"
            },
            children: copy.split(colorPop).map((part, index, array)=>/*#__PURE__*/ _jsxs(React.Fragment, {
                    children: [
                        part,
                        index < array.length - 1 && /*#__PURE__*/ _jsx("span", {
                            className: "highlight",
                            style: {
                                color: "#29a587"
                            },
                            children: colorPop
                        })
                    ]
                }, index))
        });
    const renderTextSection = (isHorizontal = false)=>/*#__PURE__*/ _jsxs("div", {
            className: `text-section${isHorizontal ? "-horizontal" : ""}`,
            style: {
                height: isHorizontal ? "auto" : "131px",
                width: isHorizontal ? "438px" : "auto",
                padding: isHorizontal ? "40px" : "20px",
                display: "flex",
                alignItems: isHorizontal ? "flex-start" : "center",
                flexDirection: isHorizontal ? "column" : "row",
                justifyContent: isHorizontal ? "center" : "flex-start",
                background: "#1d222a",
                gap: isHorizontal ? "20px" : "0"
            },
            children: [
                isHorizontal && title && /*#__PURE__*/ _jsx("h2", {
                    className: "tile-headline",
                    style: {
                        fontSize: "2.125rem",
                        fontWeight: "700",
                        lineHeight: "1.1",
                        letterSpacing: "-0.02em",
                        color: "#ffffff",
                        marginBottom: "0"
                    },
                    children: title.split(colorPop).map((part, index, array)=>/*#__PURE__*/ _jsxs(React.Fragment, {
                            children: [
                                part,
                                index < array.length - 1 && /*#__PURE__*/ _jsx("span", {
                                    className: "highlight",
                                    style: {
                                        color: "#29a587"
                                    },
                                    children: colorPop
                                })
                            ]
                        }, index))
                }),
                renderTextContent()
            ]
        });
    const renderImageSection = (isHorizontal = false)=>/*#__PURE__*/ _jsx("div", {
            className: `image-section${isHorizontal ? "-horizontal" : ""}`,
            style: {
                height: isHorizontal ? "auto" : "450px",
                width: isHorizontal ? "438px" : "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#1d222a",
                padding: isHorizontal ? "20.5px 0 10.5px 0" : devicePosition === "top" || devicePosition === "bottom" ? "20.5px 0 30.5px 0" : "20.5px 0 10.5px 0",
                boxSizing: "border-box"
            },
            children: renderDevice()
        });
    // Horizontal card layout
    if (isHorizontal) {
        return /*#__PURE__*/ _jsx("div", {
            className: "card-horizontal",
            style: {
                width: "876px",
                height: "481px",
                background: "#1d222a",
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                overflow: "hidden",
                display: "flex",
                margin: "0 auto"
            },
            children: devicePosition === "left" ? /*#__PURE__*/ _jsxs(_Fragment, {
                children: [
                    renderImageSection(true),
                    renderTextSection(true)
                ]
            }) : /*#__PURE__*/ _jsxs(_Fragment, {
                children: [
                    renderTextSection(true),
                    renderImageSection(true)
                ]
            })
        });
    }
    // Vertical card layout
    return /*#__PURE__*/ _jsx("div", {
        className: "card",
        style: {
            width: "418px",
            height: "581px",
            background: "#1d222a",
            borderRadius: "20px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            overflow: "hidden"
        },
        children: devicePosition === "top" ? /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                renderImageSection(),
                renderTextSection()
            ]
        }) : /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                renderTextSection(),
                renderImageSection()
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (FullPhoneCards)));


/***/ }),

/***/ 3651:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function PadCards({ title ="The feed that feeds your interests." , copy ="As you read, Apple News gets a better understanding of your interests and suggests relevant stories that you can easily find throughout the app." , colorPop ="The feed that feeds" , deviceType ="right-device" , imageSrc ="/assets/images/ipadexample1.jpg"  }) {
    if (deviceType === "left-device") {
        return /*#__PURE__*/ _jsxs("div", {
            className: "portfolio-grid-item portfolio-ipad-section left-device",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "portfolio-tile-content",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "portfolio-copy-wrapper",
                        children: [
                            /*#__PURE__*/ _jsxs("h2", {
                                className: "portfolio-tile-headline",
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "portfolio-color-pop",
                                        children: colorPop
                                    }),
                                    " ",
                                    title.replace(colorPop, "").trim()
                                ]
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "portfolio-tile-copy",
                                children: copy
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "portfolio-ipad-wrapper",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "portfolio-ipad-mockup",
                        children: /*#__PURE__*/ _jsx("img", {
                            src: imageSrc,
                            alt: title,
                            style: {
                                width: "280px",
                                height: "auto",
                                borderRadius: "0px"
                            }
                        })
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ _jsx("div", {
        className: "portfolio-grid-item portfolio-ipad-section right-device",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "portfolio-tile-content",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "portfolio-copy-wrapper",
                    children: [
                        /*#__PURE__*/ _jsxs("h2", {
                            className: "portfolio-tile-headline",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: "portfolio-color-pop",
                                    children: colorPop
                                }),
                                " ",
                                title.replace(colorPop, "").trim()
                            ]
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: "portfolio-tile-copy",
                            children: copy
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "portfolio-ipad-wrapper",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "portfolio-ipad-mockup",
                        children: /*#__PURE__*/ _jsx("img", {
                            src: imageSrc,
                            alt: title,
                            style: {
                                width: "280px",
                                height: "auto",
                                borderRadius: "0px"
                            }
                        })
                    })
                })
            ]
        })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PadCards)));


/***/ })

};
;