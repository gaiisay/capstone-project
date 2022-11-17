import styled from "styled-components";
import css from "styled-jsx/css";
import Svg from "../Svg";

function Button({ type, variant }) {
  return (
    <StyledButton type={type} variant={variant}>
      <Svg variant={variant}></Svg>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ variant }) =>
    variant === "add" &&
    css`
      position: fixed;
      width: 56px;
      height: 56px;
      bottom: 5rem;
      right: 2rem;

      box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
      border-radius: 16px;
    `}
`;

export default Button;
