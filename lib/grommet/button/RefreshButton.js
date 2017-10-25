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

var _reactRedux = require('react-redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Refresh = require('grommet/components/icons/base/Refresh');

var _Refresh2 = _interopRequireDefault(_Refresh);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

var _uiActions = require('../../actions/uiActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RefreshButton = function RefreshButton(_ref) {
    var label = _ref.label,
        translate = _ref.translate,
        plain = _ref.plain,
        options = _ref.options,
        refreshView = _ref.refreshView;
    return _react2.default.createElement(_Button2.default, (0, _extends3.default)({
        plain: plain,
        label: label && translate(label),
        onClick: function onClick(event) {
            event.preventDefault();
            refreshView();
        },
        icon: _react2.default.createElement(_Refresh2.default, null)
    }, options));
};

RefreshButton.propTypes = {
    label: _propTypes2.default.string,
    translate: _propTypes2.default.func.isRequired,
    refreshView: _propTypes2.default.func.isRequired,
    plain: _propTypes2.default.bool,
    options: _propTypes2.default.object
};

RefreshButton.defaultProps = {
    label: 'aor.action.refresh',
    plain: true,
    options: {
        align: "start"
    }
};

var enhance = (0, _compose2.default)((0, _reactRedux.connect)(null, { refreshView: _uiActions.refreshView }), _translate2.default);

exports.default = enhance(RefreshButton);
module.exports = exports['default'];