(function() {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 2699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(463);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8639);
/* harmony import */ var _db_offlineData_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3752);









function Home({
  data
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    id
  } = data;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_page__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Quantum E-commerce - Products",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
      className: "jsx-1503509592",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-1503509592" + " " + "product-img-box",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: _db_offlineData_products__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z[id].img_url,
          className: "jsx-1503509592" + " " + "product-img"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "jsx-1503509592" + " " + "product-name",
        children: _db_offlineData_products__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z[id].name
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        className: "jsx-1503509592" + " " + "product-description",
        children: _db_offlineData_products__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z[id].description
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-1503509592" + " " + "rating",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_star_ratings__WEBPACK_IMPORTED_MODULE_3___default()), {
          rating: parseFloat(_db_offlineData_products__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z[id].rating),
          starRatedColor: "#F9AD3D",
          numberOfStars: 5,
          name: "rating",
          starDimension: "20px",
          starSpacing: "1px"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-1503509592" + " " + "price",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          className: "jsx-1503509592" + " " + "price-value",
          children: ["UAN", " ", _db_offlineData_products__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z[id].price]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "1503509592",
        children: ["article.jsx-1503509592{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;height:100%;width:100%;padding:24px;background:white;box-shadow:0px 2px 5px rgba(0,0,0,0.05);border-radius:6px;}", ".top-buttons.jsx-1503509592{margin-bottom:24px;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}", ".top-buttons.jsx-1503509592 .add-wishlist.jsx-1503509592{background:none;border:none;}", ".top-buttons.jsx-1503509592 .add-wishlist.jsx-1503509592:focus{outline:none;}", ".product-img-box.jsx-1503509592{margin-bottom:28px;}", ".product-img.jsx-1503509592{width:320px;height:230px;object-fit:contain;}", ".product-name.jsx-1503509592{width:80%;line-height:20px;-webkit-text-decoration:none;text-decoration:none;font-weight:500;font-size:22px;text-align:center;color:#666666;margin-bottom:28px;}", ".product-description.jsx-1503509592{width:40%;line-height:22px;-webkit-text-decoration:none;text-decoration:none;font-weight:400;font-size:14px;text-align:center;color:#666666;margin-bottom:24px;}", ".rating.jsx-1503509592{margin-bottom:18px;}", ".price.jsx-1503509592{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:900;font-size:20px;color:#666666;margin-bottom:20px;}", ".price.jsx-1503509592 .add-cart.jsx-1503509592{background:none;border:none;margin-left:5px;}", ".price.jsx-1503509592 .add-cart.jsx-1503509592:focus{outline:none;}", "@media (max-width:1000px){.product-img.jsx-1503509592{width:225px;height:180px;margin-bottom:28px;}.product-name.jsx-1503509592{width:80%;line-height:20px;-webkit-text-decoration:none;text-decoration:none;font-weight:500;font-size:18px;text-align:center;color:#666666;margin-bottom:18px;}.product-description.jsx-1503509592{width:80%;line-height:22px;-webkit-text-decoration:none;text-decoration:none;font-weight:400;font-size:14px;text-align:center;color:#666666;margin-bottom:18px;}}"]
      })]
    })
  });
}

Home.getInitialProps = async function ({
  query
}) {
  let data = {};
  let error = {};
  data = {
    id: query.id
  };
  return {
    data
  };
};

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 463:
/***/ (function(module) {

"use strict";
module.exports = require("react-star-ratings");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [445,631], function() { return __webpack_exec__(2699); });
module.exports = __webpack_exports__;

})();