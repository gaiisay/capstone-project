import styled, { css } from "styled-components";
import Button from "../Button";

function PlayerForm({ defaultPlayer, sendPlayer, buttonContent }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    sendPlayer(data);
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
          defaultValue={defaultPlayer.name}
          maxLength={50}
          required
        />
        <StyledLabel htmlFor="input-event-name">Player Name *</StyledLabel>
      </InputContainer>
      <InputContainer>
        <StyledInput
          type="text"
          id="input-event-name"
          name="name"
          placeholder=" "
          pattern=".*[\S]+.*"
          defaultValue={defaultPlayer.age}
          maxLength={50}
          required
        />
        <StyledLabel htmlFor="input-event-name">Age *</StyledLabel>
      </InputContainer>
      <InputContainer>
        <StyledInput
          type="text"
          id="input-event-name"
          name="name"
          placeholder=" "
          pattern=".*[\S]+.*"
          defaultValue={defaultPlayer.position}
          maxLength={50}
          required
        />
        <StyledLabel htmlFor="input-event-name">Position *</StyledLabel>
      </InputContainer>
      <InputContainer>
        <StyledInput
          type="text"
          id="input-event-name"
          name="name"
          placeholder=" "
          defaultValue={defaultPlayer.role}
          maxLength={50}
        />
        <StyledLabel htmlFor="input-event-name">Special Role</StyledLabel>
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
    font-size: 1rem;
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

  &:focus + label {
    color: #1976d2;
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

export default PlayerForm;
