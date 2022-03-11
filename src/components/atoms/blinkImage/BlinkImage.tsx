import { Card, CardMedia } from "@mui/material";
import appname from "../assets/appname.png";

const BlinkImage = () => {
  return (
    // <>
    <Card>
        <CardMedia
        component="img"
        height="26px"
        width="124.09px"
        image={appname}
        alt="appname"/>
    </Card>
    // </>
  )
}
export default BlinkImage

// height: 24px;
// width: 99.09677124023438px;
// left: 0px;
// top: 0px;
// border-radius: 0px;
