import { render,screen } from "@testing-library/react";
import AuthorName from "./AuthorName";

test("testing authorname",()=>{
    render(<AuthorName authName="Suraj Kumar"/>);
    const authorElement=screen.getByTestId("AuthorName");
    expect(authorElement).toBeInTheDocument();

})