import "../styles/globals.css";
import Layout from "/lib/components/layout.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}