import Nav from "./Nav";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
}
