import Box from "@mui/material/Box";
import Buttons from "../../../atoms/explore-item/Buttons";
// import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketOutlined";
// import RocketLaunchOutlinedIcon from "./RocketLaunchOutlinedIcon";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import FiberSmartRecordOutlinedIcon from "@mui/icons-material/FiberSmartRecordOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Divider, Grid } from "@mui/material";
import { IconGeneric } from "./IconGeneric";
import { ReactComponent as RocketLaunchOutlinedIcon } from "./RocketLaunchOutlinedIcon.svg";
import useStyle from "../../../../Theme";
import { ExploreMenuHead } from "../explore-grid-head/ExploreMenuHead";

const list = [
    { name: "Entrepreneurship", comp: <IconGeneric icon={RocketLaunchOutlinedIcon} /> },
    { name: "Science", comp: <ScienceOutlinedIcon /> },
    { name: "Economics", comp: <FiberSmartRecordOutlinedIcon /> },
    { name: "Corporate Culture", comp: <BusinessCenterOutlinedIcon /> },
    { name: "Psychology", comp: <PsychologyOutlinedIcon /> },
    { name: "Nature & Environment", comp: <YardOutlinedIcon /> },
    { name: "Politics", comp: <AccountBalanceOutlinedIcon /> },
    { name: "Health & Nutrition", comp: <LocalHospitalOutlinedIcon /> },
    { name: "History", comp: <PublicOutlinedIcon /> },
    { name: "Motivation & Inspiration", comp: <TipsAndUpdatesOutlinedIcon /> },
    { name: "Productivity", comp: <HourglassBottomOutlinedIcon /> },
    { name: "Career & Success", comp: <ModeStandbyOutlinedIcon /> },
    { name: "Marketing & Sales", comp: <AutoGraphOutlinedIcon /> },
    { name: "Personal Development", comp: <SignalCellularAltOutlinedIcon /> },
    { name: "Communication Skills", comp: <CommentOutlinedIcon /> },
    { name: "Money & Investments", comp: <AccountBalanceWalletOutlinedIcon /> },
    { name: "Sex & Relationship", comp: <FavoriteBorderOutlinedIcon /> },
    { name: "Education", comp: <SchoolOutlinedIcon /> },
  ];

  // interface Handle{
  //   handleChange:()=>void;
  
  // }
  
  // export const ExploreMenu = (props:Handle) => {
  //   let count=1;
  //   const component = list.map((e) => ({
  //    id:count++,comp: <Buttons handleChange={props.handleChange} itemname={e.name} itemicon={e.comp}/>
  //  } ));
  //   return (
  //     <Box
  //       zIndex="1"
  //       sx={useStyle.exploreBoxOne}
  //     >
  //       <Box
  //          sx={useStyle.exploreBoxTwo}
  //       >
  //         <Box width="1100px">
  //           <ExploreMenuHead/>
  //           <Divider sx={useStyle.exploreDiv}  style={{border:"1px solid #042330"}}/>
  //           <Grid container rowSpacing="18px" sx={useStyle.exploreGrid} >
  //             {component.map((e) => (
  //               <Grid item xs={4} key={e.id}>
  //                 {e.comp}
  //               </Grid>
  //             ))}
  //           </Grid>
  //         </Box>
  //       </Box>
  //       <Box
  //         sx={useStyle.exploreBoxThree}
  //       ></Box>
  //     </Box>
  //   );
  // };
  

  interface Handle{
    handleChange:()=>void;
  
  }
  
  export const ExploreMenu = (props:Handle) => {
    let count=1;
    const component = list.map((e) => ({
     id:count++,comp: <Buttons handleChange={props.handleChange} itemname={e.name} itemicon={e.comp}/>
   } ));
      // const classes=customStyle();
    return (
      <Box
        zIndex="1"
        sx={useStyle.exploreBoxOne}
      >
        <Box
           sx={useStyle.exploreBoxTwo}
        >
          <Box width="1100px">
            <ExploreMenuHead />
            <Divider sx={useStyle.exploreDiv}  />
            <Grid container rowSpacing="18px" sx={useStyle.exploreGrid} >
              {component.map((e) => (
                <Grid item xs={4} key={e.id}>
                  {e.comp}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box
          sx={useStyle.exploreBoxThree}
        ></Box>
      </Box>
    );
  };
  // export default ExploreMenu;