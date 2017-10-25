import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateTime from 'grommet/components/DateTime';
import FieldTitle from '../../util/FieldTitle';
import FormField from 'grommet/components/FormField';

export const datify = input => {
    if (!input) {
        return null;
    }

    const date = input instanceof Date ? input : new Date(input);
    if (isNaN(date)) {
        throw new Error(`Invalid date: ${input}`);
    }

    return date;
};

class DateInput extends Component {
    onChange = (date) => {
        this.props.input.onChange(datify(date));
    };

    render() {
        const {
            input,
            isRequired,
            label,
            meta,
            options,
            source,
            elStyle,
            resource,
        } = this.props;
        if (typeof meta === 'undefined') {
            throw new Error(
                "The DateInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/admin-on-rest/Inputs.html#writing-your-own-input-component for details."
            );
        }
        const { touched, error } = meta;

        return (
            <FormField
            htmlFor={source}
            error={touched && error}
            label={
                <FieldTitle 
                    label = {label}
                    source = {source}
                    resource = {resource} 
                />}
            >            
            <DateTime
                {...input}
                id={source}
                value={datify(input.value)}
                onChange={this.onChange}
                {...options}
            />
            </FormField> 
        );
    }
}

DateInput.propTypes = {
    addField: PropTypes.bool.isRequired,
    elStyle: PropTypes.object,
    input: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    options: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
};

DateInput.defaultProps = {
    addField: true,
    options: {},
};

export default DateInput;
