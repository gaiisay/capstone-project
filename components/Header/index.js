import { useRouter } from "next/router";
import styled from "styled-components";
import { getBackPath } from "../../utils/helpers";
import StyledLink from "../StyledLink";
import Svg from "../Svg";

function Header() {
  const { pathname } = useRouter();
  const { id } = useRouter().query;
  const backPath = getBackPath(pathname, id);

  if (pathname.startsWith("/events/") || pathname.startsWith("/team/")) {
    return (
      <StyledHeader isSubpage pathname={pathname}>
        <StyledLink href={backPath === "/events" ? "/" : backPath} variant="back">
          <Svg variant="back" />
        </StyledLink>
        <StyledH1>{pathname.includes("edit") ? "Edit Event" : pathname.includes("add") ? "Create Event" : ""}</StyledH1>
      </StyledHeader>
    );
  }

  return (
    <StyledHeader pathname={pathname}>
      <StyledH1>{pathname === "/" ? "Events" : pathname === "/team" ? "Team" : ""}</StyledH1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: sticky;
  background: ${({ pathname }) =>
    pathname.includes("edit") || pathname.includes("add") || pathname === "/" || pathname === "/team"
      ? "var(--background-color)"
      : "transparent"};
  z-index: 2;
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
