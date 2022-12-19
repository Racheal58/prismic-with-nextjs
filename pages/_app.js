import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
