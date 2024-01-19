"use strict";
exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useFormContext),
/* harmony export */   "R": () => (/* binding */ FormProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const FormContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const useFormContext = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FormContext);
};
const FormProvider = ({
  children
}) => {
  const {
    0: formData,
    1: setFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const {
    0: nextStep,
    1: setNextStep
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: submitted,
    1: setSubmit
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const updateFormData = data => {
    setFormData(data);
  };

  const updateSubmit = submit => {
    setSubmit(submit);
  };

  const updateNextStep = step => {
    setNextStep(step);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(FormContext.Provider, {
    value: {
      formData,
      nextStep,
      submitted,
      updateFormData,
      updateNextStep,
      updateSubmit
    },
    children: children
  });
};

/***/ })

};
;