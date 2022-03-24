import { render, screen } from "@testing-library/react";
import NavItem from "./NavItem";

test("testing the Book Title", () => {
  render(<NavItem name="Testing" />);
  const NavElement = screen.getByTestId("NavItem")
  expect(NavElement).toBeInTheDocument();
});
