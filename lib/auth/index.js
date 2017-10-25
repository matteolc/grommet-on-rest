'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithPermission = exports.SwitchPermissions = exports.Permission = exports.Restricted = undefined;

var _types = require('./types');

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

var _Restricted2 = require('./Restricted');

var _Restricted3 = _interopRequireDefault(_Restricted2);

var _Permission2 = require('./Permission');

var _Permission3 = _interopRequireDefault(_Permission2);

var _SwitchPermissions2 = require('./SwitchPermissions');

var _SwitchPermissions3 = _interopRequireDefault(_SwitchPermissions2);

var _WithPermission2 = require('./WithPermission');

var _WithPermission3 = _interopRequireDefault(_WithPermission2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Restricted = _Restricted3.default;
exports.Permission = _Permission3.default;
exports.SwitchPermissions = _SwitchPermissions3.default;
exports.WithPermission = _WithPermission3.default;