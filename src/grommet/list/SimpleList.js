import React from 'react';
import PropTypes from 'prop-types';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Timestamp from 'grommet/components/Timestamp';

const tertiaryStyle = {
    float: 'right',
    opacity: 0.541176
};

const SimpleList = ({
    ids,
    data,
    basePath,
    primaryText,
    secondaryText,
    secondaryTextLines,
    tertiaryText,
    leftAvatar,
    leftIcon,
    rightAvatar,
    rightIcon,
    onMore,
    onClick,
    selected
}) => (
    <List selectable={true} onMore={onMore}>
        {ids.map((id, index) => (
            <ListItem
                align="start"
                justify="between"
                separator={index === 0 ? 'horizontal' : undefined}
                pad={{
                    horizontal: 'medium',
                    vertical: 'medium',
                    between: 'medium'
                }}
                onClick={onClick}
                selected={selected}
                key={id}>
                <Box direction="row" pad={{between: 'small'}}>
                    <Anchor path={`${basePath}/${id}/show`} label={primaryText(data[id], id)}/>
                    <span className="message">
                        {secondaryText && secondaryText(data[id], id)}
                    </span>
                </Box>
                {tertiaryText && <Timestamp value={tertiaryText(data[id], id)}/>}
            </ListItem>
        ))}
    </List>
);

SimpleList.propTypes = {
    ids: PropTypes.array,
    data: PropTypes.object,
    basePath: PropTypes.string,
    primaryText: PropTypes.func,
    secondaryText: PropTypes.func,
    secondaryTextLines: PropTypes.number,
    tertiaryText: PropTypes.func,
    leftAvatar: PropTypes.func,
    leftIcon: PropTypes.func,
    rightAvatar: PropTypes.func,
    rightIcon: PropTypes.func
};

export default SimpleList;
