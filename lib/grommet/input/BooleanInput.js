'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CheckBox = require('grommet/components/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _FieldTitle = require('../../util/FieldTitle');

var _FieldTitle2 = _interopRequireDefault(_FieldTitle);

var _FormField = require('grommet/components/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BooleanInput = function (_Component) {
    (0, _inherits3.default)(BooleanInput, _Component);

    function BooleanInput() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, BooleanInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BooleanInput.__proto__ || Object.getPrototypeOf(BooleanInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleToggle = function (event) {
            var value = _this.props.input.value;
            _this.props.input.onChange(!value);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(BooleanInput, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                input = _props.input,
                isRequired = _props.isRequired,
                label = _props.label,
                source = _props.source,
                elStyle = _props.elStyle,
                resource = _props.resource,
                options = _props.options;


            return _react2.default.createElement(
                _FormField2.default,
                {
                    htmlFor: source,
                    label: _react2.default.createElement(_FieldTitle2.default, {
                        label: label,
                        source: source,
                        resource: resource
                    }) },
                _react2.default.createElement(_CheckBox2.default, (0, _extends3.default)({
                    defaultChecked: !!input.value,
                    onChange: this.handleToggle
                }, options))
            );
        }
    }]);
    return BooleanInput;
}(_react.Component);

BooleanInput.propTypes = {
    addField: _propTypes2.default.bool.isRequired,
    elStyle: _propTypes2.default.object,
    input: _propTypes2.default.object,
    isRequired: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    resource: _propTypes2.default.string,
    source: _propTypes2.default.string,
    options: _propTypes2.default.object
};

BooleanInput.defaultProps = {
    addField: true,
    options: {}
};

exports.default = BooleanInput;
module.exports = exports['default'];