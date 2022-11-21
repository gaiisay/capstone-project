import styled from "styled-components";
import { css } from "styled-components";
import Svg from "../Svg";

function Button({ type, variant, children }) {
  return (
    <StyledButton type={type} variant={variant}>
      <Svg variant={variant} />
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
    variant === "create" &&
    css`
      padding: 0.5rem 1rem;
      gap: 8px;
      border-radius: 100px;
    `}
`;

export default Button;
