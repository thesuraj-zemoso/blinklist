import { fireEvent } from "@storybook/testing-library";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FinishReading from "./FinishReading";

test("checking for finished reading existence", () => {
  const func = () => {
    return "Hello";
  };
  render(
    <MemoryRouter>
      <FinishReading bookName="Harry Potter" btn={true} handleFinish={func} />
    </MemoryRouter>
  );
  const element = screen.getByText("Finished Reading");
  expect(element).toBeInTheDocument();
});

test("checking the finishedReading for false", () => {
  const func = (item: string) => {
    return "Beyond Entepreneurship 2.0";
  };
  render(
    <MemoryRouter>
      <FinishReading bookName="Harry Potter" btn={false} handleFinish={func} />
    </MemoryRouter>
  );
  const btn = screen.getByText("Finished Reading");
  expect(btn).toBeInTheDocument();
});

test("checking the onClickFunctionality", () => {
  const func = (item: string) => {
    return "Beyond Entepreneurship 2.0";
  };
  render(
    <MemoryRouter>
      <FinishReading bookName="Harry Potter" btn={true} handleFinish={func} />
    </MemoryRouter>
  );
  const btn = screen.getByText("Finished Reading");
  fireEvent.click(btn);
  
});
