/* eslint-disable @next/next/no-img-element */
import Image from "next/legacy/image";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Nav() {
  const testFunc = () => {
    console.log("test");
  };

  return (
    <div className="flex items-center justify-between mx-7 mt-4">
      <img
        src="/assets/brand/logowhiteupdated.png"
        alt="logo"
        height="80px"
        width="80px"
      ></img>
      <button onClick={testFunc}>
        <Bars3Icon className="w-9 h-9" />
      </button>
    </div>
  );
}

export default Nav;
