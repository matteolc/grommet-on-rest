import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import translate from '../../i18n/translate';
import Layer from 'grommet/components/Layer';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';
import Box from 'grommet/components/Box';
import Sort from 'grommet-addons/components/Sort';
import CloseIcon from 'grommet/components/icons/base/Close';
import StatusIcon from 'grommet/components/icons/Status';

const emptyRecord = {};

export class FilterForm extends Component {
    getShownFilters() {
        const {filters, displayedFilters, initialValues} = this.props;
        return filters.filter(filterElement => filterElement.props.alwaysOn || displayedFilters[filterElement.props.source] || typeof initialValues[filterElement.props.source] !== 'undefined');
    }

    render() {
        const {
            resource,
            translate,
            closeFilters,
            currentSort,
            setSort,
            sortable
        } = this.props;

        return (
            <Sidebar 
                size='large'
                alignContent='start'
            >
                <div>
                    <Header
                        size='large'
                        justify='between'
                        align='center'
                        pad={{
                        horizontal: 'medium',
                        vertical: 'medium'
                    }}>
                        <Heading tag='h2' margin='none'>Filter</Heading>
                        <Button icon={< CloseIcon />} plain={true} onClick={closeFilters}/>
                    </Header>
                    <Section
                        pad={{
                        horizontal: 'large',
                        vertical: 'small'
                    }}>
                        {this
                            .getShownFilters()
                            .reverse()
                            .map(filterElement => (
                                <div
                                    key={filterElement.props.source}
                                    data-source={filterElement.props.source}
                                    className="filter-field"
                                    style={filterElement.props.style}>
                                    <div>
                                        <Field
                                            allowEmpty
                                            {...filterElement.props}
                                            name={filterElement.props.source}
                                            component={filterElement.type}
                                            resource={resource}
                                            record={emptyRecord}/>
                                    </div>
                                </div>
                            ))}
                    </Section>
                    {sortable && <Section
                        pad={{
                        horizontal: 'large',
                        vertical: 'small'
                    }}>
                        <Heading tag='h3'>Sort</Heading>
                        <Sort
                            options={sortable.map(field => {
                            const option = {
                                label: field,
                                value: field,
                                direction: 'asc'
                            }
                            return option;
                        })}
                            value={currentSort.field}
                            direction={currentSort.order}
                            onChange={setSort}/>
                    </Section>}
                </div>
            </Sidebar>
        );
    }
}

FilterForm.propTypes = {
    resource: PropTypes.string.isRequired,
    filters: PropTypes
        .arrayOf(PropTypes.node)
        .isRequired,
    displayedFilters: PropTypes.object.isRequired,
    hideFilter: PropTypes.func.isRequired,
    closeFilters: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
    translate: PropTypes.func.isRequired,
    currentSort: PropTypes.shape({sort: PropTypes.string, order: PropTypes.string}),
    setSort: PropTypes.func.isRequired
};

export const mergeInitialValuesWithDefaultValues = ({initialValues, filters}) => ({
    initialValues: {
        ...filters
            .filter(filterElement => filterElement.props.alwaysOn && filterElement.props.defaultValue)
            .reduce((acc, filterElement) => ({
                ...acc,
                [filterElement.props.source]: filterElement.props.defaultValue
            }), {}),
        ...initialValues
    }
});

const enhance = compose(translate, withProps(mergeInitialValuesWithDefaultValues), reduxForm({
    form: 'filterForm',
    enableReinitialize: true,
    onChange: (values, dispatch, props) => props.setFilters(values)
}));

export default enhance(FilterForm);
