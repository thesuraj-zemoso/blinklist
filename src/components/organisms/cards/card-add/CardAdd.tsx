import { Card, Grid } from "@mui/material";
import React from "react";
import CardHead from "../../../molecules/card/CardHead";
import useStyle from "../../../../Theme";
import { AddToLibraryButton } from "../../../atoms/addToLibraryButton/addToLIibraryButton";

interface Mui {
  details: {
    image: string;
    name: string;
    author: string;
    time: string;
  }[];
}

export const CardAdd = (props: Mui) => {
  const bookCards = props.details.map((e) => (
    <Grid item xs={4}>
      <Card sx={useStyle.cardStyle}>
        <Grid container direction="column">
          <Grid item>
            <CardHead
              image={e.image}
              bookName={e.name}
              authorName={e.author}
              time={e.time}
            />
          </Grid>
          <Grid item sx={useStyle.cardAddGridTwo}>
            <AddToLibraryButton />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  ));
  return (
    <Grid
      columnSpacing="20px"
      rowSpacing="25px"
      container
      sx={useStyle.cardAddGridOne}
      data-testid="CardAdd"
    >
      {bookCards}
    </Grid>
  );
};
