import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import shouldUpdate from 'recompose/shouldUpdate';
import compose from 'recompose/compose';
import Button from 'grommet/components/Button';
import EditIcon from 'grommet/components/icons/base/Edit';
import linkToRecord from '../../util/linkToRecord';
import translate from '../../i18n/translate';

const EditButton = ({
    basePath = '',
    label = 'aor.action.edit',
    record = {},
    translate,
    plain = true,
    options = {
        align: "start"
    }
}) => (
    <Button
        plain={plain}
        label={label && translate(label)}
        icon={< EditIcon />}
        path={linkToRecord(basePath, record.id)}
        {...options}/>
);

EditButton.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    translate: PropTypes.func.isRequired,
    plain: PropTypes.bool,
    options: PropTypes.object
};

const enhance = compose(shouldUpdate((props, nextProps) => (props.record && props.record.id !== nextProps.record.id) || props.basePath !== nextProps.basePath || (props.record == null && nextProps.record != null)), translate);

export default enhance(EditButton);
