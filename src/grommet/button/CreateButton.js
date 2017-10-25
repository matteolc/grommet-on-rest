import React from 'react';
import PropTypes from 'prop-types';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import AddIcon from 'grommet/components/icons/base/Add';
import compose from 'recompose/compose';
import translate from '../../i18n/translate';

const CreateButton = ({
    basePath = '',
    translate,
    label = 'aor.action.create',
    plain = true,
    options = {
        align: "start"
    },
    inline = true
}) => inline
    ? <Anchor
        icon={< AddIcon />}
        path={`${basePath}/create`}
        a11yTitle={label && translate(label)}/>
    : <Button
        plain={plain}
        label={label && translate(label)}
        icon={< AddIcon />}
        path={`${basePath}/create`}
        {...options}/>

CreateButton.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    translate: PropTypes.func.isRequired,
    inline: PropTypes.bool,
    plain: PropTypes.bool,
    options: PropTypes.object
};

const enhance = compose(onlyUpdateForKeys(['basePath', 'label']), translate);

export default enhance(CreateButton);
