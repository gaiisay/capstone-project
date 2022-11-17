import styled from "styled-components";
import Button from "../../../components/Button";
import TextField from "@mui/material/TextField";
import { de } from "date-fns/locale";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";

function AddEvent() {
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  return (
    <main>
      //back button
      <h1>New Event</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
        <StyledForm>
          <label htmlFor="input-event-name">Event Name *</label>
          <input type="text" id="input-event-name" name="title" maxLength={50} required />

          <label htmlFor="input-description">Description</label>
          <textarea id="input-description" name="description" rows="5" />

          <DatePicker
            label="Date *"
            value={date}
            onChange={(newDate) => {
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
          />
          <TimePicker
            label="End Time *"
            value={endTime}
            onChange={(newTime) => {
              setEndTime(newTime);
            }}
            renderInput={(params) => <TextField {...params} />}
          />

          <label htmlFor="input-location">Location</label>
          <input type="text" id="input-location" name="location" />

          <Button type="submit" variant="create">
            Create
          </Button>
        </StyledForm>
      </LocalizationProvider>
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
