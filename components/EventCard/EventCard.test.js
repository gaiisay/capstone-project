import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import EventCard from ".";

describe("EventCard", () => {
  it("renders date, time, name and teamName of an event", () => {
    const event = {
      name: "Training",
      date: "2022-12-02",
      startTime: "2022-12-02 20:00",
      endTime: "2022-12-02 22:00",
    };
    const teamName = "your Team";

    const expectedDate = "Fr 02 Dez";
    const expectedTime = "20:00 - 22:00";

    render(<EventCard event={event} teamName={teamName} />);

    const date = screen.getByText(/dez/i);
    const time = screen.getByText(/20/i);
    const name = screen.getByText(/training/i);
    const team = screen.getByText(/team/i);

    expect(date).toHaveTextContent(expectedDate);
    expect(time).toHaveTextContent(expectedTime);
    expect(name).toHaveTextContent(event.name);
    expect(team).toHaveTextContent(teamName);
  });
});
