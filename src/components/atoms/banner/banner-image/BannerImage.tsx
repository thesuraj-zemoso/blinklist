import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import bannerimg from "../../assets/bannerimg.png";
export const BannerImage = () => {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          data-testid="BannerImage"
          image={bannerimg}
          alt="main-img"
        />
      </Card>
    </>
  );
};
