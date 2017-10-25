'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../button');

var _Footer = require('grommet/components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var valueOrDefault = function valueOrDefault(value, defaultValue) {
    return typeof value === 'undefined' ? defaultValue : value;
};

var Toolbar = function Toolbar(_ref) {
    var invalid = _ref.invalid,
        submitOnEnter = _ref.submitOnEnter,
        handleSubmitWithRedirect = _ref.handleSubmitWithRedirect,
        children = _ref.children;
    return _react2.default.createElement(
        _Footer2.default,
        { pad: { vertical: 'medium' } },
        _react.Children.count(children) === 0 ? _react2.default.createElement(_button.SaveButton, {
            handleSubmitWithRedirect: handleSubmitWithRedirect,
            invalid: invalid,
            submitOnEnter: submitOnEnter
        }) : _react.Children.map(children, function (button) {
            return button ? _react2.default.cloneElement(button, {
                handleSubmitWithRedirect: handleSubmitWithRedirect,
                invalid: invalid,
                submitOnEnter: valueOrDefault(button.props.submitOnEnter, submitOnEnter)
            }) : null;
        })
    );
};

Toolbar.propTypes = {
    children: _propTypes2.default.node,
    handleSubmitWithRedirect: _propTypes2.default.func,
    invalid: _propTypes2.default.bool,
    submitOnEnter: _propTypes2.default.bool
};

Toolbar.defaultProps = {
    submitOnEnter: true
};

exports.default = Toolbar;
module.exports = exports['default'];