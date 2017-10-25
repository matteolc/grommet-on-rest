import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import pure from 'recompose/pure';
import Value from 'grommet/components/Value';

const ValueField = ({
    source,
    record = {},
    elStyle,
    onActive,
    options,
    label,
}) => {

    return <Value 
                value={get(record, source)}
                label={label}
                {...options} />        
};

ValueField.propTypes = {
    addLabel: PropTypes.bool,
    elStyle: PropTypes.object,
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
    options: PropTypes.shape({
        reverse: PropTypes.bool, 
        responsive: PropTypes.bool,
        units: PropTypes.string,
        icon: PropTypes.object,
        trendIcon: PropTypes.object,
        size: PropTypes.string,
    })
};

const PureValueField = pure(ValueField);

PureValueField.defaultProps = {
    addLabel: false,
    options: {
        reverse: false,
        responsive: false,
        size: 'medium',
    },
};

export default PureValueField;
