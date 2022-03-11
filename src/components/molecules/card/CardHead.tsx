import { CardMedia, Grid } from "@mui/material";
import React from "react";
import useStyle from "../../../Theme";
// import AuthorName from "../../atoms/author/AuthorName";
import AuthorName from "../../atoms/AuthorName//AuthorName";
import BookTitle from "../../atoms/bookTitle/BookTitle";
import { ReadTime } from "../read-time/readTime";

interface Data {
  image: string;
  bookName: string;
  authorName: string;
  time: string;
}
const CardHead = (props: Data) => {
  return (
    <>
      <Grid item data-testid="CardHead">
        <CardMedia
          component="img"
          height="292px"
          width="294.1px"
          image={props.image}
          alt="Book"
        />
      </Grid>
      <Grid item>
        <BookTitle bookName={props.bookName} />
      </Grid>

      <Grid item sx={useStyle.cardGridOne}>
        <AuthorName authName={props.authorName} />
      </Grid>
      <Grid item sx={useStyle.cardGridTwo}>
        <ReadTime time={props.time} />
      </Grid>
    </>
  );
};

export default CardHead;
