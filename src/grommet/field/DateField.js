import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import pure from 'recompose/pure';
import Timestamp from 'grommet/components/Timestamp';

const DateField = ({ source, record = {}, elStyle, options }) => {
    return <span style={elStyle}><Timestamp value={get(record, source)} {...options}/></span>;
};

DateField.propTypes = {
    addLabel: PropTypes.bool,
    elStyle: PropTypes.object,
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

const PureDateField = pure(DateField);

PureDateField.defaultProps = {
    addLabel: true,
};

export default PureDateField;
