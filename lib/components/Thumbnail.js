/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Thumbnail({
  link,
  type,
  title,
  titleSize,
  date,
  category,
  duration,
  photo,
  marginBottom,
}) {
  return (
    <div>
      {/* /////////// */}
      {/* PHOTO RIGHT */}
      {/* /////////// */}
      {type === "photoRight" && (
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: -3, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="cursor-pointer sm:mx-10"
        >
          <Link
            href={link ? `${link}` : `${"error"}`}
            className={
              marginBottom === "mb-20"
                ? `${"grid grid-cols-10 cursor-pointer mb-20"}`
                : `${"grid grid-cols-10 cursor-pointer mb-10 sm:mb-20"}`
            }
          >
            <div className="z-10 col-start-1 col-end-7 bg-transparent font-bold row-start-1 row-end-2">
              <h1
                className={
                  titleSize === "text-4xl"
                    ? `${"bg-transparent text-4xl sm:text-6xl"}`
                    : titleSize === "text-3xl"
                    ? `${"bg-transparent text-3xl sm:text-5xl"}`
                    : `${"bg-transparent text-2xl sm:text-4xl"}`
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
      )}
      {/* ////////// */}
      {/* PHOTO LEFT */}
      {/* ////////// */}
      {type === "photoLeft" && (
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: -3, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="cursor-pointer sm:mx-10"
        >
          <Link
            href={link ? `${link}` : `${"error"}`}
            className={
              marginBottom === "mb-20"
                ? `${"grid grid-cols-10 cursor-pointer mb-20"}`
                : `${"grid grid-cols-10 cursor-pointer mb-10 sm:mb-20"}`
            }
          >
            <div className="z-10 col-start-[-1] col-end-4 bg-transparent font-bold row-start-1 row-end-2 text-end">
              <h1
                className={
                  titleSize === "text-4xl"
                    ? `${"bg-transparent text-4xl"}`
                    : titleSize === "text-3xl"
                    ? `${"bg-transparent text-3xl"}`
                    : `${"bg-transparent text-2xl"}`
                }
              >
                <span className="bg-black/40 pl-1">{title}</span>
              </h1>
              <div className="flex flex-col justify-start bg-transparent text-sm">
                <p className="mt-2 bg-transparent text-inactive font-mono">
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
              className="col-start-1 col-end-8 row-start-1 row-end-2 "
              alt=""
              src={photo}
            />
          </Link>
        </motion.div>
      )}
      {/* //////////// */}
      {/* PHOTO BOTTOM */}
      {/* //////////// */}
      {type === "photoBottom" && (
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: -3, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="cursor-pointer sm:mx-10"
        >
          <Link
            href={link ? `${link}` : `${"error"}`}
            className={
              marginBottom === "mb-20"
                ? `${"cursor-pointer mb-20"}`
                : `${"cursor-pointer mb-10 sm:mb-20"}`
            }
          >
            <div className="flex bg-transparent font-bold">
              <h1
                className={
                  titleSize === "text-4xl"
                    ? `${"bg-transparent text-4xl"}`
                    : titleSize === "text-3xl"
                    ? `${"bg-transparent text-3xl"}`
                    : `${"bg-transparent text-2xl"}`
                }
              >
                <span className="bg-black/40">{title}</span>
              </h1>
              <div className="pt-1 text-right bg-transparent text-sm">
                <p className="bg-transparent text-inactive font-mono">{date}</p>
                <p className="bg-transparent text-inactive font-mono">
                  {category.toUpperCase()}
                </p>
                <p className="bg-transparent text-inactive font-mono">
                  {duration.toUpperCase()}
                </p>
              </div>
            </div>
            <div className=""></div>
            <img
              className="mt-3 col-start-1 col-end-11 row-start-2 row-end-5 "
              alt=""
              src={photo}
            />
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default Thumbnail;
