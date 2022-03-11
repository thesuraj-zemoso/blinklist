import { Typography } from '@mui/material';
import useStyle from '../../../../Theme';

const MyLibHeading = () => {
  return (
      <Typography variant='h1' sx={useStyle.myLibraryHead} >
          My Library
      </Typography>
  );
};

export default MyLibHeading;
