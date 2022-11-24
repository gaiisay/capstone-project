import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PlayerCard from ".";

describe("PlayerCard", () => {
  it("renders name, age, position and role of a player", () => {
    const player = {
      id: "1234",
      name: "Gai Isay",
      age: 26,
      position: "Guard",
      role: "Captain",
      imageSrc: "/gai.jpeg",
    };

    render(<PlayerCard player={player} />);

    const name = screen.getByText(/gai/i);
    const age = screen.getByText(/26/i);
    const position = screen.getByText(/guard/i);
    const role = screen.getByText(/captain/i);

    expect(name).toHaveTextContent(player.name);
    expect(age).toHaveTextContent(player.age);
    expect(position).toHaveTextContent(player.position);
    expect(role).toHaveTextContent(player.role);
  });
});
