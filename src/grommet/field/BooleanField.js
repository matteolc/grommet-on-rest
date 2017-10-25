import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import pure from 'recompose/pure';

import Status from 'grommet/components/icons/Status';

export const BooleanField = ({ source, record = {}, elStyle }) => {
    if (get(record, source) === false) {
        return <Status value='disabled' />;
    }

    if (get(record, source) === true) {
        return <Status value='ok' />;
    }

    return <span style={elStyle} />;
};

BooleanField.propTypes = {
    addLabel: PropTypes.bool,
    elStyle: PropTypes.object,
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

const PureBooleanField = pure(BooleanField);

PureBooleanField.defaultProps = {
    addLabel: true,
    elStyle: {
        display: 'block',
        margin: 'auto',
    },
};

export default PureBooleanField;
