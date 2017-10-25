'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _lodash = require('lodash.pickby');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultCacheDuration = 10 * 60 * 1000; // ten minutes

exports.default = function () {
    var newRecordIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var oldRecordFetchedAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var now = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
    var cacheDuration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultCacheDuration;

    // prepare new records and timestamp them
    var newFetchedAt = newRecordIds.reduce(function (prev, recordId) {
        return (0, _extends4.default)({}, prev, (0, _defineProperty3.default)({}, recordId, now));
    }, {});
    // remove outdated entry
    var latestValidDate = new Date();
    latestValidDate.setTime(latestValidDate.getTime() - cacheDuration);

    var stillValidFetchedAt = (0, _lodash2.default)(oldRecordFetchedAt, function (date) {
        return date > latestValidDate;
    });

    return (0, _extends4.default)({}, stillValidFetchedAt, newFetchedAt);
};

module.exports = exports['default'];