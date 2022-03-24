import { render, screen } from "@testing-library/react";
import ReadNow from "./ReadNow";
import { MemoryRouter } from "react-router-dom";
test("testing the read now button", () => {
  const func = () => {
    return "Hello";
  };
  render(
    <MemoryRouter>
      <ReadNow bookName="Harry Potter" btn={true} handleRead={func} />
    </MemoryRouter>
  );
  const readElement = screen.getByRole("button");
  expect(readElement).toBeInTheDocument();
});
