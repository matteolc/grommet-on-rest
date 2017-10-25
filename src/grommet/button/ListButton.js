import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from 'grommet/components/Button';
import SortIcon from 'grommet/components/icons/base/Sort';
import translate from '../../i18n/translate';

const ListButton = ({
    basePath = '',
    label = 'aor.action.list',
    translate,
    plain = true,
    options = {
        align: "start"
    }
}) => (
    <Button
        plain={plain}
        label={label && translate(label)}
        icon={< SortIcon />}
        path={basePath}
        {...options}/>
);

ListButton.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    translate: PropTypes.func.isRequired
};

export default translate(ListButton);
