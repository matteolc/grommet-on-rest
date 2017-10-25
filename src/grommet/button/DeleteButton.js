import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from 'grommet/components/Button';
import TrashIcon from 'grommet/components/icons/base/Trash';
import linkToRecord from '../../util/linkToRecord';
import translate from '../../i18n/translate';

const DeleteButton = ({
    basePath = '',
    label = 'aor.action.delete',
    record = {},
    translate,
    onDelete,
    plain = true,
    options = {
        align: "start"
    }
}) => (
    <Button
        plain={plain}
        label={label && translate(label)}
        icon={< TrashIcon />}
        onClick={onDelete}
        {...options}/>
);

DeleteButton.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    translate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    plain: PropTypes.bool,
    options: PropTypes.object
};

export default translate(DeleteButton);
