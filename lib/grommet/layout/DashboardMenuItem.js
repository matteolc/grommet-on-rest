'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashboardMenuItem = function DashboardMenuItem(_ref) {
    var onClick = _ref.onClick,
        translate = _ref.translate;
    return _react2.default.createElement(_Anchor2.default, {
        path: '/dashboard',
        label: translate('aor.page.dashboard')
    });
};

DashboardMenuItem.propTypes = {
    onClick: _propTypes2.default.func,
    translate: _propTypes2.default.func.isRequired
};

exports.default = (0, _translate2.default)(DashboardMenuItem);
module.exports = exports['default'];