import { render, screen } from "@testing-library/react";
import FinishedBar from "./FinishedBar";

test("checking the finished bar", () => {
  render(<FinishedBar />);
  const textContent = screen.getByTestId("FinishedBar");
  expect(textContent).toBeInTheDocument();
});
