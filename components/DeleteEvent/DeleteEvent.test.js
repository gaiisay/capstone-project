import { getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DeleteEvent from ".";

describe("DeleteEvent", () => {
  it("should show a modal when clicking on the trash can", async () => {
    render(<DeleteEvent />);

    const trashButton = screen.getByRole(/delete/i);

    await userEvent.click(trashButton);

    expect(screen.getByText(/are you sure/i)).toBeTruthy();
    expect(screen.getByText(/yes/i)).toBeTruthy();
    expect(screen.getByText(/no/i)).toBeTruthy();
  });

  it("should delete event when clicking on yes", async () => {
    const deleteEvent = jest.fn();

    render(<DeleteEvent deleteEvent={deleteEvent} />);

    const trashButton = screen.getByRole(/delete/i);

    await userEvent.click(trashButton);
    const deleteButton = screen.getByText(/yes/i);

    await userEvent.click(deleteButton);

    expect(deleteEvent).toHaveBeenCalled();
  });
});
