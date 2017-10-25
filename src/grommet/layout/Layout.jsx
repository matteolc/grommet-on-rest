import React, {createElement, Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import compose from 'recompose/compose';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';

import AdminRoutes from '../../AdminRoutes';
import AppBar from './AppBar';
import Menu from './Menu';
import Notification from './Notification';

import {navResponsive as navResponsiveAction} from '../../actions';

import 'grommet/grommet.min.css';

class Layout extends Component {

    render() {
        const {
            children,
            customRoutes,
            dashboard,
            isLoading,
            logout,
            menu,
            catchAll,
            title,
            width,
            theme,
            navResponsive,
            includeNav,
            navPriority
        } = this.props;

        return (
            <App centered={false}>
                <Split priority={navPriority} flex='right' onResponsive={navResponsive}>
                    {includeNav && createElement(menu || Menu, {
                        title,
                        logout,
                        theme,
                        hasDashboard: !!dashboard
                    })}
                    <AdminRoutes
                        customRoutes={customRoutes}
                        dashboard={dashboard}
                        catchAll={catchAll}>
                        {children}
                    </AdminRoutes>                    
                </Split>
                <Notification />
            </App>
        );
    }
}

const componentPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.string]);

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    catchAll: componentPropType,
    customRoutes: PropTypes.array,
    dashboard: componentPropType,
    isLoading: PropTypes.bool.isRequired,
    logout: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.string]),
    menu: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    title: PropTypes.node.isRequired
};

function mapStateToProps(state) {
    return {
        isLoading: state.admin.loading > 0,
        includeNav: (state.admin.ui.navActive && state.admin.ui.navEnabled),
        navPriority: (state.admin.ui.navActive && state.admin.ui.navEnabled && state.admin.ui.responsive === 'single'
            ? 'left'
            : 'right')
    };
}

export default connect(mapStateToProps, {navResponsive: navResponsiveAction})(Layout);
