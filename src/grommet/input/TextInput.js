import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from 'grommet/components/TextInput';
import FieldTitle from '../../util/FieldTitle';
import FormField from 'grommet/components/FormField';
/**
 * An Input component for a string
 *
 * @example
 * <TextInput source="first_name" />
 *
 * You can customize the `type` props (which defaults to "text").
 * Note that, due to a React bug, you should use `<NumberField>` instead of using type="number".
 * @example
 * <TextInput source="email" type="email" />
 * <NumberInput source="nb_views" />
 *
 * The object passed as `options` props is passed to the material-ui <TextField> component
 */
export class GrommetTextInput extends Component {
    handleBlur = eventOrValue => {
        this
            .props
            .onBlur(eventOrValue);
        this
            .props
            .input
            .onBlur(eventOrValue);
    };

    handleFocus = event => {
        this
            .props
            .onFocus(event);
        this
            .props
            .input
            .onFocus(event);
    };

    handleChange = eventOrValue => {
        this
            .props
            .onChange(eventOrValue);
        this
            .props
            .input
            .onChange(eventOrValue);
    };

    render() {
        const {
            elStyle,
            input,
            isRequired,
            label,
            meta,
            options,
            resource,
            source,
            type
        } = this.props;
        if (typeof meta === 'undefined') {
            throw new Error("The TextInput component wasn't called within a redux-form <Field>. Did you decor" +
                    "ate it and forget to add the addField prop to your component? See https://marmel" +
                    "ab.com/admin-on-rest/Inputs.html#writing-your-own-input-component for details.");
        }
        const {touched, error} = meta;

        return (
            <FormField
                error={touched && error}
                label={
                    <FieldTitle 
                        label = {label}
                        source = {source}
                        resource = {resource} 
                    />}
                >
                <TextInput
                    {...input}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onDOMChange={this.handleChange}
                    type={type}
                    placeHolder={label || source}
                    style={elStyle}
                    {...options}/>
            </FormField>
        );
    }
}

GrommetTextInput.propTypes = {
    addField: PropTypes.bool.isRequired,
    elStyle: PropTypes.object,
    input: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    options: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
    type: PropTypes.string
};

GrommetTextInput.defaultProps = {
    addField: true,
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    options: {},
    type: 'text'
};

export default GrommetTextInput;
