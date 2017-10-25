import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import getDefaultValues from '../form/getDefaultValues';

export class TabbedShowLayout extends Component {

    render() {
        const {
            children,
            record,
            resource,
            basePath,
            translate,
        } = this.props;
        return (
                <Tabs>
                    {React.Children.map(
                        children,
                        (tab, index) =>
                            tab ? (
                                <Tab
                                    key={tab.props.value}
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
        );
    }
}

TabbedShowLayout.propTypes = {
    children: PropTypes.node,
    record: PropTypes.object,
    resource: PropTypes.string,
    basePath: PropTypes.string,
    translate: PropTypes.func,
};

const enhance = compose(
    connect((state, props) => ({
        initialValues: getDefaultValues(state, props),
    }))
);

export default enhance(TabbedShowLayout);
