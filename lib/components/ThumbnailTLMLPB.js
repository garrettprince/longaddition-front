/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function ThumbnailTLMLPB({
  link,
  title,
  titleSize,
  date,
  category,
  duration,
  photo,
  marginBottom
}) {
  return (
    /////////////////////////////////////////////
    ////  TITLE LEFT, META LEFT, PIC BOTTOM ////
    /////////////////////////////////////////////

    <motion.div
      initial={{ y: 6, opacity: 0 }}
      animate={{ y: -3, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="cursor-pointer"
    >
      <Link
        href={link ? `${link}` : `${"error"}`}
        className={
          marginBottom === "mb-20"
            ? `${"grid grid-cols-10 cursor-pointer mb-20"}`
            : `${"grid grid-cols-10 cursor-pointer mb-10"}`
        }
      >
        <div className="z-10 col-start-1 col-end-[-1] bg-transparent font-bold row-start-1 row-end-2">
          <h1
            className={
              titleSize === "text-4xl"
                ? `${"bg-transparent text-4xl"}`
                : titleSize === "text-3xl"
                ? `${"bg-transparent text-3xl"}`
                : `${"bg-transparent text-2xl"}`
            }
          >
            {title}
          </h1>
        </div>
        <img
          className="mt-3 col-start-1 col-end-11 row-start-2 row-end-5 "
          alt=""
          src={photo}
        />
      <div className="mx-3 mt-3 grid col-span-full bg-transparent text-sm">
        <p className="bg-transparent text-inactive font-mono">{date}</p>
        <p className="bg-transparent text-inactive font-mono">
          {category.toUpperCase()}
        </p>
        <p className="flex bg-transparent text-inactive font-mono">
          {duration.toUpperCase()}
        </p>
      </div>
      </Link>
    </motion.div>
  );
}

export default ThumbnailTLMLPB;
