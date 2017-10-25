'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
    navActive: true, // start with nav navActive
    navEnabled: true, // start with nav disabled
    responsive: 'multiple',
    sidebarResponsive: 'multiple',
    viewVersion: 0
};

exports.default = function () {
    var previousState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    switch (type) {
        case _actions.NAV_ACTIVATE:
            return (0, _extends3.default)({}, previousState, {
                navActive: payload,
                activateOnMultiple: null
            });
        case _actions.NAV_ENABLE:
            return (0, _extends3.default)({}, previousState, { navEnabled: payload });
        case _actions.NAV_RESPONSIVE:
            var result = { responsive: payload };
            if (payload === 'single' && previousState.navActive) {
                result.navActive = false;
                result.activateOnMultiple = true;
            } else if (payload === 'multiple' && previousState.activateOnMultiple) {
                result.navActive = true;
            }
            return (0, _extends3.default)({}, previousState, result);
        case _actions.SIDEBAR_RESPONSIVE:
            return (0, _extends3.default)({}, previousState, { sidebarResponsive: payload });
        case _actions.REFRESH_VIEW:
            return (0, _extends3.default)({}, previousState, {
                viewVersion: previousState.viewVersion + 1
            });
        default:
            return previousState;
    }
};

module.exports = exports['default'];