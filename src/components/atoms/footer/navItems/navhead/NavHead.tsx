import { Typography } from '@mui/material';
import useStyle from '../../../../../Theme';

interface NavHeadName{
    name:string
}

const NavHead = (props: NavHeadName) => {
  return (
    <>
        <Typography
        variant = "body1"
        sx={useStyle.navHead}
        >
            {props.name}
        </Typography>
    </>
  );
};

export default NavHead;
