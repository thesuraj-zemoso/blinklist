import { Typography } from '@mui/material';
import useStyle from '../../../Theme';

const FinishedBar = () => {
  return (
    <Typography
      sx={useStyle.finishedBar}
      data-testid="FinishedBar"
    />
  );
};
export default FinishedBar;
