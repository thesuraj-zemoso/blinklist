import { Grid } from '@mui/material';
import React from 'react';
import useStyle from '../../../../Theme';
import { BannerImage } from '../../../atoms/banner/banner-image/BannerImage';
import { BannerItem } from '../banner-item/BannerItem';

export const MainBanner = () => {
  return (
      <Grid container sx={useStyle.mainBanner} >
          <Grid item sx={useStyle.mainBannerItem}>
                <BannerItem/>
          </Grid>
          <Grid item>
                <BannerImage/>
          </Grid>

      </Grid>
  );
};
