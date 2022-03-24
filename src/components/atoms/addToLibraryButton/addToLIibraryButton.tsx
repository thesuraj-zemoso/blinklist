import { Button } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import useStyle from "../../../Theme";
import { Link } from 'react-router-dom';

export const AddToLibraryButton = () => {
  return (
      <Link to="/bookdetails" style={{ textDecoration: "none" }}>
      <Button startIcon={<AddIcon/>}
      sx={useStyle.addToLibBtn}
      data-testid="AddToLibBtn">
            Add to library
      </Button>
      </Link>
  );
};
