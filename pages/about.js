/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Nav from '../lib/components/Nav'
import { motion } from 'framer-motion'
import Link from 'next/link';

export default function About() {
  return (
    <motion.div
      initial={{ y: 6, opacity: 0 }}
      animate={{ y: -3, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="mt-28 flex flex-col justify-center "
    >
      <div className="">
        <div className="fixed z-10 bg-transparent ml-7 mr-3 text-lg">
          <p className="mb-4 bg-transparent">
            <span className="font-bold bg-transparent">
              My name is Garrett and I can talk to animals,
            </span>{" "}
            but I primarily write words and software. In addition to my writing,
            I&apos;ve spent (and will continue to spend) my life
            circumnavigating the globe as a treasure hunter in search of{" "}
            <Link
              href="/"
              className="border-b-[3px] pb-1 border-cta cursor-pointer bg-transparent"
            >
              King Peenty&apos;s Big Red Rubies.
            </Link>{" "}
          </p>
          <p className="mb-4 bg-transparent">
            Long Addition is my personal blog and art installation. I talk more
            about it{" "}
            <Link
              href="/"
              className="border-b-[3px] pb-1 border-cta cursor-pointer bg-transparent"
            >
              here.
            </Link>
          </p>
          <p className="mb-4 bg-transparent">
            Reach out to me{" "}
            <Link
              href="/contact"
              className="border-b-[3px] pb-1 border-cta cursor-pointer bg-transparent"
            >
              via the Contact page.
            </Link>{" "}
            I&apos;m very approachable and can read most words.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677184908/Long%20Addition/About%20Me%20Page/Troll_bmhsyg.png"
          alt=""
          className="opacity-40 fixed top-4"
        />
      </div>
    </motion.div>
  );
}