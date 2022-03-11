import { Button } from '@mui/material';
import useStyle from '../../../Theme';

interface Handle{
    handleReadAgain:(item:string)=>void;
    name:string,
}

const ReadAgainButton = (props:Handle) => {
  return (
    <Button
    variant="text"
    sx={useStyle.readAgain}
    onClick={()=>{props.handleReadAgain(props.name)}}
  >
    Read Again
  </Button>
  );
};
export default ReadAgainButton;
