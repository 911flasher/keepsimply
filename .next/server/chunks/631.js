exports.id = 631;
exports.ids = [631];
exports.modules = {

/***/ 8639:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/page-container.js




function PageContainer({
  title,
  description,
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-3978108406" + " " + "container",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        className: "jsx-3978108406",
        children: title || 'Quantum  E-commerce - Next Project'
      }), description !== false && /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: description || 'Quantum E-commerce made with Next.js open-source project.',
        className: "jsx-3978108406"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: "jsx-3978108406"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "jsx-3978108406",
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3978108406",
      children: ["main.jsx-3978108406{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fafafa;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:Roboto;}"]
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/logo.js





function Logo() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "jsx-2015601700" + " " + "logo",
        children: "Quantum"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2015601700",
      children: [".logo.jsx-2015601700{font-style:normal;font-weight:900;font-size:22px;line-height:60px;-webkit-letter-spacing:1.65px;-moz-letter-spacing:1.65px;-ms-letter-spacing:1.65px;letter-spacing:1.65px;text-transform:uppercase;color:#4d4d4d;-webkit-text-decoration:none;text-decoration:none;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/header/open-drawer-button.js



function ToggleDrawerButton({
  openDrawer
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
    onClick: openDrawer,
    className: "jsx-1464863316",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-1464863316" + " " + "button-line"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-1464863316" + " " + "button-line"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-1464863316" + " " + "button-line"
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "1464863316",
      children: ["button.jsx-1464863316{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:20px;width:26px;background:transparent;border:none;cursor:pointer;padding:0;box-sizing:border-box;margin-right:16px;}", "button.jsx-1464863316:focus{outline:none;}", "button.jsx-1464863316 .button-line.jsx-1464863316{width:100%;height:3px;border-radius:2px;background:#4d4d4d;}"]
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(9583);
;// CONCATENATED MODULE: ./components/search-box.js





function SearchBox() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-2678358471" + " " + "search-box",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "jsx-2678358471" + " " + "search-button",
        children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaSearch */.U41, {
          color: "#D8D8D8",
          size: "15px"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        id: "search",
        type: "text",
        name: "search",
        placeholder: "Search goods",
        className: "jsx-2678358471"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2678358471",
      children: [".search-box.jsx-2678358471{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:12px;padding-right:12px;height:42px;background:#ffffff;border:2px solid #f5f5f5;box-sizing:border-box;border-radius:4px;}", ".search-box.jsx-2678358471 .search-button.jsx-2678358471{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:none;border:none;height:100%;}", ".search-box.jsx-2678358471 .search-button.jsx-2678358471:focus{outline:none;}", ".search-box.jsx-2678358471 .search-button.jsx-2678358471:hover{opacity:40%;}", ".search-box.jsx-2678358471 input.jsx-2678358471{width:75%;height:100%;border:none;padding-left:8px;}", ".search-box.jsx-2678358471 input.jsx-2678358471:focus{outline:none;}", ".search-box.jsx-2678358471 select.jsx-2678358471{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;max-width:120px;height:100%;text-transform:uppercase;font-style:normal;font-weight:900;font-size:10px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;color:#b2b2b2;border:none;background:none;}", ".search-box.jsx-2678358471 select.jsx-2678358471:focus{outline:none;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/header/side-drawer.js





function SideDrawer({
  closeDrawer
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "side-drawer",
    className: "jsx-1925940229" + " " + `side-drawer hide`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: closeDrawer,
      className: "jsx-1925940229" + " " + "close-drawer",
      children: "X"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-1925940229" + " " + "search",
      children: /*#__PURE__*/jsx_runtime_.jsx(SearchBox, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "jsx-1925940229" + " " + "items",
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        id: "home",
        className: "jsx-1925940229" + " " + "item",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/cart",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-1925940229",
            children: "Items"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        id: "about",
        className: "jsx-1925940229" + " " + "item",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/wishlist",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-1925940229",
            children: "Wishlist"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        id: "contact",
        className: "jsx-1925940229" + " " + "item",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/user/login",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-1925940229",
            children: "Sign In"
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "1925940229",
      children: [".side-drawer.jsx-1925940229{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:fixed;z-index:999;top:0;left:0;width:80%;height:100vh;background:#fff;box-shadow:2px 0px 5px rgba(0,0,0,0.5);-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:-webkit-transform 0.3s ease-out;-webkit-transition:transform 0.3s ease-out;transition:transform 0.3s ease-out;}", ".side-drawer.show.jsx-1925940229{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}", ".side-drawer.jsx-1925940229 .search.jsx-1925940229{padding-top:1rem;width:80%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}", ".side-drawer.jsx-1925940229 .items.jsx-1925940229{padding-top:3rem;box-sizing:border-box;width:100%;}", ".side-drawer.jsx-1925940229 .items.jsx-1925940229 .item.jsx-1925940229+.item.jsx-1925940229{margin-top:2rem;padding-top:2rem;border-top:1px solid #6666;}", ".side-drawer.jsx-1925940229 .items.jsx-1925940229 .item.jsx-1925940229 a.jsx-1925940229{padding-left:4rem;color:#4d4d4d;-webkit-text-decoration:none;text-decoration:none;font-weight:500;font-size:1.2rem;-webkit-transition:opacity 0.4s;transition:opacity 0.4s;}", ".side-drawer.jsx-1925940229 .items.jsx-1925940229 .item.jsx-1925940229 a.jsx-1925940229:hover,.side-drawer.jsx-1925940229 .items.jsx-1925940229 .item.jsx-1925940229 a.jsx-1925940229:active{opacity:0.8;}", ".side-drawer.jsx-1925940229 .close-drawer.jsx-1925940229{width:100%;padding:1.2rem 2rem;text-align:right;background:none;border:none;font-size:1.8rem;font-weight:500;color:#4d4d4d;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;}", ".side-drawer.jsx-1925940229 .close-drawer.jsx-1925940229:hover{opacity:0.8;}", ".side-drawer.jsx-1925940229 .close-drawer.jsx-1925940229:focus{outline:none;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/header/header-mobile.js






function HeaderMobile({
  viewer
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-437050787" + " " + "header-mobile",
    children: [/*#__PURE__*/jsx_runtime_.jsx(ToggleDrawerButton, {}), /*#__PURE__*/jsx_runtime_.jsx(SideDrawer, {}), /*#__PURE__*/jsx_runtime_.jsx(Logo, {}), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "437050787",
      children: [".header-mobile.jsx-437050787{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:18px 48px;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/header/header-desktop.js








function HeaderDesktop({
  viewer
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-1520375125" + " " + "header header-top",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Logo, {}), /*#__PURE__*/jsx_runtime_.jsx(SearchBox, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "1520375125",
      children: [".header.jsx-1520375125{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:28px 10vw;}", ".nav-buttons.jsx-1520375125{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".nav-buttons.jsx-1520375125 a.jsx-1520375125{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:32px;font-style:normal;font-weight:500;font-size:14px;-webkit-text-decoration:none;text-decoration:none;color:#808080;}", ".nav-buttons.jsx-1520375125 .items-total.jsx-1520375125{font-size:12px;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}", ".nav-buttons.jsx-1520375125 .nav-buttons-signout.jsx-1520375125{margin-left:12px;}", ".nav-buttons.jsx-1520375125 a.jsx-1520375125:hover{-webkit-text-decoration:underline;text-decoration:underline;}", ".nav-buttons.jsx-1520375125 a.jsx-1520375125 p.jsx-1520375125{margin-left:8px;}", ".header-bottom.jsx-1520375125{padding:0px 10vw;border-top:2px solid #f5f5f5;}", ".header-bottom.jsx-1520375125 .all-categories-box.jsx-1520375125{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-right:2px solid #f5f5f5;padding-top:20px;padding-bottom:20px;padding-right:48px;}", ".header-bottom.jsx-1520375125 .all-categories-box.jsx-1520375125 select.jsx-1520375125{height:100%;padding-left:15px;font-family:Roboto;font-style:normal;font-weight:500;font-size:14px;line-height:60px;color:#808080;border:none;background:none;}", ".header-bottom.jsx-1520375125 .all-categories-box.jsx-1520375125 select.jsx-1520375125:focus{outline:none;}", ".header-bottom.jsx-1520375125 .main-nav.jsx-1520375125{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".header-bottom.jsx-1520375125 .main-nav.jsx-1520375125 a.jsx-1520375125{font-style:normal;font-weight:500;font-size:14px;color:#666666;-webkit-text-decoration:none;text-decoration:none;margin-left:16px;margin-right:16px;}", ".header-bottom.jsx-1520375125 .main-nav.jsx-1520375125 a.jsx-1520375125:hover{-webkit-text-decoration:underline;text-decoration:underline;}", ".header-bottom.jsx-1520375125 .settings.jsx-1520375125{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".header-bottom.jsx-1520375125 .settings.jsx-1520375125 .menu-dropdown.jsx-1520375125{border-left:2px solid #f5f5f5;padding:20px 24px;}", ".header-bottom.jsx-1520375125 .settings.jsx-1520375125 .menu-dropdown.jsx-1520375125 p.jsx-1520375125{font-style:normal;font-weight:500;font-size:14px;color:#b3b3b3;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/header/index.js





function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "jsx-3830393378",
    children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
      id: "mobile",
      className: "jsx-3830393378",
      children: /*#__PURE__*/jsx_runtime_.jsx(HeaderMobile, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
      id: "desktop",
      className: "jsx-3830393378",
      children: /*#__PURE__*/jsx_runtime_.jsx(HeaderDesktop, {})
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3830393378",
      children: ["header.jsx-3830393378{width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:30px;background-color:#ffffff;box-shadow:0px 2px 5px rgba(0,0,0,0.05);}", "#mobile.jsx-3830393378{display:none;z-index:0;}", "@media (max-width:1000px){#mobile.jsx-3830393378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:1;}#desktop.jsx-3830393378{display:none;z-index:0;}}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/footer.js






function Fotter() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: "jsx-4248648268",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-4248648268" + " " + "footer footer-top",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Logo, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-4248648268" + " " + "footer-nav",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-4248648268",
            children: "Shop"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-4248648268",
            children: "Journal"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-4248648268",
            children: "About"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-4248648268",
            children: "Contacts"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-4248648268" + " " + "social-links",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-4248648268",
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaFacebookF */.tBk, {
              color: "#d8d8d8",
              size: "18px"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-4248648268",
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaTwitter */.fWC, {
              color: "#d8d8d8",
              size: "18px"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-4248648268",
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaInstagram */.Zf_, {
              color: "#d8d8d8",
              size: "18px"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "jsx-4248648268",
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaYoutube */.V2E, {
              color: "#d8d8d8",
              size: "18px"
            })
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-4248648268" + " " + "footer footer-bottom",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-4248648268" + " " + "texts",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "jsx-4248648268",
          children: "\xA9 2016. Quantum UI kit"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "jsx-4248648268",
          children: "Privacy Policy"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "jsx-4248648268",
          children: "Terms of Use"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-4248648268" + " " + "payment-info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "jsx-4248648268" + " " + "text",
          children: "Accepted payment methods"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-4248648268" + " " + "payment-methods",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-4248648268",
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaCcVisa */.Z7w, {
              color: "#424242",
              size: "32px"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-4248648268",
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaCcMastercard */.leg, {
              color: "#424242",
              size: "32px"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-4248648268",
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaCcPaypal */.muo, {
              color: "#424242",
              size: "32px"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-4248648268",
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaCcAmazonPay */.dvX, {
              color: "#424242",
              size: "32px"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "4248648268",
      children: ["footer.jsx-4248648268{width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:30px;background-color:#ffffff;box-shadow:0px -2px 5px rgba(0,0,0,0.05);box-shadow:0px 2px 5px rgba(0,0,0,0.05);overflow-x:hidden;}", ".footer.jsx-4248648268{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:28px 10vw;}", ".footer-top.jsx-4248648268 .footer-nav.jsx-4248648268{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".footer-top.jsx-4248648268 .footer-nav.jsx-4248648268 a.jsx-4248648268{font-style:normal;font-weight:500;font-size:16px;color:#666666;-webkit-text-decoration:none;text-decoration:none;margin-left:18px;margin-right:18px;}", ".footer-top.jsx-4248648268 .footer-nav.jsx-4248648268 a.jsx-4248648268:hover{-webkit-text-decoration:underline;text-decoration:underline;}", ".footer-top.jsx-4248648268 .social-links.jsx-4248648268 a.jsx-4248648268{margin-left:12px;margin-right:12px;}", ".footer-bottom.jsx-4248648268{border-top:2px solid #f5f5f5;}", ".footer-bottom.jsx-4248648268 .texts.jsx-4248648268{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".footer-bottom.jsx-4248648268 .texts.jsx-4248648268 p.jsx-4248648268{font-style:normal;font-weight:500;font-size:14px;line-height:60px;color:#b3b3b3;margin-right:15px;margin-left:15px;}", ".footer-bottom.jsx-4248648268 .payment-info.jsx-4248648268{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".footer-bottom.jsx-4248648268 .payment-info.jsx-4248648268 .text.jsx-4248648268{font-style:normal;font-weight:500;font-size:14px;line-height:60px;color:#b3b3b3;}", ".footer-bottom.jsx-4248648268 .payment-info.jsx-4248648268 .payment-methods.jsx-4248648268{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:12px;}", ".footer-bottom.jsx-4248648268 .payment-info.jsx-4248648268 .payment-methods.jsx-4248648268 div.jsx-4248648268{margin-left:5px;margin-right:5px;}", "@media (max-width:1000px){.footer-top.jsx-4248648268 .footer-nav.jsx-4248648268{display:none;}.footer-bottom.jsx-4248648268{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer-bottom.jsx-4248648268 .texts.jsx-4248648268{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer-bottom.jsx-4248648268 .texts.jsx-4248648268 p.jsx-4248648268{line-height:40px;}.footer-bottom.jsx-4248648268 .payment-info.jsx-4248648268 .text.jsx-4248648268{display:none;}.footer-bottom.jsx-4248648268 .payment-info.jsx-4248648268{margin-top:24px;}}", "@media (max-width:700px){.footer-top.jsx-4248648268{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer-top.jsx-4248648268 .social-links.jsx-4248648268{margin-top:8px;}}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/page.js






function Page({
  title,
  description,
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageContainer, {
    title: title,
    description: description,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3511772139" + " " + "content",
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Fotter, {}), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3511772139",
      children: [".content.jsx-3511772139{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:80%;max-width:1700px;}"]
    })]
  });
}

/***/ }),

/***/ 3752:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const offlineProducts = {
  13: {
    id: 13,
    name: 'Bluetooth Speakers, DOSS SoundBox Plus',
    description: 'Bluetooth Speakers, DOSS SoundBox Plus Portable Wireless Bluetooth Speaker with 16W HD Sound and Deep Bass, Wireless Stereo Pairing, 20H Playtime, Wireless Speaker for Home, Outdoor, Travel - Black',
    img_url: '/products/1.jpg',
    price: 39.99,
    rating: 3.7,
    created_at: Date.now(),
    updated_at: Date.now(),
    user_id: 1,
    categories: "speaker"
  },
  1: {
    id: 1,
    name: 'Bluetooth Speakers, DOSS SoundBox Plus',
    description: 'Bluetooth Speakers, DOSS SoundBox Plus Portable Wireless Bluetooth Speaker with 16W HD Sound and Deep Bass, Wireless Stereo Pairing, 20H Playtime, Wireless Speaker for Home, Outdoor, Travel - Black',
    img_url: '/products/1.jpg',
    price: 39.99,
    rating: 3.7,
    created_at: Date.now(),
    updated_at: Date.now(),
    user_id: 1,
    categories: "speaker"
  },
  24: {
    id: 24,
    name: 'Bluetooth Speakers, DOSS SoundBox Plus',
    description: 'Bluetooth Speakers, DOSS SoundBox Plus Portable Wireless Bluetooth Speaker with 16W HD Sound and Deep Bass, Wireless Stereo Pairing, 20H Playtime, Wireless Speaker for Home, Outdoor, Travel - Black',
    img_url: '/products/1.jpg',
    price: 39.99,
    rating: 3.7,
    created_at: Date.now(),
    updated_at: Date.now(),
    user_id: 1,
    categories: "speaker"
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (offlineProducts);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;