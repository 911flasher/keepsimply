exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 7345:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ productSection_ProductSection; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var index_esm = __webpack_require__(5434);
;// CONCATENATED MODULE: ./components/categoriesItem.js





const iconSlugs = {
  MdDesktopWindows: index_esm/* MdDesktopWindows */.NjS,
  MdDesktopMac: index_esm/* MdDesktopMac */.nqt,
  MdLaptop: index_esm/* MdLaptop */.Pu,
  MdKeyboard: index_esm/* MdKeyboard */.DOX,
  MdMemory: index_esm/* MdMemory */.DC3,
  MdSpeaker: index_esm/* MdSpeaker */.dhC,
  MdSmartphone: index_esm/* MdSmartphone */.mN_,
  MdTv: index_esm/* MdTv */.uDM,
  MdVideogameAsset: index_esm/* MdVideogameAsset */.ntl,
  MdWatch: index_esm/* MdWatch */.zyy
};
function CategoriesItem({
  category
}) {
  const Icon = iconSlugs[category.md_icon];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: "jsx-1460089856",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/category/${category.name}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: "jsx-1460089856",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-1460089856" + " " + "content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1460089856" + " " + "icon",
            children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
              color: "#D8D8D8",
              size: "22",
              className: "jsx-1460089856"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "jsx-1460089856",
            children: category.label
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1460089856" + " " + "arrow-button",
          children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* MdKeyboardArrowRight */.AeI, {
            color: "#D8D8D8",
            size: "26"
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "1460089856",
      children: ["li.jsx-1460089856 a.jsx-1460089856{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:18px;-webkit-text-decoration:none;text-decoration:none;font-weight:500;font-size:13px;color:#808080;border-bottom:2px solid #f5f5f5;-webkit-transition:0.4s;transition:0.4s;}", "li.jsx-1460089856 a.jsx-1460089856:hover{background:#f2f2f2;}", "li.jsx-1460089856 a.jsx-1460089856 .content.jsx-1460089856{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "li.jsx-1460089856 a.jsx-1460089856 .content.jsx-1460089856 .icon.jsx-1460089856{padding-right:18px;}", "li.jsx-1460089856 a.jsx-1460089856 .arrow-button.jsx-1460089856{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}"]
    })]
  }, category.id);
}
;// CONCATENATED MODULE: ./db/offlineData/categories.js
const offlineCategories = {
  1: {
    id: 1,
    name: 'computers',
    label: 'Computers',
    md_icon: 'MdDesktopWindows',
    created_at: '1603806592003'
  },
  2: {
    id: 2,
    name: 'mac',
    label: 'Apple Computers',
    md_icon: 'MdDesktopMac',
    created_at: '1603806592003'
  },
  3: {
    id: 3,
    name: 'laptop',
    label: 'Laptop',
    md_icon: 'MdLaptop',
    created_at: '1603806592003'
  },
  4: {
    id: 4,
    name: 'keyboard',
    label: 'Keyboards',
    md_icon: 'MdKeyboard',
    created_at: '1603806592003'
  },
  5: {
    id: 5,
    name: 'components',
    label: 'Computer Components',
    md_icon: 'MdMemory',
    created_at: '1603806592003'
  },
  6: {
    id: 6,
    name: 'speaker',
    label: 'Accessories',
    md_icon: 'MdSpeaker',
    created_at: '1603806592003'
  },
  7: {
    id: 7,
    name: 'smartphone',
    label: 'Cell Phone',
    md_icon: 'MdSmartphone',
    created_at: '1603806592003'
  },
  8: {
    id: 8,
    name: 'tv',
    label: 'TV & Video',
    md_icon: 'MdTv',
    created_at: '1603806592003'
  },
  9: {
    id: 9,
    name: 'videogame',
    label: 'Game Console',
    md_icon: 'MdVideogameAsset',
    created_at: '1603806592003'
  },
  10: {
    id: 10,
    name: 'watch',
    label: 'Watch',
    md_icon: 'MdWatch',
    created_at: '1603806592003'
  },
  11: {
    id: 11,
    name: 'watch',
    label: 'Watch',
    md_icon: 'MdWatch',
    created_at: '1603806592003'
  }
};
/* harmony default export */ var categories = (offlineCategories);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3804);
;// CONCATENATED MODULE: ./components/asideCategories.js






function AsideCategories() {
  // Offline data
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
    className: "jsx-2644667921" + " " + "categories",
    children: [(0,external_lodash_.keys)(categories).map(id => {
      return /*#__PURE__*/jsx_runtime_.jsx(CategoriesItem, {
        category: categories[id]
      }, id);
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2644667921",
      children: [".categories.jsx-2644667921{width:255px;max-width:255px;background:#ffff;border-radius:6px;margin-bottom:30px;box-shadow:0px 2px 5px rgba(0,0,0,0.05);}", "@media (max-width:1000px){.categories.jsx-2644667921{display:none;}}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/promoCard.js



function PromoCard() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-2770052271" + " " + "promo-card",
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "jsx-2770052271" + " " + "title",
      children: "Look Up In The Sky"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "jsx-2770052271" + " " + "description",
      children: "Astronomy Or Astrology"
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2770052271",
      children: [".promo-card.jsx-2770052271{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#ffff;border-radius:6px;height:330px;width:255px;max-width:255px;box-shadow:0px 2px 5px rgba(0,0,0,0.05);}", ".promo-card.jsx-2770052271 .title.jsx-2770052271{font-weight:500;font-size:20px;line-height:30px;text-align:center;color:#666666;}", ".promo-card.jsx-2770052271 .description.jsx-2770052271{font-weight:500;font-size:14px;line-height:30px;color:#666666;mix-blend-mode:normal;opacity:0.3;}", "@media (max-width:1000px){.promo-card.jsx-2770052271{display:none;}}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/headerBarProducts.js



function HeaderBarProducts() {
  function handlePopularProductsClick() {
    sortProductSectionVar(['rating', 'DESC']);
  }

  function handleLowPriceProductsClick() {
    sortProductSectionVar(['price', 'ASC']);
  }

  function handleHighPriceProductsClick() {
    sortProductSectionVar(['price', 'DESC']);
  }

  return /*#__PURE__*/_jsxs("div", {
    className: "jsx-4234768375" + " " + "header",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "jsx-4234768375" + " " + "sort-list",
      children: [/*#__PURE__*/_jsx("a", {
        id: "popular-products",
        onClick: handlePopularProductsClick,
        className: "jsx-4234768375" + " " + ((data.sortProductSection[0] === 'rating' && data.sortProductSection[1] === 'DESC' ? 'active' : '') || ""),
        children: "Popular products"
      }), /*#__PURE__*/_jsx("a", {
        id: "low-price",
        onClick: handleLowPriceProductsClick,
        className: "jsx-4234768375" + " " + ((data.sortProductSection[0] === 'price' && data.sortProductSection[1] === 'ASC' ? 'active' : '') || ""),
        children: "Low price"
      }), /*#__PURE__*/_jsx("a", {
        id: "high-price",
        onClick: handleHighPriceProductsClick,
        className: "jsx-4234768375" + " " + ((data.sortProductSection[0] === 'price' && data.sortProductSection[1] === 'DESC' ? 'active' : '') || ""),
        children: "High price"
      })]
    }), /*#__PURE__*/_jsx(_JSXStyle, {
      id: "4234768375",
      children: [".header.jsx-4234768375{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;background:#ffffff;box-shadow:0px 2px 5px rgba(0,0,0,0.05);border-radius:6px;margin-bottom:30px;}", ".header.jsx-4234768375 .sort-list.jsx-4234768375{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".header.jsx-4234768375 .sort-list.jsx-4234768375 a.jsx-4234768375{box-sizing:border-box;margin-left:35px;padding-top:18px;padding-bottom:18px;-webkit-text-decoration:none;text-decoration:none;font-weight:bold;font-size:13px;text-align:center;color:#b3b3b3;}", ".header.jsx-4234768375 .sort-list.jsx-4234768375 a.active.jsx-4234768375{color:#1875f0;border-bottom:2px solid #1875f0;}", ".header.jsx-4234768375 .sort-list.jsx-4234768375 a.jsx-4234768375:hover{cursor:pointer;}", "@media (max-width:850px){.header.jsx-4234768375{width:80vw;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header.jsx-4234768375 .sort-list.jsx-4234768375{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:24px;padding-right:24px;}.header.jsx-4234768375 .sort-list.jsx-4234768375 a.jsx-4234768375{font-size:12px;margin-left:0px;}}"]
    })]
  });
}
// EXTERNAL MODULE: external "react-star-ratings"
var external_react_star_ratings_ = __webpack_require__(463);
var external_react_star_ratings_default = /*#__PURE__*/__webpack_require__.n(external_react_star_ratings_);
;// CONCATENATED MODULE: ./components/productItem.js







function ProductSection({
  id,
  name,
  rating,
  img_url,
  price
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
    className: "jsx-3825901416",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3825901416" + " " + "product-img-box",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/product/${id}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: img_url,
          className: "jsx-3825901416" + " " + "product-img"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/product/${id}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "jsx-3825901416" + " " + "product-name",
        children: name
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3825901416" + " " + "rating",
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_star_ratings_default()), {
        rating: parseFloat(rating),
        starRatedColor: "#F9AD3D",
        numberOfStars: 5,
        name: "rating",
        starDimension: "20px",
        starSpacing: "1px"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3825901416" + " " + "price",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "jsx-3825901416" + " " + "price-value",
        children: ["$", price]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3825901416",
      children: ["article.jsx-3825901416{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;height:100%;padding:24px;background:white;box-shadow:0px 2px 5px rgba(0,0,0,0.05);border-radius:6px;}", ".top-buttons.jsx-3825901416{margin-bottom:24px;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}", ".top-buttons.jsx-3825901416 .add-wishlist.jsx-3825901416{background:none;border:none;}", ".top-buttons.jsx-3825901416 .add-wishlist.jsx-3825901416:focus{outline:none;}", ".product-img-box.jsx-3825901416{margin-bottom:28px;}", ".product-img.jsx-3825901416{width:225px;height:160px;object-fit:contain;}", ".product-name.jsx-3825901416{width:80%;line-height:20px;-webkit-text-decoration:none;text-decoration:none;font-weight:500;font-size:14px;text-align:center;color:#666666;margin-bottom:18px;}", ".product-name.jsx-3825901416:hover{-webkit-text-decoration:underline;text-decoration:underline;font-weight:600;}", ".rating.jsx-3825901416{margin-bottom:24px;}", ".price.jsx-3825901416{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:900;font-size:16px;color:#666666;}", ".price.jsx-3825901416 .add-cart.jsx-3825901416{background:none;border:none;margin-left:5px;}", ".price.jsx-3825901416 .add-cart.jsx-3825901416:focus{outline:none;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/productsGrid.js



function ProductsGrid({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-2386541444" + " " + "products-grid",
    children: [children, /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2386541444",
      children: [".products-grid.jsx-2386541444{display:grid;grid-gap:28px;grid:auto-flow / 1fr 1fr 1fr;}", "@media (min-width:1650px){.products-grid.jsx-2386541444{grid:auto-flow / 1fr 1fr 1fr 1fr;}}", "@media (max-width:1360px){.products-grid.jsx-2386541444{grid:auto-flow / 1fr 1fr;}}", "@media (max-width:700px){.products-grid.jsx-2386541444{grid:auto-flow / 1fr;}}"]
    })]
  });
}
// EXTERNAL MODULE: ./db/offlineData/products.js
var products = __webpack_require__(3752);
;// CONCATENATED MODULE: ./components/products.js






function Products({
  category
}) {
  // Offline data
  console.log(category);
  return /*#__PURE__*/jsx_runtime_.jsx(ProductsGrid, {
    children: (0,external_lodash_.keys)(products/* default */.Z).map(product => category ? category === products/* default */.Z[product].categories ? /*#__PURE__*/jsx_runtime_.jsx(ProductSection, {
      id: products/* default */.Z[product].id,
      name: products/* default */.Z[product].name,
      rating: products/* default */.Z[product].rating,
      img_url: products/* default */.Z[product].img_url,
      price: products/* default */.Z[product].price
    }, products/* default */.Z[product].id) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/jsx_runtime_.jsx(ProductSection, {
      id: products/* default */.Z[product].id,
      name: products/* default */.Z[product].name,
      rating: products/* default */.Z[product].rating,
      img_url: products/* default */.Z[product].img_url,
      price: products/* default */.Z[product].price
    }, products/* default */.Z[product].id))
  }); // if (error) return <EmptySection />;
  // if (!data.products) return <EmptySection />;
}
;// CONCATENATED MODULE: ./components/productSection.js







function productSection_ProductSection({
  category
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    id: "product",
    className: "jsx-3769737877",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
      className: "jsx-3769737877",
      children: [/*#__PURE__*/jsx_runtime_.jsx(AsideCategories, {}), /*#__PURE__*/jsx_runtime_.jsx(PromoCard, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3769737877" + " " + "main",
      children: /*#__PURE__*/jsx_runtime_.jsx(Products, {
        category: category
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3769737877",
      children: ["#product.jsx-3769737877{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;}", "#product.jsx-3769737877 .main.jsx-3769737877{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding-left:30px;}", "@media (max-width:900px){#product.jsx-3769737877 .main.jsx-3769737877{padding-left:0;}}"]
    })]
  });
}

/***/ })

};
;