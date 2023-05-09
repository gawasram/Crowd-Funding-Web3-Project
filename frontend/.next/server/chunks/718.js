"use strict";
exports.id = 718;
exports.ids = [718];
exports.modules = {

/***/ 4718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(0);
// EXTERNAL MODULE: ./node_modules/next/dist/client/link.js
var client_link = __webpack_require__(8418);
;// CONCATENATED MODULE: ./src/layouts/Footer.js


const Footer = ({ footerSolidBg  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: `site-footer ${footerSolidBg ? "" : "with-footer-cta with-footer-bg"}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "footer-content-area",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "footer-widgets",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-3 col-lg-4 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "widget about-widget",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "footer-logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/img/moralis-logo.png",
                                                    alt: "Funden"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Sed ut perspiciatis unde omn iste natus error sit voluptatem"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "newsletter-form",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: "form-title",
                                                        children: "Join Newsletters"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                        onSubmit: (e)=>e.preventDefault()
                                                        ,
                                                        action: "#",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "text",
                                                                placeholder: "Email Address"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                type: "submit",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-arrow-right"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-2 col-md-5 col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "widget nav-widget",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "widget-title",
                                                children: "Our Projects"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                            href: "/project-1",
                                                            children: "Medical & Health"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                            href: "/project-2",
                                                            children: "Educations"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                            href: "/project-1",
                                                            children: "Technology"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                            href: "/project-3",
                                                            children: "Web Development"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                            href: "/project-2",
                                                            children: "Food & Clothes"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                            href: "/project-1",
                                                            children: "Video & Movies"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-2 col-md-6 col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "widget nav-widget",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "widget-title",
                                                children: "Support"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                            href: "/about",
                                                            children: "Privacy Policy"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                            href: "/contact",
                                                            children: "Conditions"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                            href: "/company-overview",
                                                            children: "Company"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                            href: "/faq",
                                                            children: "Faq & Terms"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                            href: "/contact",
                                                            children: "Contact Us"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-auto col-md-5 col-sm-8",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "widget contact-widget",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "widget-title",
                                                children: "Contact Us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "info-list",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-phone"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                className: "info",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "info-title",
                                                                        children: "Phone Number"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: "+012(345) 78 93"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-envelope-open"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                className: "info",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "info-title",
                                                                        children: "Email Address"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: "support@gmail.com"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-map-marker-alt"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                className: "info",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "info-title",
                                                                        children: "Locations"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: "59 Main Street, USA"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "copyright-area",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row flex-md-row-reverse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "social-icons",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-youtube"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-behance"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-google-plus-g"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "copyright-text",
                                        children: [
                                            "\xa9 ",
                                            new Date().getFullYear(),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "Moralis"
                                            }),
                                            ". All Rights Reserved"
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const layouts_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/layouts/menus.js



const Home = /*#__PURE__*/ jsx_runtime_.jsx("li", {
    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: "Home"
    })
}), Project = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [
        /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/project-2",
                children: "Projects"
            })
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/project-details",
                children: "Project Details"
            })
        })
    ]
}), News = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [
        /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/news-standard",
                children: "News Standard"
            })
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/news-details",
                children: "News Details"
            })
        })
    ]
}), Pages = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [
        /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/about",
                children: "About"
            })
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/company-overview",
                children: "Company Overview"
            })
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/team-member",
                children: "Team Member"
            })
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/pricing",
                children: "Pricing"
            })
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/testimonial",
                children: "Testimonial"
            })
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/faq",
                children: "FAQ"
            })
        })
    ]
});


;// CONCATENATED MODULE: ./src/layouts/Header.js





const Header = ({ transparentTop , transparentHeader , topSecondaryBg , isConnected , account , signer , connectToMetamask ,  })=>{
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", utils/* stickyNav */.h4);
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: `site-header sticky-header d-none d-lg-block ${transparentTop ? "topbar-transparent" : ""} ${transparentHeader ? "transparent-header" : ""}`,
        id: "header-sticky",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `header-topbar d-none d-sm-block ${topSecondaryBg ? "topbar-secondary-bg" : ""}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-wrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "navbar-inner",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "site-logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                    href: "moralis.io",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/img/moralis-logo.png",
                                            alt: "Moralis"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-menu",
                                id: "menu",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "#",
                                                    children: [
                                                        "Home",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "dd-trigger",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-angle-down"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "submenu",
                                                    children: Home
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "#",
                                                    children: [
                                                        "Project",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "dd-trigger",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-angle-down"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "submenu",
                                                    children: Project
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "/events",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Events"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "/contact",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "navbar-extra d-flex align-items-center",
                                children: [
                                    !isConnected ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: connectToMetamask,
                                        className: "main-btn nav-btn d-none d-sm-inline-block",
                                        children: "Connect Wallet"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        disabled: true,
                                        className: "nav-btn d-sm-inline-block",
                                        children: "Connected"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        className: "nav-toggler",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const layouts_Header = (Header);

;// CONCATENATED MODULE: ./src/layouts/MobileHeader.js




const MobileHeader = ({ transparentTop , transparentHeader , topSecondaryBg ,  })=>{
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(false);
    const { 0: activeToggle , 1: setActiveToggle  } = (0,external_react_.useState)("");
    const setActive = (value)=>setActiveToggle(value === activeToggle ? "" : value)
    , activeLi = (value)=>value === activeToggle ? {
            display: "block"
        } : {
            display: "none"
        }
    , activeArrow = (value)=>value === activeToggle ? "submenu-opened" : ""
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: `site-header sticky-header  d-lg-none ${transparentTop ? "topbar-transparent" : ""} ${transparentHeader ? "transparent-header" : ""}`,
        id: "header-sticky",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `header-topbar d-none d-sm-block ${topSecondaryBg ? "topbar-secondary-bg" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row justify-content-between align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "contact-info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "far fa-envelope"
                                                    }),
                                                    " support@gmail.com"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "far fa-map-marker-alt"
                                                    }),
                                                    " 250 Main Street, 2nd Floor, USA"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-auto d-none d-md-block",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "social-icons",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-youtube"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-behance"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-google-plus-g"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-wrapper breakpoint-on",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "navbar-inner",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "site-logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/img/logo.png",
                                            alt: "Funden"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "navbar-extra d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                        href: "/events",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "main-btn nav-btn d-none d-sm-inline-block",
                                            children: [
                                                "Donate Now ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-arrow-right"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        className: `nav-toggler ${toggle ? "panel-opened" : ""}`,
                                        onClick: ()=>setToggle(!toggle)
                                        ,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `mobile-menu-panel ${toggle ? "panel-opened" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "panel-logo",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/img/logo-white.png",
                                    alt: "Funden"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "panel-menu",
                        id: "menu",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "#",
                                        children: [
                                            "Home",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `dd-trigger ${activeArrow("home")}`,
                                                onClick: ()=>setActive("home")
                                                ,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-angle-down"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "submenu",
                                        style: activeLi("home"),
                                        children: Home
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "#",
                                        children: [
                                            "Project",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `dd-trigger ${activeArrow("Project")}`,
                                                onClick: ()=>setActive("Project")
                                                ,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-angle-down"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "submenu",
                                        style: activeLi("Project"),
                                        children: Project
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                    href: "/events",
                                    children: "Events"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "#",
                                        children: [
                                            "News",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `dd-trigger ${activeArrow("News")}`,
                                                onClick: ()=>setActive("News")
                                                ,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-angle-down"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "submenu",
                                        style: activeLi("News"),
                                        children: News
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "#",
                                        children: [
                                            "Pages",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `dd-trigger ${activeArrow("Pages")}`,
                                                onClick: ()=>setActive("Pages")
                                                ,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-angle-down"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "submenu",
                                        style: activeLi("Pages"),
                                        children: Pages
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                    href: "/contact",
                                    children: "Contact"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "panel-extra",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "#",
                            className: "main-btn btn-white",
                            children: [
                                "Donate Now ",
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "far fa-arrow-right"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        className: "panel-close",
                        onClick: ()=>setToggle(false)
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fal fa-times"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const layouts_MobileHeader = (MobileHeader);

// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/web3/useConnectWallet.js



function useMetamaskState() {
    const { 0: isConnected , 1: setIsConnected  } = (0,external_react_.useState)(false);
    const { 0: account , 1: setAccount  } = (0,external_react_.useState)();
    const { 0: signer , 1: setSigner  } = (0,external_react_.useState)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    async function connectToMetamask(event) {
        event.preventDefault();
        try {
            const provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
            const acc = await provider.send("eth_requestAccounts", []);
            const sign = provider.getSigner(acc[0]);
            setIsConnected(true);
            setAccount(acc[0]);
            setSigner(sign);
            dispatch({
                type: "SET_ACCOUNT",
                payload: sign
            });
        } catch (err) {
            console.log(err);
        }
    }
    return {
        isConnected,
        account,
        signer,
        connectToMetamask
    };
}

;// CONCATENATED MODULE: ./src/layouts/Layout.js









const Layout = ({ children , transparentTop , transparentHeader , topSecondaryBg , footerSolidBg ,  })=>{
    const { isConnected , account , signer , connectToMetamask  } = useMetamaskState();
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        (0,utils/* activeNavMenu */._T)(router.pathname);
        (0,utils/* animation */.oQ)();
        (0,utils/* aTagClick */.jd)();
        (0,utils/* dataPoggress */.ed)();
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400&family=Shadows+Into+Light&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Moralis - Crowdfunding"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "assets/img/favicon.ico",
                        type: "img/png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_Header, {
                transparentTop: transparentTop,
                transparentHeader: transparentHeader,
                topSecondaryBg: topSecondaryBg,
                isConnected: isConnected,
                account: account,
                signer: signer,
                connectToMetamask: connectToMetamask
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_MobileHeader, {
                transparentTop: transparentTop,
                transparentHeader: transparentHeader,
                topSecondaryBg: topSecondaryBg
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_Footer, {
                footerSolidBg: footerSolidBg
            })
        ]
    }));
};
/* harmony default export */ const layouts_Layout = (Layout);


/***/ }),

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "oQ": () => (/* binding */ animation),
/* harmony export */   "jd": () => (/* binding */ aTagClick),
/* harmony export */   "_T": () => (/* binding */ activeNavMenu),
/* harmony export */   "ed": () => (/* binding */ dataPoggress),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "ot": () => (/* binding */ getPagination)
/* harmony export */ });
const stickyNav = ()=>{
    let offset = window.scrollY;
    const stickys = document.querySelectorAll("#header-sticky");
    for(let i = 0; i < stickys.length; i++){
        const sticky = stickys[i];
        if (sticky) {
            if (offset > 60) {
                sticky.classList.add("sticky-on");
            } else {
                sticky.classList.remove("sticky-on");
            }
        }
    }
};
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};
const aTagClick = ()=>{
    const aTag = document.querySelectorAll("[href='#']");
    for(let i = 0; i < aTag.length; i++){
        const a = aTag[i];
        a.addEventListener("click", (e)=>{
            e.preventDefault();
        });
    }
};
const activeNavMenu = (path)=>{
    const navItem = document.querySelectorAll("#menu li a");
    navItem.forEach((nav)=>{
        if (nav.pathname === path) {
            if (!nav.href.includes("#")) {
                if (nav.pathname === "/events" || nav.pathname === "/contact") {
                    nav.parentElement.className = "current";
                } else {
                    nav.parentElement.parentElement.parentElement.className = "current";
                }
            }
        }
    });
};
const dataPoggress = ()=>{
    const bars = document.querySelectorAll(".stats-bar");
    bars.forEach((bar)=>{
        const value = bar.getAttribute("data-value");
        const barLines = bar.getElementsByClassName("bar-line");
        barLines[0].style.width = `${value}%`;
    });
};
const pagination = (listClass, sort, active)=>{
    let list = document.querySelectorAll(listClass);
    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        }
    }
};
const getPagination = (totalNumber, sort)=>{
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx)=>idx + 1
    );
    return arr;
};


/***/ })

};
;