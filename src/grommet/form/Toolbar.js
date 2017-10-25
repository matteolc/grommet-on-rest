import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { SaveButton } from '../button';
import Footer from 'grommet/components/Footer';

const valueOrDefault = (value, defaultValue) =>
    typeof value === 'undefined' ? defaultValue : value;

const Toolbar = ({
    invalid,
    submitOnEnter,
    handleSubmitWithRedirect,
    children,
}) => (  
                <Footer pad={{vertical: 'medium'}}>
                    {Children.count(children) === 0 ? (
                        <SaveButton
                            handleSubmitWithRedirect={handleSubmitWithRedirect}
                            invalid={invalid}
                            submitOnEnter={submitOnEnter}
                        />
                    ) : (
                        Children.map(
                            children,
                            button =>
                                button
                                    ? React.cloneElement(button, {
                                          handleSubmitWithRedirect,
                                          invalid,
                                          submitOnEnter: valueOrDefault(
                                              button.props.submitOnEnter,
                                              submitOnEnter
                                          ),
                                      })
                                    : null
                        )
                    )}
                </Footer>
);

Toolbar.propTypes = {
    children: PropTypes.node,
    handleSubmitWithRedirect: PropTypes.func,
    invalid: PropTypes.bool,
    submitOnEnter: PropTypes.bool,
};

Toolbar.defaultProps = {
    submitOnEnter: true,
};

export default Toolbar;
