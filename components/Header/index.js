import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "../Button";

function Header() {
  const router = useRouter();
  const { pathname } = router;

  if (pathname.startsWith("/events/") || pathname.startsWith("/team/")) {
    return (
      <StyledHeader isSubpage pathname={pathname}>
        <Button type="button" variant="back" onClick={() => router.back()} />
        <StyledH1>
          {pathname.includes("events/edit")
            ? "Edit Event"
            : pathname.includes("events/add")
            ? "Create Event"
            : pathname.includes("team/add")
            ? "Create Player"
            : pathname.includes("team/edit")
            ? "Edit Player"
            : ""}
        </StyledH1>
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
  box-shadow: ${({ pathname }) => (pathname === "/" || pathname === "/team" ? "var(--box-shadow)" : "none")}; ;
`;
const StyledH1 = styled.h1`
  font-size: 1.7rem;
  grid-column: 2/3;
  text-align: center;
  font-variation-settings: "wght" 500;
`;

export default Header;
