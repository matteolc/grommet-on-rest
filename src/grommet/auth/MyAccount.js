import React from 'react';
import Anchor from 'grommet/components/Anchor';
import {SESSION_ACCOUNT_ID} from './types';

const MyAccount = () => <Anchor
    href='#' 
    path={`/accounts/${localStorage.getItem(SESSION_ACCOUNT_ID)}/show`}
    label={'My Account'}
/>

export default MyAccount;