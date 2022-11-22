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
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      />
      {isOpen && (
        <Modal>
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
  background: linear-gradient(0deg, rgba(0, 90, 193, 0.05), rgba(0, 90, 193, 0.05)), #fefbff;
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
