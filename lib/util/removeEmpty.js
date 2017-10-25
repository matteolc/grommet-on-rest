'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isObject = function isObject(obj) {
    return obj && Object.prototype.toString.call(obj) === '[object Object]';
};
var isEmpty = function isEmpty(obj) {
    return obj instanceof Date ? false : obj === '' || obj === null || (0, _recompose.shallowEqual)(obj, {});
};

var removeEmpty = function removeEmpty(object) {
    return Object.keys(object).reduce(function (acc, key) {
        var child = object[key];

        if (isObject(object[key])) {
            child = removeEmpty(object[key]);
        }

        return isEmpty(child) ? acc : (0, _extends4.default)({}, acc, (0, _defineProperty3.default)({}, key, child));
    }, {});
};

exports.default = removeEmpty;
module.exports = exports['default'];