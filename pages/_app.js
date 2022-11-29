import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../utils/hooks";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} /* attendances={attendances} setAttendances={addAttendance} */ />
    </Layout>
  );
}

export default MyApp;
