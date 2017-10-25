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

var _onlyUpdateForKeys = require('recompose/onlyUpdateForKeys');

var _onlyUpdateForKeys2 = _interopRequireDefault(_onlyUpdateForKeys);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Add = require('grommet/components/icons/base/Add');

var _Add2 = _interopRequireDefault(_Add);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateButton = function CreateButton(_ref) {
    var _ref$basePath = _ref.basePath,
        basePath = _ref$basePath === undefined ? '' : _ref$basePath,
        translate = _ref.translate,
        _ref$label = _ref.label,
        label = _ref$label === undefined ? 'aor.action.create' : _ref$label,
        _ref$plain = _ref.plain,
        plain = _ref$plain === undefined ? true : _ref$plain,
        _ref$options = _ref.options,
        options = _ref$options === undefined ? {
        align: "start"
    } : _ref$options,
        _ref$inline = _ref.inline,
        inline = _ref$inline === undefined ? true : _ref$inline;
    return inline ? _react2.default.createElement(_Anchor2.default, {
        icon: _react2.default.createElement(_Add2.default, null),
        path: basePath + '/create',
        a11yTitle: label && translate(label) }) : _react2.default.createElement(_Button2.default, (0, _extends3.default)({
        plain: plain,
        label: label && translate(label),
        icon: _react2.default.createElement(_Add2.default, null),
        path: basePath + '/create'
    }, options));
};

CreateButton.propTypes = {
    basePath: _propTypes2.default.string,
    label: _propTypes2.default.string,
    translate: _propTypes2.default.func.isRequired,
    inline: _propTypes2.default.bool,
    plain: _propTypes2.default.bool,
    options: _propTypes2.default.object
};

var enhance = (0, _compose2.default)((0, _onlyUpdateForKeys2.default)(['basePath', 'label']), _translate2.default);

exports.default = enhance(CreateButton);
module.exports = exports['default'];