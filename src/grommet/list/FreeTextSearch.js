import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import Search from 'grommet/components/Search';

export class FreeTextSearch extends Component {
    constructor(props) {
        super(props);
        this.searchText = this.props.searchText;
    }

    componentWillReceiveProps(nextProps) {
        this.searchText = nextProps.searchText;
    }
    
    setFreeTextSearch = (event) => {
        const searchText = event.target.value;
        if (!isEqual(searchText, this.searchText)) {
            searchText === ''
                ? this.props.hideFilter('q')
                : this.props.setFreeTextSearch(searchText);  
            this.searchText = searchText;
        }  
    }    

    render() {
        const {
            searchText,
        } = this.props;
        return (
            <Search
                inline={true}
                fill={true}
                size='medium'
                placeHolder='Search'
                value={searchText}
                onDOMChange={this.setFreeTextSearch}/>      
        );
    }
}

FreeTextSearch.propTypes = {
    searchText: PropTypes.string,
    setFreeTextSearch: PropTypes.func,
};


export default FreeTextSearch;
