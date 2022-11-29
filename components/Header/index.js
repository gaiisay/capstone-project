import Image from "next/image";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import StyledLink from "../StyledLink";
import Svg from "../Svg";
import logo from "../../public/logo.png";

function Header() {
  const { pathname } = useRouter();
  const { id } = useRouter().query;

  if (pathname.startsWith("/events/")) {
    return (
      <StyledHeader isSubpage>
        <StyledLink href={pathname.includes("edit") ? `/events/${id}` : "/"} variant="back">
          <Svg variant="back" />
        </StyledLink>
        <StyledH1>
          {pathname.includes("edit") ? "Edit Event" : pathname.includes("add") ? "Create Event" : "Event Details"}
        </StyledH1>
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <Image src={logo} width={100} alt="Logo" />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  opacity: 90%;
  background-color: var(--card-color);
  z-index: 10;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${({ isSubpage }) =>
    isSubpage &&
    css`
      justify-content: flex-start;
    `}
`;
const StyledH1 = styled.h1`
  font-size: 1.2rem;
  width: 4ch;
`;

export default Header;
