/* eslint-disable @next/next/no-img-element */
import Image from "next/legacy/image";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Nav() {
  const testFunc = () => {
    console.log("test");
  };

  return (
    <div className="flex items-center justify-between mx-5 mt-2">
      <img
        src="/assets/brand/logowhiteupdated.png"
        alt="logo"
        height="100px"
        width="100px"
      ></img>
      <Bars3Icon onClick={testFunc} className="w-9 h-9" />
    </div>
  );
}

export default Nav;
