import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'grommet/components/CheckBox';
import FieldTitle from '../../util/FieldTitle';
import FormField from 'grommet/components/FormField';


class BooleanInput extends Component {
    handleToggle = (event) => {        
        const value = this.props.input.value;
        this.props.input.onChange(!value);
    };

    render() {
        const {
            input,
            isRequired,
            label,
            source,
            elStyle,
            resource,
            options,
        } = this.props;

        return (
            <FormField 
            htmlFor={source}
            label={
                <FieldTitle 
                    label = {label}
                    source = {source}
                    resource = {resource} 
                />}>
            <CheckBox
                defaultChecked={!!input.value}
                onChange={this.handleToggle}    
                {...options}/>
        </FormField>  
        );
    }
}

BooleanInput.propTypes = {
    addField: PropTypes.bool.isRequired,
    elStyle: PropTypes.object,
    input: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    resource: PropTypes.string,
    source: PropTypes.string,
    options: PropTypes.object,
};

BooleanInput.defaultProps = {
    addField: true,
    options: {},
};

export default BooleanInput;
