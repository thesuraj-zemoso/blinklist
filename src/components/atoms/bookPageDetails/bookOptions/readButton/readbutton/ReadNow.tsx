import { Button  } from "@mui/material";
import { Link } from "react-router-dom";

import useStyle from "../../../../../../Theme";
// const ReadNow = () => {
//   return (
//       <Button
//         sx={useStyle.readNow}
//         variant="outlined"
//         component="button"
//       >
//        Read now
//       </Button>
//   );
// };  

// export default ReadNow;

interface Handle {
  handleRead: (item: string) => void;
  bookName: string;
  btn: boolean;
}
const ReadNow = (props: Handle) => {
  const set = () => {
    props.handleRead(props.bookName);
  };

  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Button
        onClick={set}
        sx={useStyle.readNow}
        variant="outlined"
        component="button"
      >
        Read Now
      </Button>
    </Link>
  );
};

export default ReadNow;