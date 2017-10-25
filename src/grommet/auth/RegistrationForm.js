import React from 'react'

import Split from 'grommet/components/Split'
import Sidebar from 'grommet/components/Sidebar'
import LoginForm from 'grommet/components/LoginForm'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Header from 'grommet/components/Header'
import Paragraph from 'grommet/components/Paragraph'
import Footer from 'grommet/components/Footer'
import Anchor from 'grommet/components/Anchor'
import Logo from 'grommet/components/icons/Grommet'
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import PasswordInput from 'grommet/components/PasswordInput';

import {headers, buildQuery, processStatus} from 'grommet/utils/Rest';

export default class Register extends React.PureComponent {

    state = {
        email: undefined,
        username: undefined,
        password: undefined,
        password_confirmation: undefined
    }

    componentDidMount() {
        if (this.emailRef) {
            this
                .usernameRef
                .focus();
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        let {email, username, password, password_confirmation} = this.state;
        if (email && username && password && password_confirmation) {
            email = email.trim();
            this
                .props
                .onSubmit({email, username, password, password_confirmation});
        }
    }

    render() {
        return (
            <Form pad='medium'>
                <Box align='start'>
                    <Heading strong={true}>Register account</Heading>
                    <Paragraph align='center' margin="none">And unlock the magic</Paragraph>
                </Box>
                <fieldset>
                    <FormField label='Username'>
                        <input
                            type='text'
                            ref={ref => this.usernameRef = ref}
                            value={this.state.username}
                            onChange={(event) => {
                            this.setState({username: event.target.value})
                        }}/>
                    </FormField>
                    <FormField label='Email'>
                        <input
                            type='text'
                            ref={ref => this.emailRef = ref}
                            value={this.state.email}
                            onChange={(event) => {
                            this.setState({email: event.target.value})
                        }}/>
                    </FormField>
                    <FormField label='Password'>
                        <PasswordInput
                            onChange={(event) => {
                            this.setState({password: event.target.value})
                        }}/>
                    </FormField>
                    <FormField label='Password confirmation'>
                        <PasswordInput
                            onChange={(event) => {
                            this.setState({password_confirmation: event.target.value})
                        }}/>
                    </FormField>
                </fieldset>

                <Footer
                    direction="column"
                    size="small"
                    align="stretch"
                    pad={{
                        vertical: 'none',
                        between: 'medium'
                    }}>
                    <Button
                        label='Submit'
                        type='submit'
                        primary={true}
                        fill='stretch'
                        onClick={this.onSubmit}/>
                </Footer>
            </Form>
        )
    }
}
