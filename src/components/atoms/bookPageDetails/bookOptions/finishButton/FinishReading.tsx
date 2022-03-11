import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useStyle from "../../../../../Theme";

interface Handle {
  handleFinish: (item: string) => void;
  bookName: string;
  btn: boolean;
}

const FinishReading = (props: Handle) => {
  const set = () => {
    props.handleFinish(props.bookName);
  };

  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Button
        onClick={set}
        sx={useStyle.finishReading}
        variant="contained"
        component="button"
      >
        Finished Reading
      </Button>
    </Link>
  );
};

export default FinishReading;

// {display: props.btn ? "none" : "",}
