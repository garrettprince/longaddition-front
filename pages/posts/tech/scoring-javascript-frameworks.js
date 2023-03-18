/* eslint-disable @next/next/no-img-element */
import Thumbnail from "../../../lib/components/Thumbnail";
import { motion } from "framer-motion";
import { useReward } from "react-rewards";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function ScoringJavascriptFrameworks() {
  const [copied, setCopied] = useState(false);
  const { reward: confettiReward, isAnimating: isConfettiAnimating } =
    useReward("confettiReward", "confetti");

  const confettiSpring = () => {
    confettiReward();
  };

  const copy = () => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  };

  const thumbnailInfo = {
    title:
      "Scoring 5 Javascript Frameworks On How Physically Attracted I Am To Them",
    type: "photoRight",
    link: "/posts/tech/scoring-javascript-frameworks",
    titleSize: "text-3xl",
    date: "",
    category: "",
    duration: "",
    photo:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679097973/Long%20Addition/Posts/Scoring%205%20Javascript%20Frameworks%20By%20How%20Attracted%20I%20Am%20To%20Them/roses2_p4fset.png",
    marginBottom: "mb-20",
  };

  return (
    <div className="mt-24">
      <header className="mx-8">
        <Thumbnail
          title={thumbnailInfo.title}
          type={thumbnailInfo.type}
          key={thumbnailInfo.title}
          link={thumbnailInfo.link}
          category={thumbnailInfo.category}
          titleSize={thumbnailInfo.titleSize}
          date={thumbnailInfo.date}
          duration={thumbnailInfo.duration}
          photo={thumbnailInfo.photo}
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
              TECH
            </p>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              7 MIN
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
          <span className="font-bold">
            Admit it. You’ve Bing’d “Javascript nudes” on at least two
            occasions.{" "}
          </span>
          Once after the kids went to bed and you pounded Chardonnay out of your
          Snoopy mug and the other on your work computer during the company
          downsizing all hands. Curiosity got the best of you. But the photos
          were… unimpressive. Vanilla, even.{" "}
          <span className="italic">There must be something more</span>, you
          think, trying to fill another mug with Chardonnay but only getting
          crumbs (I don’t know what Chardonnay is). There{" "}
          <span className="italic">is</span> something more.
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679104312/Long%20Addition/Posts/Scoring%205%20Javascript%20Frameworks%20By%20How%20Attracted%20I%20Am%20To%20Them/vanilaacookie_gjdhqo.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 1. CHARDONNAY(?){" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          Today, I’ll be doing the Lord’s work: Scoring javascript frameworks
          (and meta-frameworks) on a completely arbitrary number system ranging
          from 0 to 2000. This scale is called The Sweaty Number. My physical
          attraction to and how I rank these frameworks will be based on four
          key factors: My experience working with it, how the framework name
          sounds, the logo shape, and what I think they would say to me on my
          doorstep after our first date before going in for a wet kiss.
        </p>
        <p id="paragraph" className="mb-4">
          And let’s be honest here: It’s subjective, but the beauty of this
          Bicentennial Man romance is that subjective is good. It will be based
          solely on the factors listed above. It’s unsettling and provocative.
          It’s meaningless. It’s time.
        </p>
        <p id="sectionchange" className="mb-4 mt-12 font-bold text-2xl">
          SvelteKit
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto h-48"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679103759/Long%20Addition/Posts/Scoring%205%20Javascript%20Frameworks%20By%20How%20Attracted%20I%20Am%20To%20Them/sveltekit_jnbn7l.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 2. TWO ORANGES{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">My Experience</span>: People like
          SvelteKit for the same reason I’ve seen Hitch eight times: It’s
          familiar and Kevin James. The syntax is more similar to vanilla
          Javascript than something like JSX, so in theory, it should be easier
          to learn coming from the fundamentals. I worked with SvelteKit (prior
          to its 1.0 release) when building{" "}
          <Link
            href="https://www.montanahead.com"
            className="border-b-[3px] border-tech cursor-pointer bg-transparent pb-[.1rem]"
          >
            a demo site for a band I was in
          </Link>{" "}
          and overall it was a pleasant experience. Building the site, that is.
          Not the band. Tons of infighting. Very Fleetwood Mac. Jealousy. Lots
          of weird sex stuff.
        </p>
        <p id="paragraph" className="mb-4">
          It was just me in the band.
        </p>
        <p id="paragraph" className="mb-4">
          In addition, the built in transitions were nice, ‘if’ blocks were a
          cool way to look at conditional rendering, and while I didn’t need to
          use the universal stores for that project, it seemed way easier to use
          compared to something like Redux.{" "}
          <span className="font-bold">658 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">How It Sounds:</span> Velvety. Like
          ice cream on a shag carpet. Like I just combed my hair with my
          cousin’s comb. <span className="font-bold">433 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Logo Shape:</span> Velvety. Like
          ice cream on a shag carpet. Like I just combed my hair with my
          cousin’s comb. <span className="font-bold">433 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">How the name sounds:</span> Velvety. Like
          ice cream on a shag carpet. Like I just combed my hair with my
          cousin’s comb. <span className="font-bold">433 points.</span>
        </p>
        <h2
          id="pullquote"
          className="mb-11 mt-10 text-3xl font-bold text-center mr-5"
        >
          This is a <span className=" ">pullquote</span> with multiple lines and
          even more text
        </h2>
        <p id="paragraph" className="mb-4">
          Lorem ipsum{" "}
          <Link
            href="/"
            className="border-b-[3px] border-misc cursor-pointer bg-transparent pb-[.1rem]"
          >
            dolor
          </Link>{" "}
          sit amet consectetur adipisicing elit. Atque, explicabo fugiat qui
          recusandae accusantium quia autem facilis pariatur enim! Sed magni
          minima sequi nisi nulla optio non quod debitis ipsum.
        </p>
        <div
          id="dot-divider"
          className="mr-5 pt-8 pb-12 flex mx-auto justify-center"
        >
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
        <p id="final-paragraph" className="mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          similique alias vel tempore, iure quod delectus recusandae minus,
          deserunt in hic. Cupiditate deserunt illum, laborum ab assumenda
          voluptas. Sit, itaque.
          <button
            disabled
            className="ml-2 h-3 w-3 rounded-full bg-inactive"
          ></button>
        </p>
        <div className="flex mt-10 mb-5 justify-center space-x-2 mr-5">
          <Link
            href="/contact"
            className="cursor-pointer flex rounded-lg px-3 py-1 bg-white/20 justify-center items-center space-x-2"
          >
            <p className="font-mono text-sm bg-transparent pt-[.15rem]">
              CONTACT
            </p>
          </Link>
          <button
            id="confettiReward"
            disabled={isConfettiAnimating}
            onClick={() => {
              copy(), confettiSpring();
            }}
            className="cursor-pointer flex rounded-lg px-3 py-1 bg-white/20 justify-center items-center space-x-2"
          >
            <p className="font-mono text-sm bg-transparent pt-[.15rem] w-44">
              {!copied ? "COPY TO SHARE LINK" : "COPIED! YOU DID IT!"}
            </p>
          </button>
        </div>
        {/* <div className="flex justify-between mb-5 ml-5 mr-10 text-sm">
          <p className="font-mono text-inactive">PREVIOUS</p>
          <Link href='/' className="font-mono text-inactive">HOME</Link>
          <p className="font-mono text-inactive">NEXT</p>
        </div> */}
      </motion.div>
    </div>
  );
}
