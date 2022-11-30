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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 130px 0;
  background: var(--background-color);
`;

export default Layout;
