import Nav from "./Nav";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="relative">{children}</main>
      {/* <Footer /> */}
      {/* Footer gone until I can figure out how to make it sticky */}
    </>
  );
}
