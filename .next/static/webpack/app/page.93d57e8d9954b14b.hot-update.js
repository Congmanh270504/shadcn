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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c624024f88fc\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3N0eWxlLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3R5bGUuY3NzP2E0NzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJjNjI0MDI0Zjg4ZmNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/style.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Sidebar.jsx":
/*!************************************!*\
  !*** ./src/components/Sidebar.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/tooltip */ \"(app-pages-browser)/./src/components/ui/tooltip.tsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_Copy_CreditCard_File_Home_LineChart_ListFilter_MoreVertical_Package_Package2_PanelLeft_Search_Settings_ShoppingCart_Truck_Users2_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight,Copy,CreditCard,File,Home,LineChart,ListFilter,MoreVertical,Package,Package2,PanelLeft,Search,Settings,ShoppingCart,Truck,Users2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/house.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_Copy_CreditCard_File_Home_LineChart_ListFilter_MoreVertical_Package_Package2_PanelLeft_Search_Settings_ShoppingCart_Truck_Users2_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight,Copy,CreditCard,File,Home,LineChart,ListFilter,MoreVertical,Package,Package2,PanelLeft,Search,Settings,ShoppingCart,Truck,Users2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/shopping-cart.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_Copy_CreditCard_File_Home_LineChart_ListFilter_MoreVertical_Package_Package2_PanelLeft_Search_Settings_ShoppingCart_Truck_Users2_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight,Copy,CreditCard,File,Home,LineChart,ListFilter,MoreVertical,Package,Package2,PanelLeft,Search,Settings,ShoppingCart,Truck,Users2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/package-2.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_Copy_CreditCard_File_Home_LineChart_ListFilter_MoreVertical_Package_Package2_PanelLeft_Search_Settings_ShoppingCart_Truck_Users2_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight,Copy,CreditCard,File,Home,LineChart,ListFilter,MoreVertical,Package,Package2,PanelLeft,Search,Settings,ShoppingCart,Truck,Users2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/settings.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Sidebar() {\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            bgAccent: \"\",\n            textAccent: \"\",\n            textMuted: \"text-muted-foreground\"\n        },\n        {\n            bgAccent: \"bg-accent\",\n            textAccent: \"text-accent-foreground\",\n            textMuted: \"\"\n        }\n    ]);\n    const [nameTittle, setnameTittle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Dashboard\",\n            tag: _barrel_optimize_names_ChevronLeft_ChevronRight_Copy_CreditCard_File_Home_LineChart_ListFilter_MoreVertical_Package_Package2_PanelLeft_Search_Settings_ShoppingCart_Truck_Users2_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        },\n        {\n            name: \"Orders\",\n            tag: _barrel_optimize_names_ChevronLeft_ChevronRight_Copy_CreditCard_File_Home_LineChart_ListFilter_MoreVertical_Package_Package2_PanelLeft_Search_Settings_ShoppingCart_Truck_Users2_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n        }\n    ]);\n    const [listStyle, setListStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            bgAccent: \"bg-accent\",\n            textAccent: \"text-accent-foreground\",\n            textMuted: \"\"\n        },\n        {\n            bgAccent: \"\",\n            textAccent: \"\",\n            textMuted: \"text-muted-foreground\"\n        }\n    ]);\n    const handleActiveOff = ()=>{\n        // const check = listStyle.map((item, index) => {\n        //     item[index] = tmp;\n        //     console.log(item[index]);\n        // })\n        const tmp = listStyle.map(()=>active[0]);\n        setListStyle(tmp);\n    // console.log(listStyle);\n    // console.log(check);\n    };\n    const handleActiveOn = ()=>{\n        console.log(\"aaa\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"fixed inset-y-0 left-0 z-10 w-14 flex-col border-r bg-background flex sm:flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex flex-col items-center gap-4 px-2 sm:py-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                        to: \"/\",\n                        className: \"group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_ChevronRight_Copy_CreditCard_File_Home_LineChart_ListFilter_MoreVertical_Package_Package2_PanelLeft_Search_Settings_ShoppingCart_Truck_Users2_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"h-4 w-4 transition-all group-hover:scale-110\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: \"Acme Inc\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipProvider, {\n                        children: nameTittle.map((item, index)=>{\n                            const Icon = item.tag;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipTrigger, {\n                                            asChild: true,\n                                            className: \"\".concat(listStyle[index].bgAccent, \" \").concat(listStyle[index].textAccent, \" \").concat(listStyle[index].textMuted),\n                                            onClick: (index)=>{},\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                                to: index == 0 ? \"/\" : \"/\".concat(item.name),\n                                                className: \"flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8\",\n                                                children: [\n                                                    Icon ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                                        className: \"h-5 w-5\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                                                        lineNumber: 95,\n                                                        columnNumber: 57\n                                                    }, this) : null,\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"sr-only\",\n                                                        children: item.name\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                                                        lineNumber: 96,\n                                                        columnNumber: 49\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 45\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 41\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipContent, {\n                                            side: \"right\",\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 41\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false);\n                        })\n                    }, void 0, false, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"mt-auto flex flex-col items-center gap-4 px-2 sm:py-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipTrigger, {\n                                asChild: true,\n                                className: \"\".concat(listStyle[1].bgAccent, \" \").concat(listStyle[1].textAccent, \" \").concat(listStyle[1].textMuted),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                    to: \"/Setting\",\n                                    className: \"flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_ChevronRight_Copy_CreditCard_File_Home_LineChart_ListFilter_MoreVertical_Package_Package2_PanelLeft_Search_Settings_ShoppingCart_Truck_Users2_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"h-5 w-5\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"sr-only\",\n                                            children: \"Settings\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipContent, {\n                                side: \"right\",\n                                children: \"Settings\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 119,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                    lineNumber: 108,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\byMyOwn\\\\React\\\\shadcn\\\\src\\\\components\\\\Sidebar.jsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n_s(Sidebar, \"Ts5ABF4OS08cRTJaAV+Izu3fNJY=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQU1SO0FBQ3lCO0FBbUJwQztBQUVkLFNBQVMwQjs7SUFDWixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBRzNCLCtDQUFRQSxDQUFDO1FBQUM7WUFDbEM0QixVQUFVO1lBQ1ZDLFlBQVk7WUFDWkMsV0FBVztRQUNmO1FBQUc7WUFDQ0YsVUFBVTtZQUNWQyxZQUFZO1lBQ1pDLFdBQVc7UUFDZjtLQUFFO0lBQ0YsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdoQywrQ0FBUUEsQ0FBQztRQUN6QztZQUFFaUMsTUFBTTtZQUFhQyxLQUFLckIscU9BQUlBO1FBQUM7UUFDL0I7WUFBRW9CLE1BQU07WUFBVUMsS0FBS1oscU9BQVlBO1FBQUM7S0FDdkM7SUFDRCxNQUFNLENBQUNhLFdBQVdDLGFBQWEsR0FBR3BDLCtDQUFRQSxDQUFDO1FBQUM7WUFDeEM0QixVQUFVO1lBQ1ZDLFlBQVk7WUFDWkMsV0FBVztRQUNmO1FBQ0E7WUFDSUYsVUFBVTtZQUNWQyxZQUFZO1lBQ1pDLFdBQVc7UUFDZjtLQUNDO0lBQ0QsTUFBTU8sa0JBQWtCO1FBQ3BCLGlEQUFpRDtRQUNqRCx5QkFBeUI7UUFDekIsZ0NBQWdDO1FBQ2hDLEtBQUs7UUFDTCxNQUFNQyxNQUFNSCxVQUFVSSxHQUFHLENBQUMsSUFBTWIsTUFBTSxDQUFDLEVBQUU7UUFDekNVLGFBQWFFO0lBQ2IsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUMxQjtJQUNBLE1BQU1FLGlCQUFpQjtRQUNuQkMsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNDO1FBQU1DLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUN0QyxrREFBSUE7d0JBQ0R3QyxJQUFHO3dCQUNIRixXQUFVOzswQ0FFViw4REFBQzFCLHFPQUFRQTtnQ0FBQzBCLFdBQVU7Ozs7OzswQ0FDcEIsOERBQUNHO2dDQUFLSCxXQUFVOzBDQUFVOzs7Ozs7Ozs7Ozs7a0NBRTlCLDhEQUFDekMsbUVBQWVBO2tDQUVSNEIsV0FBV1EsR0FBRyxDQUFDLENBQUNTLE1BQU1DOzRCQUNsQixNQUFNQyxPQUFPRixLQUFLZCxHQUFHOzRCQUNyQixxQkFDSTswQ0FDSSw0RUFBQ2pDLDJEQUFPQTs7c0RBQ0osOERBQUNHLGtFQUFjQTs0Q0FBQytDLE9BQU87NENBQUNQLFdBQVcsR0FBZ0NULE9BQTdCQSxTQUFTLENBQUNjLE1BQU0sQ0FBQ3JCLFFBQVEsRUFBQyxLQUFrQ08sT0FBL0JBLFNBQVMsQ0FBQ2MsTUFBTSxDQUFDcEIsVUFBVSxFQUFDLEtBQThCLE9BQTNCTSxTQUFTLENBQUNjLE1BQU0sQ0FBQ25CLFNBQVM7NENBQ3hIc0IsU0FBUyxDQUFDSCxTQUVWO3NEQUdBLDRFQUFDM0Msa0RBQUlBO2dEQUNEd0MsSUFBSUcsU0FBUyxJQUFLLE1BQUssSUFBYyxPQUFWRCxLQUFLZixJQUFJO2dEQUNwQ1csV0FBVTs7b0RBRVRNLHFCQUFPLDhEQUFDQTt3REFBS04sV0FBVTs7Ozs7K0RBQWU7a0VBQ3ZDLDhEQUFDRzt3REFBS0gsV0FBVTtrRUFBV0ksS0FBS2YsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBRzVDLDhEQUFDL0Isa0VBQWNBOzRDQUFDbUQsTUFBSztzREFBU0wsS0FBS2YsSUFBSTs7Ozs7OzttQ0FmN0JnQjs7Ozs7O3dCQW1CMUI7Ozs7Ozs7Ozs7OzswQkFJWiw4REFBQ0o7Z0JBQUlELFdBQVU7MEJBQ1gsNEVBQUN6QyxtRUFBZUE7OEJBQ1osNEVBQUNGLDJEQUFPQTs7MENBQ0osOERBQUNHLGtFQUFjQTtnQ0FBQytDLE9BQU87Z0NBQUNQLFdBQVcsR0FBNEJULE9BQXpCQSxTQUFTLENBQUMsRUFBRSxDQUFDUCxRQUFRLEVBQUMsS0FBOEJPLE9BQTNCQSxTQUFTLENBQUMsRUFBRSxDQUFDTixVQUFVLEVBQUMsS0FBMEIsT0FBdkJNLFNBQVMsQ0FBQyxFQUFFLENBQUNMLFNBQVM7MENBQzVHLDRFQUFDeEIsa0RBQUlBO29DQUNEd0MsSUFBRztvQ0FDSEYsV0FBVTs7c0RBRVYsOERBQUN2QixxT0FBUUE7NENBQUN1QixXQUFVOzs7Ozs7c0RBQ3BCLDhEQUFDRzs0Q0FBS0gsV0FBVTtzREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR2xDLDhEQUFDMUMsa0VBQWNBO2dDQUFDbUQsTUFBSzswQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRDtHQWhHZ0I1QjtLQUFBQTtBQWlHaEIsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci5qc3g/NDMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBUb29sdGlwLFxyXG4gICAgVG9vbHRpcENvbnRlbnQsXHJcbiAgICBUb29sdGlwUHJvdmlkZXIsXHJcbiAgICBUb29sdGlwVHJpZ2dlcixcclxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Rvb2x0aXBcIlxyXG5pbXBvcnQgeyBPdXRsZXQsIExpbmssIE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ2hldnJvbkxlZnQsXHJcbiAgICBDaGV2cm9uUmlnaHQsXHJcbiAgICBDb3B5LFxyXG4gICAgQ3JlZGl0Q2FyZCxcclxuICAgIEZpbGUsXHJcbiAgICBIb21lLFxyXG4gICAgTGluZUNoYXJ0LFxyXG4gICAgTGlzdEZpbHRlcixcclxuICAgIE1vcmVWZXJ0aWNhbCxcclxuICAgIFBhY2thZ2UsXHJcbiAgICBQYWNrYWdlMixcclxuICAgIFBhbmVsTGVmdCxcclxuICAgIFNlYXJjaCxcclxuICAgIFNldHRpbmdzLFxyXG4gICAgU2hvcHBpbmdDYXJ0LFxyXG4gICAgVHJ1Y2ssXHJcbiAgICBVc2VyczIsXHJcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShbe1xyXG4gICAgICAgIGJnQWNjZW50OiAnJyxcclxuICAgICAgICB0ZXh0QWNjZW50OiBcIlwiLFxyXG4gICAgICAgIHRleHRNdXRlZDogXCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIlxyXG4gICAgfSwge1xyXG4gICAgICAgIGJnQWNjZW50OiAnYmctYWNjZW50JyxcclxuICAgICAgICB0ZXh0QWNjZW50OiBcInRleHQtYWNjZW50LWZvcmVncm91bmRcIixcclxuICAgICAgICB0ZXh0TXV0ZWQ6IFwiXCJcclxuICAgIH1dKVxyXG4gICAgY29uc3QgW25hbWVUaXR0bGUsIHNldG5hbWVUaXR0bGVdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHsgbmFtZTogJ0Rhc2hib2FyZCcsIHRhZzogSG9tZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ09yZGVycycsIHRhZzogU2hvcHBpbmdDYXJ0IH1cclxuICAgIF0pXHJcbiAgICBjb25zdCBbbGlzdFN0eWxlLCBzZXRMaXN0U3R5bGVdID0gdXNlU3RhdGUoW3tcclxuICAgICAgICBiZ0FjY2VudDogXCJiZy1hY2NlbnRcIixcclxuICAgICAgICB0ZXh0QWNjZW50OiBcInRleHQtYWNjZW50LWZvcmVncm91bmRcIixcclxuICAgICAgICB0ZXh0TXV0ZWQ6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYmdBY2NlbnQ6IFwiXCIsXHJcbiAgICAgICAgdGV4dEFjY2VudDogXCJcIixcclxuICAgICAgICB0ZXh0TXV0ZWQ6IFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCJcclxuICAgIH1cclxuICAgIF0pXHJcbiAgICBjb25zdCBoYW5kbGVBY3RpdmVPZmYgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3QgY2hlY2sgPSBsaXN0U3R5bGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpdGVtW2luZGV4XSA9IHRtcDtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coaXRlbVtpbmRleF0pO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgY29uc3QgdG1wID0gbGlzdFN0eWxlLm1hcCgoKSA9PiBhY3RpdmVbMF0pO1xyXG4gICAgICAgIHNldExpc3RTdHlsZSh0bXApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxpc3RTdHlsZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2hlY2spO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQWN0aXZlT24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhYWFcIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC15LTAgbGVmdC0wIHotMTAgdy0xNCBmbGV4LWNvbCBib3JkZXItciBiZy1iYWNrZ3JvdW5kIGZsZXggc206ZmxleFwiPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00IHB4LTIgc206cHktNVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaC05IHctOSBzaHJpbmstMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIG1kOmgtOCBtZDp3LTggbWQ6dGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UGFja2FnZTIgY2xhc3NOYW1lPVwiaC00IHctNCB0cmFuc2l0aW9uLWFsbCBncm91cC1ob3ZlcjpzY2FsZS0xMTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5BY21lIEluYzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxUb29sdGlwUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lVGl0dGxlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IEljb24gPSBpdGVtLnRhZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFRyaWdnZXIgYXNDaGlsZCBjbGFzc05hbWU9e2Ake2xpc3RTdHlsZVtpbmRleF0uYmdBY2NlbnR9ICR7bGlzdFN0eWxlW2luZGV4XS50ZXh0QWNjZW50fSAke2xpc3RTdHlsZVtpbmRleF0udGV4dE11dGVkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2luZGV4ID09IDAgPyBgL2AgOiBgLyR7aXRlbS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaC05IHctOSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjp0ZXh0LWZvcmVncm91bmQgbWQ6aC04IG1kOnctOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7SWNvbiA/IDxJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBDb250ZW50IHNpZGU9XCJyaWdodFwiPntpdGVtLm5hbWV9PC9Ub29sdGlwQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtdC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00IHB4LTIgc206cHktNVwiPlxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBUcmlnZ2VyIGFzQ2hpbGQgY2xhc3NOYW1lPXtgJHtsaXN0U3R5bGVbMV0uYmdBY2NlbnR9ICR7bGlzdFN0eWxlWzFdLnRleHRBY2NlbnR9ICR7bGlzdFN0eWxlWzFdLnRleHRNdXRlZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9TZXR0aW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaC05IHctOSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyAgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kIG1kOmgtOCBtZDp3LThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5ncyBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+U2V0dGluZ3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcFRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwQ29udGVudCBzaWRlPVwicmlnaHRcIj5TZXR0aW5nczwvVG9vbHRpcENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvYXNpZGUgPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUb29sdGlwIiwiVG9vbHRpcENvbnRlbnQiLCJUb29sdGlwUHJvdmlkZXIiLCJUb29sdGlwVHJpZ2dlciIsIk91dGxldCIsIkxpbmsiLCJOYXZMaW5rIiwiQ2hldnJvbkxlZnQiLCJDaGV2cm9uUmlnaHQiLCJDb3B5IiwiQ3JlZGl0Q2FyZCIsIkZpbGUiLCJIb21lIiwiTGluZUNoYXJ0IiwiTGlzdEZpbHRlciIsIk1vcmVWZXJ0aWNhbCIsIlBhY2thZ2UiLCJQYWNrYWdlMiIsIlBhbmVsTGVmdCIsIlNlYXJjaCIsIlNldHRpbmdzIiwiU2hvcHBpbmdDYXJ0IiwiVHJ1Y2siLCJVc2VyczIiLCJTaWRlYmFyIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiYmdBY2NlbnQiLCJ0ZXh0QWNjZW50IiwidGV4dE11dGVkIiwibmFtZVRpdHRsZSIsInNldG5hbWVUaXR0bGUiLCJuYW1lIiwidGFnIiwibGlzdFN0eWxlIiwic2V0TGlzdFN0eWxlIiwiaGFuZGxlQWN0aXZlT2ZmIiwidG1wIiwibWFwIiwiaGFuZGxlQWN0aXZlT24iLCJjb25zb2xlIiwibG9nIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJuYXYiLCJ0byIsInNwYW4iLCJpdGVtIiwiaW5kZXgiLCJJY29uIiwiYXNDaGlsZCIsIm9uQ2xpY2siLCJzaWRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Sidebar.jsx\n"));

/***/ })

});