'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = require('grommet/components/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('grommet/components/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Article = require('grommet/components/Article');

var _Article2 = _interopRequireDefault(_Article);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Label = require('grommet/components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Tiles = require('grommet/components/Tiles');

var _Tiles2 = _interopRequireDefault(_Tiles);

var _Tile = require('grommet/components/Tile');

var _Tile2 = _interopRequireDefault(_Tile);

var _Timestamp = require('grommet/components/Timestamp');

var _Timestamp2 = _interopRequireDefault(_Timestamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tertiaryStyle = {
    float: 'right',
    opacity: 0.541176
};

var SimpleList = function SimpleList(_ref) {
    var ids = _ref.ids,
        data = _ref.data,
        basePath = _ref.basePath,
        primaryText = _ref.primaryText,
        secondaryText = _ref.secondaryText,
        secondaryTextLines = _ref.secondaryTextLines,
        tertiaryText = _ref.tertiaryText,
        leftAvatar = _ref.leftAvatar,
        leftIcon = _ref.leftIcon,
        rightAvatar = _ref.rightAvatar,
        rightIcon = _ref.rightIcon,
        onMore = _ref.onMore,
        onClick = _ref.onClick,
        selected = _ref.selected;
    return _react2.default.createElement(
        _List2.default,
        { selectable: true, onMore: onMore },
        ids.map(function (id, index) {
            return _react2.default.createElement(
                _ListItem2.default,
                {
                    align: 'start',
                    justify: 'between',
                    separator: index === 0 ? 'horizontal' : undefined,
                    pad: {
                        horizontal: 'medium',
                        vertical: 'medium',
                        between: 'medium'
                    },
                    onClick: onClick,
                    selected: selected,
                    key: id },
                _react2.default.createElement(
                    _Box2.default,
                    { direction: 'row', pad: { between: 'small' } },
                    _react2.default.createElement(_Anchor2.default, { path: basePath + '/' + id + '/show', label: primaryText(data[id], id) }),
                    _react2.default.createElement(
                        'span',
                        { className: 'message' },
                        secondaryText && secondaryText(data[id], id)
                    )
                ),
                tertiaryText && _react2.default.createElement(_Timestamp2.default, { value: tertiaryText(data[id], id) })
            );
        })
    );
};

SimpleList.propTypes = {
    ids: _propTypes2.default.array,
    data: _propTypes2.default.object,
    basePath: _propTypes2.default.string,
    primaryText: _propTypes2.default.func,
    secondaryText: _propTypes2.default.func,
    secondaryTextLines: _propTypes2.default.number,
    tertiaryText: _propTypes2.default.func,
    leftAvatar: _propTypes2.default.func,
    leftIcon: _propTypes2.default.func,
    rightAvatar: _propTypes2.default.func,
    rightIcon: _propTypes2.default.func
};

exports.default = SimpleList;
module.exports = exports['default'];