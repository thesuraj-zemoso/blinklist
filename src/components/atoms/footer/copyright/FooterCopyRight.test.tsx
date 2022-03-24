import { render, screen } from "@testing-library/react";
import FooterCopyRight from "./FooterCopyRight";

test("testing the Book Title", () => {
  render(<FooterCopyRight />);
  const copyrightElement = screen.getByTestId("copyright")
  expect(copyrightElement).toBeInTheDocument();
});
