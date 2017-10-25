'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Filter = undefined;

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

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isequal');

var _lodash4 = _interopRequireDefault(_lodash3);

var _FilterForm = require('./FilterForm');

var _FilterForm2 = _interopRequireDefault(_FilterForm);

var _removeEmpty = require('../../util/removeEmpty');

var _removeEmpty2 = _interopRequireDefault(_removeEmpty);

var _withPermissionsFilteredChildren = require('../../auth/withPermissionsFilteredChildren');

var _withPermissionsFilteredChildren2 = _interopRequireDefault(_withPermissionsFilteredChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = exports.Filter = function (_Component) {
    (0, _inherits3.default)(Filter, _Component);

    function Filter(props) {
        (0, _classCallCheck3.default)(this, Filter);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

        _this.setFilters = (0, _lodash2.default)(function (filters) {
            if (!(0, _lodash4.default)(filters, _this.filters)) {
                // fix for redux-form bug with onChange and enableReinitialize
                var filtersWithoutEmpty = (0, _removeEmpty2.default)(filters);
                _this.props.setFilters(filtersWithoutEmpty);
                _this.filters = filtersWithoutEmpty;
            }
        }, _this.props.debounce);

        _this.setSort = function (sort) {
            _this.props.setSort(sort.value);
        };

        _this.filters = _this.props.filterValues;
        return _this;
    }

    (0, _createClass3.default)(Filter, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.filters = nextProps.filterValues;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.setFilters) {
                this.setFilters.cancel();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                resource = _props.resource,
                children = _props.children,
                hideFilter = _props.hideFilter,
                displayedFilters = _props.displayedFilters,
                filterValues = _props.filterValues,
                closeFilters = _props.closeFilters,
                currentSort = _props.currentSort,
                sortable = _props.sortable;

            return _react2.default.createElement(_FilterForm2.default, {
                closeFilters: closeFilters,
                resource: resource,
                filters: _react2.default.Children.toArray(children),
                hideFilter: hideFilter,
                displayedFilters: displayedFilters,
                initialValues: filterValues,
                setFilters: this.setFilters,
                currentSort: currentSort,
                setSort: this.setSort,
                sortable: sortable
            });
        }
    }]);
    return Filter;
}(_react.Component);

Filter.propTypes = {
    children: _propTypes2.default.node,
    debounce: _propTypes2.default.number.isRequired,
    displayedFilters: _propTypes2.default.object,
    filterValues: _propTypes2.default.object,
    hideFilter: _propTypes2.default.func,
    setFilters: _propTypes2.default.func,
    closeFilters: _propTypes2.default.func,
    showFilter: _propTypes2.default.func,
    resource: _propTypes2.default.string.isRequired,
    currentSort: _propTypes2.default.shape({
        sort: _propTypes2.default.string,
        order: _propTypes2.default.string
    }),
    setSort: _propTypes2.default.func.isRequired
};

Filter.defaultProps = {
    debounce: 500
};

exports.default = (0, _withPermissionsFilteredChildren2.default)(Filter);