import { Avatar } from '@mui/material';

interface Handle{
    handleName:string
}

const AvatarLogin=(props:Handle)=>{
    return <Avatar sx={{bgcolor:"#69A6E3"}}>{props.handleName}</Avatar>
}
export default AvatarLogin;