import { Grid } from "@mui/material";
import React from "react";
import NavHead from "../../../atoms/footer/navItems/navhead/NavHead";
import NavItem from "../../../atoms/footer/navItems/navitem/NavItem";

const list = [
  "Book lists",
  "What is Nonfiction?",
  "What to read next?",
  "Benefits of reading",
];
const FooterNavListOne = () => {
  let count = 1;
  return (
    <Grid container direction="column" data-testid="FooterNavList1">
      <Grid item>
        <NavHead name="Editorial" />
      </Grid>
      {list.map((e) => (
        <Grid item key={count++}>
          <NavItem name={e} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FooterNavListOne;
