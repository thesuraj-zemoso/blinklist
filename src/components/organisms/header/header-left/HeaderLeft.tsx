import { Grid } from "@mui/material";
import React from "react";
import useStyle from "../../../../Theme";
import BlinkImage from "../../../atoms/blinkImage/BlinkImage";
import Explore from "../../../atoms/explore/Explore";
import MyLibrary from "../../../atoms/mylibrary/mylibrary-text/MyLibrary";
import SearchIcon from "../../../atoms/search-icon/SearchIcon";

interface Handle {
  handleChange: () => void;
  icon: boolean;
}

const HeaderLeft = (props: Handle) => {
  return (
    <Grid container sx={useStyle.headerLeftGridMain} data-testid="HeaderLeft">
      <Grid item sx={useStyle.headerLeftGrid}>
        <BlinkImage />
      </Grid>
      <Grid item sx={useStyle.headerLeftGrid}>
        <SearchIcon />
      </Grid>
      <Grid item sx={useStyle.headerLeftGrid}>
        <Explore icon={props.icon} handleChange={props.handleChange} />
      </Grid>
      <Grid item sx={useStyle.headerLeftGrid}>
        <MyLibrary />
      </Grid>
    </Grid>
  );
};

export default HeaderLeft;
