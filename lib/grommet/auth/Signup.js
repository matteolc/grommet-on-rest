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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _App = require('grommet/components/App');

var _App2 = _interopRequireDefault(_App);

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

var _Paragraph = require('grommet/components/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Footer = require('grommet/components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Grommet = require('grommet/components/icons/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _authActions = require('../../actions/authActions');

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

var _Notification = require('../layout/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _RegistrationForm = require('./RegistrationForm');

var _RegistrationForm2 = _interopRequireDefault(_RegistrationForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Signup = function (_Component) {
  (0, _inherits3.default)(Signup, _Component);

  function Signup() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Signup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Signup.__proto__ || Object.getPrototypeOf(Signup)).call.apply(_ref, [this].concat(args))), _this), _this.signup = function (params) {
      return _this.props.userSignup(params, '/login');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Signup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isLoading = _props.isLoading,
          translate = _props.translate,
          theme = _props.theme,
          loginTexture = _props.loginTexture,
          title = _props.title;

      var error = '';

      return _react2.default.createElement(
        _App2.default,
        { centered: false },
        _react2.default.createElement(
          _Split2.default,
          { flex: 'left', separator: true },
          _react2.default.createElement(
            _Article2.default,
            null,
            _react2.default.createElement(
              _Section2.default,
              {
                full: true,
                colorIndex: theme,
                texture: loginTexture,
                pad: 'large',
                justify: 'center',
                align: 'center' },
              _react2.default.createElement(
                _Heading2.default,
                { tag: 'h1' },
                _react2.default.createElement(
                  'strong',
                  null,
                  title
                )
              ),
              _react2.default.createElement(
                _Paragraph2.default,
                { align: 'center', size: 'large' },
                'Development with Grommet is cool.'
              )
            )
          ),
          _react2.default.createElement(
            _Sidebar2.default,
            {
              justify: 'between',
              align: 'center',
              pad: 'none',
              size: 'large' },
            _react2.default.createElement('span', null),
            _react2.default.createElement(_RegistrationForm2.default, { onSubmit: this.signup }),
            _react2.default.createElement(
              _Footer2.default,
              {
                direction: 'row',
                size: 'small',
                pad: {
                  horizontal: 'medium',
                  vertical: 'small'
                } },
              _react2.default.createElement(
                'span',
                { className: 'secondary' },
                '\xA9 2017 Voxbox.io'
              )
            )
          )
        ),
        _react2.default.createElement(_Notification2.default, null)
      );
    }
  }]);
  return Signup;
}(_react.Component);

Signup.propTypes = {
  authClient: _propTypes2.default.func,
  previousRoute: _propTypes2.default.string,
  translate: _propTypes2.default.func.isRequired,
  userLogin: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoading: state.admin.loading > 0
  };
};

var enhance = (0, _compose2.default)(_translate2.default, (0, _reactRedux.connect)(mapStateToProps, { userSignup: _authActions.userSignup }));

exports.default = enhance(Signup);
module.exports = exports['default'];