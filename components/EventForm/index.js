import styled, { css } from "styled-components";
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
      <InputContainer>
        <StyledInput
          type="text"
          id="input-event-name"
          name="name"
          placeholder=" "
          pattern=".*[\S]+.*"
          defaultValue={defaultEvent?.name}
          maxLength={50}
          required
        />
        <StyledLabel htmlFor="input-event-name">Event Name *</StyledLabel>
      </InputContainer>
      <InputContainer>
        <StyledTextArea
          id="input-description"
          name="description"
          placeholder=" "
          rows="5"
          defaultValue={defaultEvent?.description}
        />
        <StyledLabel desc htmlFor="input-description">
          Description
        </StyledLabel>
      </InputContainer>

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
        renderInput={(params) => (
          <TextField
            {...params}
            required
            error={endTimeEmpty ? true : false}
            helperText={endTimeEmpty ? "please insert a valid end time" : ""}
          />
        )}
      />

      <InputContainer>
        <StyledInput
          type="text"
          id="input-location"
          name="location"
          placeholder=" "
          defaultValue={defaultEvent?.location}
        />
        <StyledLabel htmlFor="input-location">Location</StyledLabel>
      </InputContainer>
      <Button type="submit" variant="submit">
        {buttonContent}
      </Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 10px auto;
  display: grid;
  gap: 12px;
  width: 90vw;

  button {
    justify-self: center;
  }

  input,
  textarea {
    font-family: Montserrat, sans-serif;
  }

  label {
    font-family: Montserrat, sans-serif;
    color: var(--text-color);
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  padding: 16px;
  background-color: transparent;
  width: 100%;

  &:focus {
    outline: none;
    border: 2px solid #1976d2;
  }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    height: fit-content;
    font-size: 12px;
    transform: translate(0, -50%);
    background: var(--background-color);
    padding-left: 4px;
    padding-right: 4px;
    transition: all 0.2s ease-out;
  }
`;
const StyledTextArea = styled.textarea`
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  padding: 16px;
  background-color: transparent;
  width: 100%;

  &:focus {
    outline: none;
    border: 2px solid #1976d2;
  }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    height: fit-content;
    font-size: 12px;
    top: 0;
    transform: translate(0, -50%);
    background: var(--background-color);
    padding-left: 4px;
    padding-right: 4px;
    transition: all 0.2s ease-out;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 16px;
  display: flex;
  align-items: center;
  pointer-events: none;
  transition: all 0.2s ease-out;

  ${({ desc }) =>
    desc &&
    css`
      top: 1rem;
      align-items: unset;
    `}
`;

export default EventForm;
