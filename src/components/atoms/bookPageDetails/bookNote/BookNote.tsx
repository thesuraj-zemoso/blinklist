import { Typography } from "@mui/material";
import useStyle from "../../../../Theme";
import React from 'react';

const BookNote = () => {
  return (<Typography
        sx={useStyle.bookNote}
        variant="subtitle2"
        data-testid="BookNote"
      >
          Turning Your Business into an Enduring Great Company
      </Typography>
  );
};

export default BookNote;
