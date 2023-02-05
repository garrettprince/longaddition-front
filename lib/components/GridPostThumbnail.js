/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function GridPostThumbnail() {
  return (
    <Link
      href="/posts/othertest"
      className="grid grid-cols-10 cursor-pointer mb-10"
    >
      <div className="z-10 col-start-1 col-end-7 bg-transparent font-bold row-start-1 row-end-2 text-2xl">
        <h1 className="bg-transparent text-2xl">What is Long Addition?</h1>
        <div className="flex flex-col justify-start bg-transparent">
          <p className="bg-transparent text-[0.6rem] text-inactive font-mono">
            02.03.23
          </p>
          <p className="bg-transparent text-[0.6rem] mt-[-1rem] text-inactive font-mono">
            MISC
          </p>
          <p className="bg-transparent text-[0.6rem] mt-[-1rem] text-inactive font-mono">
            5 MIN
          </p>
        </div>
      </div>
      <img
        className="col-start-3 col-end-11 row-start-1 row-end-2 "
        alt="garrett"
        src="/assets/brand/garretttest.png"
      />
    </Link>
  );
}

export default GridPostThumbnail;
