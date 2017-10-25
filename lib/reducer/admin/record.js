'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _formActions = require('../../actions/formActions');

var _reactRouterRedux = require('react-router-redux');

var _lodash = require('lodash.set');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

exports.default = function () {
    var previousState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    if (type === _reactRouterRedux.LOCATION_CHANGE) {
        return initialState;
    }

    if (type !== _formActions.INITIALIZE_FORM) {
        return previousState;
    }

    return Object.keys(payload).reduce(function (acc, key) {
        // Ensure we correctly set default values for path with dot notation
        (0, _lodash2.default)(acc, key, payload[key]);
        return acc;
    }, (0, _extends3.default)({}, previousState));
};

module.exports = exports['default'];