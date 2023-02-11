/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function ThumbnailTLMLPB({
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
    ////  TITLE LEFT, META LEFT, PIC BOTTOM ////
    /////////////////////////////////////////////

    <Link
      href={link ? `${link}` : `${"error"}`}
      className="grid grid-cols-10 cursor-pointer mb-16"
    >
      <div className="z-10 col-start-1 col-end-[-1] bg-transparent font-bold row-start-1 row-end-2">
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
          <p className="bg-transparent text-[0.6rem] mt-2 text-inactive font-mono">
            {date}
          </p>
          <p className="bg-transparent text-[0.6rem] text-inactive font-mono">
            {category.toUpperCase()}
          </p>
          <p className="bg-transparent text-[0.6rem] text-inactive font-mono">
            {duration.toUpperCase()}
          </p>
        </div>
      </div>
      <img
        className="col-start-1 col-end-11 row-start-2 row-end-5 "
        alt="garrett"
        src={photo}
      />
    </Link>
  );
}

export default ThumbnailTLMLPB;