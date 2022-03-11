import { Typography } from '@mui/material';
import useStyle from "../../../Theme";

export const KeyIdeas = () => {
  return (
    <Typography
    variant="body2"
    sx={useStyle.keyIdeas}
    data-testid="KeyIdeas"
  >
    Get the key ideas from
  </Typography>
);
};
