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

var _Toast = require('grommet/components/Toast');

var _Toast2 = _interopRequireDefault(_Toast);

var _notificationActions = require('../../actions/notificationActions');

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = function (_React$Component) {
    (0, _inherits3.default)(Notification, _React$Component);

    function Notification() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Notification);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.handleRequestClose = function () {
            _this.props.hideNotification();
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Notification, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                type = _props.type,
                translate = _props.translate,
                message = _props.message;

            var status = type;
            if (type === 'confirm' || type === 'info') {
                status = 'ok';
            }
            return message ? _react2.default.createElement(
                _Toast2.default,
                {
                    onClose: this.handleRequestClose,
                    status: status
                },
                translate(message)
            ) : null;
        }
    }]);
    return Notification;
}(_react2.default.Component);

Notification.propTypes = {
    message: _propTypes2.default.string,
    type: _propTypes2.default.string.isRequired,
    hideNotification: _propTypes2.default.func.isRequired,
    translate: _propTypes2.default.func.isRequired
};

Notification.defaultProps = {
    type: 'confirm'
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        message: state.admin.notification.text,
        type: state.admin.notification.type
    };
};

exports.default = (0, _translate2.default)((0, _reactRedux.connect)(mapStateToProps, { hideNotification: _notificationActions.hideNotification })(Notification));
module.exports = exports['default'];