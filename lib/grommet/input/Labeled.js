'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FieldTitle = require('../../util/FieldTitle');

var _FieldTitle2 = _interopRequireDefault(_FieldTitle);

var _Label = require('grommet/components/Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultLabelStyle = {
    paddingTop: '2em',
    height: 'auto'
};

/**
 * Use any component as read-only Input, labeled just like other Inputs.
 *
 * Useful to use a Field in the Edit or Create components.
 * The child component will receive the current record.
 *
 * This component name doesn't have a typo. We had to choose between
 * the American English "Labeled", and the British English "Labelled".
 * We flipped a coin.
 *
 * @example
 * <Labeled label="Comments">
 *     <FooComponent source="title" />
 * </Labeled>
 */
var Labeled = function Labeled(_ref) {
    var input = _ref.input,
        isRequired = _ref.isRequired,
        label = _ref.label,
        meta = _ref.meta,
        resource = _ref.resource,
        children = _ref.children,
        source = _ref.source,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === undefined ? true : _ref$disabled,
        _ref$labelStyle = _ref.labelStyle,
        labelStyle = _ref$labelStyle === undefined ? defaultLabelStyle : _ref$labelStyle,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['input', 'isRequired', 'label', 'meta', 'resource', 'children', 'source', 'disabled', 'labelStyle']);

    if (!label && !source) {
        throw new Error('Cannot create label for component <' + (children && children.type && children.type.name) + '>: You must set either the label or source props. You can also disable automated label insertion by setting \'addLabel: false\' in the component default props');
    }

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { style: labelStyle },
            _react2.default.createElement(_FieldTitle2.default, {
                label: label,
                source: source,
                resource: resource,
                isRequired: isRequired
            })
        ),
        _react2.default.createElement(
            _Label2.default,
            null,
            children && typeof children.type !== 'string' ? _react2.default.cloneElement(children, (0, _extends3.default)({ input: input, resource: resource }, rest)) : children
        )
    );
};

Labeled.propTypes = {
    basePath: _propTypes2.default.string,
    children: _propTypes2.default.element,
    disabled: _propTypes2.default.bool,
    input: _propTypes2.default.object,
    isRequired: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    meta: _propTypes2.default.object,
    onChange: _propTypes2.default.func,
    record: _propTypes2.default.object,
    resource: _propTypes2.default.string,
    source: _propTypes2.default.string,
    labelStyle: _propTypes2.default.object
};

exports.default = Labeled;
module.exports = exports['default'];