/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function ThumbnailTLMLPR({
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
    ////  TITLE LEFT, META LEFT, PIC RIGHT //////
    /////////////////////////////////////////////

    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: -5, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
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
        <div className="z-10 col-start-1 col-end-7 bg-transparent font-bold row-start-1 row-end-2">
          <h1
            className={
              titleSize === "text-4xl"
                ? `${"bg-transparent text-4xl"}`
                : titleSize === "text-3xl"
                ? `${"bg-transparent text-3xl"}`
                : `${"bg-transparent text-2xl"}`
            }
          >
            <span className="bg-black/40 pr-1">{title}</span>
          </h1>
          <div className="flex flex-col justify-start bg-transparent text-sm">
            <p className="bg-transparent mt-2 text-inactive font-mono ">
              {date}
            </p>
            <p className="bg-transparent text-inactive font-mono">
              {category.toUpperCase()}
            </p>
            <p className="bg-transparent text-inactive font-mono">
              {duration.toUpperCase()}
            </p>
          </div>
        </div>
        <img
          className="col-start-4 col-end-11 row-start-1 row-end-2 "
          alt=""
          src={photo}
        />
      </Link>
    </motion.div>
  );
}

export default ThumbnailTLMLPR;
