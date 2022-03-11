import { Grid } from "@mui/material";
import useStyle from "../../../Theme";
import AvatarLogin from "../../atoms/avatar/avatarLogin";
import NavDown from "../../atoms/nav/nav-down/NavDown";

const AvatarDrop = () => {
  return (
    <Grid container data-testid="avatarDrop" sx={useStyle.avatarDrop}>
      <Grid item>
        <AvatarLogin handleName="R" />
      </Grid>
      <Grid item sx={useStyle.avatarNavDown}>
        <NavDown />
      </Grid>
    </Grid>
  );
};

export default AvatarDrop;
