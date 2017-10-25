'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WithPermissionComponent = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _resolvePermissions = require('./resolvePermissions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithPermissionComponent = exports.WithPermissionComponent = function (_Component) {
    (0, _inherits3.default)(WithPermissionComponent, _Component);

    function WithPermissionComponent() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, WithPermissionComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithPermissionComponent.__proto__ || Object.getPrototypeOf(WithPermissionComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            isNotFound: false,
            match: undefined,
            role: undefined
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(WithPermissionComponent, [{
        key: 'componentWillMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var _props, authClient, children, record, resolve, resource, requiredPermissions, exact, permissions, match;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _props = this.props, authClient = _props.authClient, children = _props.children, record = _props.record, resolve = _props.resolve, resource = _props.resource, requiredPermissions = _props.value, exact = _props.exact;
                                _context.next = 3;
                                return authClient(_types.AUTH_GET_PERMISSIONS, {
                                    record: record,
                                    resource: resource
                                });

                            case 3:
                                permissions = _context.sent;
                                _context.next = 6;
                                return (0, _resolvePermissions.resolvePermission)({
                                    permissions: permissions,
                                    record: record,
                                    resource: resource
                                })({
                                    exact: exact,
                                    permissions: requiredPermissions,
                                    resolve: resolve,
                                    view: children
                                });

                            case 6:
                                match = _context.sent;


                                if (match && match.matched) {
                                    this.setState({ match: match.view });
                                } else {
                                    this.setState({ isNotFound: true, permissions: permissions });
                                }

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentWillMount() {
                return _ref2.apply(this, arguments);
            }

            return componentWillMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                isNotFound = _state.isNotFound,
                match = _state.match,
                role = _state.role;
            var _props2 = this.props,
                authClient = _props2.authClient,
                children = _props2.children,
                notFound = _props2.notFound,
                loading = _props2.loading,
                resource = _props2.resource,
                record = _props2.record,
                resolve = _props2.resolve,
                value = _props2.value,
                exact = _props2.exact,
                props = (0, _objectWithoutProperties3.default)(_props2, ['authClient', 'children', 'notFound', 'loading', 'resource', 'record', 'resolve', 'value', 'exact']);


            if (isNotFound) {
                if (notFound) {
                    return (0, _react.createElement)(notFound, { role: role });
                }

                return null;
            }

            if (!match && loading) {
                return (0, _react.createElement)(loading);
            }

            if (_react.Children.count(children) > 1) {
                return _react2.default.createElement(
                    'span',
                    null,
                    _react.Children.map(children, function (child) {
                        return (0, _react.cloneElement)(child, props);
                    })
                );
            }

            return (0, _react.cloneElement)(children, props);
        }
    }]);
    return WithPermissionComponent;
}(_react.Component);

WithPermissionComponent.propTypes = {
    authClient: _propTypes2.default.func,
    children: _propTypes2.default.node.isRequired,
    exact: _propTypes2.default.bool,
    loading: _propTypes2.default.func,
    notFound: _propTypes2.default.func,
    record: _propTypes2.default.object,
    resource: _propTypes2.default.string,
    value: _propTypes2.default.any,
    resolve: _propTypes2.default.func
};
WithPermissionComponent.defaultProps = {
    loading: null
};
exports.default = (0, _getContext2.default)({
    authClient: _propTypes2.default.func
})(WithPermissionComponent);