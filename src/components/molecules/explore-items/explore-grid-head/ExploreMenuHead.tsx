import { Grid, Typography } from '@mui/material';

import useStyle from "../../../../Theme";


export const ExploreMenuHead = () => {
    return (
      <Grid container sx={{paddingTop:'30px',paddingBottom:'24px'}}  >
        <Grid item xs={4}>
          <Typography
            variant="subtitle2"
            sx={useStyle.exploreHeadTypoOne}
          >
            Explore by category
          </Typography>
        </Grid>
  
        <Grid item xs={4}>
          <Typography
            variant="subtitle2"
            sx={useStyle.exploreHeadTypoTwo}
          >
            See recently added titles
          </Typography>
        </Grid>
  
        <Grid item xs={4}>
          <Typography
            variant="subtitle2"
            sx={useStyle.exploreHeadTypoTwo}
          >
            See popular titles
          </Typography>
        </Grid>
      </Grid>
    );
};
