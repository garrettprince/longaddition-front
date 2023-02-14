/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Nav() {
  const [menu, setMenu] = useState("");

  const menuOpen = () => {
    setMenu(true);
  };

  const menuClose = () => {
    setMenu(false);
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      {menu && (
        <div className="fixed top-0 z-50 w-full h-full">
          <div className="flex bg-transparent items-center justify-between mx-6 my-3">
            <Link href="/" onClick={menuClose}>
              <img
                src="/assets/brand/logowhiteupdated.png"
                alt="logo"
                className="h-11 bg-transparent mb-1"
              ></img>
            </Link>
            <button onClick={menuClose}>
              <XMarkIcon className="w-9 h-9 bg-transparent" />
            </button>
          </div>

          <div className="flex flex-col font-mono text-3xl mt-16 space-y-10">
            <Link href="/about" onClick={menuClose}>
              <p className="flex justify-center">ABOUT</p>
            </Link>
            <Link href="/contact">
              <p className="flex justify-center">CONTACT</p>
            </Link>
            <Link href="/contact">
              <p className="flex justify-center">RANDOM</p>
            </Link>
          </div>
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
          <button onClick={menuOpen}>
            <Bars3Icon className="w-9 h-9 bg-transparent" />
          </button>
        </div>
      </div>

      {/* Transition Divider, doesn't currently work and I don't know wny
      
      TODO: figure it out lol */}
      
      {/* <div className="bg-transparent h-2 w-full"></div> */}
    </div>
  );
}

export default Nav;
