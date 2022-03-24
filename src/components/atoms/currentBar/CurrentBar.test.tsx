import { screen, render } from "@testing-library/react";
import CurrentBar from "./CurrentBar";

test("checking the currentbar", () => {
  render(<CurrentBar />);
  const currentElement=screen.getByTestId("CurrentBar");
  expect(currentElement).toBeInTheDocument();
});
