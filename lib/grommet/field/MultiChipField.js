'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    chip: {
        display: 'flex',
        height: 32,
        fontSize: 13,
        fontWeight: 500,
        color: 'rgb(255, 255, 255)',
        lineHeight: '32px',
        padding: '0px 12px 0px 0px',
        borderRadius: 16,
        backgroundColor: '#a8a8a8',
        marginBottom: 5,
        marginRight: 5,
        width: 'fit-content'
    },
    avatar: {
        color: 'rgb(255, 255, 255)',
        backgroundColor: '#434343',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        borderRadius: '50%',
        height: 32,
        width: 32,
        marginRight: 6
    }
};

var MultiChipField = function MultiChipField(_ref) {
    var source = _ref.source,
        _ref$record = _ref.record,
        record = _ref$record === undefined ? {} : _ref$record;
    return _react2.default.createElement(
        'div',
        null,
        (0, _lodash2.default)(record, source).map(function (value, rank) {
            return _react2.default.createElement(
                'div',
                { style: styles.chip, key: rank },
                _react2.default.createElement(
                    'div',
                    { style: styles.avatar },
                    value[0].toUpperCase()
                ),
                value
            );
        })
    );
};

MultiChipField.propTypes = {
    label: _propTypes2.default.string,
    record: _propTypes2.default.object,
    source: _propTypes2.default.string.isRequired,
    addLabel: _propTypes2.default.bool
};

MultiChipField.defaultProps = {
    addLabel: true
};

exports.default = MultiChipField;
module.exports = exports['default'];