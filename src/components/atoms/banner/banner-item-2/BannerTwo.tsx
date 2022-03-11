import React from "react";
import { Typography } from "@mui/material";

import useStyle from "../../../../Theme";
export const BannerTwo = () => {
  return (
    <>
      <Typography
      variant="subtitle2"
      sx={useStyle.bannerTwo}
      >
        Everything you need to know about thriving on a shoestring budget,
        making your first million, and hiring right from the start.
      </Typography>
    </>
  );
};
