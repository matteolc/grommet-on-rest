'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reselect = require('reselect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDefaultValues = function getDefaultValues() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaultValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var globalDefaultValue = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    return (0, _extends3.default)({}, globalDefaultValue, defaultValues, data);
};

var getRecord = function getRecord(state, props) {
    return props.record;
};
var getDefaultValue = function getDefaultValue(state, props) {
    return props.defaultValue;
};
var getDefaultValuesFromState = function getDefaultValuesFromState(state) {
    return state.admin.record;
};

exports.default = (0, _reselect.createSelector)(getRecord, getDefaultValue, getDefaultValuesFromState, function (record, defaultValue, defaultValues) {
    return getDefaultValues(record, defaultValue, defaultValues);
});
module.exports = exports['default'];