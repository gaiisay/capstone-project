import { useRouter } from "next/router";
import styled from "styled-components";
import StyledLink from "../StyledLink";
import Svg from "../Svg";

function Footer() {
  const { pathname } = useRouter();

  return (
    <footer>
      <StyledNav>
        <StyledLink href="/" variant="nav">
          <Svg variant="events" active={pathname === "/" || pathname.startsWith("/events") ? true : false} />
          Events
        </StyledLink>
        <StyledLink href="/team" variant="nav">
          <Svg variant="team" active={pathname.startsWith("/team") ? true : false} />
          Team
        </StyledLink>
      </StyledNav>
    </footer>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px 8px;
  gap: 8px;

  width: 100%;
  height: 70px;
  z-index: 20;

  background: var(--nav-color);
`;

export default Footer;
