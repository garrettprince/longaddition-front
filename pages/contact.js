import Link from "next/link";
import { contactPagePhrases } from "../lib/data/phrases";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactGreetInterval from "../lib/components/ContactGreetInterval";

export default function Contact() {
  const [telepathy, setTelepathy] = useState(false);
  const [openMessage, setOpenMessage] = useState();

  const openTelepathy = () => {
    setTelepathy(true);
  };

  // Maybe have a click count in the future, don't need it now though, too many features I'm trying to add, just need to get the basics done
  // const [igClickCount, setIgClickCount] = useState(0);

  // const incrementIgClickCount = () => {
  //   setIgClickCount(igClickCount + 1)
  // }

  return (
    <motion.div
      initial={{ y: 6, opacity: 0 }}
      animate={{ y: -3, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="mt-32 text-center"
    >
      {/* Have a picture of me with an open mouth and the Let's talk inside of it, maybe sideways so it doesn't take up too much vertical space */}
      <div className="font-bold text-4xl mb-20 flex justify-center w-full">
        {/* {contactPagePhraseVar} */}
        <ContactGreetInterval />
      </div>
      {/* <Link
        href="https://www.instagram.com/garrettjprince/"
        className="font-mono text-xl py-1  px-1 mx-auto border-none rounded-xl bg-gradient-to-tr from-cta-gradient-1 to-cta-gradient-2 mb-5"
      >
        <div className="bg-black py-1 px-5 rounded-lg">INSTAGRAM DM</div>
      </Link>
      <Link
        href="mailto:garrett@longaddition.com"
        className="font-mono text-xl py-1  px-1 mx-auto border-none rounded-xl bg-gradient-to-tr from-cta-gradient-1 to-cta-gradient-2 mb-2"
      >
        <div className="bg-black py-1 px-5 rounded-lg">EMAIL ME</div>
      </Link> */}

      <div className="flex flex-col text-center space-y-8 text-2xl mx-auto">
        <Link
          href="https://www.instagram.com/garrettjprince"
          className="font-mono"
          // onClick={incrementIgClickCount}
        >
          INSTAGRAM
          {/* <p className="text-center text-inactive font-bold text-xs">
            CLICKED {igClickCount} TIMES
          </p> */}
        </Link>
        <Link href="https://github.com/garrettprince" className="font-mono ">
          GITHUB
          {/* <p className="text-center text-inactive font-bold text-xs">
            CLICKED {igClickCount} TIMES
          </p> */}
        </Link>
        <Link href="mailto:garrett@longaddition.com" className="font-mono ">
          EMAIL
        </Link>
        <p href="" className="font-mono cursor-pointer" onClick={openTelepathy}>
          TELEPATHY
          {telepathy && (
            <p
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: -3, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
              className="text-center text-inactive font-bold text-xs mt-2"
            >
              ALREADY RESPONDED
            </p>
          )}
        </p>

        {/* <Link href="/" className="font-mono ">
          WHATSAPP
          <p className="font-sans text-center text-inactive font-bold text-sm">
            (Not functioning yet)
          </p>
        </Link> */}
      </div>
    </motion.div>
  );
}
