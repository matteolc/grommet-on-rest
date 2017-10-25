'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SwitchPermissionsComponent = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _FormField = require('../grommet/form/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _getContext = require('recompose/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

var _types = require('./types');

var _resolvePermissions = require('./resolvePermissions');

var _resolvePermissions2 = _interopRequireDefault(_resolvePermissions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwitchPermissionsComponent = exports.SwitchPermissionsComponent = function (_Component) {
    (0, _inherits3.default)(SwitchPermissionsComponent, _Component);

    function SwitchPermissionsComponent() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SwitchPermissionsComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SwitchPermissionsComponent.__proto__ || Object.getPrototypeOf(SwitchPermissionsComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            isNotFound: false,
            match: undefined,
            role: undefined
        }, _this.renderSourceChild = function (child, props) {
            return _react2.default.createElement(
                'div',
                {
                    key: child.props.source,
                    style: child.props.style,
                    className: 'aor-input aor-input-' + child.props.source
                },
                _react2.default.createElement(_FormField2.default, (0, _extends3.default)({ input: child }, props))
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SwitchPermissionsComponent, [{
        key: 'componentWillMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var _props, authClient, children, record, resource, mappings, permissions, match;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _props = this.props, authClient = _props.authClient, children = _props.children, record = _props.record, resource = _props.resource;
                                mappings = _react2.default.Children.map(children, function (_ref3) {
                                    var _ref3$props = _ref3.props,
                                        value = _ref3$props.value,
                                        resolve = _ref3$props.resolve,
                                        children = _ref3$props.children,
                                        exact = _ref3$props.exact;
                                    return {
                                        permissions: value,
                                        resolve: resolve,
                                        view: children,
                                        exact: exact
                                    };
                                }) || [];
                                _context.next = 4;
                                return authClient(_types.AUTH_GET_PERMISSIONS, {
                                    record: record,
                                    resource: resource
                                });

                            case 4:
                                permissions = _context.sent;
                                _context.next = 7;
                                return (0, _resolvePermissions2.default)({
                                    mappings: mappings,
                                    permissions: permissions,
                                    record: record,
                                    resource: resource
                                });

                            case 7:
                                match = _context.sent;


                                if (match) {
                                    this.setState({ match: match.view });
                                } else {
                                    this.setState({ isNotFound: true, permissions: permissions });
                                }

                            case 9:
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
            var _this2 = this;

            var _state = this.state,
                isNotFound = _state.isNotFound,
                match = _state.match,
                role = _state.role;
            var _props2 = this.props,
                authClient = _props2.authClient,
                children = _props2.children,
                notFound = _props2.notFound,
                loading = _props2.loading,
                props = (0, _objectWithoutProperties3.default)(_props2, ['authClient', 'children', 'notFound', 'loading']);


            if (isNotFound) {
                if (notFound) {
                    return (0, _react.createElement)(notFound, { role: role });
                }
                return null;
            }

            if (!match && loading) {
                return (0, _react.createElement)(loading);
            }

            if (Array.isArray(match)) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.Children.map(match, function (child) {
                        return child.props.source ? _this2.renderSourceChild(child) : _react2.default.createElement(_FormField2.default, (0, _extends3.default)({ input: child }, props));
                    })
                );
            }

            return match.props.source ? this.renderSourceChild(match) : _react2.default.createElement(_FormField2.default, (0, _extends3.default)({ input: match }, props));
        }
    }]);
    return SwitchPermissionsComponent;
}(_react.Component);

SwitchPermissionsComponent.propTypes = {
    authClient: _propTypes2.default.func,
    children: _propTypes2.default.node.isRequired,
    notFound: _propTypes2.default.func,
    loading: _propTypes2.default.func,
    record: _propTypes2.default.object,
    resource: _propTypes2.default.string
};
SwitchPermissionsComponent.defaultProps = {
    notFound: null,
    loading: null
};
exports.default = (0, _getContext2.default)({
    authClient: _propTypes2.default.func
})(SwitchPermissionsComponent);