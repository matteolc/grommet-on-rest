import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Title from 'grommet/components/Title';
import Logo from 'grommet/components/icons/Grommet';
import Header from 'grommet/components/Header';

import {navActivate as navActivateAction} from '../../actions';

const AppBar = ({title, defaultTitle, navActive, includeNav, navActivate}) => (navActive
    ? <span>{title}</span>
    : <Button onClick={() => navActivate(true)}>
        <Box
            direction='row'
            responsive={false}
            pad={{
            between: 'small'
        }}>
            <Logo/> {title
                ? <Title>{title}</Title>
                : defaultTitle && <Title>{defaultTitle}</Title>
}
        </Box>
    </Button>)

AppBar.propTypes = {
    navActivate: PropTypes.func.isRequired,
    title: PropTypes.string,
    defaultTitle: PropTypes.string,
    navActive: PropTypes.bool,
    includeNav: PropTypes.bool
};

const mapStateToProps = state => ({
    navActive: state.admin.ui.navActive,
    includeNav: (state.admin.ui.navActive && state.admin.ui.navEnabled)
});

export default connect(mapStateToProps, {navActivate: navActivateAction})(AppBar);
