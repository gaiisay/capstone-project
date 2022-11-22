import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import StyledLink from "../StyledLink";
import Svg from "../Svg";
import logo from "../../public/logo.png";

function Header() {
  const { pathname } = useRouter();
  const { id } = useRouter().query;

  if (pathname === "/") {
    return (
      <StyledHeader>
        <Image src={logo} width={50} alt="Logo" />
        <StyledH1>Deine Veranstaltungen</StyledH1>
      </StyledHeader>
    );
  }

  if (pathname.startsWith("/events/")) {
    return (
      <StyledHeader>
        <StyledLink href={pathname.includes("edit") ? `/events/${id}` : "/"} variant="back">
          <Svg variant="back" />
        </StyledLink>
        <StyledH1>
          {pathname.includes("edit") ? "Edit Event" : pathname.includes("add") ? "Create Event" : "Event Details"}
        </StyledH1>
      </StyledHeader>
    );
  }

  return;
}

const StyledHeader = styled.header`
  padding: 0.5rem 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const StyledH1 = styled.h1`
  font-size: 1.2rem;
  width: 10px;
`;

export default Header;
