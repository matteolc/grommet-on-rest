'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SaveButton = undefined;

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

var _reactRedux = require('react-redux');

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Save = require('grommet/components/icons/base/Save');

var _Save2 = _interopRequireDefault(_Save);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SaveButton = exports.SaveButton = function (_Component) {
    (0, _inherits3.default)(SaveButton, _Component);

    function SaveButton() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SaveButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SaveButton.__proto__ || Object.getPrototypeOf(SaveButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
            if (_this.props.saving) {
                // prevent double submission
                e.preventDefault();
            } else {
                // always submit form explicitly regardless of button type
                var _this$props = _this.props,
                    handleSubmitWithRedirect = _this$props.handleSubmitWithRedirect,
                    redirect = _this$props.redirect;

                if (e) {
                    e.preventDefault();
                }
                handleSubmitWithRedirect(redirect)();
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SaveButton, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                saving = _props.saving,
                _props$label = _props.label,
                label = _props$label === undefined ? 'aor.action.save' : _props$label,
                _props$raised = _props.raised,
                raised = _props$raised === undefined ? true : _props$raised,
                translate = _props.translate,
                submitOnEnter = _props.submitOnEnter,
                redirect = _props.redirect,
                plain = _props.plain,
                options = _props.options;

            var type = submitOnEnter ? 'submit' : 'button';
            return _react2.default.createElement(_Button2.default, (0, _extends3.default)({
                plain: plain,
                type: type,
                label: label && translate(label),
                icon: _react2.default.createElement(_Save2.default, null),
                onClick: this.handleClick
            }, options));
        }
    }]);
    return SaveButton;
}(_react.Component);

SaveButton.propTypes = {
    label: _propTypes2.default.string,
    raised: _propTypes2.default.bool,
    saving: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
    translate: _propTypes2.default.func.isRequired,
    submitOnEnter: _propTypes2.default.bool,
    handleSubmitWithRedirect: _propTypes2.default.func,
    redirect: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool])
};

SaveButton.defaultProps = {
    handleSubmitWithRedirect: function handleSubmitWithRedirect() {
        return function () {};
    },
    plain: true,
    options: {
        align: "start"
    }
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        saving: state.admin.saving
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _translate2.default)(SaveButton));