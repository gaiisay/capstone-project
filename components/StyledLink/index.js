import Link from "next/link";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  ${({ variant }) =>
    variant === "fab" &&
    css`
      position: fixed;
      padding: 0.7rem 0.9rem;
      bottom: 90px;
      right: 2rem;
      background: linear-gradient(0deg, rgba(0, 90, 193, 0.08), rgba(0, 90, 193, 0.08)), #fefbff;

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
