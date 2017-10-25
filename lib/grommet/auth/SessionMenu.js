'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _Menu = require('grommet/components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Heading = require('grommet/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _User = require('grommet/components/icons/base/User');

var _User2 = _interopRequireDefault(_User);

var _Logout = require('./Logout');

var _Logout2 = _interopRequireDefault(_Logout);

var _MyAccount = require('./MyAccount');

var _MyAccount2 = _interopRequireDefault(_MyAccount);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SessionMenu = function SessionMenu(_ref) {
  var dropAlign = _ref.dropAlign,
      colorIndex = _ref.colorIndex;
  return _react2.default.createElement(
    _Menu2.default,
    {
      icon: _react2.default.createElement(_User2.default, null),
      dropAlign: dropAlign,
      colorIndex: colorIndex,
      a11yTitle: 'Session' },
    _react2.default.createElement(
      _Box2.default,
      { pad: 'medium' },
      _react2.default.createElement(
        _Heading2.default,
        { tag: 'h3', margin: 'none' },
        localStorage.getItem(_types.SESSION_ACCOUNT_USERNAME)
      )
    ),
    _react2.default.createElement(_MyAccount2.default, null),
    _react2.default.createElement(_Logout2.default, null)
  );
};

SessionMenu.propTypes = {
  colorIndex: _propTypes2.default.string,
  dropAlign: _Menu2.default.propTypes.dropAlign,
  translate: _propTypes2.default.func
};

SessionMenu.defaultProps = {
  dropAlign: {
    bottom: 'bottom'
  }
};

exports.default = SessionMenu;
module.exports = exports['default'];