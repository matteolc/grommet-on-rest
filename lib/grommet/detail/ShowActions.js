'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Heading = require('grommet/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Menu = require('grommet/components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _SkipLinkAnchor = require('grommet/components/SkipLinkAnchor');

var _SkipLinkAnchor2 = _interopRequireDefault(_SkipLinkAnchor);

var _Close = require('grommet/components/icons/base/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowActions = function ShowActions(_ref) {
    var basePath = _ref.basePath,
        data = _ref.data,
        hasDelete = _ref.hasDelete,
        hasCreate = _ref.hasCreate,
        hasEdit = _ref.hasEdit,
        hasList = _ref.hasList,
        onClose = _ref.onClose,
        title = _ref.title,
        onDelete = _ref.onDelete;
    return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_SkipLinkAnchor2.default, { label: 'Right Panel' }),
        _react2.default.createElement(
            _Header2.default,
            {
                pad: {
                    horizontal: 'medium',
                    vertical: 'medium'
                },
                justify: 'between',
                size: 'large' },
            onClose && _react2.default.createElement(
                _Heading2.default,
                { tag: 'h3', margin: 'none' },
                title
            ),
            onClose && _react2.default.createElement(_Button2.default, { icon: _react2.default.createElement(_Close2.default, null), onClick: onClose })
        ),
        _react2.default.createElement(
            _Box2.default,
            { pad: 'medium' },
            _react2.default.createElement(
                _Menu2.default,
                null,
                hasEdit && _react2.default.createElement(_button.EditButton, { basePath: basePath, record: data }),
                hasDelete && _react2.default.createElement(_button.DeleteButton, { basePath: basePath, record: data, onDelete: onDelete }),
                hasCreate && _react2.default.createElement(_button.CreateButton, { basePath: basePath, inline: false }),
                hasList && _react2.default.createElement(_button.ListButton, { basePath: basePath }),
                _react2.default.createElement(_button.RefreshButton, null)
            )
        )
    );
};

exports.default = ShowActions;
module.exports = exports['default'];