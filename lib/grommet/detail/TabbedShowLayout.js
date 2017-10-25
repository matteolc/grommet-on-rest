'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabbedShowLayout = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _Tabs = require('grommet/components/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require('grommet/components/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _getDefaultValues = require('../form/getDefaultValues');

var _getDefaultValues2 = _interopRequireDefault(_getDefaultValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabbedShowLayout = exports.TabbedShowLayout = function (_Component) {
    (0, _inherits3.default)(TabbedShowLayout, _Component);

    function TabbedShowLayout() {
        (0, _classCallCheck3.default)(this, TabbedShowLayout);
        return (0, _possibleConstructorReturn3.default)(this, (TabbedShowLayout.__proto__ || Object.getPrototypeOf(TabbedShowLayout)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabbedShowLayout, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                record = _props.record,
                resource = _props.resource,
                basePath = _props.basePath,
                translate = _props.translate;

            return _react2.default.createElement(
                _Tabs2.default,
                null,
                _react2.default.Children.map(children, function (tab, index) {
                    return tab ? _react2.default.createElement(
                        _Tab2.default,
                        {
                            key: tab.props.value,
                            title: translate(tab.props.label, {
                                _: tab.props.label
                            })
                        },
                        _react2.default.cloneElement(tab, {
                            resource: resource,
                            record: record,
                            basePath: basePath
                        })
                    ) : null;
                })
            );
        }
    }]);
    return TabbedShowLayout;
}(_react.Component);

TabbedShowLayout.propTypes = {
    children: _propTypes2.default.node,
    record: _propTypes2.default.object,
    resource: _propTypes2.default.string,
    basePath: _propTypes2.default.string,
    translate: _propTypes2.default.func
};

var enhance = (0, _compose2.default)((0, _reactRedux.connect)(function (state, props) {
    return {
        initialValues: (0, _getDefaultValues2.default)(state, props)
    };
}));

exports.default = enhance(TabbedShowLayout);