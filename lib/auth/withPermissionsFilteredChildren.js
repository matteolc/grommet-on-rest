'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _getContext = require('recompose/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

var _types = require('./types');

var _getMissingAuthClientError = require('../util/getMissingAuthClientError');

var _getMissingAuthClientError2 = _interopRequireDefault(_getMissingAuthClientError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (BaseComponent) {
    var WithPermissionsFilteredChildren = function (_Component) {
        (0, _inherits3.default)(WithPermissionsFilteredChildren, _Component);

        function WithPermissionsFilteredChildren() {
            var _ref;

            var _temp, _this, _ret;

            (0, _classCallCheck3.default)(this, WithPermissionsFilteredChildren);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithPermissionsFilteredChildren.__proto__ || Object.getPrototypeOf(WithPermissionsFilteredChildren)).call.apply(_ref, [this].concat(args))), _this), _this.state = { children: null }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
        }

        (0, _createClass3.default)(WithPermissionsFilteredChildren, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.initializeChildren(this.props.children);
            }
        }, {
            key: 'initializeChildren',
            value: function initializeChildren(children) {
                var _this2 = this;

                if (typeof children === 'function') {
                    if (!this.props.authClient) {
                        throw new Error((0, _getMissingAuthClientError2.default)(BaseComponent.name));
                    }

                    this.props.authClient(_types.AUTH_GET_PERMISSIONS).then(function (permissions) {
                        var allowedChildren = children(permissions);
                        _this2.setState({ children: allowedChildren });
                    });
                } else {
                    this.setState({ children: children });
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var children = this.state.children;
                var _props = this.props,
                    authClient = _props.authClient,
                    props = (0, _objectWithoutProperties3.default)(_props, ['authClient']);

                return _react2.default.createElement(
                    BaseComponent,
                    props,
                    children && Array.isArray(children) ? children.map(function (child) {
                        return child ? (0, _react.cloneElement)(child, {
                            key: child.props.name || child.props.source || child.props.label
                        }) : null;
                    }) : children
                );
            }
        }]);
        return WithPermissionsFilteredChildren;
    }(_react.Component);

    WithPermissionsFilteredChildren.propTypes = {
        authClient: _propTypes2.default.func,
        children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired
    };


    return (0, _getContext2.default)({
        authClient: _propTypes2.default.func
    })(WithPermissionsFilteredChildren);
};

module.exports = exports['default'];