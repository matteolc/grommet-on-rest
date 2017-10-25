import React from 'react';
import PropTypes from 'prop-types';
import Anchor from 'grommet/components/Anchor';
import translate from '../../i18n/translate';

const DashboardMenuItem = ({ onClick, translate }) => (
    <Anchor
        path={`/dashboard`}
        label={translate('aor.page.dashboard')}
    />   
);

DashboardMenuItem.propTypes = {
    onClick: PropTypes.func,
    translate: PropTypes.func.isRequired,
};

export default translate(DashboardMenuItem);