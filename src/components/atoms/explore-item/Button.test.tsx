import { fireEvent } from "@storybook/testing-library";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavDown from "../nav/nav-down/NavDown";
import Buttons from "./Buttons";
test("checking the button", () => {
  const fakeProps = {
    handleChange: () => {
      console.log("Testing");
    },
    itemicon: <NavDown />,
    itemname: "Testing",
  };
  render(
    <MemoryRouter>
      <Buttons
        handleChange={fakeProps.handleChange}
        itemicon={fakeProps.itemicon}
        itemname={fakeProps.itemname}
      />
    </MemoryRouter>
  );
  const textContent = screen.getByText("Testing");
  expect(textContent).toBeInTheDocument();
});

test("checking the onClick buttons", () => {
  const fakeProps = {
    handleChange: () => {
      console.log("Testing");
    },
    itemicon: <NavDown />,
    itemname: "Testing",
  };
  render(
    <MemoryRouter>
      <Buttons
        handleChange={fakeProps.handleChange}
        itemicon={fakeProps.itemicon}
        itemname={fakeProps.itemname}
      />
    </MemoryRouter>
  );
  const textContent = screen.getByText("Testing");
  fireEvent.click(textContent);
});
