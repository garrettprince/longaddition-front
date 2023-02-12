/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Nav({ menuToggle, menuToggleFunc }) {
  return (
    <div className="fixed top-0 z-50 w-full">
      {menuToggle && (
        <div className="fixed top-0 z-50 pt-4 w-full">
          <div className="flex items-center justify-between mx-5">
            <Link href="/" onClick={menuToggleFunc}>
              <img
                src="/assets/brand/logowhiteupdated.png"
                alt="logo"
                className="h-10"
              ></img>
            </Link>
            <button onClick={menuToggleFunc}>
              <XMarkIcon className="w-7 h-7" />
            </button>
          </div>

          <Link href="/about">
            <p className="flex font-mono text-2xl justify-center mx-6 mt-10">
              ABOUT
            </p>
          </Link>
          <Link href="/contact" onClick={menuToggleFunc}>
            <p className="flex font-mono text-2xl justify-center mx-6 my-5">
              CONTACT
            </p>
          </Link>
          <Link href="/contact" onClick={menuToggleFunc}>
            <p className="flex font-mono text-2xl justify-center mx-6 my-5">
              RANDOM
            </p>
          </Link>
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
          <button onClick={menuToggleFunc} className="">
            <Bars3Icon className="w-9 h-9 bg-transparent" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
