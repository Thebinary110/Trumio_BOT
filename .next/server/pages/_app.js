"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 16:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./Context/index.js + 3 modules
var Context = __webpack_require__(91);
;// CONCATENATED MODULE: ./pages/_app.js




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "icon",
                    href: "assets/images/favicon.png"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Context/* StateContextProvider */.j, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "assets/js/bootstrap.bundle.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "assets/js/swiper-bundle.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "assets/js/aos.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "assets/js/custom-aos.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "assets/js/home-animation.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "assets/js/header_sticky.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "assets/js/script.js"
            })
        ]
    });
}


/***/ }),

/***/ 982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 840:
/***/ ((module) => {

module.exports = require("web3modal");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [91], () => (__webpack_exec__(16)));
module.exports = __webpack_exports__;

})();