"use strict";
exports.id = 438;
exports.ids = [438];
exports.modules = {

/***/ 721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const Button = ({
  name,
  clicked
}) => {
  const commonBtnCSS = 'mt-8 py-2 px-4 border rounded focus:outline-none';
  const diffBtnCSS = name === 'Back' ? 'bg-white hover:bg-gray-100 text-gray-800 font-semibold border-gray-400 shadow' : 'justify-self-end bg-pink-500 hover:bg-pink-700 text-white font-bold border-pink-700';
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
    className: `${commonBtnCSS} ${diffBtnCSS}`,
    "data-testid": name === 'Back' ? 'back' : 'submit',
    onClick: clicked,
    children: name
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Footer = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
  className: "fixed h-10 bottom-0 mx-auto opacity-50",
  children: ["Built by\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
    className: "italic",
    href: "https://devskills.co?utm_source=challenge-boilerplate",
    target: "_blank",
    title: "DevSkills",
    rel: "noopener noreferrer",
    children: "DevSkills"
  }), ", task implementation by\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
    className: "italic",
    href: "https://github.com/ivnteterin",
    title: "@ivnteterin - GitHub",
    target: "_blank",
    rel: "noopener noreferrer",
    children: "ivnteterin"
  }), "."]
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const utils = {
  getType: field => field === 'age' ? 'number' : 'text',
  capitalise: str => str.charAt(0).toUpperCase() + str.slice(1),
  camelcase: str => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  },
  errorHandler: function (type, field) {
    let errorMsg = '';
    const fieldCapitalised = this.capitalise(field);

    switch (type) {
      case 'required':
        errorMsg = field === 'phone' ? `${fieldCapitalised} number is a required field ` : field === 'age' ? ` ${fieldCapitalised} must be a number` : `${fieldCapitalised} is a required field `;
        break;

      case 'pattern':
        errorMsg = field === 'email' ? ` ${fieldCapitalised} should have correct format ` : ` ${fieldCapitalised} should not contain ${field === 'age' || field === 'phone' ? 'letters' : 'numbers'} `;
        break;

      case 'min':
        errorMsg = ` ${fieldCapitalised} should be positive `;
        break;

      default:
        errorMsg = '';
        break;
    }

    return errorMsg;
  },
  getOptions: field => {
    let validatorOps = {};

    switch (field) {
      case 'first name':
      case 'last name':
        validatorOps = {
          required: true,
          pattern: /^[A-Za-z]+$/i
        };
        break;

      case 'age':
        validatorOps = {
          required: true,
          pattern: /^[0-9]+$/i,
          min: 0
        };
        break;

      case 'email':
        validatorOps = {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        };
        break;

      case 'phone':
        validatorOps = {
          required: true,
          pattern: /^\+\d[\d\s]+/
        };
        break;

      default:
        validatorOps = {
          required: true
        };
        break;
    }

    return validatorOps;
  },
  cleanData: (type, str) => {
    let newStr = '';

    switch (type) {
      case 'email':
        newStr = str.toLowerCase();
        break;

      case 'seat':
        newStr = str.toUpperCase();
        break;

      case 'phone':
        newStr = str.includes('+') ? str : `+${str}`;
        break;

      default:
        newStr = str;
        break;
    }

    return newStr;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils);

/***/ })

};
;