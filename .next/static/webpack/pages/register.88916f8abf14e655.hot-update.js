"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _helpers_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/alert */ \"./helpers/alert.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/auth */ \"./helpers/auth.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Register = ()=>{\n    _s();\n    //state to handle the form data\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        error: \"\",\n        success: \"\",\n        btnText: \"Register\",\n        categories: [],\n        loadedCategories: []\n    });\n    //now we will add a function to update the state\n    const handleFormData = (key)=>(event)=>{\n            setFormData((prevData)=>{\n                return {\n                    ...prevData,\n                    [key]: event.target.value,\n                    error: \"\",\n                    success: \"\",\n                    btnText: \"Register\"\n                };\n            });\n        };\n    //destructure the state\n    let { name, email, password, error, success, btnText, loadedCategories, categories } = formData;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    console.log(loadedCategories, \"loaded\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_6__.isAuth)() && router.push(\"/\");\n    }, []);\n    // load categories when component mounts using useEffect\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        loadCategories();\n    }, []);\n    const loadCategories = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_4__.API, \"/categories\"));\n            console.log(response, \"response\");\n            setFormData({\n                ...formData,\n                loadedCategories: response.data\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleToggle = (c)=>()=>{\n            // return the first index or -1\n            const clickedCategory = categories.indexOf(c);\n            const all = [\n                ...categories\n            ];\n            if (clickedCategory === -1) {\n                all.push(c);\n            } else {\n                all.splice(clickedCategory, 1);\n            }\n            console.log(\"all >> categories\", all);\n            setState({\n                ...formData,\n                categories: all,\n                success: \"\",\n                error: \"\"\n            });\n        };\n    const showCategories = ()=>{\n        console.log(loadCategories, \"loaded\");\n        return loadedCategories && loadedCategories.map((c, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"list-unstyled my-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        onChange: handleToggle(c._id),\n                        className: \"mr-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"form-check-label\",\n                        children: c.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, c._id, true, {\n                fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, undefined));\n    };\n    //convert handle submit function to async function\n    const handleFormSubmit = async (event)=>{\n        event.preventDefault(); //to stop reloading the page when submit\n        //we can set the button text\n        setFormData({\n            ...formData,\n            btnText: \"Registering\"\n        });\n        //we will call the register end point\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_4__.API, \"/register\"), {\n                name,\n                email,\n                password\n            });\n            if (response) {\n                setFormData({\n                    ...formData,\n                    name: \"\",\n                    email: \"\",\n                    password: \"\",\n                    success: response.data.message,\n                    btnText: \"Submitted\"\n                });\n            }\n        } catch (error) {\n            console.log(error);\n            setFormData({\n                ...formData,\n                error: error.response.data.message,\n                btnText: \"Submitted\"\n            });\n        }\n    };\n    console.log(\"in register\");\n    const registerForm = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleFormSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name,\n                        type: \"text\",\n                        className: \"form-control\",\n                        placeholder: \"Type your name\",\n                        onChange: handleFormData(\"name\"),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 133,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Type your email\",\n                        onChange: handleFormData(\"email\"),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 143,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Type your password\",\n                        onChange: handleFormData(\"password\"),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 154,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 153,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-muted ml-4\",\n                            children: \"Category\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 164,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            style: {\n                                maxHeight: \"100px\",\n                                overflowY: \"scroll\"\n                            },\n                            children: showCategories()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 165,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 163,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-outline-primary\",\n                        children: btnText\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 169,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n            lineNumber: 132,\n            columnNumber: 5\n        }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 177,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 178,\n                    columnNumber: 9\n                }, undefined),\n                success && (0,_helpers_alert__WEBPACK_IMPORTED_MODULE_3__.showSuccessMessage)(success),\n                error && (0,_helpers_alert__WEBPACK_IMPORTED_MODULE_3__.showErrorMessage)(error),\n                registerForm()\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n            lineNumber: 176,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n        lineNumber: 175,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Register, \"9nBsZt4U9upgCJbmgT6ntAusN9M=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHQyxPQUFPO2dDQUFFQyxXQUFXO2dDQUFTQyxXQUFXOzRCQUFTO3NDQUNsRHZCOzs7Ozs7Ozs7Ozs7OEJBR0wsOERBQUNpQjtvQkFBSWIsV0FBVTs4QkFDYiw0RUFBQ29CO3dCQUFPcEIsV0FBVTtrQ0FBMkI1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkQscUJBQ0UsOERBQUNqQiwwREFBTUE7a0JBQ0wsNEVBQUMwRDtZQUFJYixXQUFVOzs4QkFDYiw4REFBQ3FCOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDOzs7OztnQkFDQW5ELFdBQVdYLGtFQUFrQkEsQ0FBQ1c7Z0JBQzlCRCxTQUFTWCxnRUFBZ0JBLENBQUNXO2dCQUMxQndDOzs7Ozs7Ozs7Ozs7QUFJVDtHQWhMTTlDOztRQXFDV0Ysa0RBQVNBOzs7S0FyQ3BCRTtBQWlMTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBzaG93RXJyb3JNZXNzYWdlLCBzaG93U3VjY2Vzc01lc3NhZ2UgfSBmcm9tIFwiLi4vaGVscGVycy9hbGVydFwiO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBpc0F1dGggfSBmcm9tIFwiLi4vaGVscGVycy9hdXRoXCI7XHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuICAvL3N0YXRlIHRvIGhhbmRsZSB0aGUgZm9ybSBkYXRhXHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGVycm9yOiBcIlwiLFxyXG4gICAgc3VjY2VzczogXCJcIixcclxuICAgIGJ0blRleHQ6IFwiUmVnaXN0ZXJcIixcclxuICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgbG9hZGVkQ2F0ZWdvcmllczogW10sXHJcbiAgfSk7XHJcbiAgLy9ub3cgd2Ugd2lsbCBhZGQgYSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHN0YXRlXHJcbiAgY29uc3QgaGFuZGxlRm9ybURhdGEgPSAoa2V5KSA9PiAoZXZlbnQpID0+IHtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2RGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByZXZEYXRhLFxyXG4gICAgICAgIFtrZXldOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgc3VjY2VzczogXCJcIixcclxuICAgICAgICBidG5UZXh0OiBcIlJlZ2lzdGVyXCIsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvL2Rlc3RydWN0dXJlIHRoZSBzdGF0ZVxyXG4gIGxldCB7XHJcbiAgICBuYW1lLFxyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZCxcclxuICAgIGVycm9yLFxyXG4gICAgc3VjY2VzcyxcclxuICAgIGJ0blRleHQsXHJcbiAgICBsb2FkZWRDYXRlZ29yaWVzLFxyXG4gICAgY2F0ZWdvcmllcyxcclxuICB9ID0gZm9ybURhdGE7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKGxvYWRlZENhdGVnb3JpZXMsIFwibG9hZGVkXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaXNBdXRoKCkgJiYgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gbG9hZCBjYXRlZ29yaWVzIHdoZW4gY29tcG9uZW50IG1vdW50cyB1c2luZyB1c2VFZmZlY3RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZENhdGVnb3JpZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvYWRDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJfS9jYXRlZ29yaWVzYCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCBcInJlc3BvbnNlXCIpO1xyXG4gICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBsb2FkZWRDYXRlZ29yaWVzOiByZXNwb25zZS5kYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKGMpID0+ICgpID0+IHtcclxuICAgIC8vIHJldHVybiB0aGUgZmlyc3QgaW5kZXggb3IgLTFcclxuICAgIGNvbnN0IGNsaWNrZWRDYXRlZ29yeSA9IGNhdGVnb3JpZXMuaW5kZXhPZihjKTtcclxuICAgIGNvbnN0IGFsbCA9IFsuLi5jYXRlZ29yaWVzXTtcclxuXHJcbiAgICBpZiAoY2xpY2tlZENhdGVnb3J5ID09PSAtMSkge1xyXG4gICAgICBhbGwucHVzaChjKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsbC5zcGxpY2UoY2xpY2tlZENhdGVnb3J5LCAxKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiYWxsID4+IGNhdGVnb3JpZXNcIiwgYWxsKTtcclxuICAgIHNldFN0YXRlKHsgLi4uZm9ybURhdGEsIGNhdGVnb3JpZXM6IGFsbCwgc3VjY2VzczogXCJcIiwgZXJyb3I6IFwiXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0NhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhsb2FkQ2F0ZWdvcmllcywgXCJsb2FkZWRcIik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBsb2FkZWRDYXRlZ29yaWVzICYmXHJcbiAgICAgIGxvYWRlZENhdGVnb3JpZXMubWFwKChjLCBpKSA9PiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgbXktMVwiIGtleT17Yy5faWR9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUoYy5faWQpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPntjLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvL2NvbnZlcnQgaGFuZGxlIHN1Ym1pdCBmdW5jdGlvbiB0byBhc3luYyBmdW5jdGlvblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vdG8gc3RvcCByZWxvYWRpbmcgdGhlIHBhZ2Ugd2hlbiBzdWJtaXRcclxuXHJcbiAgICAvL3dlIGNhbiBzZXQgdGhlIGJ1dHRvbiB0ZXh0XHJcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBidG5UZXh0OiBcIlJlZ2lzdGVyaW5nXCIgfSk7XHJcbiAgICAvL3dlIHdpbGwgY2FsbCB0aGUgcmVnaXN0ZXIgZW5kIHBvaW50XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJfS9yZWdpc3RlcmAsIHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgIHN1Y2Nlc3M6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIGJ0blRleHQ6IFwiU3VibWl0dGVkXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgYnRuVGV4dDogXCJTdWJtaXR0ZWRcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhcImluIHJlZ2lzdGVyXCIpO1xyXG4gIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICgpID0+IChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTMgbWItM1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbmFtZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybURhdGEoXCJuYW1lXCIpfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTMgbWItM1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybURhdGEoXCJlbWFpbFwiKX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC0zIG1iLTNcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1EYXRhKFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtbC00XCI+Q2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgIDx1bCBzdHlsZT17eyBtYXhIZWlnaHQ6IFwiMTAwcHhcIiwgb3ZlcmZsb3dZOiBcInNjcm9sbFwiIH19PlxyXG4gICAgICAgICAge3Nob3dDYXRlZ29yaWVzKCl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC0zIG1iLTNcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCI+e2J0blRleHR9PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cclxuICAgICAgICA8aDI+UmVnaXN0ZXI8L2gyPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtzdWNjZXNzICYmIHNob3dTdWNjZXNzTWVzc2FnZShzdWNjZXNzKX1cclxuICAgICAgICB7ZXJyb3IgJiYgc2hvd0Vycm9yTWVzc2FnZShlcnJvcil9XHJcbiAgICAgICAge3JlZ2lzdGVyRm9ybSgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInNob3dFcnJvck1lc3NhZ2UiLCJzaG93U3VjY2Vzc01lc3NhZ2UiLCJBUEkiLCJ1c2VSb3V0ZXIiLCJpc0F1dGgiLCJSZWdpc3RlciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImJ0blRleHQiLCJjYXRlZ29yaWVzIiwibG9hZGVkQ2F0ZWdvcmllcyIsImhhbmRsZUZvcm1EYXRhIiwia2V5IiwiZXZlbnQiLCJwcmV2RGF0YSIsInRhcmdldCIsInZhbHVlIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJsb2FkQ2F0ZWdvcmllcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImhhbmRsZVRvZ2dsZSIsImMiLCJjbGlja2VkQ2F0ZWdvcnkiLCJpbmRleE9mIiwiYWxsIiwic3BsaWNlIiwic2V0U3RhdGUiLCJzaG93Q2F0ZWdvcmllcyIsIm1hcCIsImkiLCJsaSIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiX2lkIiwibGFiZWwiLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwibWVzc2FnZSIsInJlZ2lzdGVyRm9ybSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ1bCIsInN0eWxlIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwiYnV0dG9uIiwiaDIiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ })

});