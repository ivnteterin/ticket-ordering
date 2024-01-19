"use strict";
(() => {
var exports = {};
exports.id = 456;
exports.ids = [456];
exports.modules = {

/***/ 900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ helloAPI)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function helloAPI(req, res) {
  res.status(200).json({
    result: 'pong'
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(900));
module.exports = __webpack_exports__;

})();