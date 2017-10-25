import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';
import RobotIcon from 'grommet/components/icons/base/Robot';
import compose from 'recompose/compose';

import translate from '../../i18n/translate';

const styles = {
    container: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    containerMobile: {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '-3em',
    },
    icon: {
        width: '9em',
        height: '9em',
    },
    message: {
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        opacity: 0.5,
        margin: '0 1em',
    },
    toolbar: {
        textAlign: 'center',
        marginTop: '2em',
    },
};

function goBack() {
    history.go(-1);
}

const NotFound = ({ theme, translate }) => (
    <div style={styles.container}>
        <div style={styles.message}>
            <RobotIcon style={styles.icon} />
            <h1>{translate('aor.page.not_found')}</h1>
            <div>{translate('aor.message.not_found')}.</div>
        </div>
        <div style={styles.toolbar}>
            <Button
                primary={true}
                label={translate('aor.action.back')}
                icon={<LinkPreviousIcon />}
                onClick={() => goBack()}
            />
        </div>
    </div>
);

NotFound.propTypes = {
    translate: PropTypes.func.isRequired,
};


const enhance = compose(translate);

export default enhance(NotFound);
