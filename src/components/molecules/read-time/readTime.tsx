import { Grid, Typography } from "@mui/material";
import useStyle from "../../../Theme";
import Timer from "../../atoms/timer/Timer";

interface TimeDet {
  time: String;
}

export const ReadTime = (props: TimeDet) => {
  return (
    <>
      <Grid container sx={useStyle.readTimeTopography}>
        <Grid item>
          <Timer />
        </Grid>
        <Grid item>
          <Typography variant="caption">{props.time}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
