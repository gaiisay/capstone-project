import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import Button from "../Button";
import { useState } from "react";
import { formatOnlyTime } from "../../utils/helpers";

function EventForm({ defaultEvent, sendEvent, buttonContent }) {
  const [date, setDate] = useState(defaultEvent?.date ?? null);
  const [startTime, setStartTime] = useState(defaultEvent?.startTime ?? null);
  const [endTime, setEndTime] = useState(defaultEvent?.endTime ?? null);

  const [dateEmpty, setDateEmpty] = useState(false);
  const [startTimeEmpty, setStartTimeEmpty] = useState(false);
  const [endTimeEmpty, setEndTimeEmpty] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    console.log("date " + date, "startTime " + startTime, "endTime " + endTime);

    if (!date) {
      setDateEmpty(true);
      return;
    } else if (!startTime) {
      setStartTimeEmpty(true);
      return;
    } else if (!endTime || formatOnlyTime(startTime) > formatOnlyTime(endTime)) {
      setEndTimeEmpty(true);
      return;
    }

    const formData = new FormData(event.target);
    formData.append("date", date);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);
    const data = Object.fromEntries(formData);

    sendEvent(data);
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="input-event-name">Event Name *</label>
      <input
        type="text"
        id="input-event-name"
        name="name"
        pattern=".*[\S]+.*"
        defaultValue={defaultEvent?.name}
        maxLength={50}
        required
      />

      <label htmlFor="input-description">Description</label>
      <textarea id="input-description" name="description" rows="5" defaultValue={defaultEvent?.description} />

      <DatePicker
        label="Date"
        value={date}
        disablePast
        onAccept={() => setDateEmpty(false)}
        onChange={(newDate) => {
          setDate(newDate);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            required
            error={dateEmpty ? true : false}
            helperText={dateEmpty ? "please insert a valid date" : ""}
          />
        )}
      />

      <TimePicker
        label="Start Time"
        value={startTime}
        onAccept={() => setStartTimeEmpty(false)}
        onChange={(newTime) => {
          setStartTime(newTime);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            required
            error={startTimeEmpty ? true : false}
            helperText={startTimeEmpty ? "please insert a valid start time" : ""}
          />
        )}
      />

      <TimePicker
        label="End Time"
        value={endTime}
        onAccept={() => setEndTimeEmpty(false)}
        onChange={(newTime) => {
          setEndTime(newTime);
        }}
        onAcc
        renderInput={(params) => (
          <TextField
            {...params}
            required
            error={endTimeEmpty ? true : false}
            helperText={endTimeEmpty ? "please insert a valid end time" : ""}
          />
        )}
      />

      <label htmlFor="input-location">Location</label>
      <input type="text" id="input-location" name="location" defaultValue={defaultEvent?.location} />

      <Button type="submit" variant="submit">
        {buttonContent}
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

export default EventForm;
