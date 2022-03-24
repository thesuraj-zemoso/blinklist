import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { ReadTime } from "./readTime";
import "@testing-library/jest-dom";
afterEach(cleanup);
test("Checking Read Time Rendering", () => {
  render(<ReadTime time="24 minutes" />);
  const text = screen.getByText("24 minutes");
  expect(text).toBeInTheDocument();
});
