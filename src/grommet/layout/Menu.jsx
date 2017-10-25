// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import translate from '../../i18n/translate';
import { getResources } from '../../reducer';
import inflection from 'inflection';
import compose from 'recompose/compose';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Logo from 'grommet/components/icons/Grommet';
import Anchor from 'grommet/components/Anchor';
import DashboardMenuItem from './DashboardMenuItem';
import SessionMenu from '../auth/SessionMenu';
import {navActivate as navActivateAction} from '../../actions';

const translatedResourceName = (resource, translate) =>
    translate(`resources.${resource.name}.name`, {
        smart_count: 2,
        _:
            resource.options && resource.options.label
                ? translate(resource.options.label, {
                      smart_count: 2,
                      _: resource.options.label,
                  })
                : inflection.humanize(inflection.pluralize(resource.name)),
    });

class GrommetMenu extends Component {
    handleClose = () => {
        this.props.navActivate(false);
      }
    
      render() {
        const { hasDashboard, onMenuTap, resources, translate, logout, title, theme } = this.props;
        
        return (
          <Sidebar colorIndex={theme} fixed={true}>
            <Header size='large' justify='between' pad={{ horizontal: 'medium' }}>
              <Title onClick={this.handleClose} a11yTitle='Close Menu'>
                <Logo colorIndex='light-1' />
                <span>{title}</span>
              </Title>
              <Button icon={<CloseIcon />} onClick={this.handleClose} plain={true}
                a11yTitle='Close Menu' />
            </Header>
            <Menu fill={true} primary={true}>
            {hasDashboard && <DashboardMenuItem onClick={onMenuTap} />}
            {resources
            .filter(r => r.list)
            .map(resource => (
                <Anchor
                    key={resource.name}
                    path={`/${resource.name}`}
                    label={translatedResourceName(resource, translate)}
                />
            ))}
            </Menu>
            <Footer pad={{ horizontal: 'medium', vertical: 'small' }}>
                <SessionMenu />
            </Footer>
          </Sidebar>
        );
      }
    
    }

GrommetMenu.propTypes = {
    title: PropTypes.string,
    hasDashboard: PropTypes.bool,
    logout: PropTypes.element,
    onMenuTap: PropTypes.func,
    resources: PropTypes.array.isRequired,
    translate: PropTypes.func.isRequired,
    navActivate: PropTypes.func.isRequired,
};

GrommetMenu.defaultProps = {
    onMenuTap: () => null,
};

const mapStateToProps = state => ({
    resources: getResources(state),
    active: state.admin.ui.navActive,
    enabled: state.admin.ui.navEnabled,
});

const enhance = compose(translate, connect(mapStateToProps, {
       navActivate: navActivateAction,
    }));

export default enhance(GrommetMenu);

