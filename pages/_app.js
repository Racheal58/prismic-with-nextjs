import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import "../styles/globals.css";
import { createClient } from "../prismicio";

import sm from "../sm.json";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps, menu }) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Header menuDoc={menu} />
        <Component {...pageProps} />
        <Footer />
      </PrismicPreview>
    </PrismicProvider>
  );
}

MyApp.getInitialProps = async () => {
  const client = createClient(sm.apiEndpoint);
  const menu = await client.getSingle("menu");
  return { menu };
};

export default MyApp;
