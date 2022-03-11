import { Box, Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import useStyle from "../../../Theme";
import bookimage from "../../atoms/assets/bookimage.png";
import AuthorName from "../../atoms/AuthorName/AuthorName";
import BookDetailsTitle from "../../atoms/bookPageDetails/bookDetailsTitle/BookDetailsTitle";
import BookNote from "../../atoms/bookPageDetails/bookNote/BookNote";
import FinishReading from "../../atoms/bookPageDetails/bookOptions/finishButton/FinishReading";
import SendToKindle from "../../atoms/bookPageDetails/bookOptions/kindleButton/kindlebutton/SendToKindle";
import ReadNow from "../../atoms/bookPageDetails/bookOptions/readButton/readbutton/ReadNow";
import { ReadTime } from "../../molecules/read-time/readTime";

interface Handle {
  handleFinish: (item: string) => void;
  btn: boolean;
}

export const BookDetailsGrid = (props: Handle) => {
  return (
    <Box sx={useStyle.bookDetailsbox}>
      <Grid container columnSpacing="125px" justifyContent="center">
        <Grid item>
          <Grid container>
            <Grid item>
              <Grid container direction="column" rowSpacing="24px">
                <Grid item>
                  <BookDetailsTitle />
                </Grid>
                <Grid item>
                  <BookNote />
                </Grid>
                <Grid item>
                  <AuthorName authName="By Jim Collins and Bill Lazier" />
                </Grid>
                <Grid item>
                  <ReadTime time="15-minute read" />
                </Grid>

                <Grid item sx={useStyle.bookDetailsGrid}>
                  <Grid container columnSpacing="32px">
                    <Grid item>
                      <ReadNow />
                    </Grid>
                    <Grid item>
                      <FinishReading
                        btn={props.btn}
                        bookName="Beyond Entrepreneurship 2.0"
                        handleFinish={props.handleFinish}
                      />
                    </Grid>
                    <Grid item>
                      <SendToKindle />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Card>
            <CardMedia
              component="img"
              height="292px"
              width="294.1px"
              image={bookimage}
              alt="Book"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
