'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeInitialValuesWithDefaultValues = exports.FilterForm = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

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

var _reduxForm = require('redux-form');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

var _Layer = require('grommet/components/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Sidebar = require('grommet/components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Section = require('grommet/components/Section');

var _Section2 = _interopRequireDefault(_Section);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Heading = require('grommet/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Select = require('grommet/components/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Sort = require('grommet-addons/components/Sort');

var _Sort2 = _interopRequireDefault(_Sort);

var _Close = require('grommet/components/icons/base/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Status = require('grommet/components/icons/Status');

var _Status2 = _interopRequireDefault(_Status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emptyRecord = {};

var FilterForm = exports.FilterForm = function (_Component) {
    (0, _inherits3.default)(FilterForm, _Component);

    function FilterForm() {
        (0, _classCallCheck3.default)(this, FilterForm);
        return (0, _possibleConstructorReturn3.default)(this, (FilterForm.__proto__ || Object.getPrototypeOf(FilterForm)).apply(this, arguments));
    }

    (0, _createClass3.default)(FilterForm, [{
        key: 'getShownFilters',
        value: function getShownFilters() {
            var _props = this.props,
                filters = _props.filters,
                displayedFilters = _props.displayedFilters,
                initialValues = _props.initialValues;

            return filters.filter(function (filterElement) {
                return filterElement.props.alwaysOn || displayedFilters[filterElement.props.source] || typeof initialValues[filterElement.props.source] !== 'undefined';
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                resource = _props2.resource,
                translate = _props2.translate,
                closeFilters = _props2.closeFilters,
                currentSort = _props2.currentSort,
                setSort = _props2.setSort,
                sortable = _props2.sortable;


            return _react2.default.createElement(
                _Sidebar2.default,
                {
                    size: 'large',
                    alignContent: 'start'
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _Header2.default,
                        {
                            size: 'large',
                            justify: 'between',
                            align: 'center',
                            pad: {
                                horizontal: 'medium',
                                vertical: 'medium'
                            } },
                        _react2.default.createElement(
                            _Heading2.default,
                            { tag: 'h2', margin: 'none' },
                            'Filter'
                        ),
                        _react2.default.createElement(_Button2.default, { icon: _react2.default.createElement(_Close2.default, null), plain: true, onClick: closeFilters })
                    ),
                    _react2.default.createElement(
                        _Section2.default,
                        {
                            pad: {
                                horizontal: 'large',
                                vertical: 'small'
                            } },
                        this.getShownFilters().reverse().map(function (filterElement) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    key: filterElement.props.source,
                                    'data-source': filterElement.props.source,
                                    className: 'filter-field',
                                    style: filterElement.props.style },
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(_reduxForm.Field, (0, _extends4.default)({
                                        allowEmpty: true
                                    }, filterElement.props, {
                                        name: filterElement.props.source,
                                        component: filterElement.type,
                                        resource: resource,
                                        record: emptyRecord }))
                                )
                            );
                        })
                    ),
                    sortable && _react2.default.createElement(
                        _Section2.default,
                        {
                            pad: {
                                horizontal: 'large',
                                vertical: 'small'
                            } },
                        _react2.default.createElement(
                            _Heading2.default,
                            { tag: 'h3' },
                            'Sort'
                        ),
                        _react2.default.createElement(_Sort2.default, {
                            options: sortable.map(function (field) {
                                var option = {
                                    label: field,
                                    value: field,
                                    direction: 'asc'
                                };
                                return option;
                            }),
                            value: currentSort.field,
                            direction: currentSort.order,
                            onChange: setSort })
                    )
                )
            );
        }
    }]);
    return FilterForm;
}(_react.Component);

FilterForm.propTypes = {
    resource: _propTypes2.default.string.isRequired,
    filters: _propTypes2.default.arrayOf(_propTypes2.default.node).isRequired,
    displayedFilters: _propTypes2.default.object.isRequired,
    hideFilter: _propTypes2.default.func.isRequired,
    closeFilters: _propTypes2.default.func.isRequired,
    initialValues: _propTypes2.default.object,
    translate: _propTypes2.default.func.isRequired,
    currentSort: _propTypes2.default.shape({ sort: _propTypes2.default.string, order: _propTypes2.default.string }),
    setSort: _propTypes2.default.func.isRequired
};

var mergeInitialValuesWithDefaultValues = exports.mergeInitialValuesWithDefaultValues = function mergeInitialValuesWithDefaultValues(_ref) {
    var initialValues = _ref.initialValues,
        filters = _ref.filters;
    return {
        initialValues: (0, _extends4.default)({}, filters.filter(function (filterElement) {
            return filterElement.props.alwaysOn && filterElement.props.defaultValue;
        }).reduce(function (acc, filterElement) {
            return (0, _extends4.default)({}, acc, (0, _defineProperty3.default)({}, filterElement.props.source, filterElement.props.defaultValue));
        }, {}), initialValues)
    };
};

var enhance = (0, _compose2.default)(_translate2.default, (0, _withProps2.default)(mergeInitialValuesWithDefaultValues), (0, _reduxForm.reduxForm)({
    form: 'filterForm',
    enableReinitialize: true,
    onChange: function onChange(values, dispatch, props) {
        return props.setFilters(values);
    }
}));

exports.default = enhance(FilterForm);