import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import Button from 'grommet/components/Button';
import RefreshIcon from 'grommet/components/icons/base/Refresh';
import translate from '../../i18n/translate';
import {refreshView as refreshViewAction} from '../../actions/uiActions';

const RefreshButton = ({label, translate, plain, options, refreshView}) => <Button
    plain={plain}
    label={label && translate(label)}
    onClick={event => {
        event.preventDefault();
        refreshView();
    }}
    icon={< RefreshIcon />}
    {...options}/>

RefreshButton.propTypes = {
    label: PropTypes.string,
    translate: PropTypes.func.isRequired,
    refreshView: PropTypes.func.isRequired,
    plain: PropTypes.bool,
    options: PropTypes.object
};

RefreshButton.defaultProps = {
    label: 'aor.action.refresh',
    plain: true,
    options: {
        align: "start"
    }
};

const enhance = compose(connect(null, {refreshView: refreshViewAction}), translate);

export default enhance(RefreshButton);
