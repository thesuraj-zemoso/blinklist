import React from "react";
import { Typography } from "@mui/material";
import useStyle from "../../../../Theme";
export const BannerOne = () => {
  return (
    <>
      <Typography variant="h1" sx={useStyle.bannerOne}>
        Explore Books on entrepreneurship
      </Typography>
    </>
  );
};
