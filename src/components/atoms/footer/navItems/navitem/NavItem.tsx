import { Typography } from "@mui/material";
import useStyle from "../../../../../Theme";
interface NavItemName {
  name: string;
}
const NavItem = (props: NavItemName) => {
  return (
    <>
      <Typography
        variant="body2"
        sx={useStyle.navItem}
      >
        {props.name}
      </Typography>
    </>
  );
};

export default NavItem;