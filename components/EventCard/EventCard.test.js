import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import EventCard from ".";

describe("EventCard", () => {
  it("displays all props", () => {
    const event = {
      name: "Training",
      date: "2022-12-02T18:25:43.511Z",
      startTime: "20:00",
      endTime: "22:00",
    };
    const teamName = "your Team";

    const expectedDate = "Fr 02 Dez";
    const expectedTime = "20:00 - 22:00";

    render(<EventCard event={event} teamName={teamName} />);

    const date = screen.getByTestId("date");
    const time = screen.getByTestId("time");
    const name = screen.getByTestId("name");
    const team = screen.getByTestId("team");

    expect(date).toHaveTextContent(expectedDate);
    expect(time).toHaveTextContent(expectedTime);
    expect(name).toHaveTextContent(event.name);
    expect(team).toHaveTextContent(teamName);

    expect();
  });
});
