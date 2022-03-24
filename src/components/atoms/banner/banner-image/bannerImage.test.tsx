import { render, screen } from "@testing-library/react";
import { BannerImage } from "./BannerImage";

test("testing bannerimage",()=>{
    render(<BannerImage/>);
    const bannerElement=screen.getByTestId("BannerImage");
    expect(bannerElement).toBeInTheDocument();
})