import Image from "next/image";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import StyledLink from "../StyledLink";
import Svg from "../Svg";

function Header() {
  const { pathname } = useRouter();
  const { id } = useRouter().query;

  if (pathname.startsWith("/events/")) {
    return (
      <StyledHeader isSubpage>
        <StyledLink href={pathname.includes("edit") ? `/events/${id}` : "/"} variant="back">
          <Svg variant="back" />
        </StyledLink>
        <StyledH1>{pathname.includes("edit") ? "Edit Event" : pathname.includes("add") ? "Create Event" : ""}</StyledH1>
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <StyledH1>{pathname === "/" ? "Events" : pathname === "/team" ? "Team" : ""}</StyledH1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 70px;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  align-items: center;
`;
const StyledH1 = styled.h1`
  font-size: 1.7rem;
  grid-column: 2/3;
  text-align: center;
  font-variation-settings: "wght" 500;
`;

export default Header;
