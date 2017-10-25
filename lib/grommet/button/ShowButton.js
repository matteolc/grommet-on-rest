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

var _shouldUpdate = require('recompose/shouldUpdate');

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _CircleInformation = require('grommet/components/icons/base/CircleInformation');

var _CircleInformation2 = _interopRequireDefault(_CircleInformation);

var _linkToRecord = require('../../util/linkToRecord');

var _linkToRecord2 = _interopRequireDefault(_linkToRecord);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowButton = function ShowButton(_ref) {
    var _ref$basePath = _ref.basePath,
        basePath = _ref$basePath === undefined ? '' : _ref$basePath,
        _ref$label = _ref.label,
        label = _ref$label === undefined ? 'aor.action.show' : _ref$label,
        _ref$record = _ref.record,
        record = _ref$record === undefined ? {} : _ref$record,
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
        icon: _react2.default.createElement(_CircleInformation2.default, null),
        path: (0, _linkToRecord2.default)(basePath, record.id) + '/show'
    }, options));
};

ShowButton.propTypes = {
    basePath: _propTypes2.default.string,
    label: _propTypes2.default.string,
    record: _propTypes2.default.object,
    translate: _propTypes2.default.func.isRequired,
    plain: _propTypes2.default.bool,
    options: _propTypes2.default.object
};

var enhance = (0, _compose2.default)((0, _shouldUpdate2.default)(function (props, nextProps) {
    return props.record && props.record.id !== nextProps.record.id || props.basePath !== nextProps.basePath || props.record == null && nextProps.record != null;
}), _translate2.default);

exports.default = enhance(ShowButton);
module.exports = exports['default'];