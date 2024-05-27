import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact US Page Test Cases", () => {
  beforeAll(() => {
    console.log("do someting before all test");
  });

  beforeEach(() => {
    console.log("do someting before each test");
  });

  afterAll(() => {
    console.log("do something after all test");
  });

  afterEach(() => {
    console.log("do somethin after each test");
  });

  it("Should load Contact Us componenet", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  // it("Should load Button in Contact componenet", () => {
  //   render(<Contact />);

  //   const button = screen.getByText("Submit");

  //   //Assertion
  //   expect(button).toBeInTheDocument();
  // });

  it("Should load input text field in Contact componenet", () => {
    render(<Contact />);

    const input = screen.getByLabelText("Name");

    //Assertion
    expect(input).toBeInTheDocument();
  });

  it("Should load 4 input boxes in Contact componenet", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(4);
  });
});
