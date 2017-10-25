import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import pure from 'recompose/pure';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';

const MeterField = ({
    source,
    record = {},
    elStyle,
    onActive,
    options
}) => {

    const boxOptions = options.vertical === true ? {
        direction: 'row',
        pad: {"between": "small"},
    } : {};

    
    return (
        <Box {...boxOptions}>
            <Value value={get(record, source)} align='start' {...options}/>
            <Meter value={get(record, source)} onActive={onActive}/>
        </Box>
    );
};

MeterField.propTypes = {
    addLabel: PropTypes.bool,
    elStyle: PropTypes.object,
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired
};

const PureMeterField = pure(MeterField);

PureMeterField.defaultProps = {
    addLabel: true,
    options: {
        vertical: false,
    },
};

export default PureMeterField;
