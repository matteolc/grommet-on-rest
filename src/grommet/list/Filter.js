import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import isEqual from 'lodash.isequal';
import FilterForm from './FilterForm';
import removeEmpty from '../../util/removeEmpty';
import withPermissionsFilteredChildren from '../../auth/withPermissionsFilteredChildren';

export class Filter extends Component {
    constructor(props) {
        super(props);
        this.filters = this.props.filterValues;
    }

    componentWillReceiveProps(nextProps) {
        this.filters = nextProps.filterValues;
    }

    componentWillUnmount() {
        if (this.props.setFilters) {
            this.setFilters.cancel();
        }
    }

    setFilters = debounce(filters => {
        if (!isEqual(filters, this.filters)) {
            // fix for redux-form bug with onChange and enableReinitialize
            const filtersWithoutEmpty = removeEmpty(filters);
            this.props.setFilters(filtersWithoutEmpty);
            this.filters = filtersWithoutEmpty;
        }
    }, this.props.debounce);

    setSort = sort => {
        this.props.setSort(sort.value);
    };      

    render() {
        const {
            resource,
            children,
            hideFilter,
            displayedFilters,
            filterValues,
            closeFilters,
            currentSort,
            sortable,
        } = this.props;
        return (
            <FilterForm
                closeFilters={closeFilters}
                resource={resource}
                filters={React.Children.toArray(children)}
                hideFilter={hideFilter}
                displayedFilters={displayedFilters}
                initialValues={filterValues}
                setFilters={this.setFilters}
                currentSort={currentSort}
                setSort={this.setSort}
                sortable={sortable}
            />
        );
    }
}

Filter.propTypes = {
    children: PropTypes.node,
    debounce: PropTypes.number.isRequired,
    displayedFilters: PropTypes.object,
    filterValues: PropTypes.object,
    hideFilter: PropTypes.func,
    setFilters: PropTypes.func,
    closeFilters: PropTypes.func,
    showFilter: PropTypes.func,
    resource: PropTypes.string.isRequired,
    currentSort: PropTypes.shape({
        sort: PropTypes.string,
        order: PropTypes.string,
    }),
    setSort: PropTypes.func.isRequired,
};

Filter.defaultProps = {
    debounce: 500,
};

export default withPermissionsFilteredChildren(Filter);
