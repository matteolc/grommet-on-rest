'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Permission = function Permission() {
    return _react2.default.createElement(
        'span',
        null,
        '<Permission> elements are for configuration only and should not be rendered'
    );
};

Permission.propTypes = {
    children: _propTypes2.default.node.isRequired,
    exact: _propTypes2.default.bool,
    value: _propTypes2.default.any,
    resolve: _propTypes2.default.any
};

exports.default = Permission;
module.exports = exports['default'];