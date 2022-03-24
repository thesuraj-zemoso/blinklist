import { render, screen } from "@testing-library/react";
import SendToKindle from "./SendToKindle";
test("checking the send to kindle button", () => {
  render(<SendToKindle />);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});
// screen;
