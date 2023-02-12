/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function ThumbnailTRMRPL({
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
    ////  TITLE RIGHT, META RIGHT, PIC LEFT /////
    /////////////////////////////////////////////

    <Link
      href={link ? `${link}` : `${"error"}`}
      className="grid grid-cols-10 cursor-pointer mb-16"
    >
      <div className="z-10 col-start-[-1] col-end-4 bg-transparent font-bold row-start-1 row-end-2 text-end">
        <h1
          className={
            titleSize === "text-3xl"
              ? `${"bg-transparent text-3xl"}`
              : `${"bg-transparent text-2xl"}`
          }
        >
          {title}
        </h1>
        <div className="flex flex-col justify-start bg-transparent">
          <p className="mt-2 bg-transparent text-inactive font-mono">{date}</p>
          <p className="bg-transparent text-inactive font-mono">
            {category.toUpperCase()}
          </p>
          <p className="bg-transparent text-inactive font-mono">
            {duration.toUpperCase()}
          </p>
        </div>
      </div>
      <img
        className="col-start-1 col-end-8 row-start-1 row-end-2 "
        alt="garrett"
        src={photo}
      />
    </Link>
  );
}

export default ThumbnailTRMRPL;
