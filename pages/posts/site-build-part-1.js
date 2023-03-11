/* eslint-disable @next/next/no-img-element */
import ThumbnailTLMLPB from "/lib/components/ThumbnailTLMLPB.js";
import ThumbnailTLMLPR from "/lib/components/ThumbnailTLMLPR.js";
import ThumbnailTRMRPL from "/lib/components/ThumbnailTRMRPL.js";
import { motion } from "framer-motion";
import Link from "next/link";
import EmojiReact from "../../lib/components/EmojiReact";

export default function SiteBuildPart1() {
  return (
    <div className="mt-20">
      <header className="mx-7">
        <ThumbnailTRMRPL
          key="misc"
          link="/posts/site-build-part-1"
          title="Second test to see what a different title looks like"
          titleSize="text-4xl"
          date=""
          category=""
          duration=""
          photo="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677734937/Long%20Addition/Posts/Long%20Addition%20Site%20Build%20Pt.%201:%20I%20Don%27t%20Know%20What%20I%27m%20Doing/orangemac_bwp8xa.png"
          marginBottom=""
        />

        <motion.div
          id="info"
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: -3, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="flex justify-between mb-5"
        >
          <div>
            <p className="text-sm font-mono text-inactive">BY GARRETT PRINCE</p>
            <p className="text-sm bg-transparent text-inactive font-mono ">
              02.23.23
            </p>
          </div>
          <div>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              MISC
            </p>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              10 MIN
            </p>
          </div>
        </motion.div>
      </header>
      <motion.div
        initial={{ y: 6, opacity: 0 }}
        animate={{ y: -3, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className=" ml-8 mr-3 text-lg"
      >
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
        <p id="paragraph" className="mb-4">
          <span className="">Lorem</span> ipsum dolor sit amet consectetur
          adipisicing elit. Atque, explicabo fugiat qui recusandae accusantium
          quia autem facilis pariatur enim! Sed magni minima sequi nisi nulla
          optio non quod debitis ipsum.
        </p>
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
        <div className="mb-4 mt-10">
          <img alt="" src="/assets/brand/garretttest.png" />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10 mr-5">
            FIG 1. A SAMPLE PICTURE{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
        <h2
          id="pullquote"
          className="mb-10 mt-10 text-3xl font-bold text-center mr-5"
        >
          This is a <span className=" ">pullquote</span> with multiple lines and
          even more text
        </h2>
        <p id="paragraph" className="mb-4">
          Lorem ipsum{" "}
          <Link href="/" className="border-b-[4px] border-misc">
            dolor
          </Link>{" "}
          sit amet consectetur adipisicing elit. Atque, explicabo fugiat qui
          recusandae accusantium quia autem facilis pariatur enim! Sed magni
          minima sequi nisi nulla optio non quod debitis ipsum.
        </p>
        <div className="pt-8 pb-12 flex mx-auto justify-center">
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
        </div>
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
       
      </motion.div>
    </div>
  );
}
