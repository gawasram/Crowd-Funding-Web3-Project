"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/layouts/Preloader.js

const Preloader = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "preloader",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "loading-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "loading-center-absolute",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "object",
                        id: "object_one"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "object",
                        id: "object_two"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "object",
                        id: "object_three"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "object",
                        id: "object_four"
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const layouts_Preloader = (Preloader);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: ./src/store/types.js
const SET_ACCOUNT = "SET_ACCOUNT";

;// CONCATENATED MODULE: ./src/store/reducers.js


const initialState = {
    signer: null
};
const accountReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_ACCOUNT:
            return {
                ...state,
                signer: action.payload
            };
    }
};
const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    account: accountReducer
});
/* harmony default export */ const reducers = (accountReducer);

;// CONCATENATED MODULE: ./src/store/index.js


const store = (0,external_redux_namespaceObject.createStore)(reducers);
/* harmony default export */ const src_store = (store);

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    const { 0: preloader , 1: setPreloader  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setPreloader(false);
        }, 1000);
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: src_store,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
            children: [
                preloader && /*#__PURE__*/ jsx_runtime_.jsx(layouts_Preloader, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6942));
module.exports = __webpack_exports__;

})();