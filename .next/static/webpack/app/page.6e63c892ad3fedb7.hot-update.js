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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"4fc2d0f3951b\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3N0eWxlLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3R5bGUuY3NzP2E0NzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI0ZmMyZDBmMzk1MWJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/style.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/LoginForm.jsx":
/*!**************************************!*\
  !*** ./src/components/LoginForm.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoginForm: function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ \"(app-pages-browser)/./src/css/style.css\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./src/components/ui/label.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction LoginForm() {\n    _s();\n    const [showEyes, setShowEyes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [type, setTypeInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"password\");\n    const [errorMessages, setErrorMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\",\n        rememberMe: true,\n        img: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setUser((prevUser)=>({\n                ...prevUser,\n                [name]: value\n            }));\n    };\n    const handleLogin = async ()=>{\n        if (user.email === \"\" || user.password === \"\") {\n            setErrorMessages(true);\n            return;\n        }\n        try {\n            let response = await fetch(\"https://api.example.com/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email: user.email,\n                    password: user.password\n                })\n            });\n            if (response.ok) {\n                let data = await response.json();\n                if (data && data.token) {\n                    localStorage.setItem(\"user\", JSON.stringify(data));\n                    setUser(data);\n                } else {\n                    console.error(\"Invalid data received\");\n                }\n            } else {\n                console.error(\"Failed to fetch: \", response.statusText);\n            }\n        } catch (error) {\n            console.error(\"Error during fetch: \", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n        className: \"mx-auto max-w-sm h-2/4 absolute top-2/4 left-2/4 -ml-2/4 -translate-x-1/2 -translate-y-1/2 w-3/4 flex flex-col justify-center gap-3 md:h-3/4 lg:gap-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, {\n                        className: \"text-2xl text-center\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardDescription, {\n                        children: \"Enter your email below to login to your account\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardContent, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__.Label, {\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        id: \"email\",\n                        name: \"email\",\n                        type: \"email\",\n                        placeholder: \"m@example.com\",\n                        value: user.email,\n                        onChange: handleChange,\n                        required: true,\n                        className: \"outline-none border-none\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__.Label, {\n                        htmlFor: \"password\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        id: \"password\",\n                        name: \"password\",\n                        type: type,\n                        placeholder: \"Password\",\n                        value: user.password,\n                        onChange: handleChange,\n                        required: true,\n                        className: \"outline-none border-none\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, this),\n                    errorMessages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500\",\n                        children: \"Wrong \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 35\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        onClick: handleLogin,\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, this),\n                    errorMessages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500\",\n                        children: \"Please fill in all fields\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 35\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\LoginForm.jsx\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginForm, \"LOudgjMjCYZFEkLbAfVIsCme9Nc=\");\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDTjtBQUNUO0FBQ007QUFDdEI7QUFPSTtBQUNnQjtBQUNBO0FBQ0Y7QUFFckMsU0FBU2dCOztJQUNaLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNlLE1BQU1DLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3RDLE1BQU0sQ0FBQ2lCLGVBQWVDLGlCQUFpQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDbUIsTUFBTUMsUUFBUSxHQUFHcEIsK0NBQVFBLENBQUM7UUFDN0JxQixPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxLQUFLO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ2xCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1QsUUFBUSxDQUFDVSxXQUFjO2dCQUNuQixHQUFHQSxRQUFRO2dCQUNYLENBQUNILEtBQUssRUFBRUM7WUFDWjtJQUNKO0lBRUEsTUFBTUcsY0FBYztRQUNoQixJQUFJWixLQUFLRSxLQUFLLEtBQUssTUFBTUYsS0FBS0csUUFBUSxLQUFLLElBQUk7WUFDM0NKLGlCQUFpQjtZQUNqQjtRQUNKO1FBRUEsSUFBSTtZQUNBLElBQUljLFdBQVcsTUFBTUMsTUFBTSxpQ0FBaUM7Z0JBQ3hEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDakJqQixPQUFPRixLQUFLRSxLQUFLO29CQUNqQkMsVUFBVUgsS0FBS0csUUFBUTtnQkFDM0I7WUFDSjtZQUVBLElBQUlVLFNBQVNPLEVBQUUsRUFBRTtnQkFDYixJQUFJQyxPQUFPLE1BQU1SLFNBQVNTLElBQUk7Z0JBQzlCLElBQUlELFFBQVFBLEtBQUtFLEtBQUssRUFBRTtvQkFDcEJDLGFBQWFDLE9BQU8sQ0FBQyxRQUFRUCxLQUFLQyxTQUFTLENBQUNFO29CQUM1Q3BCLFFBQVFvQjtnQkFDWixPQUFPO29CQUNISyxRQUFRQyxLQUFLLENBQUM7Z0JBQ2xCO1lBQ0osT0FBTztnQkFDSEQsUUFBUUMsS0FBSyxDQUFDLHFCQUFxQmQsU0FBU2UsVUFBVTtZQUMxRDtRQUNKLEVBQUUsT0FBT0QsT0FBTztZQUNaRCxRQUFRQyxLQUFLLENBQUMsd0JBQXdCQTtRQUMxQztJQUNKO0lBRUEscUJBQ0ksOERBQUMxQyxxREFBSUE7UUFBQzRDLFdBQVU7OzBCQUNaLDhEQUFDekMsMkRBQVVBOztrQ0FDUCw4REFBQ0MsMERBQVNBO3dCQUFDd0MsV0FBVTtrQ0FBdUI7Ozs7OztrQ0FDNUMsOERBQUMxQyxnRUFBZUE7a0NBQUM7Ozs7Ozs7Ozs7OzswQkFJckIsOERBQUNELDREQUFXQTs7a0NBQ1IsOERBQUNLLHVEQUFLQTt3QkFBQ3VDLFNBQVE7a0NBQVE7Ozs7OztrQ0FDdkIsOERBQUN4Qyx1REFBS0E7d0JBQ0Z5QyxJQUFHO3dCQUNIdkIsTUFBSzt3QkFDTFosTUFBSzt3QkFDTG9DLGFBQVk7d0JBQ1p2QixPQUFPVCxLQUFLRSxLQUFLO3dCQUNqQitCLFVBQVUzQjt3QkFDVjRCLFFBQVE7d0JBQ1JMLFdBQVU7Ozs7OztrQ0FFZCw4REFBQ3RDLHVEQUFLQTt3QkFBQ3VDLFNBQVE7a0NBQVc7Ozs7OztrQ0FDMUIsOERBQUN4Qyx1REFBS0E7d0JBQ0Z5QyxJQUFHO3dCQUNIdkIsTUFBSzt3QkFDTFosTUFBTUE7d0JBQ05vQyxhQUFZO3dCQUNadkIsT0FBT1QsS0FBS0csUUFBUTt3QkFDcEI4QixVQUFVM0I7d0JBQ1Y0QixRQUFRO3dCQUNSTCxXQUFVOzs7Ozs7b0JBRWIvQiwrQkFBaUIsOERBQUNxQzt3QkFBRU4sV0FBVTtrQ0FBZTs7Ozs7O2tDQUM5Qyw4REFBQzdDLHlEQUFNQTt3QkFBQ29ELFNBQVN4QjtrQ0FBYTs7Ozs7O29CQUM3QmQsK0JBQWlCLDhEQUFDcUM7d0JBQUVOLFdBQVU7a0NBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5RDtHQTFGZ0JwQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanN4P2VlMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3V0bGV0LCBMaW5rLCBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmNHb29nbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcclxuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIENhcmRDb250ZW50LFxyXG4gICAgQ2FyZERlc2NyaXB0aW9uLFxyXG4gICAgQ2FyZEhlYWRlcixcclxuICAgIENhcmRUaXRsZSxcclxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiO1xyXG5pbXBvcnQgeyBGYUV5ZVNsYXNoIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xyXG4gICAgY29uc3QgW3Nob3dFeWVzLCBzZXRTaG93RXllc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZUlucHV0XSA9IHVzZVN0YXRlKFwicGFzc3dvcmRcIik7XHJcbiAgICBjb25zdCBbZXJyb3JNZXNzYWdlcywgc2V0RXJyb3JNZXNzYWdlc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgcmVtZW1iZXJNZTogdHJ1ZSxcclxuICAgICAgICBpbWc6IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc2V0VXNlcigocHJldlVzZXIpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnByZXZVc2VyLFxyXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIuZW1haWwgPT09IFwiXCIgfHwgdXNlci5wYXNzd29yZCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2VzKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2xvZ2luXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGRhdGEgcmVjZWl2ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoOiBcIiwgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIGZldGNoOiBcIiwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LXNtIGgtMi80IGFic29sdXRlIHRvcC0yLzQgbGVmdC0yLzQgLW1sLTIvNCAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgdy0zLzQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBnYXAtMyBtZDpoLTMvNCBsZzpnYXAtMjBcIj5cclxuICAgICAgICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtY2VudGVyXCI+TG9naW48L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgRW50ZXIgeW91ciBlbWFpbCBiZWxvdyB0byBsb2dpbiB0byB5b3VyIGFjY291bnRcclxuICAgICAgICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJtQGV4YW1wbGUuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlci5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGJvcmRlci1ub25lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgYm9yZGVyLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2VzICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPldyb25nIDwvcD59XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5Mb2dpbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZXMgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+UGxlYXNlIGZpbGwgaW4gYWxsIGZpZWxkczwvcD59XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJPdXRsZXQiLCJMaW5rIiwiTmF2TGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGY0dvb2dsZSIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJJbnB1dCIsIkxhYmVsIiwiRmFFeWVTbGFzaCIsIkxvZ2luRm9ybSIsInNob3dFeWVzIiwic2V0U2hvd0V5ZXMiLCJ0eXBlIiwic2V0VHlwZUlucHV0IiwiZXJyb3JNZXNzYWdlcyIsInNldEVycm9yTWVzc2FnZXMiLCJ1c2VyIiwic2V0VXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJyZW1lbWJlck1lIiwiaW1nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZVc2VyIiwiaGFuZGxlTG9naW4iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJkYXRhIiwianNvbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LoginForm.jsx\n"));

/***/ })

});