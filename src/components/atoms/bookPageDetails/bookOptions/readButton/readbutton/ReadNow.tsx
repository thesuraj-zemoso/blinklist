import { Button  } from "@mui/material";

import useStyle from "../../../../../../Theme";
const ReadNow = () => {
  return (
      <Button
        sx={useStyle.readNow}
        variant="outlined"
        component="button"
      >
       Read now
      </Button>
  );
};  

export default ReadNow;
