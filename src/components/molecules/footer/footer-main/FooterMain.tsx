import { Grid } from "@mui/material";
import useStyle from "../../../../Theme";
import FooterCopyRight from "../../../atoms/footer/copyright/FooterCopyRight";
import BlinkHighlight from "../footer-highlight/BlinkHighlight";
import FooterNavListOne from "../footer-navlist/FooterNavListOne";
import FooterNavListThree from "../footer-navlist/FooterNavListThree";
import FooterNavListTwo from "../footer-navlist/FooterNavListTwo";

const FooterMain = () => {
  return (
    <Grid
      container
      direction="column"
      sx={useStyle.footerMainGridOne}
      data-testid="FooterMain"
    >
      <Grid item>
        <Grid
          container
          columnSpacing="32px"
          justifyContent="center"
          sx={useStyle.footerMainGridTwo}
        >
          <Grid item sx={useStyle.footerMainGridThree}>
            <BlinkHighlight />
          </Grid>
          <Grid item>
            <FooterNavListOne />
          </Grid>
          <Grid item>
            <FooterNavListTwo />
          </Grid>
          <Grid item>
            <FooterNavListThree />
          </Grid>
        </Grid>
      </Grid>
      <Grid item justifyContent="center" sx={useStyle.footerMainGridFour}>
        <FooterCopyRight />
      </Grid>
    </Grid>
  );
};

export default FooterMain;
