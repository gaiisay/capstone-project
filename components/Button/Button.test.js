import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from ".";

describe("Button", () => {
  it("should display calendar icon on variant create and children text", () => {
    const expectedPath =
      "M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM12 13H17V18H12V13Z";

    render(
      <Button type="button" variant="submit">
        Create
      </Button>
    );

    const addButton = screen.getByText(/create/i);

    expect(addButton).toHaveTextContent("Create");
    expect(addButton.querySelector("path")).toHaveAttribute("d", expectedPath);
  });

  it("should display trash can icon on variant delete", () => {
    const expectedPath =
      "M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z";

    render(
      <Button type="button" variant="delete">
        Delete
      </Button>
    );

    const addButton = screen.getByText(/delete/i);

    expect(addButton.querySelector("path")).toHaveAttribute("d", expectedPath);
  });

  it("should have a red background when text is NO", () => {
    const expectedColor = "red";
    render(
      <Button type="button" variant="standard">
        NO
      </Button>
    );

    const addButton = screen.getByText(/no/i);

    expect(addButton).toHaveStyle("background: " + expectedColor);
  });

  it("should have a green background when text is YES", () => {
    const expectedColor = "green";
    render(
      <Button type="button" variant="standard">
        YES
      </Button>
    );

    const addButton = screen.getByText(/yes/i);

    expect(addButton).toHaveStyle("background: " + expectedColor);
  });
});
