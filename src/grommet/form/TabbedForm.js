import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import {
    reduxForm,
    getFormAsyncErrors,
    getFormSyncErrors,
    getFormSubmitErrors,
} from 'redux-form';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Form from 'grommet/components/Form';

import Toolbar from './Toolbar';
import getDefaultValues from './getDefaultValues';

export class TabbedForm extends Component {

    handleSubmitWithRedirect = (redirect = this.props.redirect) =>
        this.props.handleSubmit(values => this.props.save(values, redirect));

    render() {
        const {
            basePath,
            children,
            invalid,
            record,
            resource,
            submitOnEnter,
            tabsWithErrors,
            toolbar,
            translate,
        } = this.props;

        return (
            <Form
            onSubmit={this.handleSubmitWithRedirect}>
                <div>
                    <Tabs>
                        {React.Children.map(
                            children,
                            (tab, index) =>
                                tab ? (
                                    <Tab
                                        key={tab.props.label}
                                        className="form-tab"
                                        title={translate(tab.props.label, {
                                            _: tab.props.label,
                                        })}
                                    >
                                        {React.cloneElement(tab, {
                                            resource,
                                            record,
                                            basePath,
                                        })}
                                    </Tab>
                                ) : null
                        )}
                    </Tabs>
                </div>
                {toolbar &&
                    React.cloneElement(toolbar, {
                        handleSubmitWithRedirect: this.handleSubmitWithRedirect,
                        invalid,
                        submitOnEnter,
                    })}
            </Form>
        );
    }
}

TabbedForm.propTypes = {
    basePath: PropTypes.string,
    children: PropTypes.node,
    defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    handleSubmit: PropTypes.func, // passed by redux-form
    invalid: PropTypes.bool,
    record: PropTypes.object,
    redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    resource: PropTypes.string,
    save: PropTypes.func, // the handler defined in the parent, which triggers the REST submission
    submitOnEnter: PropTypes.bool,
    tabsWithErrors: PropTypes.arrayOf(PropTypes.string),
    toolbar: PropTypes.element,
    translate: PropTypes.func,
    validate: PropTypes.func,
};

TabbedForm.defaultProps = {
    submitOnEnter: true,
    toolbar: <Toolbar />,
};

const collectErrors = state => {
    const syncErrors = getFormSyncErrors('record-form')(state);
    const asyncErrors = getFormAsyncErrors('record-form')(state);
    const submitErrors = getFormSubmitErrors('record-form')(state);

    return {
        ...syncErrors,
        ...asyncErrors,
        ...submitErrors,
    };
};

export const findTabsWithErrors = (
    state,
    props,
    collectErrorsImpl = collectErrors
) => {
    const errors = collectErrorsImpl(state);

    return Children.toArray(props.children).reduce((acc, child) => {
        const inputs = Children.toArray(child.props.children);

        if (inputs.some(input => errors[input.props.source])) {
            return [...acc, child.props.label];
        }

        return acc;
    }, []);
};

const enhance = compose(
    connect((state, props) => {
        const children = Children.toArray(props.children).reduce(
            (acc, child) => [...acc, ...Children.toArray(child.props.children)],
            []
        );

        return {
            tabsWithErrors: findTabsWithErrors(state, props),
            initialValues: getDefaultValues(state, { ...props, children }),
        };
    }),
    reduxForm({
        form: 'record-form',
        enableReinitialize: true,
    })
);

export default enhance(TabbedForm);
