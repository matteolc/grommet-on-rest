import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import LoginForm from 'grommet/components/LoginForm';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Footer from 'grommet/components/Footer';
import Logo from 'grommet/components/icons/Grommet';

import {userLogin as userLoginAction} from '../../actions/authActions';
import translate from '../../i18n/translate';
import Notification from '../layout/Notification';

class Login extends Component {

  login = auth => this
    .props
    .userLogin(auth, this.props.location.state
      ? this.props.location.state.nextPathname
      : this.props.dashboard 
        ? 
        '/dashboard'
        :
        '/');

  render() {
    const {isLoading, translate, theme, loginTexture, title} = this.props;
    const error = '';

    return (
      <App centered={false}>
        <Split flex='left' separator={true}>

          <Article>
            <Section
              full={true}
              colorIndex={theme}
              texture={loginTexture}
              pad='large'
              justify='center'
              align='center'>
              <Heading tag='h1'>
                <strong>{title}</strong>
              </Heading>
              <Paragraph align='center' size='large'>
                Development with Grommet is cool.
              </Paragraph>
            </Section>
          </Article>

          <Sidebar 
            justify='between' 
            align='center' 
            pad='none' 
            size='large'>
            <span/>
            <LoginForm
              align='start'
              logo={
                <Logo 
                  className='logo'
                  colorIndex = {theme} 
                />}
              title='Grommet'
              onSubmit={isLoading
                ? null
                : this.login}
              errors={[error]}
              usernameType='text'/>
            <Footer
              direction='row'
              size='small'
              pad={{
                horizontal: 'medium',
                vertical: 'small'
              }}>
              <span className='secondary'>&copy; 2017 Voxbox.io</span>
            </Footer>
          </Sidebar>

        </Split>
        <Notification />
      </App>
    );
  }
}

Login.propTypes = {
  authClient: PropTypes.func,
  previousRoute: PropTypes.string,
  translate: PropTypes.func.isRequired,
  userLogin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.admin.loading > 0
});

const enhance = compose(translate, connect(mapStateToProps, {userLogin: userLoginAction}));

export default enhance(Login);
