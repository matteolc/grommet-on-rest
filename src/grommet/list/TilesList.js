import React from 'react';
import PropTypes from 'prop-types';
import Tiles from 'grommet/components/Tiles';

const TilesList = ({
    resource,
    ids,
    data,
    children,
    basePath,
    onMore,
    onClick,
    selected
}) => (
    <Tiles fill={false} flush={true} onMore={onMore}>
        {ids.map((id, index) => <div key={index}>
            {React.cloneElement(children, {
                                resource,
                                record: data[id],
                                basePath,
                                onClick,
                                selected,
                            })}
                            </div>)}
    </Tiles>
);

TilesList.propTypes = {
    ids: PropTypes.array,
    data: PropTypes.object,
    basePath: PropTypes.string,
};

export default TilesList;
