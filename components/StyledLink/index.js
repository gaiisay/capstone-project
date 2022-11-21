import Link from "next/link";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  ${({ variant }) =>
    variant === "fab" &&
    css`
      position: fixed;
      padding: 0.8rem;
      bottom: 5rem;
      right: 2rem;
      background-color: white;

      box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
      border-radius: 16px;
    `}

  ${({ variant }) =>
    variant === "back" &&
    css`
      background-color: transparent;
      border: none;
    `}

  ${({ variant }) =>
    variant === "card" &&
    css`
      width: 90vw;
      max-width: 500px;
      padding: 1rem;
      margin: 0.5rem;
      display: grid;
      grid-template-columns: 2rem 3fr;
      align-items: center;
      column-gap: 2rem;
      background-color: #f27507;
      border-radius: 10px;
      box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
    `}
`;

export default StyledLink;
