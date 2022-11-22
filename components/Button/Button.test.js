import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from ".";

describe("Button", () => {
  it("should display plus icon on variant add", () => {
    const expectedPath = "M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z";

    render(
      <Button type="button" variant="add">
        add
      </Button>
    );

    const addButton = screen.getByText(/add/i);

    expect(addButton.querySelector("path")).toHaveAttribute("d", expectedPath);
  });

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

  it("should display arrow icon on variant back", () => {
    const expectedPath = "M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z";

    render(
      <Button type="button" variant="back">
        back
      </Button>
    );

    const addButton = screen.getByText(/back/i);

    expect(addButton.querySelector("path")).toHaveAttribute("d", expectedPath);
  });
});
