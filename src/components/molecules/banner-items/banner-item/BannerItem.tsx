import { Grid } from "@mui/material";
import { BannerOne } from "../../../atoms/banner/banner-item-1/BannerOne";
import { BannerTwo } from "../../../atoms/banner/banner-item-2/BannerTwo";

export const BannerItem = () => {
  return (
    <Grid container direction="column" rowSpacing="15px">
      <Grid item>
        <BannerOne />
      </Grid>
      <Grid item>
        <BannerTwo />
      </Grid>
    </Grid>
  );
};
