import { screen, render } from "@testing-library/react";
import BookNote from "./BookNote";

test("testing booknote", () => {
  render(<BookNote />);
  const bookElement = screen.getByText(
    "Turning Your Business into an Enduring Great Company"
  );
  expect(bookElement).toBeInTheDocument();
});
