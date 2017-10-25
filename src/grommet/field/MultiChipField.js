import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

const styles = {
    chip: {     
        display: 'flex',
        height: 32,
        fontSize: 13,
        fontWeight: 500,
        color: 'rgb(255, 255, 255)',
        lineHeight: '32px',
        padding: '0px 12px 0px 0px',
        borderRadius: 16,
        backgroundColor: '#a8a8a8',
        marginBottom: 5,
        marginRight: 5,
        width: 'fit-content',
    },
    avatar: {
        color: 'rgb(255, 255, 255)',
        backgroundColor: '#434343',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        borderRadius: '50%',
        height: 32,
        width: 32,
        marginRight: 6,
    }
};

const MultiChipField = ({
    source,
    record = {}
}) => <div>
    {get(record, source).map((value, rank) => (
        <div style={styles.chip} key={rank}><div style={styles.avatar}>{value[0].toUpperCase()}</div>{value}</div>
    ))}
</div>

MultiChipField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
    addLabel: PropTypes.bool,
};

MultiChipField.defaultProps = {
    addLabel: true,
};

export default MultiChipField;