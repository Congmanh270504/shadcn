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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"42a2498e54a5\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3N0eWxlLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3R5bGUuY3NzP2E0NzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI0MmEyNDk4ZTU0YTVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/style.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/LoginForm.jsx":
/*!**************************************!*\
  !*** ./src/components/LoginForm.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoginForm: function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FcGoogle_react_icons_fc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=FcGoogle!=!react-icons/fc */ \"(app-pages-browser)/./node_modules/react-icons/fc/index.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ \"(app-pages-browser)/./src/css/style.css\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./src/components/ui/label.tsx\");\n/* harmony import */ var _barrel_optimize_names_FaEyeSlash_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FaEyeSlash!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction LoginForm() {\n    _s();\n    const [showEyes, setShowEyes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [type, setTypeInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"password\");\n    const [errorMessages, setErrorMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\",\n        rememberMe: true,\n        img: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setUser((prevUser)=>({\n                ...prevUser,\n                [name]: value\n            }));\n    };\n    const handleLogin = async ()=>{\n        if (user.email === \"\" || user.password === \"\") {\n            setErrorMessages(true);\n            return;\n        }\n        try {\n            let response = await fetch(\"https://api.example.com/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email: user.email,\n                    password: user.password\n                })\n            });\n            if (response.ok) {\n                let data = await response.json();\n                if (data && data.token) {\n                    localStorage.setItem(\"user\", JSON.stringify(data));\n                    setUser(data);\n                } else {\n                    console.error(\"Invalid data received\");\n                }\n            } else {\n                console.error(\"Failed to fetch: \", response.statusText);\n            }\n        } catch (error) {\n            console.error(\"Error during fetch: \", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n        className: \"mx-auto max-w-sm h-2/4 absolute top-2/4 left-2/4 -ml-2/4 -translate-x-1/2 -translate-y-1/2 w-3/4 flex flex-col justify-center gap-3 md:h-3/4 lg:gap-20      \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, {\n                        className: \"text-2xl text-center\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardDescription, {\n                        children: \"Enter your email below to login to your account\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardContent, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__.Label, {\n                                        htmlFor: \"email\",\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                        id: \"email\",\n                                        type: \"email\",\n                                        placeholder: \"m@example.com\",\n                                        value: user.email,\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__.Label, {\n                                                htmlFor: \"password\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                                                href: \"#\",\n                                                className: \"ml-auto inline-block text-sm hover-underline-animation\",\n                                                children: \"Forgot your password?\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-between items-center border border-solid rounded-md p-0.5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"password\",\n                                                className: \"flex h-10 w-full border-input bg-background px-3 py-2 text-sm outline-none border-none\",\n                                                placeholder: \"Password\",\n                                                type: type,\n                                                value: user.email,\n                                                onChange: (e)=>{\n                                                    e.target.value === \"\" ? setShowEyes(false) : setShowEyes(true);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 29\n                                            }, this),\n                                            showEyes && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaEyeSlash_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaEyeSlash, {\n                                                className: \"mx-3 wobble-hor-bottom cursor-pointer\",\n                                                onClick: (e)=>{\n                                                    type === \"password\" ? setTypeInput(\"text\") : setTypeInput(\"password\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 42\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                className: \"w-full\",\n                                onClick: handleLogin,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"outline\",\n                                className: \"w-full\",\n                                children: [\n                                    \"Login with Google \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FcGoogle_react_icons_fc__WEBPACK_IMPORTED_MODULE_9__.FcGoogle, {\n                                        className: \"ml-1\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 43\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 text-center text-sm\",\n                        children: [\n                            \"Don't have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                                to: \"/register\",\n                                className: \"hover-underline-animation\",\n                                children: \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                                lineNumber: 115,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginForm, \"LOudgjMjCYZFEkLbAfVIsCme9Nc=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDTjtBQUNUO0FBQ0s7QUFDdEI7QUFPSTtBQUNnQjtBQUNBO0FBQ0Q7QUFDckMsU0FBU2dCOztJQUNaLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNlLE1BQU1DLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3RDLE1BQU0sQ0FBQ2lCLGVBQWVDLGlCQUFpQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDbUIsTUFBTUMsUUFBUSxHQUFHcEIsK0NBQVFBLENBQUM7UUFDN0JxQixPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxLQUFLO0lBQ1Q7SUFDQSxNQUFNQyxlQUFlLENBQUNDO1FBQ2xCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1QsUUFBUSxDQUFDVSxXQUFjO2dCQUNuQixHQUFHQSxRQUFRO2dCQUNYLENBQUNILEtBQUssRUFBRUM7WUFDWjtJQUNKO0lBQ0EsTUFBTUcsY0FBYztRQUNoQixJQUFJWixLQUFLRSxLQUFLLEtBQUssTUFBTUYsS0FBS0csUUFBUSxLQUFLLElBQUk7WUFDM0NKLGlCQUFpQjtZQUNqQjtRQUNKO1FBRUEsSUFBSTtZQUNBLElBQUljLFdBQVcsTUFBTUMsTUFBTSxpQ0FBaUM7Z0JBQ3hEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDakJqQixPQUFPRixLQUFLRSxLQUFLO29CQUNqQkMsVUFBVUgsS0FBS0csUUFBUTtnQkFDM0I7WUFDSjtZQUVBLElBQUlVLFNBQVNPLEVBQUUsRUFBRTtnQkFDYixJQUFJQyxPQUFPLE1BQU1SLFNBQVNTLElBQUk7Z0JBQzlCLElBQUlELFFBQVFBLEtBQUtFLEtBQUssRUFBRTtvQkFDcEJDLGFBQWFDLE9BQU8sQ0FBQyxRQUFRUCxLQUFLQyxTQUFTLENBQUNFO29CQUM1Q3BCLFFBQVFvQjtnQkFDWixPQUFPO29CQUNISyxRQUFRQyxLQUFLLENBQUM7Z0JBQ2xCO1lBQ0osT0FBTztnQkFDSEQsUUFBUUMsS0FBSyxDQUFDLHFCQUFxQmQsU0FBU2UsVUFBVTtZQUMxRDtRQUNKLEVBQUUsT0FBT0QsT0FBTztZQUNaRCxRQUFRQyxLQUFLLENBQUMsd0JBQXdCQTtRQUMxQztJQUNKO0lBQ0EscUJBQ0ksOERBQUMxQyxxREFBSUE7UUFBQzRDLFdBQVU7OzBCQUdaLDhEQUFDekMsMkRBQVVBOztrQ0FDUCw4REFBQ0MsMERBQVNBO3dCQUFDd0MsV0FBVTtrQ0FBdUI7Ozs7OztrQ0FDNUMsOERBQUMxQyxnRUFBZUE7a0NBQUM7Ozs7Ozs7Ozs7OzswQkFJckIsOERBQUNELDREQUFXQTs7a0NBQ1IsOERBQUM0Qzt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDWCw4REFBQ3RDLHVEQUFLQTt3Q0FBQ3dDLFNBQVE7a0RBQVE7Ozs7OztrREFDdkIsOERBQUN6Qyx1REFBS0E7d0NBQ0YwQyxJQUFHO3dDQUNIcEMsTUFBSzt3Q0FDTHFDLGFBQVk7d0NBQ1p4QixPQUFPVCxLQUFLRSxLQUFLO3dDQUNqQmdDLFFBQVE7Ozs7Ozs7Ozs7OzswQ0FHaEIsOERBQUNKO2dDQUFJRCxXQUFVOztrREFDWCw4REFBQ0M7d0NBQUlELFdBQVU7OzBEQUNYLDhEQUFDdEMsdURBQUtBO2dEQUFDd0MsU0FBUTswREFBVzs7Ozs7OzBEQUMxQiw4REFBQ3JELGtEQUFJQTtnREFBQ3lELE1BQUs7Z0RBQUlOLFdBQVU7MERBQXlEOzs7Ozs7Ozs7Ozs7a0RBSXRGLDhEQUFDQzt3Q0FBSUQsV0FBVTs7MERBQ1gsOERBQUNPO2dEQUFNSixJQUFHO2dEQUFXSCxXQUFVO2dEQUF5RkksYUFBWTtnREFBV3JDLE1BQU1BO2dEQUNqSmEsT0FBT1QsS0FBS0UsS0FBSztnREFDakJtQyxVQUFVLENBQUM5QjtvREFDUEEsRUFBRUcsTUFBTSxDQUFDRCxLQUFLLEtBQUssS0FBS2QsWUFBWSxTQUFTQSxZQUFZO2dEQUM3RDs7Ozs7OzRDQUNIRCwwQkFBWSw4REFBQ0Ysd0ZBQVVBO2dEQUFDcUMsV0FBVTtnREFBd0NTLFNBQVMsQ0FBQy9CO29EQUNqRlgsU0FBUyxhQUFhQyxhQUFhLFVBQVVBLGFBQWE7Z0RBQzlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR1IsOERBQUNiLHlEQUFNQTtnQ0FBQ1ksTUFBSztnQ0FBU2lDLFdBQVU7Z0NBQVNTLFNBQVMxQjswQ0FBYTs7Ozs7OzBDQUcvRCw4REFBQzVCLHlEQUFNQTtnQ0FBQ3VELFNBQVE7Z0NBQVVWLFdBQVU7O29DQUFTO2tEQUN2Qiw4REFBQzlDLG9GQUFRQTt3Q0FBQzhDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHOUMsOERBQUNDO3dCQUFJRCxXQUFVOzs0QkFBMkI7NEJBQ1Y7MENBQzVCLDhEQUFDbkQsa0RBQUlBO2dDQUFDOEQsSUFBRztnQ0FBWVgsV0FBVTswQ0FBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vRTtHQTFHZ0JwQztLQUFBQTtBQTJHaEIsK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzeD9lZTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE91dGxldCwgTGluaywgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZjR29vZ2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcclxuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiXHJcbmltcG9ydCB7XHJcbiAgICBDYXJkLFxyXG4gICAgQ2FyZENvbnRlbnQsXHJcbiAgICBDYXJkRGVzY3JpcHRpb24sXHJcbiAgICBDYXJkSGVhZGVyLFxyXG4gICAgQ2FyZFRpdGxlLFxyXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiXHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiXHJcbmltcG9ydCB7IEZhRXllU2xhc2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luRm9ybSgpIHtcclxuICAgIGNvbnN0IFtzaG93RXllcywgc2V0U2hvd0V5ZXNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZUlucHV0XSA9IHVzZVN0YXRlKFwicGFzc3dvcmRcIilcclxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2VzLCBzZXRFcnJvck1lc3NhZ2VzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHJlbWVtYmVyTWU6IHRydWUsXHJcbiAgICAgICAgaW1nOiBcIlwiXHJcbiAgICB9KVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgICAgICBzZXRVc2VyKChwcmV2VXNlcikgPT4gKHtcclxuICAgICAgICAgICAgLi4ucHJldlVzZXIsXHJcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyLmVtYWlsID09PSBcIlwiIHx8IHVzZXIucGFzc3dvcmQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlcyh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5leGFtcGxlLmNvbS9sb2dpblwiLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBkYXRhIHJlY2VpdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaDogXCIsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBmZXRjaDogXCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LXNtIGgtMi80IGFic29sdXRlIHRvcC0yLzQgbGVmdC0yLzQgLW1sLTIvNCAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgdy0zLzQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBnYXAtMyBtZDpoLTMvNCBsZzpnYXAtMjBcclxuICAgICAgICBcclxuICAgICAgICBcIj5cclxuICAgICAgICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtY2VudGVyXCI+TG9naW48L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgRW50ZXIgeW91ciBlbWFpbCBiZWxvdyB0byBsb2dpbiB0byB5b3VyIGFjY291bnRcclxuICAgICAgICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibUBleGFtcGxlLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlci5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm1sLWF1dG8gaW5saW5lLWJsb2NrIHRleHQtc20gaG92ZXItdW5kZXJsaW5lLWFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcmdvdCB5b3VyIHBhc3N3b3JkP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYm9yZGVyIGJvcmRlci1zb2xpZCByb3VuZGVkLW1kIHAtMC41XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZsZXggaC0xMCB3LWZ1bGwgYm9yZGVyLWlucHV0IGJnLWJhY2tncm91bmQgcHgtMyBweS0yIHRleHQtc20gb3V0bGluZS1ub25lIGJvcmRlci1ub25lXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXIuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiID8gc2V0U2hvd0V5ZXMoZmFsc2UpIDogc2V0U2hvd0V5ZXModHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFeWVzICYmIDxGYUV5ZVNsYXNoIGNsYXNzTmFtZT1cIm14LTMgd29iYmxlLWhvci1ib3R0b20gY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwicGFzc3dvcmRcIiA/IHNldFR5cGVJbnB1dChcInRleHRcIikgOiBzZXRUeXBlSW5wdXQoXCJwYXNzd29yZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luIHdpdGggR29vZ2xlIDxGY0dvb2dsZSBjbGFzc05hbWU9XCJtbC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHRleHQtY2VudGVyIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICBEb24mYXBvczt0IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJob3Zlci11bmRlcmxpbmUtYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtIl0sIm5hbWVzIjpbIk91dGxldCIsIkxpbmsiLCJOYXZMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZjR29vZ2xlIiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZERlc2NyaXB0aW9uIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIklucHV0IiwiTGFiZWwiLCJGYUV5ZVNsYXNoIiwiTG9naW5Gb3JtIiwic2hvd0V5ZXMiLCJzZXRTaG93RXllcyIsInR5cGUiLCJzZXRUeXBlSW5wdXQiLCJlcnJvck1lc3NhZ2VzIiwic2V0RXJyb3JNZXNzYWdlcyIsInVzZXIiLCJzZXRVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInJlbWVtYmVyTWUiLCJpbWciLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldlVzZXIiLCJoYW5kbGVMb2dpbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImRhdGEiLCJqc29uIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzVGV4dCIsImNsYXNzTmFtZSIsImRpdiIsImh0bWxGb3IiLCJpZCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJocmVmIiwiaW5wdXQiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJ2YXJpYW50IiwidG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LoginForm.jsx\n"));

/***/ })

});