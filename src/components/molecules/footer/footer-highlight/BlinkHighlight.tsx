import { Grid } from '@mui/material';
import React from 'react';
import useStyle from '../../../../Theme';
import BlinkImage from '../../../atoms/blinkImage/BlinkImage'
import FooterHighlight from '../../../atoms/footer/footer-highlight/FooterHighlight';
const BlinkHighlight = () => {
  return (
    <Grid
    container
    sx={useStyle.blinkHighlightGridOne}
    data-testid="blinkHighlight"
    >
        <Grid item sx={useStyle.blinkHighlightGridTwo}>
            <BlinkImage/>
        </Grid>
        <Grid item sx={useStyle.blinkHighlightGridThree}>
            <FooterHighlight/>
        </Grid>


    </Grid>
  );
};


export default BlinkHighlight;