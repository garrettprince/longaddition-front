/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { motion } from "framer-motion";

function Nav() {
  const [menu, setMenu] = useState("");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const menuOpen = () => {
    setMenu(true);
  };

  const menuClose = () => {
    setMenu(false);
  };

  const searchOpen = () => {
    setSearch(true);
  };

  const searchClose = () => {
    setSearch(false);
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      {menu && (
        <div className="fixed top-0 z-50 w-full h-full">
          <motion.div className="flex bg-transparent items-center justify-between mx-6 my-3">
            <Link href="/" onClick={menuClose}>
              <img
                src="/assets/brand/logowhiteupdated.png"
                alt="logo"
                className="h-11 bg-transparent mb-1"
              />
            </Link>
            <button onClick={menuClose}>
              <XMarkIcon className="w-9 h-9 bg-transparent" />
            </button>
          </motion.div>

          <motion.div
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: -3, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="flex flex-col font-mono text-3xl mt-16 space-y-10"
          >
            <Link href="/about" onClick={menuClose}>
              <p className="flex justify-center">ABOUT</p>
            </Link>
            <Link href="/contact" onClick={menuClose}>
              <p className="flex justify-center">CONTACT</p>
            </Link>

            {/* <Link href="/" onClick={menuClose}>
              <p className="flex justify-center">RANDOM</p>
              <p className="font-sans text-center text-inactive font-bold text-sm">
                (Not functioning yet)
              </p>
            </Link> */}
          </motion.div>

          {/* Maybe add an image or gif for the menu here, can I make it change every time you open it? */}
          {/* <img
            className="fixed bottom-[-6rem] h-96"
            alt=""
            src="/assets/brand/smokingkid.png"
          /> */}
        </div>
      )}

      <div className="bg-transparent ">
        <div className="flex bg-transparent items-center justify-between mx-6 my-3">
          <Link href="/" className="bg-transparent">
            <img
              src="/assets/brand/logowhiteupdated.png"
              alt="logo"
              className="h-11 bg-transparent mb-1"
            ></img>
          </Link>
          <div className="flex space-x-2">
            {/* THIS IS THE SEARCH UI, NOT READY TO USE YET, REVISIT WHEN THIS IS SOMETHING YOU CAN TAKE ON, REFERENCE THE CHAT GPT SUGGESTED LIBRARY */}

            {/* {!search && (
              <button>
                <MagnifyingGlassIcon
                  onClick={searchOpen}
                  className="w-7 h-7 bg-transparent"
                />
              </button>
            )}
            {search && (
              <form className="">
                <div className="flex justify-center items-center mt-[.15rem]">
                  <motion.input
                    initial={{ x: 6, opacity: 0 }}
                    animate={{ x: -3, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                    className="bg-white/10 placeholder:text-gray-600 placeholder:text-sm py-1 px-2 rounded-lg w-40"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search here..."
                  />
                  <button onClick={searchClose}>
                    <XMarkIcon className="ml-1 w-9 h-9 bg-transparent" />
                  </button>
                  <button type="submit">Search</button>
                </div>
              </form>
            )} */}
            <button onClick={menuOpen}>
              <Bars3Icon className="w-9 h-9 bg-transparent" />
            </button>
          </div>
        </div>
      </div>

      {/* Transition Divider, doesn't currently work and I don't know wny
      
      TODO: figure it out lol */}

      {/* <div className="bg-transparent h-2 w-full"></div> */}
    </div>
  );
}

export default Nav;
