'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Title = require('grommet/components/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Grommet = require('grommet/components/icons/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppBar = function AppBar(_ref) {
    var title = _ref.title,
        defaultTitle = _ref.defaultTitle,
        navActive = _ref.navActive,
        includeNav = _ref.includeNav,
        navActivate = _ref.navActivate;
    return navActive ? _react2.default.createElement(
        'span',
        null,
        title
    ) : _react2.default.createElement(
        _Button2.default,
        { onClick: function onClick() {
                return navActivate(true);
            } },
        _react2.default.createElement(
            _Box2.default,
            {
                direction: 'row',
                responsive: false,
                pad: {
                    between: 'small'
                } },
            _react2.default.createElement(_Grommet2.default, null),
            ' ',
            title ? _react2.default.createElement(
                _Title2.default,
                null,
                title
            ) : defaultTitle && _react2.default.createElement(
                _Title2.default,
                null,
                defaultTitle
            )
        )
    );
};

AppBar.propTypes = {
    navActivate: _propTypes2.default.func.isRequired,
    title: _propTypes2.default.string,
    defaultTitle: _propTypes2.default.string,
    navActive: _propTypes2.default.bool,
    includeNav: _propTypes2.default.bool
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        navActive: state.admin.ui.navActive,
        includeNav: state.admin.ui.navActive && state.admin.ui.navEnabled
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { navActivate: _actions.navActivate })(AppBar);
module.exports = exports['default'];