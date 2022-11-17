import styled from "styled-components";
import Button from "../../../components/Button";

function AddEvent() {
  return (
    <main>
      //back button
      <h1>New Event</h1>
      <StyledForm>
        <label htmlFor="input-event-name">Event Name *</label>
        <input type="text" id="input-event-name" name="title" required />

        <label htmlFor="input-description">Description</label>
        <textarea id="input-description" name="description" rows="5" />

        <label htmlFor="input-date">Date *</label>
        <input type="text" id="input-date" name="date" required />

        <label htmlFor="input-event-name">Start Time *</label>
        <input type="text" id="input-start-time" name="startTime" required />

        <label htmlFor="input-event-name">End Time *</label>
        <input type="text" id="input-end-time" name="endTime" required />

        <label htmlFor="input-location">Location</label>
        <input type="text" id="input-location" name="location" />

        <Button type="submit" variant="create">
          Create
        </Button>
      </StyledForm>
    </main>
  );
}

const StyledForm = styled.form`
  margin: 10px auto;
  display: grid;
  gap: 1rem;
  width: 90vw;

  button {
    justify-self: center;
  }
`;

export default AddEvent;
