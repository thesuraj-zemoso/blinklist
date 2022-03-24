import { render, screen } from "@testing-library/react";
import KeyIdeas from "./KeyIdeas";

test("testing the get ideas text", () => {
  render(<KeyIdeas />);
  const readElement = screen.getByText("Get the key ideas from");
  expect(readElement).toBeInTheDocument();
});
