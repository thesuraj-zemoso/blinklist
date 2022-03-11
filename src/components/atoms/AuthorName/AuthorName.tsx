import React from "react";
import { Typography } from "@mui/material";
import useStyle from "../../../Theme";
interface AuthDet {
  authName: string;
}
const AuthorName = (props: AuthDet) => {
  return (
    <>
      <Typography
        variant="body1"
        sx={useStyle.authorNameTypography}
        data-testid="AuthorName"
      >
        {props.authName}
      </Typography>
    </>
  );
};

export default AuthorName;
