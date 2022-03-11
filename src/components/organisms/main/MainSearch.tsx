import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import useStyle from "../../../Theme";
import SerachIcon from "../../atoms/search-icon/SearchIcon";

interface Handle {
  search: (item: string) => void;
}

export const MainSearch = (props: Handle) => {
  return (
    <TextField
      variant="standard"
      placeholder="Search by title or author "
      data-testid="TextField"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SerachIcon />
          </InputAdornment>
        ),
      }}
      sx={useStyle.textField}
      onChange={(e) => {
        props.search(e.target.value.toLowerCase());
      }}
    />
  );
};
