import { Contact } from "../Contact";
import React from 'react';
import { render ,screen} from "@testing-library/react"
import "@testing-library/jest-dom";


test("rende", () => { 

    render( < Contact /> );
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});