import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import SpinningIcon from 'grommet/components/icons/Spinning';
import FormattedMessage from 'grommet/components/FormattedMessage';

export default class Placeholder extends Component {

  render () {
    const {
      addControl, emptyMessage, filteredTotal, unfilteredTotal, isLoading
    } = this.props;

    return <Box justify='center' align='center'
          pad={{
            horizontal: 'medium', vertical: 'large', between: 'medium'
          }}>
          {isLoading ?
            <SpinningIcon />
            :            
                (unfilteredTotal === 0) ?
                <span>
                    <span className='secondary'>{emptyMessage}</span>
                    {addControl}
                </span>
                :
                (filteredTotal === 0) ?
                    <span className='secondary'>
                        <FormattedMessage id='No matches' defaultMessage='No matches' />
                    </span>      
                    :
                    null                
          }            
        </Box>;
  }

};

Placeholder.propTypes = {
  addControl: PropTypes.element,
  emptyMessage: PropTypes.string,
  filteredTotal: PropTypes.number,
  unfilteredTotal: PropTypes.number
};

Placeholder.defaultProps = {
  emptyMessage: 'None'
};