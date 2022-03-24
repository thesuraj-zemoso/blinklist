import { Button } from '@mui/material';
import useStyle from '../../../Theme';


interface Handle{
    handleFinish:(item:string)=>void;
    name:string,
}
const FinishedButton = (props: Handle) => {
  return (
    <Button
    variant="text"
    sx={useStyle.readAgain}
    onClick={()=>{props.handleFinish(props.name)}}
    component="button"
    data-testid="finishedButton"
    >
        Finished
    </Button>
  );
};

export default FinishedButton;
