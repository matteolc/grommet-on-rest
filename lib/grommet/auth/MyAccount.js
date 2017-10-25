'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyAccount = function MyAccount() {
    return _react2.default.createElement(_Anchor2.default, {
        href: '#',
        path: '/accounts/' + localStorage.getItem(_types.SESSION_ACCOUNT_ID) + '/show',
        label: 'My Account'
    });
};

exports.default = MyAccount;
module.exports = exports['default'];