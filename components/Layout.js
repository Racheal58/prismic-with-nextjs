import { Footer } from "./footer";
import { Header } from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
