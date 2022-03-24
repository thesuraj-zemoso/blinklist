import { fireEvent, render, screen } from "@testing-library/react";
import Explore from "./Explore";

test("checking the explore button", () => {
  const fakeprops = {
    btn: true,
    handleChange: jest.fn(),
  };
  render(
    <Explore icon={fakeprops.btn} handleChange={fakeprops.handleChange} />
  );
  const textContent = screen.getByText("Explore");
  expect(textContent).toBeInTheDocument();
});

test("checking the click event on the explore button", () => {
  const fakeprops = {
    btn: true,
    handleChange: jest.fn(),
  };
  render(
    <Explore icon={fakeprops.btn} handleChange={fakeprops.handleChange} />
  );
  fireEvent.click(screen.getByText("Explore"));
});
