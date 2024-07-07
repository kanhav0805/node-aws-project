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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _helpers_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/alert */ \"./helpers/alert.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/auth */ \"./helpers/auth.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Register = ()=>{\n    _s();\n    //state to handle the form data\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        error: \"\",\n        success: \"\",\n        btnText: \"Register\",\n        categories: [],\n        loadedCategories: []\n    });\n    //now we will add a function to update the state\n    const handleFormData = (key)=>(event)=>{\n            setFormData((prevData)=>{\n                return {\n                    ...prevData,\n                    [key]: event.target.value,\n                    error: \"\",\n                    success: \"\",\n                    btnText: \"Register\"\n                };\n            });\n        };\n    //destructure the state\n    let { name, email, password, error, success, btnText, loadedCategories, categories } = formData;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_6__.isAuth)() && router.push(\"/\");\n    }, []);\n    //now create a use effect to get the data\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        loadCategories();\n    }, [\n        success\n    ]);\n    const loadCategories = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_4__.API, \"/categories\"));\n            setFormData({\n                ...state,\n                loadedCategories: response.data\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleToggle = (categoryId)=>()=>{\n            // return the first index or -1\n            const clickedCategory = categories.findIndex((id)=>id === categoryId);\n            let all;\n            all = clickedCategory === -1 ? [\n                ...categories,\n                categoryId\n            ] : categories.filter((id)=>id !== categoryId);\n            setFormData({\n                ...state,\n                categories: all,\n                success: \"\",\n                error: \"\"\n            });\n        };\n    const showCategories = ()=>{\n        return loadedCategories && loadedCategories.map((c, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"list-unstyled my-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        onChange: handleToggle(c._id),\n                        className: \"mr-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"form-check-label\",\n                        children: c.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, c._id, true, {\n                fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, undefined));\n    };\n    //convert handle submit function to async function\n    const handleFormSubmit = async (event)=>{\n        event.preventDefault(); //to stop reloading the page when submit\n        //we can set the button text\n        setFormData({\n            ...formData,\n            btnText: \"Registering\"\n        });\n        //we will call the register end point\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_4__.API, \"/register\"), {\n                name,\n                email,\n                password\n            });\n            if (response) {\n                setFormData({\n                    ...formData,\n                    name: \"\",\n                    email: \"\",\n                    password: \"\",\n                    success: response.data.message,\n                    btnText: \"Submitted\"\n                });\n            }\n        } catch (error) {\n            console.log(error);\n            setFormData({\n                ...formData,\n                error: error.response.data.message,\n                btnText: \"Submitted\"\n            });\n        }\n    };\n    console.log(\"in register\");\n    const registerForm = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleFormSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name,\n                        type: \"text\",\n                        className: \"form-control\",\n                        placeholder: \"Type your name\",\n                        onChange: handleFormData(\"name\"),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 128,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Type your email\",\n                        onChange: handleFormData(\"email\"),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 138,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Type your password\",\n                        onChange: handleFormData(\"password\"),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 148,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-3\",\n                    children: showCategories()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 158,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mt-3 mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-outline-primary\",\n                        children: btnText\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 159,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n            lineNumber: 127,\n            columnNumber: 5\n        }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 167,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 168,\n                    columnNumber: 9\n                }, undefined),\n                success && (0,_helpers_alert__WEBPACK_IMPORTED_MODULE_3__.showSuccessMessage)(success),\n                error && (0,_helpers_alert__WEBPACK_IMPORTED_MODULE_3__.showErrorMessage)(error),\n                registerForm()\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n            lineNumber: 166,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\asus\\\\next-js-aws-project\\\\client\\\\pages\\\\register.js\",\n        lineNumber: 165,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Register, \"9nBsZt4U9upgCJbmgT6ntAusN9M=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ0M7Ozs7O2dCQUNBakQsV0FBV1gsa0VBQWtCQSxDQUFDVztnQkFDOUJELFNBQVNYLGdFQUFnQkEsQ0FBQ1c7Z0JBQzFCMEM7Ozs7Ozs7Ozs7OztBQUlUO0dBdEtNaEQ7O1FBcUNXRixrREFBU0E7OztLQXJDcEJFO0FBdUtOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlZ2lzdGVyLmpzP2EwOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHNob3dFcnJvck1lc3NhZ2UsIHNob3dTdWNjZXNzTWVzc2FnZSB9IGZyb20gXCIuLi9oZWxwZXJzL2FsZXJ0XCI7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGlzQXV0aCB9IGZyb20gXCIuLi9oZWxwZXJzL2F1dGhcIjtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gIC8vc3RhdGUgdG8gaGFuZGxlIHRoZSBmb3JtIGRhdGFcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgZXJyb3I6IFwiXCIsXHJcbiAgICBzdWNjZXNzOiBcIlwiLFxyXG4gICAgYnRuVGV4dDogXCJSZWdpc3RlclwiLFxyXG4gICAgY2F0ZWdvcmllczogW10sXHJcbiAgICBsb2FkZWRDYXRlZ29yaWVzOiBbXSxcclxuICB9KTtcclxuICAvL25vdyB3ZSB3aWxsIGFkZCBhIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc3RhdGVcclxuICBjb25zdCBoYW5kbGVGb3JtRGF0YSA9IChrZXkpID0+IChldmVudCkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXZEYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldkRhdGEsXHJcbiAgICAgICAgW2tleV06IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICBlcnJvcjogXCJcIixcclxuICAgICAgICBzdWNjZXNzOiBcIlwiLFxyXG4gICAgICAgIGJ0blRleHQ6IFwiUmVnaXN0ZXJcIixcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vZGVzdHJ1Y3R1cmUgdGhlIHN0YXRlXHJcbiAgbGV0IHtcclxuICAgIG5hbWUsXHJcbiAgICBlbWFpbCxcclxuICAgIHBhc3N3b3JkLFxyXG4gICAgZXJyb3IsXHJcbiAgICBzdWNjZXNzLFxyXG4gICAgYnRuVGV4dCxcclxuICAgIGxvYWRlZENhdGVnb3JpZXMsXHJcbiAgICBjYXRlZ29yaWVzLFxyXG4gIH0gPSBmb3JtRGF0YTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc0F1dGgoKSAmJiByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvL25vdyBjcmVhdGUgYSB1c2UgZWZmZWN0IHRvIGdldCB0aGUgZGF0YVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkQ2F0ZWdvcmllcygpO1xyXG4gIH0sIFtzdWNjZXNzXSk7XHJcblxyXG4gIGNvbnN0IGxvYWRDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJfS9jYXRlZ29yaWVzYCk7XHJcbiAgICAgIHNldEZvcm1EYXRhKHsgLi4uc3RhdGUsIGxvYWRlZENhdGVnb3JpZXM6IHJlc3BvbnNlLmRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoY2F0ZWdvcnlJZCkgPT4gKCkgPT4ge1xyXG4gICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG4gICAgY29uc3QgY2xpY2tlZENhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kSW5kZXgoKGlkKSA9PiBpZCA9PT0gY2F0ZWdvcnlJZCk7XHJcbiAgICBsZXQgYWxsO1xyXG4gICAgYWxsID1cclxuICAgICAgY2xpY2tlZENhdGVnb3J5ID09PSAtMVxyXG4gICAgICAgID8gWy4uLmNhdGVnb3JpZXMsIGNhdGVnb3J5SWRdXHJcbiAgICAgICAgOiBjYXRlZ29yaWVzLmZpbHRlcigoaWQpID0+IGlkICE9PSBjYXRlZ29yeUlkKTtcclxuXHJcbiAgICBzZXRGb3JtRGF0YSh7IC4uLnN0YXRlLCBjYXRlZ29yaWVzOiBhbGwsIHN1Y2Nlc3M6IFwiXCIsIGVycm9yOiBcIlwiIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgbG9hZGVkQ2F0ZWdvcmllcyAmJlxyXG4gICAgICBsb2FkZWRDYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIG15LTFcIiBrZXk9e2MuX2lkfT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKGMuX2lkKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj57Yy5uYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy9jb252ZXJ0IGhhbmRsZSBzdWJtaXQgZnVuY3Rpb24gdG8gYXN5bmMgZnVuY3Rpb25cclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvL3RvIHN0b3AgcmVsb2FkaW5nIHRoZSBwYWdlIHdoZW4gc3VibWl0XHJcblxyXG4gICAgLy93ZSBjYW4gc2V0IHRoZSBidXR0b24gdGV4dFxyXG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgYnRuVGV4dDogXCJSZWdpc3RlcmluZ1wiIH0pO1xyXG4gICAgLy93ZSB3aWxsIGNhbGwgdGhlIHJlZ2lzdGVyIGVuZCBwb2ludFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke0FQSX0vcmVnaXN0ZXJgLCB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICBzdWNjZXNzOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICBidG5UZXh0OiBcIlN1Ym1pdHRlZFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgIGJ0blRleHQ6IFwiU3VibWl0dGVkXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coXCJpbiByZWdpc3RlclwiKTtcclxuICBjb25zdCByZWdpc3RlckZvcm0gPSAoKSA9PiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC0zIG1iLTNcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1EYXRhKFwibmFtZVwiKX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC0zIG1iLTNcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgZW1haWxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1EYXRhKFwiZW1haWxcIil9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtRGF0YShcInBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTMgbWItM1wiPntzaG93Q2F0ZWdvcmllcygpfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiPntidG5UZXh0fTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XHJcbiAgICAgICAgPGgyPlJlZ2lzdGVyPC9oMj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7c3VjY2VzcyAmJiBzaG93U3VjY2Vzc01lc3NhZ2Uoc3VjY2Vzcyl9XHJcbiAgICAgICAge2Vycm9yICYmIHNob3dFcnJvck1lc3NhZ2UoZXJyb3IpfVxyXG4gICAgICAgIHtyZWdpc3RlckZvcm0oKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJzaG93RXJyb3JNZXNzYWdlIiwic2hvd1N1Y2Nlc3NNZXNzYWdlIiwiQVBJIiwidXNlUm91dGVyIiwiaXNBdXRoIiwiUmVnaXN0ZXIiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsInN1Y2Nlc3MiLCJidG5UZXh0IiwiY2F0ZWdvcmllcyIsImxvYWRlZENhdGVnb3JpZXMiLCJoYW5kbGVGb3JtRGF0YSIsImtleSIsImV2ZW50IiwicHJldkRhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJvdXRlciIsInB1c2giLCJsb2FkQ2F0ZWdvcmllcyIsInJlc3BvbnNlIiwiZ2V0Iiwic3RhdGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVRvZ2dsZSIsImNhdGVnb3J5SWQiLCJjbGlja2VkQ2F0ZWdvcnkiLCJmaW5kSW5kZXgiLCJpZCIsImFsbCIsImZpbHRlciIsInNob3dDYXRlZ29yaWVzIiwibWFwIiwiYyIsImkiLCJsaSIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiX2lkIiwibGFiZWwiLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwibWVzc2FnZSIsInJlZ2lzdGVyRm9ybSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iLCJoMiIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ })

});