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
    const todayShort = new Date().toLocaleDateString("de-DE");
    const todayLong = new Date().toDateString();

    const sendEvent = jest.fn();
    const expectedName = "Test Name";
    const expectedDescription = "Description";
    const inputDate = todayShort;
    const expectedDate = todayLong + " 00:00:00 GMT+0100 (Central European Standard Time)";
    const inputStartTime = "20:00";
    const expectedStartTime = todayLong + " 20:00:00 GMT+0100 (Central European Standard Time)";
    const inputEndTime = "22:00";
    const expectedEndTime = todayLong + " 22:00:00 GMT+0100 (Central European Standard Time)";
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
        <NewEventForm sendEvent={sendEvent} buttonContent="Create" />
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
    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toBeCalledWith(expectedSubmitData);
  });

  it("can't submit without an event name", async () => {
    const addEvent = jest.fn();

    render(
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
        <NewEventForm addEvent={addEvent} buttonContent="Create" />
      </LocalizationProvider>
    );

    const submitButton = screen.getByText(/create/i);

    await userEvent.click(submitButton);

    expect(addEvent).toHaveBeenCalledTimes(0);
  });

  it("should be prefilled if a defaultEvent is passed", async () => {
    const expectedEvent = {
      id: "c830d24f-2c14-4089-acca-e8ff639552c1",
      name: "Training",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec o…",
      date: "2022-12-02",
      startTime: "2022-12-02 20:00",
      endTime: "2022-12-02 22:00",
      location: "Rathausstraße 9, 53819 Neunkirchen-Seelscheid",
    };
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
        <NewEventForm defaultEvent={expectedEvent} />
      </LocalizationProvider>
    );

    const eventNameInput = screen.getByLabelText(/name/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const dateInput = screen.getByLabelText(/date \*/i);
    const startTimeInput = screen.getByLabelText(/start/i);
    const endTimeInput = screen.getByLabelText(/end/i);
    const locationInput = screen.getByLabelText(/location/i);

    expect(eventNameInput).toHaveValue(expectedEvent.name);
    expect(descriptionInput).toHaveValue(expectedEvent.description);
    expect(dateInput).toHaveValue("02.12.2022");
    expect(startTimeInput).toHaveValue("20:00");
    expect(endTimeInput).toHaveValue("22:00");
    expect(locationInput).toHaveValue(expectedEvent.location);
  });
});
