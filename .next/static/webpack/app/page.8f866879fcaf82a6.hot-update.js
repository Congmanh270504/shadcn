"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/style.css":
/*!**********************************!*\
  !*** ./src/components/style.css ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"151a58ecb56b\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3N0eWxlLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3R5bGUuY3NzP2E0NzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIxNTFhNThlY2I1NmJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/style.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/LoginForm.jsx":
/*!**************************************!*\
  !*** ./src/components/LoginForm.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoginForm: function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FcGoogle_react_icons_fc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=FcGoogle!=!react-icons/fc */ \"(app-pages-browser)/./node_modules/react-icons/fc/index.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ \"(app-pages-browser)/./src/css/style.css\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./src/components/ui/label.tsx\");\n/* harmony import */ var _barrel_optimize_names_FaEyeSlash_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FaEyeSlash!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction LoginForm() {\n    _s();\n    const [showEyes, setShowEyes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [type, setTypeInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"password\");\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\",\n        rememberMe: true,\n        img: \"\"\n    });\n    const handleLogin = async ()=>{\n        if (user.email === \"\" || user.password === \"\") {\n            alert(\"Please fill in all fields\");\n            return;\n        }\n        let response = await fetch(\"https://api.example.com/login\");\n        if (response && response.ok) {\n            let data = await response.json();\n            if (data) {\n                localStorage.setItem(\"user\", JSON.stringify(data));\n                setUser(data);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n        className: \"mx-auto max-w-sm h-2/4 absolute top-2/4 left-2/4 -ml-2/4 -translate-x-1/2 -translate-y-1/2 w-3/4 flex flex-col justify-center gap-3 md:h-3/4 lg:gap-20      \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, {\n                        className: \"text-2xl text-center\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardDescription, {\n                        children: \"Enter your email below to login to your account\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardContent, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__.Label, {\n                                        htmlFor: \"email\",\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                        id: \"email\",\n                                        type: \"email\",\n                                        placeholder: \"m@example.com\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__.Label, {\n                                                htmlFor: \"password\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                                                href: \"#\",\n                                                className: \"ml-auto inline-block text-sm hover-underline-animation\",\n                                                children: \"Forgot your password?\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-between items-center border border-solid rounded-md p-0.5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"password\",\n                                                className: \"flex h-10 w-full border-input bg-background px-3 py-2 text-sm outline-none border-none\",\n                                                type: type,\n                                                onChange: (e)=>{\n                                                    e.target.value === \"\" ? setShowEyes(false) : setShowEyes(true);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 29\n                                            }, this),\n                                            showEyes && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaEyeSlash_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaEyeSlash, {\n                                                className: \"mx-3 wobble-hor-bottom cursor-pointer\",\n                                                onClick: (e)=>{\n                                                    type === \"password\" ? setTypeInput(\"text\") : setTypeInput(\"password\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 42\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                className: \"w-full\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"outline\",\n                                className: \"w-full\",\n                                children: [\n                                    \"Login with Google \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FcGoogle_react_icons_fc__WEBPACK_IMPORTED_MODULE_9__.FcGoogle, {\n                                        className: \"ml-1\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 43\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 text-center text-sm\",\n                        children: [\n                            \"Don't have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                                to: \"/register\",\n                                className: \"hover-underline-animation\",\n                                children: \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginForm, \"fbOfXF2U60p84K3jCemXWcas59A=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDTjtBQUNUO0FBQ0s7QUFDdEI7QUFPSTtBQUNnQjtBQUNBO0FBQ0Q7QUFDckMsU0FBU2dCOztJQUNaLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNlLE1BQU1DLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3RDLE1BQU0sQ0FBQ2lCLE1BQU1DLFFBQVEsR0FBR2xCLCtDQUFRQSxDQUFDO1FBQzdCbUIsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsS0FBSztJQUNUO0lBQ0EsTUFBTUMsY0FBYztRQUNoQixJQUFJTixLQUFLRSxLQUFLLEtBQUssTUFBTUYsS0FBS0csUUFBUSxLQUFLLElBQUk7WUFDM0NJLE1BQU07WUFDTjtRQUNKO1FBQ0EsSUFBSUMsV0FBVyxNQUFNQyxNQUFNO1FBQzNCLElBQUdELFlBQVlBLFNBQVNFLEVBQUUsRUFBQztZQUN2QixJQUFJQyxPQUFPLE1BQU1ILFNBQVNJLElBQUk7WUFDOUIsSUFBR0QsTUFBSztnQkFDSkUsYUFBYUMsT0FBTyxDQUFDLFFBQVFDLEtBQUtDLFNBQVMsQ0FBQ0w7Z0JBQzVDVixRQUFRVTtZQUNaO1FBQ0o7SUFDSjtJQUNBLHFCQUNJLDhEQUFDeEIscURBQUlBO1FBQUM4QixXQUFVOzswQkFHWiw4REFBQzNCLDJEQUFVQTs7a0NBQ1AsOERBQUNDLDBEQUFTQTt3QkFBQzBCLFdBQVU7a0NBQXVCOzs7Ozs7a0NBQzVDLDhEQUFDNUIsZ0VBQWVBO2tDQUFDOzs7Ozs7Ozs7Ozs7MEJBSXJCLDhEQUFDRCw0REFBV0E7O2tDQUNSLDhEQUFDOEI7d0JBQUlELFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ1gsOERBQUN4Qix1REFBS0E7d0NBQUMwQixTQUFRO2tEQUFROzs7Ozs7a0RBQ3ZCLDhEQUFDM0IsdURBQUtBO3dDQUNGNEIsSUFBRzt3Q0FDSHRCLE1BQUs7d0NBQ0x1QixhQUFZO3dDQUNaQyxRQUFROzs7Ozs7Ozs7Ozs7MENBR2hCLDhEQUFDSjtnQ0FBSUQsV0FBVTs7a0RBQ1gsOERBQUNDO3dDQUFJRCxXQUFVOzswREFDWCw4REFBQ3hCLHVEQUFLQTtnREFBQzBCLFNBQVE7MERBQVc7Ozs7OzswREFDMUIsOERBQUN2QyxrREFBSUE7Z0RBQUMyQyxNQUFLO2dEQUFJTixXQUFVOzBEQUF5RDs7Ozs7Ozs7Ozs7O2tEQUl0Riw4REFBQ0M7d0NBQUlELFdBQVU7OzBEQUNYLDhEQUFDTztnREFBTUosSUFBRztnREFBV0gsV0FBVTtnREFBeUZuQixNQUFNQTtnREFBTTJCLFVBQVUsQ0FBQ0M7b0RBQzNJQSxFQUFFQyxNQUFNLENBQUNDLEtBQUssS0FBSyxLQUFLL0IsWUFBWSxTQUFTQSxZQUFZO2dEQUU3RDs7Ozs7OzRDQUNDRCwwQkFBWSw4REFBQ0Ysd0ZBQVVBO2dEQUFDdUIsV0FBVTtnREFBd0NZLFNBQVMsQ0FBQ0g7b0RBQ2pGNUIsU0FBUyxhQUFhQyxhQUFhLFVBQVVBLGFBQWE7Z0RBQzlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR1IsOERBQUNiLHlEQUFNQTtnQ0FBQ1ksTUFBSztnQ0FBU21CLFdBQVU7MENBQVM7Ozs7OzswQ0FHekMsOERBQUMvQix5REFBTUE7Z0NBQUM0QyxTQUFRO2dDQUFVYixXQUFVOztvQ0FBUztrREFDdkIsOERBQUNoQyxvRkFBUUE7d0NBQUNnQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzlDLDhEQUFDQzt3QkFBSUQsV0FBVTs7NEJBQTJCOzRCQUNWOzBDQUM1Qiw4REFBQ3JDLGtEQUFJQTtnQ0FBQ21ELElBQUc7Z0NBQVlkLFdBQVU7MENBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0U7R0E3RWdCdEI7S0FBQUE7QUE4RWhCLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qc3g/ZWUzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRsZXQsIExpbmssIE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGY0dvb2dsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mY1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXHJcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIlxyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIENhcmRDb250ZW50LFxyXG4gICAgQ2FyZERlc2NyaXB0aW9uLFxyXG4gICAgQ2FyZEhlYWRlcixcclxuICAgIENhcmRUaXRsZSxcclxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIlxyXG5pbXBvcnQgeyBGYUV5ZVNsYXNoIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkZvcm0oKSB7XHJcbiAgICBjb25zdCBbc2hvd0V5ZXMsIHNldFNob3dFeWVzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVJbnB1dF0gPSB1c2VTdGF0ZShcInBhc3N3b3JkXCIpXHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgcmVtZW1iZXJNZTogdHJ1ZSxcclxuICAgICAgICBpbWc6IFwiXCJcclxuICAgIH0pXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAodXNlci5lbWFpbCA9PT0gXCJcIiB8fCB1c2VyLnBhc3N3b3JkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgaW4gYWxsIGZpZWxkc1wiKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5leGFtcGxlLmNvbS9sb2dpblwiKVxyXG4gICAgICAgIGlmKHJlc3BvbnNlICYmIHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKGRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctc20gaC0yLzQgYWJzb2x1dGUgdG9wLTIvNCBsZWZ0LTIvNCAtbWwtMi80IC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTMvNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGdhcC0zIG1kOmgtMy80IGxnOmdhcC0yMFxyXG4gICAgICAgIFxyXG4gICAgICAgIFwiPlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1jZW50ZXJcIj5Mb2dpbjwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICBFbnRlciB5b3VyIGVtYWlsIGJlbG93IHRvIGxvZ2luIHRvIHlvdXIgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJtQGV4YW1wbGUuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm1sLWF1dG8gaW5saW5lLWJsb2NrIHRleHQtc20gaG92ZXItdW5kZXJsaW5lLWFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcmdvdCB5b3VyIHBhc3N3b3JkP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYm9yZGVyIGJvcmRlci1zb2xpZCByb3VuZGVkLW1kIHAtMC41XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZsZXggaC0xMCB3LWZ1bGwgYm9yZGVyLWlucHV0IGJnLWJhY2tncm91bmQgcHgtMyBweS0yIHRleHQtc20gb3V0bGluZS1ub25lIGJvcmRlci1ub25lXCIgdHlwZT17dHlwZX0gb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgPyBzZXRTaG93RXllcyhmYWxzZSkgOiBzZXRTaG93RXllcyh0cnVlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0V5ZXMgJiYgPEZhRXllU2xhc2ggY2xhc3NOYW1lPVwibXgtMyB3b2JibGUtaG9yLWJvdHRvbSBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gXCJwYXNzd29yZFwiID8gc2V0VHlwZUlucHV0KFwidGV4dFwiKSA6IHNldFR5cGVJbnB1dChcInBhc3N3b3JkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiB3aXRoIEdvb2dsZSA8RmNHb29nbGUgY2xhc3NOYW1lPVwibWwtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWNlbnRlciB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRG9uJmFwb3M7dCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwiaG92ZXItdW5kZXJsaW5lLWFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaWduIHVwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybSJdLCJuYW1lcyI6WyJPdXRsZXQiLCJMaW5rIiwiTmF2TGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGY0dvb2dsZSIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJJbnB1dCIsIkxhYmVsIiwiRmFFeWVTbGFzaCIsIkxvZ2luRm9ybSIsInNob3dFeWVzIiwic2V0U2hvd0V5ZXMiLCJ0eXBlIiwic2V0VHlwZUlucHV0IiwidXNlciIsInNldFVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVtZW1iZXJNZSIsImltZyIsImhhbmRsZUxvZ2luIiwiYWxlcnQiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJkYXRhIiwianNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY2xhc3NOYW1lIiwiZGl2IiwiaHRtbEZvciIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImhyZWYiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DbGljayIsInZhcmlhbnQiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LoginForm.jsx\n"));

/***/ })

});