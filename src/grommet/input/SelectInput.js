import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {get, startsWith} from 'lodash';
import Select from 'grommet/components/Select';
import FormField from 'grommet/components/FormField';
import Box from 'grommet/components/Box';

import translate from '../../i18n/translate';
import FieldTitle from '../../util/FieldTitle';

/**
 * An Input component for a select box, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property an the option text
 * @example
 * const choices = [
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', name: 'Female' },
 * ];
 * <SelectInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <SelectInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <SelectInput source="author_id" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <SelectInput source="gender" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'M', name: 'myroot.gender.male' },
 *    { id: 'F', name: 'myroot.gender.female' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <SelectInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <SelectField> component
 */
export class SelectInput extends Component {
    /*
     * Using state to bypass a redux-form comparison but which prevents re-rendering
     * @see https://github.com/erikras/redux-form/issues/2456
     */
    state = {
        searchText: '',
        option: {
            value: this.props.input.value,
            label: ''
        }
    };

    componentWillReceiveProps(nextProps) {
        let option = {...this.state.option};        
        if (nextProps.input.value !== this.props.input.value) {
            option.value = nextProps.input.value
            this.setState({ option: option });
        }
    }

    handleChange = (pseudoEvent) => {
        this.props.input.onChange(pseudoEvent.option.value);
        this.setState({ option: pseudoEvent.option });
    };

    onSearch = (event) => {        
        const value = event.target.value;
        if (value !== this.state.searchText) {
            this.setState({ searchText: event.target.value });
        }
      }    

    addAllowEmpty = choices => {
        if (this.props.allowEmpty) {
            const emptyChoice = {
                value: undefined,
                sub: "",
                label: ""
            }
            return [
                ...emptyChoice,
                ...choices,
            ];
        }

        return choices;
    };

    renderMenuItem = choice => {
        const {
            optionText,
            optionValue,
            translate,
            translateChoice,
        } = this.props;
        const choiceName = React.isValidElement(optionText) // eslint-disable-line no-nested-ternary
            ? React.cloneElement(optionText, { record: choice })
            : typeof optionText === 'function'
              ? optionText(choice)
              : get(choice, optionText);
        return (
            {
                value: get(choice, optionValue),
                sub: get(choice, optionValue),
                label: <Box direction='row' justify='between'><span>{get(choice, optionValue)}</span><span className='secondary'>{choiceName}</span></Box>,
            }      
        );
    };

    render() {
        const {
            choices,
            elStyle,
            isRequired,
            label,
            meta,
            options,
            resource,
            source,
            allowEmpty,
        } = this.props;
        if (typeof meta === 'undefined') {
            throw new Error(
                "The SelectInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/admin-on-rest/Inputs.html#writing-your-own-input-component for details."
            );
        }
        const { touched, error } = meta;
        const selectOptions = this.addAllowEmpty(choices.map(this.renderMenuItem).filter(option => startsWith(option.value, this.state.searchText)))

        console.log(options)
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
            <Select
                id={source}
                onSearch={this.onSearch}
                onChange={this.handleChange}
                value={this.state.option.value}
                style={elStyle}
                placeHolder={allowEmpty ? 'None' : 'Select..'}
                options={selectOptions}
                multiple={options.multiple}
                {...options}/>
        </FormField>
        );
    }
}

SelectInput.propTypes = {
    addField: PropTypes.bool.isRequired,
    allowEmpty: PropTypes.bool.isRequired,
    choices: PropTypes.arrayOf(PropTypes.object),
    elStyle: PropTypes.object,
    input: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    options: PropTypes.object,
    optionText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.element,
    ]).isRequired,
    optionValue: PropTypes.string.isRequired,
    resource: PropTypes.string,
    source: PropTypes.string,
    translate: PropTypes.func.isRequired,
    translateChoice: PropTypes.bool.isRequired,
};

SelectInput.defaultProps = {
    addField: true,
    allowEmpty: false,
    choices: [],
    options: {
        multiple: false,
    },
    optionText: 'name',
    optionValue: 'id',
    translateChoice: true,
};

export default translate(SelectInput);
