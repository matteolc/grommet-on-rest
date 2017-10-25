import React from 'react';
import FormField from './FormField';

const FormInput = ({
    input,
    ...rest
}) => input
    ? 
    <FormField input={input} {...rest}/>
    : null;

export default FormInput;
