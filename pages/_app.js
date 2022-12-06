import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { CloudinaryContext } from "cloudinary-react";

function MyApp({ Component, pageProps }) {
  return (
    <CloudinaryContext cloudName="dfaptkc7d">
      <Layout>
        <GlobalStyles />

        <Component {...pageProps} />
      </Layout>
    </CloudinaryContext>
  );
}

export default MyApp;
