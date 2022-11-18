import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import NewEventForm from ".";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { de } from "date-fns/locale";

jest.mock("next/router", () => require("next-router-mock"));

describe("Button", () => {
  it("returns all inputs", async () => {
    const addEvent = jest.fn();
    const expectedName = "Test Name";
    const expectedDescription = "Description";
    const inputDate = "17.11.2022";
    const expectedDate = "Thu Nov 17 2022 00:00:00 GMT+0100 (Central European Standard Time)";
    const inputStartTime = "20:00";
    const expectedStartTime = "Fri Nov 18 2022 20:00:00 GMT+0100 (Central European Standard Time)";
    const inputEndTime = "22:00";
    const expectedEndTime = "Fri Nov 18 2022 22:00:00 GMT+0100 (Central European Standard Time)";
    const expectedLocation = "Home";
    const expectedSubmitData = {
      name: expectedName,
      description: expectedDescription,
      date: expectedDate,
      startTime: expectedStartTime,
      endTime: expectedEndTime,
      location: expectedLocation,
    };

    render(
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
        <NewEventForm addEvent={addEvent} />
      </LocalizationProvider>
    );

    const eventNameInput = screen.getByLabelText(/name/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const dateInput = screen.getByLabelText(/date \*/i);
    const startTimeInput = screen.getByLabelText(/start/i);
    const endTimeInput = screen.getByLabelText(/end/i);
    const locationInput = screen.getByLabelText(/location/i);
    const submitButton = screen.getByText(/create/i);

    await userEvent.type(eventNameInput, expectedName);
    await userEvent.type(descriptionInput, expectedDescription);

    await userEvent.clear(dateInput);
    await userEvent.type(dateInput, inputDate);

    await userEvent.clear(startTimeInput);
    await userEvent.type(startTimeInput, inputStartTime);

    await userEvent.clear(endTimeInput);
    await userEvent.type(endTimeInput, inputEndTime);

    await userEvent.type(locationInput, expectedLocation);
    await userEvent.click(submitButton);

    expect(eventNameInput).toHaveValue(expectedName);
    expect(descriptionInput).toHaveValue(expectedDescription);
    expect(dateInput).toHaveValue(inputDate);
    expect(startTimeInput).toHaveValue(inputStartTime);
    expect(endTimeInput).toHaveValue(inputEndTime);
    expect(locationInput).toHaveValue(expectedLocation);
    expect(addEvent).toHaveBeenCalledTimes(1);
    expect(addEvent).toBeCalledWith(expectedSubmitData);
  });

  it("can't submit without an event name", async () => {
    const addEvent = jest.fn();

    render(
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
        <NewEventForm addEvent={addEvent} />
      </LocalizationProvider>
    );

    const submitButton = screen.getByText(/create/i);

    await userEvent.click(submitButton);

    expect(addEvent).toHaveBeenCalledTimes(0);
  });
});