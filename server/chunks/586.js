"use strict";
exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(721);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(641);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(851);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Form = ({
  data,
  step,
  fields,
  placeholders,
  onSubmit,
  onReturn
}) => {
  // Get data from parent
  const {
    0: formData,
    1: setFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_objectSpread({}, data)); // React Hook Form

  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)(); // Handle form submit

  const handleButtonClick = dataFromForm => {
    onSubmit(_objectSpread({}, dataFromForm));
  }; // Handle go back button


  const handleGoBackClick = () => {
    onReturn();
  }; // Handle input change


  function handleChange(e) {
    //modify the state of the form data on input change
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [e.target.id]: _utils_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"].cleanData */ .Z.cleanData(e.target.id, e.target.value)
    }));
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "flex justify-between flex-col border border-slate-300 p-10 rounded-2xl shadow-xl",
    style: {
      minHeight: 450
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h1", {
        className: "text-4xl my-4 font-bold text-center",
        "data-testid": 'title',
        children: ["Step ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          className: "font-thin",
          children: step
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          style: {
            width: 50
          },
          className: "mt-4 border-2 px-4 mx-auto border-pink-500"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "mt-8",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("form", {
          id: `form-${step}`,
          className: "flex mb-6 flex-col space-y-2 items-center",
          children: fields.map((field, id) => {
            var _errors$field;

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex flex-col",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "flex justify-center",
                style: {
                  minWidth: 300
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread({
                  className: "ml-4 border-black border-b border-slate-200",
                  placeholder: placeholders[id],
                  "data-testid": _utils_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"].camelcase */ .Z.camelcase(field),
                  id: field,
                  type: _utils_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getType */ .Z.getType(field),
                  onInput: handleChange,
                  value: formData[field]
                }, register(field, _utils_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getOptions */ .Z.getOptions(field))))
              }, id), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("small", {
                  className: "text-red-500 text-xs italic",
                  children: _utils_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"].errorHandler */ .Z.errorHandler((_errors$field = errors[field]) === null || _errors$field === void 0 ? void 0 : _errors$field.type, field)
                })
              })]
            }, `outer-${id}`);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex justify-between",
          children: [step > 1 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
            name: "Back",
            clicked: handleGoBackClick
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
            name: "Submit",
            clicked: handleSubmit(handleButtonClick)
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(168);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Form__WEBPACK_IMPORTED_MODULE_2__]);
_Form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Page({
  currentStep,
  formSteps,
  formData,
  onSubmit,
  onReturn
}) {
  const handleFormStepSubmit = data => {
    onSubmit(data);
  };

  const handleGoBackSubmit = () => {
    onReturn();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "flex flex-col items-center justify-center min-h-screen py-2",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("title", {
        children: "Ticket Order Form"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Form__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        data: formData,
        step: currentStep,
        steps: formSteps.length,
        fields: formSteps[currentStep - 1].fields,
        placeholders: formSteps[currentStep - 1].placeholders,
        onSubmit: handleFormStepSubmit,
        onReturn: handleGoBackSubmit
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_formSteps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(422);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(534);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(126);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormContainer__WEBPACK_IMPORTED_MODULE_3__]);
_FormContainer__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Page = ({
  pageNr
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    formData,
    nextStep,
    updateNextStep,
    updateFormData,
    updateSubmit
  } = (0,_state__WEBPACK_IMPORTED_MODULE_4__/* .useFormContext */ .G)();

  const handleSubmit = data => {
    updateFormData(_objectSpread(_objectSpread({}, formData), data));
    updateSubmit(false);
    _data_formSteps__WEBPACK_IMPORTED_MODULE_1__/* .formSteps.length */ .w.length === pageNr ? router.push('/checkout') : (updateNextStep(nextStep + 1), router.push(`/step${nextStep + 1}`));
  };

  const handleReturn = () => {
    updateNextStep(nextStep - 1);
    router.push(`/step${nextStep - 1}`);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (pageNr) updateNextStep(pageNr);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_FormContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    currentStep: pageNr ? pageNr : nextStep,
    formSteps: _data_formSteps__WEBPACK_IMPORTED_MODULE_1__/* .formSteps */ .w,
    formData: formData,
    onSubmit: handleSubmit,
    onReturn: handleReturn
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ formSteps)
/* harmony export */ });
const formSteps = [{
  step: 1,
  fields: ['first name', 'last name', 'age'],
  placeholders: ['First name', 'Last name', 'Age']
}, {
  step: 2,
  fields: ['phone', 'email'],
  placeholders: ['Phone', 'E-mail']
}, {
  step: 3,
  fields: ['seat', 'food', 'allergies'],
  placeholders: ['Seat', 'Food', 'Allergies']
}];

/***/ })

};
;