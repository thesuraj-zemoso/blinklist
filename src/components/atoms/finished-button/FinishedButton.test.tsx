import { fireEvent } from "@storybook/testing-library";
import { render, screen } from "@testing-library/react";
import FinishedButton from "./FinishedButton";

test("checking the finished button", () => {
  const fakeProps = {
    handleFinish: jest.fn(),
    name: "Testing",
  };
  render(
    <FinishedButton
      handleFinish={fakeProps.handleFinish}
      name={fakeProps.name}
    />
  );
  const element = screen.getByTestId("finishedButton");
  expect(element).toBeInTheDocument();
});

test("onClick finished button", () => {
  const fakeProps = {
    handleFinish: jest.fn(),
    name: "Testing",
  };
  render(
    <FinishedButton
      handleFinish={fakeProps.handleFinish}
      name={fakeProps.name}
    />
  );
  const element = screen.getByRole("button");
  fireEvent.click(element);
});
