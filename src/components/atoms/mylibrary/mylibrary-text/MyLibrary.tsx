import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyle from '../../../../Theme';

const MyLibrary = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Typography variant = "body1" sx={useStyle.myLibrary} data-testid="library">
          My Library
      </Typography>
      </Link>
  );
};


export default MyLibrary;