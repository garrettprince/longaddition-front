/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function ThumbnailTLMRPB({
  link,
  title,
  titleSize,
  date,
  category,
  duration,
  photo,
}) {
  return (
    /////////////////////////////////////////////
    ////  TITLE LEFT, META RIGHT, PIC BOTTOM ////
    /////////////////////////////////////////////

    <Link
      href={link ? `${link}` : `${"error"}`}
      className="grid grid-cols-10 cursor-pointer mb-10"
    >
      <div className="z-10 col-start-1 col-end-7 bg-transparent font-bold row-start-1 row-end-2 text-2xl">
        <h1
          className={
            titleSize === "text-2xl"
              ? `${"bg-transparent text-2xl"}`
              : `${"bg-transparent text-xl"}`
          }
        >
          {title}
        </h1>
        <div className="flex flex-col justify-start bg-transparent">
          <p className="bg-transparent text-[0.6rem] text-inactive font-mono">
            {date}
          </p>
          <p className="bg-transparent text-[0.6rem] mt-[-1rem] text-inactive font-mono">
            {category.toUpperCase()}
          </p>
          <p className="bg-transparent text-[0.6rem] mt-[-1rem] text-inactive font-mono">
            {duration.toUpperCase()}
          </p>
        </div>
      </div>
      <img
        className="col-start-4 col-end-11 row-start-3 row-end-5 "
        alt="garrett"
        src={photo}
      />
    </Link>
  );
}

export default ThumbnailTLMRPB;
