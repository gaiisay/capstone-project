import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import PlayerForm from ".";

jest.mock("next/router", () => require("next-router-mock"));

describe("Button", () => {
  it("returns all inputs", async () => {
    const addPlayer = jest.fn();
    const expectedName = "Test Name";
    const inputAge = "45";
    const expectedAge = 45;
    const expectedPosition = "Guard";
    const expectedRole = "Captain";
    const expectedSubmitData = {
      name: expectedName,
      age: inputAge,
      position: expectedPosition,
      role: expectedRole,
      imageSrc: "",
    };

    render(<PlayerForm sendPlayer={addPlayer} buttonContent="Create" />);

    const playerNameInput = screen.getByLabelText(/name/i);
    const ageInput = screen.getByLabelText(/age \*/i);
    const positionInput = screen.getByLabelText(/position/i);
    const roleInput = screen.getByLabelText(/role/i);
    const imageUploadInput = screen.getByLabelText(/upload/i);
    const submitButton = screen.getByText(/create/i);

    await userEvent.type(playerNameInput, expectedName);
    await userEvent.type(ageInput, inputAge);
    await userEvent.type(positionInput, expectedPosition);
    await userEvent.type(roleInput, expectedRole);
    await userEvent.click(submitButton);

    expect(playerNameInput).toHaveValue(expectedName);
    expect(ageInput).toHaveValue(expectedAge);
    expect(positionInput).toHaveValue(expectedPosition);
    expect(roleInput).toHaveValue(expectedRole);
    expect(addPlayer).toHaveBeenCalledTimes(1);
    expect(addPlayer).toBeCalledWith(expectedSubmitData);
  });

  it("can't submit without a player name", async () => {
    const addPlayer = jest.fn();

    render(<PlayerForm sendPlayer={addPlayer} buttonContent="Create" />);

    const submitButton = screen.getByText(/create/i);

    await userEvent.click(submitButton);

    expect(addPlayer).toHaveBeenCalledTimes(0);
  });
});
