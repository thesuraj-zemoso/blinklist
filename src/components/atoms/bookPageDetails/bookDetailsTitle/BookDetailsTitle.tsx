import { Typography } from "@mui/material";
import useStyle from "../../../../Theme";
import React from 'react';
const BookDetailsTitle = () => {
  return (
      <Typography
        sx={useStyle.bookTitle}
        variant="h1"
        data-testid="BookDetails"
      >
        Beyond Entrepreneurship 2.0
      </Typography>
  );
};

export default BookDetailsTitle;
