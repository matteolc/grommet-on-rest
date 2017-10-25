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

var _App = require('grommet/components/App');

var _App2 = _interopRequireDefault(_App);

var _Split = require('grommet/components/Split');

var _Split2 = _interopRequireDefault(_Split);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _Article = require('grommet/components/Article');

var _Article2 = _interopRequireDefault(_Article);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _AdminRoutes = require('../../AdminRoutes');

var _AdminRoutes2 = _interopRequireDefault(_AdminRoutes);

var _AppBar = require('./AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _actions = require('../../actions');

require('grommet/grommet.min.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function (_Component) {
    (0, _inherits3.default)(Layout, _Component);

    function Layout() {
        (0, _classCallCheck3.default)(this, Layout);
        return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
    }

    (0, _createClass3.default)(Layout, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                customRoutes = _props.customRoutes,
                dashboard = _props.dashboard,
                isLoading = _props.isLoading,
                logout = _props.logout,
                menu = _props.menu,
                catchAll = _props.catchAll,
                title = _props.title,
                width = _props.width,
                theme = _props.theme,
                navResponsive = _props.navResponsive,
                includeNav = _props.includeNav,
                navPriority = _props.navPriority;


            return _react2.default.createElement(
                _App2.default,
                { centered: false },
                _react2.default.createElement(
                    _Split2.default,
                    { priority: navPriority, flex: 'right', onResponsive: navResponsive },
                    includeNav && (0, _react.createElement)(menu || _Menu2.default, {
                        title: title,
                        logout: logout,
                        theme: theme,
                        hasDashboard: !!dashboard
                    }),
                    _react2.default.createElement(
                        _AdminRoutes2.default,
                        {
                            customRoutes: customRoutes,
                            dashboard: dashboard,
                            catchAll: catchAll },
                        children
                    )
                ),
                _react2.default.createElement(_Notification2.default, null)
            );
        }
    }]);
    return Layout;
}(_react.Component);

var componentPropType = _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]);

Layout.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
    catchAll: componentPropType,
    customRoutes: _propTypes2.default.array,
    dashboard: componentPropType,
    isLoading: _propTypes2.default.bool.isRequired,
    logout: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.string]),
    menu: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
    title: _propTypes2.default.node.isRequired
};

function mapStateToProps(state) {
    return {
        isLoading: state.admin.loading > 0,
        includeNav: state.admin.ui.navActive && state.admin.ui.navEnabled,
        navPriority: state.admin.ui.navActive && state.admin.ui.navEnabled && state.admin.ui.responsive === 'single' ? 'left' : 'right'
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { navResponsive: _actions.navResponsive })(Layout);
module.exports = exports['default'];