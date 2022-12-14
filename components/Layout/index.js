import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";

function Layout({ children }) {
  return (
    <>
      <Header />

      <Main>{children}</Main>

      <Footer />
    </>
  );
}

const Main = styled.main`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 100px 0;
  background: var(--background-color);
`;

export default Layout;
