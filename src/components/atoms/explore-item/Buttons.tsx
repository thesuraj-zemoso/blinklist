import React from 'react';
import { Button} from "@mui/material";
import { Link} from "react-router-dom";
import useStyle from "../../../Theme";

interface ButtonType {
    itemname: string;
    itemicon: React.ReactElement;
    handleChange: () => void;
  }

export const Buttons = (props: ButtonType) => {
  return (
      <Link to="/explore" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          sx={useStyle.buttons}
          startIcon={props.itemicon}
          onClick={() => props.handleChange()}
        >
          {props.itemname}
        </Button>
      </Link>
  );
};

export default Buttons;
