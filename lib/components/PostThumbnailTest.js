/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function PostThumbnailTest() {
  return (
    <div className="flex w-full h-full flex-col cursor-pointer mb-10 scrollbar-none">
      <Link href="/posts/othertest">
        <div className="flex">
          <div>
            <h1 className=" font-bold text-2xl mb-2">What is Long Addition?</h1>
            {/* <h2 className="text-xs mb-2">
                  And what does it actually mean to understand Addition?
                </h2> */}
            <p className="text-[0.6rem] text-inactive font-mono">02.03.23</p>
            <p className="text-[0.6rem] text-inactive font-mono">MISC</p>
            <p className="text-[0.6rem] text-inactive font-mono">5 MIN</p>
          </div>
          <img
            className=""
            alt="garrett"
            src="/assets/brand/garretttest.png"
            height="120px"
            width="120px"
          />
        </div>
      </Link>
    </div>
  );
}

export default PostThumbnailTest;
