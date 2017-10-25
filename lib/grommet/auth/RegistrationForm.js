'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _Split = require('grommet/components/Split');

var _Split2 = _interopRequireDefault(_Split);

var _Sidebar = require('grommet/components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _LoginForm = require('grommet/components/LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _Article = require('grommet/components/Article');

var _Article2 = _interopRequireDefault(_Article);

var _Section = require('grommet/components/Section');

var _Section2 = _interopRequireDefault(_Section);

var _Heading = require('grommet/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Paragraph = require('grommet/components/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Footer = require('grommet/components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Grommet = require('grommet/components/icons/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _Form = require('grommet/components/Form');

var _Form2 = _interopRequireDefault(_Form);

var _FormFields = require('grommet/components/FormFields');

var _FormFields2 = _interopRequireDefault(_FormFields);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _FormField = require('grommet/components/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _TextInput = require('grommet/components/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _PasswordInput = require('grommet/components/PasswordInput');

var _PasswordInput2 = _interopRequireDefault(_PasswordInput);

var _Rest = require('grommet/utils/Rest');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Register = function (_React$PureComponent) {
    (0, _inherits3.default)(Register, _React$PureComponent);

    function Register() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Register);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Register.__proto__ || Object.getPrototypeOf(Register)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            email: undefined,
            username: undefined,
            password: undefined,
            password_confirmation: undefined
        }, _this.onSubmit = function (event) {
            event.preventDefault();
            var _this$state = _this.state,
                email = _this$state.email,
                username = _this$state.username,
                password = _this$state.password,
                password_confirmation = _this$state.password_confirmation;

            if (email && username && password && password_confirmation) {
                email = email.trim();
                _this.props.onSubmit({ email: email, username: username, password: password, password_confirmation: password_confirmation });
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Register, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.emailRef) {
                this.usernameRef.focus();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _Form2.default,
                { pad: 'medium' },
                _react2.default.createElement(
                    _Box2.default,
                    { align: 'start' },
                    _react2.default.createElement(
                        _Heading2.default,
                        { strong: true },
                        'Register account'
                    ),
                    _react2.default.createElement(
                        _Paragraph2.default,
                        { align: 'center', margin: 'none' },
                        'And unlock the magic'
                    )
                ),
                _react2.default.createElement(
                    'fieldset',
                    null,
                    _react2.default.createElement(
                        _FormField2.default,
                        { label: 'Username' },
                        _react2.default.createElement('input', {
                            type: 'text',
                            ref: function ref(_ref2) {
                                return _this2.usernameRef = _ref2;
                            },
                            value: this.state.username,
                            onChange: function onChange(event) {
                                _this2.setState({ username: event.target.value });
                            } })
                    ),
                    _react2.default.createElement(
                        _FormField2.default,
                        { label: 'Email' },
                        _react2.default.createElement('input', {
                            type: 'text',
                            ref: function ref(_ref3) {
                                return _this2.emailRef = _ref3;
                            },
                            value: this.state.email,
                            onChange: function onChange(event) {
                                _this2.setState({ email: event.target.value });
                            } })
                    ),
                    _react2.default.createElement(
                        _FormField2.default,
                        { label: 'Password' },
                        _react2.default.createElement(_PasswordInput2.default, {
                            onChange: function onChange(event) {
                                _this2.setState({ password: event.target.value });
                            } })
                    ),
                    _react2.default.createElement(
                        _FormField2.default,
                        { label: 'Password confirmation' },
                        _react2.default.createElement(_PasswordInput2.default, {
                            onChange: function onChange(event) {
                                _this2.setState({ password_confirmation: event.target.value });
                            } })
                    )
                ),
                _react2.default.createElement(
                    _Footer2.default,
                    {
                        direction: 'column',
                        size: 'small',
                        align: 'stretch',
                        pad: {
                            vertical: 'none',
                            between: 'medium'
                        } },
                    _react2.default.createElement(_Button2.default, {
                        label: 'Submit',
                        type: 'submit',
                        primary: true,
                        fill: 'stretch',
                        onClick: this.onSubmit })
                )
            );
        }
    }]);
    return Register;
}(_react2.default.PureComponent);

exports.default = Register;
module.exports = exports['default'];