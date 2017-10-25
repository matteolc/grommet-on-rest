'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Sort = require('grommet/components/icons/base/Sort');

var _Sort2 = _interopRequireDefault(_Sort);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListButton = function ListButton(_ref) {
    var _ref$basePath = _ref.basePath,
        basePath = _ref$basePath === undefined ? '' : _ref$basePath,
        _ref$label = _ref.label,
        label = _ref$label === undefined ? 'aor.action.list' : _ref$label,
        translate = _ref.translate,
        _ref$plain = _ref.plain,
        plain = _ref$plain === undefined ? true : _ref$plain,
        _ref$options = _ref.options,
        options = _ref$options === undefined ? {
        align: "start"
    } : _ref$options;
    return _react2.default.createElement(_Button2.default, (0, _extends3.default)({
        plain: plain,
        label: label && translate(label),
        icon: _react2.default.createElement(_Sort2.default, null),
        path: basePath
    }, options));
};

ListButton.propTypes = {
    basePath: _propTypes2.default.string,
    label: _propTypes2.default.string,
    translate: _propTypes2.default.func.isRequired
};

exports.default = (0, _translate2.default)(ListButton);
module.exports = exports['default'];