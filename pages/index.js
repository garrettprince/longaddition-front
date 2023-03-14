import Head from "next/head";
import CategoryBar from "../lib/components/CategoryBar";
import Feed from "../lib/components/Feed";
import { useState } from "react";
import Footer from "../lib/components/Footer";

export default function Home() {
  const [selected, setSelected] = useState("latest");

  return (
    <div className="mt-10 sm:mt-20 max-w-2xl mx-auto">
      <Head>
        <title>Long Addition</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex">
        <CategoryBar selected={selected} setSelected={setSelected} />
        <Feed selected={selected} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
