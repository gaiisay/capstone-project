import { useRouter } from "next/router";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";

function Layout({ children }) {
  const { pathname } = useRouter();

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
  margin-bottom: 80px;
`;

export default Layout;
