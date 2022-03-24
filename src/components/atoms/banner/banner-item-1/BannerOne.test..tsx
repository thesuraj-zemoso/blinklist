import { render, screen } from "@testing-library/react";
import { BannerOne } from "./BannerOne";

test("testing banner one item", () => {
  render(<BannerOne />);
  const bannerElement=screen.getByText("Explore Books on entrepreneurship");
  expect(bannerElement).toBeInTheDocument();
});
