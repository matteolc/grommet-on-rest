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

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

var _reducer = require('../../reducer');

var _inflection = require('inflection');

var _inflection2 = _interopRequireDefault(_inflection);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _Sidebar = require('grommet/components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('grommet/components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Title = require('grommet/components/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Menu = require('grommet/components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Close = require('grommet/components/icons/base/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Grommet = require('grommet/components/icons/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _DashboardMenuItem = require('./DashboardMenuItem');

var _DashboardMenuItem2 = _interopRequireDefault(_DashboardMenuItem);

var _SessionMenu = require('../auth/SessionMenu');

var _SessionMenu2 = _interopRequireDefault(_SessionMenu);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var translatedResourceName = function translatedResourceName(resource, translate) {
    return translate('resources.' + resource.name + '.name', {
        smart_count: 2,
        _: resource.options && resource.options.label ? translate(resource.options.label, {
            smart_count: 2,
            _: resource.options.label
        }) : _inflection2.default.humanize(_inflection2.default.pluralize(resource.name))
    });
}; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var GrommetMenu = function (_Component) {
    (0, _inherits3.default)(GrommetMenu, _Component);

    function GrommetMenu() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, GrommetMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GrommetMenu.__proto__ || Object.getPrototypeOf(GrommetMenu)).call.apply(_ref, [this].concat(args))), _this), _this.handleClose = function () {
            _this.props.navActivate(false);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(GrommetMenu, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                hasDashboard = _props.hasDashboard,
                onMenuTap = _props.onMenuTap,
                resources = _props.resources,
                translate = _props.translate,
                logout = _props.logout,
                title = _props.title,
                theme = _props.theme;


            return _react2.default.createElement(
                _Sidebar2.default,
                { colorIndex: theme, fixed: true },
                _react2.default.createElement(
                    _Header2.default,
                    { size: 'large', justify: 'between', pad: { horizontal: 'medium' } },
                    _react2.default.createElement(
                        _Title2.default,
                        { onClick: this.handleClose, a11yTitle: 'Close Menu' },
                        _react2.default.createElement(_Grommet2.default, { colorIndex: 'light-1' }),
                        _react2.default.createElement(
                            'span',
                            null,
                            title
                        )
                    ),
                    _react2.default.createElement(_Button2.default, { icon: _react2.default.createElement(_Close2.default, null), onClick: this.handleClose, plain: true,
                        a11yTitle: 'Close Menu' })
                ),
                _react2.default.createElement(
                    _Menu2.default,
                    { fill: true, primary: true },
                    hasDashboard && _react2.default.createElement(_DashboardMenuItem2.default, { onClick: onMenuTap }),
                    resources.filter(function (r) {
                        return r.list;
                    }).map(function (resource) {
                        return _react2.default.createElement(_Anchor2.default, {
                            key: resource.name,
                            path: '/' + resource.name,
                            label: translatedResourceName(resource, translate)
                        });
                    })
                ),
                _react2.default.createElement(
                    _Footer2.default,
                    { pad: { horizontal: 'medium', vertical: 'small' } },
                    _react2.default.createElement(_SessionMenu2.default, null)
                )
            );
        }
    }]);
    return GrommetMenu;
}(_react.Component);

GrommetMenu.propTypes = {
    title: _propTypes2.default.string,
    hasDashboard: _propTypes2.default.bool,
    logout: _propTypes2.default.element,
    onMenuTap: _propTypes2.default.func,
    resources: _propTypes2.default.array.isRequired,
    translate: _propTypes2.default.func.isRequired,
    navActivate: _propTypes2.default.func.isRequired
};

GrommetMenu.defaultProps = {
    onMenuTap: function onMenuTap() {
        return null;
    }
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        resources: (0, _reducer.getResources)(state),
        active: state.admin.ui.navActive,
        enabled: state.admin.ui.navEnabled
    };
};

var enhance = (0, _compose2.default)(_translate2.default, (0, _reactRedux.connect)(mapStateToProps, {
    navActivate: _actions.navActivate
}));

exports.default = enhance(GrommetMenu);
module.exports = exports['default'];