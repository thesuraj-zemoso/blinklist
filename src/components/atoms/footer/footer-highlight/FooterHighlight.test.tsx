import { render, screen } from "@testing-library/react";
import FooterHighlight from "./FooterHighlight";

test("testing the Book Title", () => {
  render(<FooterHighlight />);
  const footerElement = screen.getByTestId("highlight")
  expect(footerElement).toBeInTheDocument();
});
