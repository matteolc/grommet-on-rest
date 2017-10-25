'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GrommetList = undefined;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _queryString = require('query-string');

var _reactRouterRedux = require('react-router-redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _reselect = require('reselect');

var _inflection = require('inflection');

var _inflection2 = _interopRequireDefault(_inflection);

var _queryReducer = require('../../reducer/admin/resource/list/queryReducer');

var _queryReducer2 = _interopRequireDefault(_queryReducer);

var _dataActions = require('../../actions/dataActions');

var _listActions = require('../../actions/listActions');

var _uiActions = require('../../actions/uiActions');

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

var _removeKey = require('../../util/removeKey');

var _removeKey2 = _interopRequireDefault(_removeKey);

var _withPermissionsFilteredChildren = require('../../auth/withPermissionsFilteredChildren');

var _withPermissionsFilteredChildren2 = _interopRequireDefault(_withPermissionsFilteredChildren);

var _Article = require('grommet/components/Article');

var _Article2 = _interopRequireDefault(_Article);

var _Title = require('grommet/components/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _FilterControl = require('grommet-addons/components/FilterControl');

var _FilterControl2 = _interopRequireDefault(_FilterControl);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Layer = require('grommet/components/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _List = require('grommet/components/List');

var _List2 = _interopRequireDefault(_List);

var _Notification = require('grommet/components/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Intl = require('grommet/utils/Intl');

var _AppBar = require('../layout/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _CreateButton = require('../button/CreateButton');

var _CreateButton2 = _interopRequireDefault(_CreateButton);

var _Spinning = require('grommet/components/icons/Spinning');

var _Spinning2 = _interopRequireDefault(_Spinning);

var _Placeholder = require('./Placeholder');

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _FreeTextSearch = require('./FreeTextSearch');

var _FreeTextSearch2 = _interopRequireDefault(_FreeTextSearch);

var _lodash = require('lodash');

var _lodash2 = require('lodash.debounce');

var _lodash3 = _interopRequireDefault(_lodash2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GrommetList = exports.GrommetList = function (_Component) {
    (0, _inherits3.default)(GrommetList, _Component);

    function GrommetList() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, GrommetList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GrommetList.__proto__ || Object.getPrototypeOf(GrommetList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            filterActive: false,
            searchText: ''
        }, _this.setSort = function (sort) {
            return _this.changeParams({ type: _queryReducer.SET_SORT, payload: sort });
        }, _this.setPage = function (page) {
            return _this.changeParams({ type: _queryReducer.SET_PAGE, payload: page });
        }, _this.setFilters = function (filters) {
            return _this.changeParams({ type: _queryReducer.SET_FILTER, payload: filters });
        }, _this.showFilter = function (filterName, defaultValue) {
            _this.setState((0, _defineProperty3.default)({}, filterName, true));
            if (typeof defaultValue !== 'undefined') {
                _this.setFilters((0, _extends4.default)({}, _this.props.filterValues, (0, _defineProperty3.default)({}, filterName, defaultValue)));
            }
        }, _this.hideFilter = function (filterName) {
            _this.setState((0, _defineProperty3.default)({}, filterName, false));
            var newFilters = (0, _removeKey2.default)(_this.props.filterValues, filterName);
            _this.setFilters(newFilters);
        }, _this.closeFilters = function () {
            _this.setState({ filterActive: false });
        }, _this.openFilters = function () {
            _this.setState({ filterActive: true });
        }, _this.setFreeTextSearch = function (searchText) {
            _this.setFilters((0, _extends4.default)({}, _this.props.filterValues, {
                q: searchText
            }));
        }, _this.onMore = function () {
            var _this$getQuery = _this.getQuery(),
                page = _this$getQuery.page;

            _this.setPage(parseInt(page, 10) + 1);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(GrommetList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateData();
            if (Object.keys(this.props.query).length > 0) {
                this.props.changeListParams(this.props.resource, this.props.query);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.resource !== this.props.resource) {
                this.updateData(Object.keys(nextProps.query).length > 0 ? nextProps.query : nextProps.params);
            }
            if (nextProps.query.sort !== this.props.query.sort || nextProps.query.order !== this.props.query.order || nextProps.query.filter !== this.props.query.filter) {
                if (nextProps.query.page === this.props.query.page) {
                    this.updateData(Object.keys(nextProps.query).length > 0 ? nextProps.query : nextProps.params);
                }
            }
            if (nextProps.query.page !== this.props.query.page) {
                this.moreData(Object.keys(nextProps.query).length > 0 ? nextProps.query : nextProps.params);
            }
            if (nextProps.version !== this.props.version) {
                this.updateData();
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (nextProps.isLoading === this.props.isLoading && nextProps.width === this.props.width && nextProps.version === this.props.version && nextState === this.state) {
                return false;
            }
            return true;
        }
    }, {
        key: 'getBasePath',
        value: function getBasePath() {
            return this.props.location.pathname.replace(/\/$/, '');
        }

        /**
         * Merge list params from 3 different sources:
         *   - the query string
         *   - the params stored in the state (from previous navigation)
         *   - the props passed to the List component
         */

    }, {
        key: 'getQuery',
        value: function getQuery() {
            var query = Object.keys(this.props.query).length > 0 ? this.props.query : (0, _extends4.default)({}, this.props.params);
            if (!query.sort) {
                query.sort = this.props.sort.field;
                query.order = this.props.sort.order;
            }
            if (!query.perPage) {
                query.perPage = this.props.perPage;
            }
            return query;
        }
    }, {
        key: 'updateData',
        value: function updateData(query) {
            var params = query || this.getQuery();
            var sort = params.sort,
                order = params.order,
                page = params.page,
                perPage = params.perPage,
                filter = params.filter;

            var pagination = {
                page: parseInt(page, 10),
                perPage: parseInt(perPage, 10)
            };
            var permanentFilter = this.props.filter;
            this.props.crudGetList(this.props.resource, pagination, {
                field: sort,
                order: order
            }, (0, _extends4.default)({}, filter, permanentFilter));
        }
    }, {
        key: 'moreData',
        value: function moreData(query) {
            var params = query || this.getQuery();
            var sort = params.sort,
                order = params.order,
                page = params.page,
                perPage = params.perPage,
                filter = params.filter;

            var pagination = {
                page: parseInt(page, 10),
                perPage: parseInt(perPage, 10)
            };
            var permanentFilter = this.props.filter;
            this.props.crudGetMore(this.props.resource, pagination, {
                field: sort,
                order: order
            }, (0, _extends4.default)({}, filter, permanentFilter));
        }
    }, {
        key: 'changeParams',
        value: function changeParams(action) {
            var newParams = (0, _queryReducer2.default)(this.getQuery(), action);
            this.props.push((0, _extends4.default)({}, this.props.location, {
                search: '?' + (0, _queryString.stringify)((0, _extends4.default)({}, newParams, {
                    filter: JSON.stringify(newParams.filter)
                }))
            }));
            this.props.changeListParams(this.props.resource, newParams);
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            if (process.env !== 'production') {
                console.warn( // eslint-disable-line
                'Deprecation warning: The preferred way to refresh the List view is to connect yo' + 'ur custom button with redux and dispatch the `refreshView` action.');
            }

            this.props.refreshView();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                filters = _props.filters,
                resource = _props.resource,
                hasCreate = _props.hasCreate,
                title = _props.title,
                data = _props.data,
                ids = _props.ids,
                total = _props.total,
                isLoading = _props.isLoading,
                translate = _props.translate,
                theme = _props.theme,
                version = _props.version,
                includeNav = _props.includeNav,
                hasFreeTextSearch = _props.hasFreeTextSearch,
                count = _props.count,
                sortable = _props.sortable;
            var _state = this.state,
                filterActive = _state.filterActive,
                searchText = _state.searchText;

            var query = this.getQuery();
            var filterValues = query.filter;
            var basePath = this.getBasePath();

            var resourceName = translate('resources.' + resource + '.name', {
                smart_count: 2,
                _: _inflection2.default.humanize(_inflection2.default.pluralize(resource))
            });
            var defaultTitle = translate('aor.page.list', { name: '' + resourceName });

            var onMore = void 0;
            if (ids.length > 0 && ids.length < total && !isLoading) {
                onMore = this.onMore;
            }

            return _react2.default.createElement(
                _Box2.default,
                null,
                _react2.default.createElement(
                    _Header2.default,
                    {
                        size: 'large',
                        pad: {
                            horizontal: 'medium'
                        } },
                    _react2.default.createElement(
                        _Title2.default,
                        { responsive: false },
                        _react2.default.createElement(_AppBar2.default, {
                            title: title,
                            defaultTitle: defaultTitle })
                    ),
                    hasFreeTextSearch && _react2.default.createElement(_FreeTextSearch2.default, {
                        searchText: filterValues.q,
                        hideFilter: this.hideFilter,
                        setFreeTextSearch: this.setFreeTextSearch }),
                    hasCreate && _react2.default.createElement(_CreateButton2.default, {
                        basePath: basePath }),
                    _react2.default.createElement(_FilterControl2.default, {
                        filteredTotal: total,
                        unfilteredTotal: count,
                        onClick: this.openFilters }),
                    filterActive && _react2.default.createElement(
                        _Layer2.default,
                        {
                            align: 'right',
                            flush: true,
                            closer: false,
                            a11yTitle: 'Filter' },
                        filters && _react2.default.cloneElement(filters, {
                            resource: resource,
                            hideFilter: this.hideFilter,
                            filterValues: filterValues,
                            displayedFilters: this.state,
                            setFilters: this.setFilters,
                            context: 'form',
                            closeFilters: this.closeFilters,
                            currentSort: {
                                field: query.sort,
                                order: query.order
                            },
                            setSort: this.setSort,
                            sortable: sortable
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { key: version },
                    children && _react2.default.cloneElement(children, {
                        resource: resource,
                        ids: ids,
                        data: data,
                        basePath: basePath,
                        isLoading: isLoading,
                        onMore: onMore
                    })
                ),
                _react2.default.createElement(_Placeholder2.default, {
                    isLoading: isLoading,
                    filteredTotal: total,
                    unfilteredTotal: count,
                    addControl: _react2.default.createElement(_CreateButton2.default, {
                        inline: false,
                        basePath: basePath
                    }) })
            );
        }
    }]);
    return GrommetList;
}(_react.Component);

GrommetList.propTypes = {
    // the props you can change
    title: _propTypes2.default.any,
    filter: _propTypes2.default.object,
    filters: _propTypes2.default.element,
    pagination: _propTypes2.default.element,
    actions: _propTypes2.default.element,
    perPage: _propTypes2.default.number.isRequired,
    sort: _propTypes2.default.shape({ field: _propTypes2.default.string, order: _propTypes2.default.string }),
    sortable: _propTypes2.default.array,
    children: _propTypes2.default.node,
    // the props managed by admin-on-rest
    authClient: _propTypes2.default.func,
    changeListParams: _propTypes2.default.func.isRequired,
    crudGetList: _propTypes2.default.func.isRequired,
    data: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
    filterValues: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
    hasCreate: _propTypes2.default.bool.isRequired,
    ids: _propTypes2.default.array,
    isLoading: _propTypes2.default.bool.isRequired,
    location: _propTypes2.default.object.isRequired,
    path: _propTypes2.default.string,
    params: _propTypes2.default.object.isRequired,
    push: _propTypes2.default.func.isRequired,
    query: _propTypes2.default.object.isRequired,
    resource: _propTypes2.default.string.isRequired,
    refreshView: _propTypes2.default.func.isRequired,
    total: _propTypes2.default.number.isRequired,
    translate: _propTypes2.default.func.isRequired,
    version: _propTypes2.default.number.isRequired,
    hasFreeTextSearch: _propTypes2.default.bool
};

GrommetList.defaultProps = {
    filter: {},
    filterValues: {},
    perPage: 25,
    sort: {
        field: 'id',
        order: _queryReducer.SORT_DESC
    },
    hasFreeTextSearch: true
};

var getLocationSearch = function getLocationSearch(props) {
    return props.location.search;
};
var getQuery = (0, _reselect.createSelector)(getLocationSearch, function (locationSearch) {
    var query = (0, _queryString.parse)(locationSearch);
    if (query.filter && typeof query.filter === 'string') {
        query.filter = JSON.parse(query.filter);
    }
    return query;
});

function mapStateToProps(state, props) {
    var resourceState = state.admin.resources[props.resource];
    return {
        query: getQuery(props),
        params: resourceState.list.params,
        ids: resourceState.list.ids,
        total: resourceState.list.total,
        count: resourceState.list.count,
        data: resourceState.data,
        isLoading: state.admin.loading > 0,
        includeNav: state.admin.ui.navActive && state.admin.ui.navEnabled,
        filterValues: resourceState.list.params.filter,
        version: state.admin.ui.viewVersion
    };
}

var enhance = (0, _compose2.default)((0, _reactRedux.connect)(mapStateToProps, {
    crudGetList: _dataActions.crudGetList,
    crudGetMore: _dataActions.crudGetMore,
    changeListParams: _listActions.changeListParams,
    push: _reactRouterRedux.push,
    refreshView: _uiActions.refreshView
}), _translate2.default, _withPermissionsFilteredChildren2.default);

exports.default = enhance(GrommetList);