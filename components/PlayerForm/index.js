import styled, { css } from "styled-components";
import Button from "../Button";
import { useState } from "react";

function PlayerForm({ defaultPlayer, sendPlayer, buttonContent }) {
  const [image, setImage] = useState(defaultPlayer?.imageSrc);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.imageSrc.name !== "") {
      const response = await fetch("/api/image/upload", {
        method: "POST",
        body: formData,
      });
      const image = await response.json();
      const publicId = image.publicId;
      data.imageSrc = publicId;
    } else {
      data.imageSrc = "";
    }

    sendPlayer(data);
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputContainer>
        <StyledInput
          type="text"
          id="input-player-name"
          name="name"
          placeholder=" "
          pattern=".*[\S]+.*"
          defaultValue={defaultPlayer?.name}
          maxLength={50}
          required
        />
        <StyledLabel htmlFor="input-player-name">Player Name *</StyledLabel>
      </InputContainer>
      <InputContainer>
        <StyledInput
          type="number"
          id="input-player-age"
          name="age"
          placeholder=" "
          pattern=".*[\S]+.*"
          defaultValue={defaultPlayer?.age}
          max={99}
          min={1}
          required
        />
        <StyledLabel htmlFor="input-player-age">Age *</StyledLabel>
      </InputContainer>
      <InputContainer>
        <StyledInput
          type="text"
          id="input-player-position"
          name="position"
          placeholder=" "
          pattern=".*[\S]+.*"
          defaultValue={defaultPlayer?.position}
          maxLength={20}
          required
        />
        <StyledLabel htmlFor="input-player-position">Position *</StyledLabel>
      </InputContainer>
      <InputContainer>
        <StyledInput
          type="text"
          id="input-player-role"
          name="role"
          placeholder=" "
          pattern=".*[\S]+.*"
          defaultValue={defaultPlayer?.role}
          maxLength={25}
        />
        <StyledLabel htmlFor="input-player-role">Role</StyledLabel>
      </InputContainer>
      <StyledUploadInput
        value={image}
        onChange={(newImage) => setImage(newImage.target.value)}
        type="file"
        id="input-player-image"
        name="imageSrc"
      />
      <StyledUploadLabel htmlFor="input-player-image">Upload Image</StyledUploadLabel>
      <p>{image}</p>

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

const StyledUploadInput = styled.input`
  display: none;
`;
const StyledUploadLabel = styled.label`
  margin-top: 0.2rem;
  background: transparent;
  border: 1px solid #c0c0c0;
  width: fit-content;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
`;

export default PlayerForm;
