import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import Button from "../Button";
import { useRouter } from "next/router";
import { useState } from "react";

function NewEventForm({ addEvent }) {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("date", date);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);
    const data = Object.fromEntries(formData);

    addEvent(data);
    router.push("/");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="input-event-name">Event Name *</label>
      <input type="text" id="input-event-name" name="name" maxLength={50} required />

      <label htmlFor="input-description">Description</label>
      <textarea id="input-description" name="description" rows="5" />

      <DatePicker
        required
        label="Date *"
        value={date}
        onChange={(newDate) => {
          console.log(newDate);
          setDate(newDate);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <TimePicker
        label="Start Time *"
        value={startTime}
        onChange={(newTime) => {
          setStartTime(newTime);
        }}
        renderInput={(params) => <TextField {...params} />}
        required
      />
      <TimePicker
        label="End Time *"
        value={endTime}
        onChange={(newTime) => {
          setEndTime(newTime);
        }}
        renderInput={(params) => <TextField {...params} />}
        required
      />

      <label htmlFor="input-location">Location</label>
      <input type="text" id="input-location" name="location" />

      <Button type="submit" variant="create">
        Create
      </Button>
    </StyledForm>
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

export default NewEventForm;
