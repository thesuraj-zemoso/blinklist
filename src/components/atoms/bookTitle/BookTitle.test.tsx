import { render, screen } from "@testing-library/react";
import BookTitle from "./BookTitle";

test("testing the Book Title", () => {
  render(<BookTitle bookName="Suraj Kumar"/>);
  const bookElement = screen.getByText("Suraj Kumar");
  expect(bookElement).toBeInTheDocument();
});
