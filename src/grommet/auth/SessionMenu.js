import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import UserIcon from 'grommet/components/icons/base/User';
import Logout from './Logout';
import MyAccount from './MyAccount';
import {SESSION_ACCOUNT_USERNAME} from './types';

const SessionMenu = ({dropAlign, colorIndex}) => <Menu
  icon={< UserIcon />}
  dropAlign={dropAlign}
  colorIndex={colorIndex}
  a11yTitle='Session'>
  <Box pad='medium'>
    <Heading tag='h3' margin='none'>{localStorage.getItem(SESSION_ACCOUNT_USERNAME)}</Heading>
  </Box>
  <MyAccount />
  <Logout/>
</Menu>

SessionMenu.propTypes = {
  colorIndex: PropTypes.string,
  dropAlign: Menu.propTypes.dropAlign,
  translate: PropTypes.func,
};

SessionMenu.defaultProps = {
  dropAlign: {
    bottom: 'bottom'
  }
}

export default SessionMenu;
