import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

function DeleteEvent({ deleteEvent }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="delete"
        role="deleteButton"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      />
      {isOpen && (
        <Modal>
          <h2>Are you sure?</h2>
          <Button type="button" variant="standard" onClick={deleteEvent}>
            YES
          </Button>
          <Button type="button" variant="standard" onClick={() => setIsOpen(false)}>
            NO
          </Button>
        </Modal>
      )}
    </>
  );
}

const Modal = styled.div`
  background: var(--background-color);
  position: fixed;
  top: 30%;
  width: 400px;
  max-width: 80vw;
  height: 200px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 28px;
`;

export default DeleteEvent;
