import { render, screen } from "@testing-library/react";
import BlinkImage from "./BlinkImage";

test("test blinkimage",()=>{
    render(<BlinkImage/>)
    const blinkImageComponent=screen.getByAltText("appname");
    expect(blinkImageComponent).toBeInTheDocument();
})