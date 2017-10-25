'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormFieldComponent = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _actions = require('../../actions');

var _validate = require('./validate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRequired = function isRequired(validate) {
    if (validate === _validate.required) return true;
    if (Array.isArray(validate)) {
        return validate.includes(_validate.required);
    }
    return false;
};

var FormFieldComponent = exports.FormFieldComponent = function (_Component) {
    (0, _inherits3.default)(FormFieldComponent, _Component);

    function FormFieldComponent() {
        (0, _classCallCheck3.default)(this, FormFieldComponent);
        return (0, _possibleConstructorReturn3.default)(this, (FormFieldComponent.__proto__ || Object.getPrototypeOf(FormFieldComponent)).apply(this, arguments));
    }

    (0, _createClass3.default)(FormFieldComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.input.props.defaultValue) {
                var defaultValue = this.props.input.props.defaultValue;

                if (typeof defaultValue === 'function') {
                    defaultValue = this.props.input.props.defaultValue();
                }

                this.props.initializeForm((0, _defineProperty3.default)({}, this.props.input.props.source, defaultValue));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                input = _props.input,
                rest = (0, _objectWithoutProperties3.default)(_props, ['input']);


            if (input.props.addField) {
                if (input.props.addLabel) {
                    return _react2.default.createElement(
                        _reduxForm.Field,
                        (0, _extends3.default)({}, rest, input.props, {
                            name: input.props.source,
                            component: Labeled,
                            label: input.props.label,
                            isRequired: isRequired(input.props.validate)
                        }),
                        input
                    );
                }
                return _react2.default.createElement(_reduxForm.Field, (0, _extends3.default)({}, rest, input.props, {
                    name: input.props.source,
                    component: input.type,
                    isRequired: isRequired(input.props.validate)
                }));
            }
            return typeof input.type === 'string' ? input : _react2.default.cloneElement(input, rest);
        }
    }]);
    return FormFieldComponent;
}(_react.Component);

var FormField = (0, _reactRedux.connect)(undefined, { initializeForm: _actions.initializeForm })(FormFieldComponent);

FormField.displayName = 'FormField';

exports.default = FormField;