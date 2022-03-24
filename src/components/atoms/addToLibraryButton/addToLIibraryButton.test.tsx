import { render, screen } from "@testing-library/react";
import { AddToLibraryButton } from "./addToLIibraryButton";
import { MemoryRouter } from "react-router-dom";

const MockedLibraryButton = () => {
  return (
    <MemoryRouter>
      <AddToLibraryButton />
    </MemoryRouter>
  );
};
test("testing library Button", () => {
  render(<MockedLibraryButton />);
  const libElement=screen.getByTestId("AddToLibBtn");
  expect(libElement).toBeInTheDocument();
});
