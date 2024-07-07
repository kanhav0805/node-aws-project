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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _helpers_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/alert */ \"./helpers/alert.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/auth */ \"./helpers/auth.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Register = ()=>{\n    _s();\n    //state to handle the form data\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        error: \"\",\n        success: \"\",\n        btnText: \"Register\",\n        categories: [],\n        loadedCategories: []\n    });\n    //now we will add a function to update the state\n    const handleFormData = (key)=>(event)=>{\n            setFormData((prevData)=>{\n                return {\n                    ...prevData,\n                    [key]: event.target.value,\n                    error: \"\",\n                    success: \"\",\n                    btnText: \"Register\"\n                };\n            });\n        };\n    //destructure the state\n    let { name, email, password, error, success, btnText, loadedCategories, categories } = formData;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_6__.isAuth)() && router.push(\"/\");\n    }, []);\n    //now create a use effect to get the data\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        loadCategories();\n    }, [\n        success\n    ]);\n    const loadCategories = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_4__.API, \"/categories\"));\n            setFormData({\n                ...state,\n                loadedCategories: response.data\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleToggle = (categoryId)=>()=>{\n            // return the first index or -1\n            const clickedCategory = categories.findIndex((id)=>id === categoryId);\n            let all;\n            all = clickedCategory === -1 ? [\n                ...categories,\n                categoryId\n            ] : categories.filter((id)=>id !== categoryId);\n            setFormData({\n                ...state,\n                categories: all,\n                success: \"\",\n                error: \"\"\n            });\n        };\n    const showCategories = ()=>{\n        return loadedCategories && loadedCategories.map((c, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"list-unstyled my-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        onChange: handleToggle(c._id),\n                        className: \"mr-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"form-check-label\",\n                        children: c.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, c._id, true, {\n                fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, undefined));\n    };\n    //convert handle submit function to async function\n    const handleFormSubmit = async (event)=>{\n        event.preventDefault(); //to stop reloading the page when submit\n        //we can set the button text\n        setFormData({\n            ...formData,\n            btnText: \"Registering\"\n        });\n        //we will call the register end point\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_4__.API, \"/register\"), {\n                name,\n                email,\n                password\n            });\n            if (response) {\n                setFormData({\n                    ...formData,\n                    name: \"\",\n                    email: \"\",\n                    password: \"\",\n                    success: response.data.message,\n                    btnText: \"Submitted\"\n                });\n            }\n        } catch (error) {\n            console.log(error);\n            setFormData({\n                ...formData,\n                error: error.response.data.message,\n                btnText: \"Submitted\"\n            });\n        }\n    };\n    console.log(\"in register\");\n    const registerForm = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleFormSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name,\n                        type: \"text\",\n                        className: \"form-control\",\n                        placeholder: \"Type your name\",\n                        onChange: handleFormData(\"name\"),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 128,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Type your email\",\n                        onChange: handleFormData(\"email\"),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 138,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Type your password\",\n                        onChange: handleFormData(\"password\"),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 148,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-outline-primary\",\n                        children: btnText\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 159,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n            lineNumber: 127,\n            columnNumber: 5\n        }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 167,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 168,\n                    columnNumber: 9\n                }, undefined),\n                success && (0,_helpers_alert__WEBPACK_IMPORTED_MODULE_3__.showSuccessMessage)(success),\n                error && (0,_helpers_alert__WEBPACK_IMPORTED_MODULE_3__.showErrorMessage)(error),\n                registerForm()\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n            lineNumber: 166,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n        lineNumber: 165,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Register, \"9nBsZt4U9upgCJbmgT6ntAusN9M=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5QkQsU0FBU1gsZ0VBQWdCQSxDQUFDVztnQkFDMUIwQzs7Ozs7Ozs7Ozs7O0FBSVQ7R0F0S01oRDs7UUFxQ1dGLGtEQUFTQTs7O0tBckNwQkU7QUF1S04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanM/YTA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgc2hvd0Vycm9yTWVzc2FnZSwgc2hvd1N1Y2Nlc3NNZXNzYWdlIH0gZnJvbSBcIi4uL2hlbHBlcnMvYWxlcnRcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgaXNBdXRoIH0gZnJvbSBcIi4uL2hlbHBlcnMvYXV0aFwiO1xyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgLy9zdGF0ZSB0byBoYW5kbGUgdGhlIGZvcm0gZGF0YVxyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBlcnJvcjogXCJcIixcclxuICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICBidG5UZXh0OiBcIlJlZ2lzdGVyXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgIGxvYWRlZENhdGVnb3JpZXM6IFtdLFxyXG4gIH0pO1xyXG4gIC8vbm93IHdlIHdpbGwgYWRkIGEgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBzdGF0ZVxyXG4gIGNvbnN0IGhhbmRsZUZvcm1EYXRhID0gKGtleSkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRGb3JtRGF0YSgocHJldkRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wcmV2RGF0YSxcclxuICAgICAgICBba2V5XTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICAgICAgYnRuVGV4dDogXCJSZWdpc3RlclwiLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy9kZXN0cnVjdHVyZSB0aGUgc3RhdGVcclxuICBsZXQge1xyXG4gICAgbmFtZSxcclxuICAgIGVtYWlsLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgICBlcnJvcixcclxuICAgIHN1Y2Nlc3MsXHJcbiAgICBidG5UZXh0LFxyXG4gICAgbG9hZGVkQ2F0ZWdvcmllcyxcclxuICAgIGNhdGVnb3JpZXMsXHJcbiAgfSA9IGZvcm1EYXRhO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlzQXV0aCgpICYmIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vbm93IGNyZWF0ZSBhIHVzZSBlZmZlY3QgdG8gZ2V0IHRoZSBkYXRhXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRDYXRlZ29yaWVzKCk7XHJcbiAgfSwgW3N1Y2Nlc3NdKTtcclxuXHJcbiAgY29uc3QgbG9hZENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUEl9L2NhdGVnb3JpZXNgKTtcclxuICAgICAgc2V0Rm9ybURhdGEoeyAuLi5zdGF0ZSwgbG9hZGVkQ2F0ZWdvcmllczogcmVzcG9uc2UuZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IChjYXRlZ29yeUlkKSA9PiAoKSA9PiB7XHJcbiAgICAvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcbiAgICBjb25zdCBjbGlja2VkQ2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmRJbmRleCgoaWQpID0+IGlkID09PSBjYXRlZ29yeUlkKTtcclxuICAgIGxldCBhbGw7XHJcbiAgICBhbGwgPVxyXG4gICAgICBjbGlja2VkQ2F0ZWdvcnkgPT09IC0xXHJcbiAgICAgICAgPyBbLi4uY2F0ZWdvcmllcywgY2F0ZWdvcnlJZF1cclxuICAgICAgICA6IGNhdGVnb3JpZXMuZmlsdGVyKChpZCkgPT4gaWQgIT09IGNhdGVnb3J5SWQpO1xyXG5cclxuICAgIHNldEZvcm1EYXRhKHsgLi4uc3RhdGUsIGNhdGVnb3JpZXM6IGFsbCwgc3VjY2VzczogXCJcIiwgZXJyb3I6IFwiXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0NhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBsb2FkZWRDYXRlZ29yaWVzICYmXHJcbiAgICAgIGxvYWRlZENhdGVnb3JpZXMubWFwKChjLCBpKSA9PiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgbXktMVwiIGtleT17Yy5faWR9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUoYy5faWQpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPntjLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvL2NvbnZlcnQgaGFuZGxlIHN1Ym1pdCBmdW5jdGlvbiB0byBhc3luYyBmdW5jdGlvblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vdG8gc3RvcCByZWxvYWRpbmcgdGhlIHBhZ2Ugd2hlbiBzdWJtaXRcclxuXHJcbiAgICAvL3dlIGNhbiBzZXQgdGhlIGJ1dHRvbiB0ZXh0XHJcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBidG5UZXh0OiBcIlJlZ2lzdGVyaW5nXCIgfSk7XHJcbiAgICAvL3dlIHdpbGwgY2FsbCB0aGUgcmVnaXN0ZXIgZW5kIHBvaW50XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJfS9yZWdpc3RlcmAsIHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgIHN1Y2Nlc3M6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIGJ0blRleHQ6IFwiU3VibWl0dGVkXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgYnRuVGV4dDogXCJTdWJtaXR0ZWRcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhcImluIHJlZ2lzdGVyXCIpO1xyXG4gIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICgpID0+IChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTMgbWItM1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbmFtZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybURhdGEoXCJuYW1lXCIpfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTMgbWItM1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybURhdGEoXCJlbWFpbFwiKX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC0zIG1iLTNcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1EYXRhKFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTMgbWItM1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIj57YnRuVGV4dH08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxyXG4gICAgICAgIDxoMj5SZWdpc3RlcjwvaDI+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge3N1Y2Nlc3MgJiYgc2hvd1N1Y2Nlc3NNZXNzYWdlKHN1Y2Nlc3MpfVxyXG4gICAgICAgIHtlcnJvciAmJiBzaG93RXJyb3JNZXNzYWdlKGVycm9yKX1cclxuICAgICAgICB7cmVnaXN0ZXJGb3JtKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwic2hvd0Vycm9yTWVzc2FnZSIsInNob3dTdWNjZXNzTWVzc2FnZSIsIkFQSSIsInVzZVJvdXRlciIsImlzQXV0aCIsIlJlZ2lzdGVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJzdWNjZXNzIiwiYnRuVGV4dCIsImNhdGVnb3JpZXMiLCJsb2FkZWRDYXRlZ29yaWVzIiwiaGFuZGxlRm9ybURhdGEiLCJrZXkiLCJldmVudCIsInByZXZEYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJyb3V0ZXIiLCJwdXNoIiwibG9hZENhdGVnb3JpZXMiLCJyZXNwb25zZSIsImdldCIsInN0YXRlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVUb2dnbGUiLCJjYXRlZ29yeUlkIiwiY2xpY2tlZENhdGVnb3J5IiwiZmluZEluZGV4IiwiaWQiLCJhbGwiLCJmaWx0ZXIiLCJzaG93Q2F0ZWdvcmllcyIsIm1hcCIsImMiLCJpIiwibGkiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsIl9pZCIsImxhYmVsIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsIm1lc3NhZ2UiLCJyZWdpc3RlckZvcm0iLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIiwiaDIiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ })

});