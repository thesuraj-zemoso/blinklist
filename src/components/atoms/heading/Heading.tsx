import { Typography } from '@mui/material';
import React from 'react';
import useStyle from "../../../Theme";

export const Heading = () => {
    return (
        <Typography
          sx={useStyle.head}
          variant="h3"
        >
          Trending blinks
        </Typography>
    );
};
