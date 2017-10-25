'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _authActions = require('../../actions/authActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logout = function Logout(_ref) {
    var translate = _ref.translate,
        userLogout = _ref.userLogout;
    return _react2.default.createElement(_Anchor2.default, {
        href: '#',
        onClick: userLogout,
        label: 'Logout'
    });
};

Logout.propTypes = {
    translate: _propTypes2.default.func,
    userLogout: _propTypes2.default.func
};

var mapStateToProps = function mapStateToProps(state) {
    return { isLoading: state.admin.loading > 0 };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { userLogout: _authActions.userLogout })(Logout);
module.exports = exports['default'];