import Link from "next/link";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
  color: black;

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
    variant === "back" &&
    css`
      position: absolute;
      padding: 0.8rem;
      top: 5px;
      left: 5px;
      background-color: transparent;
      border: none;
    `}
`;

export default StyledLink;
