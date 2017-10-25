import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Anchor from 'grommet/components/Anchor';

import { userLogout as userLogoutAction } from '../../actions/authActions';

const Logout = ({ translate, userLogout }) => <Anchor
    href='#' 
    onClick={userLogout} 
    label={'Logout'}
/>

Logout.propTypes = {
    translate: PropTypes.func,
    userLogout: PropTypes.func,
};

const mapStateToProps = state => ({ isLoading: state.admin.loading > 0 });

export default connect(mapStateToProps, { userLogout: userLogoutAction })(Logout);