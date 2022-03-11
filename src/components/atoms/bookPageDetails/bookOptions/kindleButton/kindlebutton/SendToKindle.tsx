import { Button  } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useStyle from "../../../../../../Theme"
const SendToKindle = () => {
  return (
      <Button
        endIcon={ <ArrowForwardIcon />}
        variant="text"
        component="button"
        sx={useStyle.sendToKindle}
      >
       Send to Kindle
      </Button>
  );
};  

export default SendToKindle;
