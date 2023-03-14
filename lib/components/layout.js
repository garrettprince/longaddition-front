import Nav from "./Nav";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex mx-auto max-w-2xl">
      <Nav />
      <main className="mx-auto">{children}</main>
      {/* <Footer /> */}
      {/* Footer gone until I can figure out how to make it sticky */}
    </div>
  );
}
