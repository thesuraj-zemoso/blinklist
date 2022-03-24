import { render, screen } from "@testing-library/react";
import NavHead from "./NavHead";

test("testing the Book Title", () => {
  render(<NavHead name="Hello" />);
  const Element = screen.getByTestId("NavHead")
  expect(Element).toBeInTheDocument();
});
