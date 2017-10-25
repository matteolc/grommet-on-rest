import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'grommet/components/Button';
import SaveIcon from 'grommet/components/icons/base/Save';
import translate from '../../i18n/translate';

export class SaveButton extends Component {
    handleClick = e => {
        if (this.props.saving) {
            // prevent double submission
            e.preventDefault();
        } else {
            // always submit form explicitly regardless of button type
            const { handleSubmitWithRedirect, redirect } = this.props;
            if (e) {
                e.preventDefault();
            }
            handleSubmitWithRedirect(redirect)();
        }
    };

    render() {
        const {
            saving,
            label = 'aor.action.save',
            raised = true,
            translate,
            submitOnEnter,
            redirect,
            plain,
            options,
        } = this.props;
        const type = submitOnEnter ? 'submit' : 'button';
        return (
            <Button
                plain={plain}            
                type={type}
                label={label && translate(label)}
                icon={<SaveIcon />}
                onClick={this.handleClick}
                {...options}
            />
        );
    }
}

SaveButton.propTypes = {
    label: PropTypes.string,
    raised: PropTypes.bool,
    saving: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    translate: PropTypes.func.isRequired,
    submitOnEnter: PropTypes.bool,
    handleSubmitWithRedirect: PropTypes.func,
    redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

SaveButton.defaultProps = {
    handleSubmitWithRedirect: () => () => {},
    plain: true,
    options: {
        align: "start",
    },
};

const mapStateToProps = state => ({
    saving: state.admin.saving,
});

export default connect(mapStateToProps)(translate(SaveButton));
