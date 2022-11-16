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

    render(<EventCard event={event} teamName={teamName} />);

    const date = screen.getByTestId("date");
    const time = screen.getByTestId("time");
    const name = screen.getByTestId("name");
    const team = screen.getByTestId("team");

    expect(date).toHaveTextContent(
      new Date(event.date).toLocaleDateString("de-DE", { weekday: "short", month: "short", day: "numeric" })
    );
    expect(time).toHaveTextContent(event.startTime + " - " + event.endTime);
    expect(name).toHaveTextContent(event.name);
    expect(team).toHaveTextContent(teamName);

    expect();
  });
});
