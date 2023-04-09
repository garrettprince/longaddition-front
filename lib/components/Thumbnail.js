/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { premiumStarsList } from "../data/premiumStars";

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
  premium,
  series,
  seriesTitle,
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
          className="cursor-pointer mb-16 sm:ml-10"
        >
          <Link
            href={link ? `${link}` : `${"error"}`}
            className={
              marginBottom === "mb-20"
                ? `${"grid grid-cols-10 cursor-pointer mb-20"}`
                : `${"grid grid-cols-10 cursor-pointer mb-10 sm:mb-20"}`
            }
          >
            <div className="z-10 col-start-1 col-end-8 sm:col-end-6 bg-transparent font-bold row-start-1 row-end-2">
              <div className="bg-transparent flex justify-start">
                <p
                  className={
                    series === true && category === "misc"
                      ? `${"bg-black border-2 rounded-md border-misc font-bold text-xs px-1 w-fit mb-1"}`
                      : series === true && category === "audio"
                      ? `${"bg-black border-2 rounded-md border-audio font-bold text-xs px-1 w-fit mb-1"}`
                      : series === true && category === "health"
                      ? `${"bg-black border-2 rounded-md border-health font-bold text-xs px-1 w-fit mb-1"}`
                      : series === true && category === "visual"
                      ? `${"bg-black border-2 rounded-md border-visual font-bold text-xs px-1 w-fit mb-1"}`
                      : series === true && category === "travel"
                      ? `${"bg-black border-2 rounded-md border-travel font-bold text-xs px-1 w-fit mb-1"}`
                      : series === true && category === "tech"
                      ? `${"bg-black border-2 rounded-md border-tech font-bold text-xs px-1 w-fit mb-1"}`
                      : `${"hidden"}`
                  }
                >
                  {seriesTitle.toUpperCase()}
                </p>
              </div>
              <h1
                className={
                  titleSize === "text-4xl"
                    ? `${"bg-transparent text-4xl sm:text-6xl"}`
                    : titleSize === "text-3xl"
                    ? `${"bg-transparent text-3xl sm:text-5xl"}`
                    : `${"bg-transparent text-2xl sm:text-4xl"}`
                }
              >
                <span className="bg-transparent title-shadow pr-1">
                  {title}
                </span>
              </h1>
              {/* <PremiumIconLeft premium={premium} /> */}
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
            {premium && (
              <img
                className="absolute right-[-1rem] bottom-[-1rem] bg-transparent h-28 w-28 sm:h-40 sm:w-40"
                alt=""
                src={
                  premiumStarsList[
                    Math.floor(Math.random() * premiumStarsList.length)
                  ]
                }
              />
            )}
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
          className="cursor-pointer mb-16 sm:ml-10"
        >
          <Link
            href={link ? `${link}` : `${"error"}`}
            className={
              marginBottom === "mb-20"
                ? `${"grid grid-cols-10 cursor-pointer mb-20"}`
                : `${"grid grid-cols-10 cursor-pointer mb-10 sm:mb-20"}`
            }
          >
            <div className="z-10 col-start-[-1] col-end-3 sm:col-end-5 bg-transparent font-bold row-start-1 row-end-2 text-end">
              <div className="bg-transparent flex justify-end">
                {/* <p
                  className={
                    series === true && category === "misc"
                      ? `${"bg-black border-2 rounded-md border-misc font-bold text-xs px-1 w-fit mb-1"}`
                      : series === true && category === "audio"
                      ? `${"bg-black border-2 rounded-md border-audio font-bold text-xs px-1 w-fit mb-1"}`
                      : series === true && category === "health"
                      ? `${"bg-black border-2 rounded-md border-health font-bold text-xs px-1 w-fit mb-1"}`
                      : series === true && category === "visual"
                      ? `${"bg-black border-2 rounded-md border-visual font-bold text-xs px-1 w-fit mb-1"}`
                      : series === true && category === "travel"
                      ? `${"bg-black border-2 rounded-md border-travel font-bold text-xs px-1 w-fit mb-1"}`
                      : series === true && category === "tech"
                      ? `${"bg-black border-2 rounded-md border-tech font-bold text-xs px-1 w-fit mb-1"}`
                      : `${"hidden"}`
                  }
                >
                  {seriesTitle.toUpperCase()}
                </p> */}
                <p className={
                  series === true ? `${"text-sm bg-transparent title-shadow"}` : `${"hidden"}`
                }>{seriesTitle.toUpperCase()}</p>
              </div>
              <h1
                className={
                  titleSize === "text-4xl"
                    ? `${"bg-transparent text-4xl sm:text-6xl"}`
                    : titleSize === "text-3xl"
                    ? `${"bg-transparent text-3xl sm:text-5xl"}`
                    : `${"bg-transparent text-2xl sm:text-4xl"}`
                }
              >
                <span className="bg-transparent title-shadow pl-1">
                  {title}
                </span>
              </h1>
              {/* Figure out why the code below doesn't work for denoting a PREMIUM article */}
              {/* <PremiumIconRight premium={premium} /> */}
              <div className="flex flex-col justify-end bg-transparent text-sm">
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
            {premium && (
              <img
                className="absolute left-[-1rem] bottom-[-1rem] bg-transparent h-28 w-28 sm:h-40 sm:w-40"
                alt=""
                src={
                  premiumStarsList[
                    Math.floor(Math.random() * premiumStarsList.length)
                  ]
                }
              />
            )}
          </Link>
        </motion.div>
      )}
      {/* ////////////////////// */}
      {/* NEWSLETTER CTA LARGE 1 */}
      {/* ////////////////////// */}
      {type === "newsletterCtaLarge1" && (
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: -3, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="sm:ml-10 sm:mb-20 mb-16"
        >
          <div className="flex items-center w-full h-80 rounded-2xl mb-10 bg-gradient-to-tr from-cta-gradient-1 to-cta-gradient-2 ">
            <div className="flex mx-2 rounded-xl w-full bg-black h-[19rem]">
              <div className="flex flex-col justify-between rounded-xl py-2">
                <div className="space-y-3 px-4">
                  <div>
                    <p className="font-bold text-2xl sm:text-3xl">
                      &quot;Sign up for my free weekly newsletter.&quot;
                    </p>
                    <p className="font-bold text-lg sm:text-xl italic">
                      - 3 year old me on a horse
                    </p>
                  </div>
                  <div className="flex">
                    <div className="">
                      <p className="text-sm sm:text-lg mb-2">
                        Join <span className="font-bold">34</span> others.
                        It&apos;s free and it counts toward your community
                        service hours.
                      </p>
                      <Link
                        href="/"
                        className="text-sm sm:text-lg border-b-[3px] pb-[.1rem] border-cta cursor-pointer bg-transparent"
                      >
                        See what&apos;s in it.
                      </Link>
                    </div>
                    <img
                      src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1678822760/Long%20Addition/Branding/lil_g_riding_horse_tclxjs.png"
                      alt=""
                      className="h-32"
                    />
                  </div>
                </div>
                <div className="flex justify-between rounded-lg px-[.35rem] h-8 mb-1 items-center space-x-2 bg-white/20 mx-4">
                  <input
                    className="bg-transparent pl-1 text-sm w-full placeholder:font-mono placeholder:text-xs active:ring-cta"
                    placeholder="ENTER EMAIL HERE"
                  ></input>
                  <button className="font-mono text-xs bg-gradient-to-tr from-cta-gradient-1 to-cta-gradient-2 h-5 rounded-md px-2 pt-[.1rem] py-0">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Thumbnail;
