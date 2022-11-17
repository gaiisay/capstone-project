import styled from "styled-components";
import css from "styled-jsx/css";
import Svg from "../Svg";

function Button({ type, variant, children }) {
  return (
    <StyledButton type={type} variant={variant}>
      <Svg variant={variant}></Svg>
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

  ${({ variant }) =>
    variant === "add" &&
    css`
      position: fixed;
      padding: 0.8rem;
      bottom: 5rem;
      right: 2rem;

      box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
      border-radius: 16px;
    `}

  ${({ variant }) =>
    variant === "create" &&
    css`
      padding: 0.5rem 1rem;
      gap: 8px;
      border-radius: 100px;
    `}
`;

export default Button;
