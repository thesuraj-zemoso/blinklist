import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../../Theme';

const FooterHighlight = () => {
  return (
    <>
      <Typography
        variant="subtitle1"
        sx={useStyle.footerHighlight}
        data-testid="highlight"
      >
        Big ideas in small packages Start learning now
      </Typography>
    </>
  );
};


export default FooterHighlight;