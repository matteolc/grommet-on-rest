import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toast from 'grommet/components/Toast';
import { hideNotification as hideNotificationAction } from '../../actions/notificationActions';
import translate from '../../i18n/translate';

class Notification extends React.Component {
    handleRequestClose = () => {
        this.props.hideNotification();
    };

    render() {
        const { type, translate, message } = this.props;
        let status = type;        
        if (type === 'confirm' || type === 'info') {
            status = 'ok';
        }
        return (
            message ?
            <Toast
                onClose={this.handleRequestClose}
                status={status}
            >
              {translate(message)}
            </Toast>
            :
            null
        );
    }
}

Notification.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string.isRequired,
    hideNotification: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
};

Notification.defaultProps = {
    type: 'confirm',
};

const mapStateToProps = state => ({
    message: state.admin.notification.text,
    type: state.admin.notification.type,
});

export default translate(
    connect(mapStateToProps, { hideNotification: hideNotificationAction })(
        Notification
    )
);
