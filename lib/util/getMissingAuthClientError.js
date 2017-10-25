"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var errorMessage = function errorMessage(component) {
    return "\n    You specified a function as the child of the " + component + " component. \n    This requires you to set up an authClient as well.\n    See the documentation: https://marmelab.com/admin-on-rest/Authorization.html\n";
};

exports.default = errorMessage;
module.exports = exports["default"];