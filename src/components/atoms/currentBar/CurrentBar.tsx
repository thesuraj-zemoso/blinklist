import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';

const CurrentBar = () => {
  return (
    <Typography
        sx={useStyle.currentBar}
        data-testid="CurrentBar"
    >

    </Typography>
  );
};
export default CurrentBar;