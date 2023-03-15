/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Nav from "../lib/components/Nav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const rotatingPhrases = [
    "My name is Garrett and I'm the first person to stand up really fast, hunched over, when the plane lands and the doors aren't open yet.",
    "My name is Garrett and I'm the first person to feel sorrow on a jetski.",
    "My name is Garrett and I'm very impressed with paintings and I understand all art.",
    "My name is Garrett and I was the Gerder baby.",
    "My name is Garrett and I am the strongest man or woman to cry at an Olive Garden.",
    "My name is Garrett and I'm the oldest living child.",
    "My name is Garrett and I'm the first person to grow, use, then lose human skin wings.",
    "My name is Garrett and I fell in love with Dierdre on TLC's 'My 800lb Wish'.",
    "My name is Garrett and I was number Bergy in Forbes' Bergy Under Bergy List.",
    "My name is Garrett and in 10 years I will be replaced by Sammy Hagar.",
  ];

  return (
    <motion.div
      initial={{ y: 6, opacity: 0 }}
      animate={{ y: -3, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="mt-28 flex flex-col justify-center "
    >
      <div className="">
        <div className=" bg-transparent ml-7 mr-4 text-lg">
          <p className="font-bold mb-4 bg-transparent">
            {
              rotatingPhrases[
                Math.floor(Math.random() * rotatingPhrases.length)
              ]
            }
          </p>{" "}
          <p className="mb-4 bg-transparent">
            I mostly write words, music, and software. In addition to my writing,
            I&apos;ve spent (and will continue to spend) my entire life
            circumnavigating the globe as a treasure hunter in search of{" "}
            <Link
              href="/"
              className="border-b-[3px] pb-[.1rem] border-cta cursor-pointer bg-transparent"
            >
              King Peenty&apos;s Big Red Rubies.
            </Link>{" "}
          </p>
          <p className="mb-4 bg-transparent">
            Long Addition is part dumping ground, part personal catalogue, and part art installation. I
            talk more about it{" "}
            <Link
              href="/"
              className="border-b-[3px] pb-[.1rem] border-cta cursor-pointer bg-transparent"
            >
              here.
            </Link>
          </p>
          <p className="mb-4 bg-transparent">
            Reach out to me{" "}
            <Link
              href="/contact"
              className="border-b-[3px] pb-[.1rem] border-cta cursor-pointer bg-transparent"
            >
              via the Contact page.
            </Link>{" "}
            I&apos;m very approachable and can read most words.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677184908/Long%20Addition/About%20Me%20Page/Troll_bmhsyg.png"
          alt=""
          className="opacity-20 "
        />
      </div>
    </motion.div>
  );
}
