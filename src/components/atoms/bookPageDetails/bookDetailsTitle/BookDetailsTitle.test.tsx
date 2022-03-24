import { screen, render } from "@testing-library/react";
import BookDetailsTitle from "./BookDetailsTitle";

test("testing bookdetailstitle", () => {
  render(<BookDetailsTitle />);
  const bookDetailElement = screen.getByText("Beyond Entrepreneurship 2.0");
expect(bookDetailElement).toBeInTheDocument();
});
