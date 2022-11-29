import styled from "styled-components";
import { css } from "styled-components";
import Svg from "../Svg";

function Button({ type, variant, children, onClick, role }) {
  return (
    <StyledButton type={type} variant={variant} onClick={onClick} role={role}>
      {variant !== "standard" ? <Svg variant={variant} /> : null}
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: fit-content;
  border: none;

  ${({ variant }) =>
    variant === "submit" &&
    css`
      padding: 0.5rem 1rem;
      gap: 8px;
      border-radius: 100px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    `}

  ${({ variant }) =>
    variant === "delete" &&
    css`
      position: absolute;
      top: 1rem;
      right: 2rem;
      background-color: transparent;
    `}
  ${({ variant }) =>
    variant === "accept" &&
    css`
      width: 30px;
      height: 30px;
      background: var(--green);
      border-radius: 100px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    `}
  ${({ variant }) =>
    variant === "cancel" &&
    css`
      width: 30px;
      height: 30px;
      background: var(--red);
      border-radius: 100px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    `}
  ${({ variant }) =>
    variant === "unassign" &&
    css`
      width: 30px;
      height: 30px;
      background: var(--yellow);
      border-radius: 100px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    `}

  ${({ variant }) =>
    variant === "standard" &&
    css`
      min-width: 50%;
      padding: 0.5rem 1rem;
      background: ${({ children }) => (children.includes("NO") ? "var(--red)" : "var(--green)")};

      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
      border-radius: 100px;
    `}
`;

export default Button;
