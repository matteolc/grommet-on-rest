import React from 'react';
import {ListButton, EditButton, DeleteButton, RefreshButton, CreateButton} from '../button';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import SkipLinkAnchor from 'grommet/components/SkipLinkAnchor';
import CloseIcon from 'grommet/components/icons/base/Close';
import Button from 'grommet/components/Button';

const ShowActions = ({basePath, data, hasDelete, hasCreate, hasEdit, hasList, onClose, title, onDelete}) => (
    <span>
        <SkipLinkAnchor label="Right Panel"/>
        <Header
            pad={{
                horizontal: 'medium',
                vertical: 'medium'
            }}
            justify="between"
            size="large">
            {onClose && <Heading tag="h3" margin='none'>{title}</Heading>}
            {onClose && <Button icon={<CloseIcon />} onClick={onClose} />}
        </Header>
        <Box pad="medium">
            <Menu>
                {hasEdit && <EditButton basePath={basePath} record={data}/>}
                {hasDelete && <DeleteButton basePath={basePath} record={data} onDelete={onDelete}/>}
                {hasCreate && <CreateButton basePath={basePath} inline={false}/>}
                {hasList && <ListButton basePath={basePath}/>}                
                <RefreshButton/>
            </Menu>
        </Box>
    </span>
);

export default ShowActions;
