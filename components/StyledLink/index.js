import Link from "next/link";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  -webkit-tap-highlight-color: transparent;

  ${({ variant }) =>
    variant === "fab" &&
    css`
      position: fixed;
      padding: 0.8rem;
      bottom: 50px;
      right: calc(50% - width);
      background: var(--fab-color);

      box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      z-index: 50;
    `}

  ${({ variant }) =>
    variant === "back" &&
    css`
      background-color: transparent;
      border: none;
      z-index: 20;
    `}

  ${({ variant }) =>
    variant === "nav" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      background-color: transparent;
      border: none;
    `}
`;

export default StyledLink;
