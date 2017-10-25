import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {parse, stringify} from 'query-string';
import {push as pushAction} from 'react-router-redux';
import compose from 'recompose/compose';
import {createSelector} from 'reselect';
import inflection from 'inflection';
import queryReducer, {SET_SORT, SET_PAGE, SET_FILTER, SORT_DESC} from '../../reducer/admin/resource/list/queryReducer';
import {crudGetList as crudGetListAction} from '../../actions/dataActions';
import {crudGetMore as crudGetMoreAction} from '../../actions/dataActions';
import {changeListParams as changeListParamsAction} from '../../actions/listActions';
import {refreshView as refreshViewAction} from '../../actions/uiActions';
import translate from '../../i18n/translate';
import removeKey from '../../util/removeKey';
import withPermissionsFilteredChildren from '../../auth/withPermissionsFilteredChildren';
import Article from 'grommet/components/Article';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import FilterControl from 'grommet-addons/components/FilterControl';
import Header from 'grommet/components/Header';
import Layer from 'grommet/components/Layer';
import List from 'grommet/components/List';
import Notification from 'grommet/components/Notification';
import {getMessage} from 'grommet/utils/Intl';
import AppBar from '../layout/AppBar';
import CreateButton from '../button/CreateButton';
import Spinning from 'grommet/components/icons/Spinning';
import Placeholder from './Placeholder';
import FreeTextSearch from './FreeTextSearch';
import {toUpper, toLower} from 'lodash';
import debounce from 'lodash.debounce';

export class GrommetList extends Component {
    state = {
        filterActive: false,
        searchText: ''
    };

    componentDidMount() {
        this.updateData();
        if (Object.keys(this.props.query).length > 0) {
            this
                .props
                .changeListParams(this.props.resource, this.props.query);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.resource !== this.props.resource) {
            this.updateData(Object.keys(nextProps.query).length > 0
                ? nextProps.query
                : nextProps.params);
        }
        if (nextProps.query.sort !== this.props.query.sort || nextProps.query.order !== this.props.query.order || nextProps.query.filter !== this.props.query.filter) {
            if (nextProps.query.page === this.props.query.page) {
                this.updateData(Object.keys(nextProps.query).length > 0
                    ? nextProps.query
                    : nextProps.params);
                }
        }  
        if (nextProps.query.page !== this.props.query.page) {
            this.moreData(Object.keys(nextProps.query).length > 0
                ? nextProps.query
                : nextProps.params);
        }        
        if (nextProps.version !== this.props.version) {
            this.updateData();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.isLoading === this.props.isLoading && nextProps.width === this.props.width && nextProps.version === this.props.version && nextState === this.state) {
            return false;
        }
        return true;
    }

    getBasePath() {
        return this
            .props
            .location
            .pathname
            .replace(/\/$/, '');
    }

    /**
     * Merge list params from 3 different sources:
     *   - the query string
     *   - the params stored in the state (from previous navigation)
     *   - the props passed to the List component
     */
    getQuery() {
        const query = Object
            .keys(this.props.query)
            .length > 0
            ? this.props.query
            : {
                ...this.props.params
            };
        if (!query.sort) {
            query.sort = this.props.sort.field;
            query.order = this.props.sort.order;
        }
        if (!query.perPage) {
            query.perPage = this.props.perPage;
        }
        return query;
    }

    updateData(query) {
        const params = query || this.getQuery();
        const {sort, order, page, perPage, filter} = params;
        const pagination = {
            page: parseInt(page, 10),
            perPage: parseInt(perPage, 10)
        };
        const permanentFilter = this.props.filter;
        this
            .props
            .crudGetList(this.props.resource, pagination, {
                field: sort,
                order
            }, {
                ...filter,
                ...permanentFilter
            });
    }

    moreData(query) {
        const params = query || this.getQuery();
        const {sort, order, page, perPage, filter} = params;
        const pagination = {
            page: parseInt(page, 10),
            perPage: parseInt(perPage, 10)
        };
        const permanentFilter = this.props.filter;
        this
            .props
            .crudGetMore(this.props.resource, pagination, {
                field: sort,
                order
            }, {
                ...filter,
                ...permanentFilter
            });
    }    

    setSort = sort => this.changeParams({type: SET_SORT, payload: sort});

    setPage = page => this.changeParams({type: SET_PAGE, payload: page});

    setFilters = filters => this.changeParams({type: SET_FILTER, payload: filters});

    showFilter = (filterName, defaultValue) => {
        this.setState({[filterName]: true});
        if (typeof defaultValue !== 'undefined') {
            this.setFilters({
                ...this.props.filterValues,
                [filterName]: defaultValue
            });
        }
    };

    hideFilter = filterName => {
        this.setState({[filterName]: false});
        const newFilters = removeKey(this.props.filterValues, filterName);
        this.setFilters(newFilters);
    };

    closeFilters = () => {
        this.setState({filterActive: false});
    }

    openFilters = () => {
        this.setState({filterActive: true});
    }

    setFreeTextSearch = (searchText) => {
        this.setFilters({
                ...this.props.filterValues,
                q: searchText
            });
    }

    onMore = () => {
        const {page} = this.getQuery();        
        this.setPage(parseInt(page, 10) + 1);
    }

    changeParams(action) {
        const newParams = queryReducer(this.getQuery(), action);
        this
            .props
            .push({
                ...this.props.location,
                search: `?${stringify({
                    ...newParams,
                    filter: JSON.stringify(newParams.filter),
                    })}`
                });
        this
            .props
            .changeListParams(this.props.resource, newParams);
    }

    refresh() {
        if (process.env !== 'production') {
            console.warn( // eslint-disable-line
                    'Deprecation warning: The preferred way to refresh the List view is to connect yo' +
                    'ur custom button with redux and dispatch the `refreshView` action.');
        }

        this
            .props
            .refreshView();
    }

            render() {
                const {
                    children,
                    filters,
                    resource,
                    hasCreate,
                    title,
                    data,
                    ids,
                    total,
                    isLoading,
                    translate,
                    theme,
                    version,
                    includeNav,
                    hasFreeTextSearch,
                    count,
                    sortable,
                } = this.props;
                const {filterActive, searchText} = this.state;
                const query = this.getQuery();
                const filterValues = query.filter;
                const basePath = this.getBasePath();

                const resourceName = translate(`resources.${resource}.name`, {
                    smart_count: 2,
                    _: inflection.humanize(inflection.pluralize(resource))
                });
                const defaultTitle = translate('aor.page.list', {name: `${resourceName}`});

                let onMore;
                if (ids.length > 0 && ids.length < total && !isLoading) {
                    onMore = this.onMore;
                }

                return (
                    <Box>
                        <Header
                            size='large'
                            pad={{
                            horizontal: 'medium'
                        }}>
                            <Title responsive={false}>
                                <AppBar 
                                    title={title} 
                                    defaultTitle={defaultTitle}/>
                            </Title>
                            {hasFreeTextSearch && <FreeTextSearch
                                searchText={filterValues.q}
                                hideFilter={this.hideFilter}
                                setFreeTextSearch={this.setFreeTextSearch}/>}                             
                            {hasCreate && <CreateButton
                                basePath={basePath}/>}
                            <FilterControl
                                filteredTotal={total}
                                unfilteredTotal={count}
                                onClick={this.openFilters}/> 
                                {filterActive && <Layer 
                                    align='right' 
                                    flush={true} 
                                    closer={false} 
                                    a11yTitle='Filter'>
                                    {filters && React.cloneElement(filters, {
                                        resource,
                                        hideFilter: this.hideFilter,
                                        filterValues,
                                        displayedFilters: this.state,
                                        setFilters: this.setFilters,
                                        context: 'form',
                                        closeFilters: this.closeFilters,
                                        currentSort: {
                                            field: query.sort,
                                            order: query.order,
                                        },
                                        setSort: this.setSort,
                                        sortable: sortable,
                                    })}
                                </Layer>}
                        </Header>
                        <div key={version}>
                            {children && React.cloneElement(children, {
                                resource,
                                ids,
                                data,
                                basePath,
                                isLoading,
                                onMore: onMore,
                            })}
                        </div>
                        
                        <Placeholder 
                            isLoading={isLoading} 
                            filteredTotal={total} 
                            unfilteredTotal={count} 
                            addControl={<CreateButton
                                inline={false}
                                basePath={basePath}
                            />}/>                        
                    </Box>
                );
            }
        }

    GrommetList.propTypes = {
        // the props you can change
        title: PropTypes.any,
        filter: PropTypes.object,
        filters: PropTypes.element,
        pagination: PropTypes.element,
        actions: PropTypes.element,
        perPage: PropTypes.number.isRequired,
        sort: PropTypes.shape({field: PropTypes.string, order: PropTypes.string}),
        sortable: PropTypes.array,
        children: PropTypes.node,
        // the props managed by admin-on-rest
        authClient: PropTypes.func,
        changeListParams: PropTypes.func.isRequired,
        crudGetList: PropTypes.func.isRequired,
        data: PropTypes.object, // eslint-disable-line react/forbid-prop-types
        filterValues: PropTypes.object, // eslint-disable-line react/forbid-prop-types
        hasCreate: PropTypes.bool.isRequired,
        ids: PropTypes.array,
        isLoading: PropTypes.bool.isRequired,
        location: PropTypes.object.isRequired,
        path: PropTypes.string,
        params: PropTypes.object.isRequired,
        push: PropTypes.func.isRequired,
        query: PropTypes.object.isRequired,
        resource: PropTypes.string.isRequired,
        refreshView: PropTypes.func.isRequired,
        total: PropTypes.number.isRequired,
        translate: PropTypes.func.isRequired,
        version: PropTypes.number.isRequired,
        hasFreeTextSearch: PropTypes.bool
    };

    GrommetList.defaultProps = {
        filter: {},
        filterValues: {},
        perPage: 25,
        sort: {
            field: 'id',
            order: SORT_DESC,
        },
        hasFreeTextSearch: true
    };

    const getLocationSearch = props => props.location.search;
    const getQuery = createSelector(getLocationSearch, locationSearch => {
        const query = parse(locationSearch);
        if (query.filter && typeof query.filter === 'string') {
            query.filter = JSON.parse(query.filter);
        }
        return query;
    });

    function mapStateToProps(state, props) {
        const resourceState = state.admin.resources[props.resource];
        return {
            query: getQuery(props),
            params: resourceState.list.params,
            ids: resourceState.list.ids,
            total: resourceState.list.total,
            count: resourceState.list.count,
            data: resourceState.data,
            isLoading: state.admin.loading > 0,
            includeNav: (state.admin.ui.navActive && state.admin.ui.navEnabled),
            filterValues: resourceState.list.params.filter,
            version: state.admin.ui.viewVersion
        };
    }

    const enhance = compose(connect(mapStateToProps, {
        crudGetList: crudGetListAction,
        crudGetMore: crudGetMoreAction,
        changeListParams: changeListParamsAction,
        push: pushAction,
        refreshView: refreshViewAction
    }), translate, withPermissionsFilteredChildren);

    export default enhance(GrommetList);