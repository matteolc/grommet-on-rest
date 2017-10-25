'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.datify = undefined;

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

var _DateTime = require('grommet/components/DateTime');

var _DateTime2 = _interopRequireDefault(_DateTime);

var _FieldTitle = require('../../util/FieldTitle');

var _FieldTitle2 = _interopRequireDefault(_FieldTitle);

var _FormField = require('grommet/components/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var datify = exports.datify = function datify(input) {
    if (!input) {
        return null;
    }

    var date = input instanceof Date ? input : new Date(input);
    if (isNaN(date)) {
        throw new Error('Invalid date: ' + input);
    }

    return date;
};

var DateInput = function (_Component) {
    (0, _inherits3.default)(DateInput, _Component);

    function DateInput() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DateInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (date) {
            _this.props.input.onChange(datify(date));
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DateInput, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                input = _props.input,
                isRequired = _props.isRequired,
                label = _props.label,
                meta = _props.meta,
                options = _props.options,
                source = _props.source,
                elStyle = _props.elStyle,
                resource = _props.resource;

            if (typeof meta === 'undefined') {
                throw new Error("The DateInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/admin-on-rest/Inputs.html#writing-your-own-input-component for details.");
            }
            var touched = meta.touched,
                error = meta.error;


            return _react2.default.createElement(
                _FormField2.default,
                {
                    htmlFor: source,
                    error: touched && error,
                    label: _react2.default.createElement(_FieldTitle2.default, {
                        label: label,
                        source: source,
                        resource: resource
                    })
                },
                _react2.default.createElement(_DateTime2.default, (0, _extends3.default)({}, input, {
                    id: source,
                    value: datify(input.value),
                    onChange: this.onChange
                }, options))
            );
        }
    }]);
    return DateInput;
}(_react.Component);

DateInput.propTypes = {
    addField: _propTypes2.default.bool.isRequired,
    elStyle: _propTypes2.default.object,
    input: _propTypes2.default.object,
    isRequired: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    meta: _propTypes2.default.object,
    options: _propTypes2.default.object,
    resource: _propTypes2.default.string,
    source: _propTypes2.default.string
};

DateInput.defaultProps = {
    addField: true,
    options: {}
};

exports.default = DateInput;