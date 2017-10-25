'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _Value = require('grommet/components/Value');

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValueField = function ValueField(_ref) {
    var source = _ref.source,
        _ref$record = _ref.record,
        record = _ref$record === undefined ? {} : _ref$record,
        elStyle = _ref.elStyle,
        onActive = _ref.onActive,
        options = _ref.options,
        label = _ref.label;


    return _react2.default.createElement(_Value2.default, (0, _extends3.default)({
        value: (0, _lodash2.default)(record, source),
        label: label
    }, options));
};

ValueField.propTypes = {
    addLabel: _propTypes2.default.bool,
    elStyle: _propTypes2.default.object,
    label: _propTypes2.default.string,
    record: _propTypes2.default.object,
    source: _propTypes2.default.string.isRequired,
    options: _propTypes2.default.shape({
        reverse: _propTypes2.default.bool,
        responsive: _propTypes2.default.bool,
        units: _propTypes2.default.string,
        icon: _propTypes2.default.object,
        trendIcon: _propTypes2.default.object,
        size: _propTypes2.default.string
    })
};

var PureValueField = (0, _pure2.default)(ValueField);

PureValueField.defaultProps = {
    addLabel: false,
    options: {
        reverse: false,
        responsive: false,
        size: 'medium'
    }
};

exports.default = PureValueField;
module.exports = exports['default'];