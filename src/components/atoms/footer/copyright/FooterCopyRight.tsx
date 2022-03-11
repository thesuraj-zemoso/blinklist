import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../../Theme';

const FooterCopyRight = () => {
  return (
      <>
        <Typography
        variant='body1'
        sx= {useStyle.footerCopyRight}
        data-testid="copyright"
        >
        © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
        </Typography>
      </>
  );
};

export default FooterCopyRight;
