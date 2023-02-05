import React from "react";
import { motion } from "framer-motion";

function CategoryBar({ selected, setSelected }) {

  return (
    <div className="mt-16 flex flex-col font-mono text-sm">
      <motion.button
        animate={{}}
        onClick={() => setSelected("latest")}
        className={`${
          selected === "latest"
            ? "rotate-270 mb-12 transition-all duration-100 scale-105"
            : "rotate-270 mb-12 text-inactive duration-100 transition-all"
        }`}
      >
        LATEST
      </motion.button>
      <button
        onClick={() => setSelected("misc")}
        className={`${
          selected === "misc"
            ? "rotate-270 mb-10 text-misc transition-all duration-100 scale-105"
            : "rotate-270 mb-10 text-inactive duration-100 transition-all"
        }`}
      >
        MISC
      </button>
      <button
        onClick={() => setSelected("tech")}
        className={`${
          selected === "tech"
            ? "rotate-270 mb-12 text-tech transition-all duration-100 scale-105"
            : "rotate-270 mb-12 text-inactive duration-100 transition-all"
        }`}
      >
        TECH
      </button>
      <button
        onClick={() => setSelected("travel")}
        className={`${
          selected === "travel"
            ? "rotate-270 mb-14 text-travel duration-100 scale-105 transition-all"
            : "rotate-270 mb-14 text-inactive duration-100 transition-all"
        }`}
      >
        TRAVEL
      </button>
      <button
        onClick={() => setSelected("music")}
        className={`${
          selected === "music"
            ? "rotate-270 mb-14 text-music transition-all duration-100 scale-105"
            : "rotate-270 mb-14 text-inactive duration-100 transition-all"
        }`}
      >
        MUSIC
      </button>
      <button
        onClick={() => setSelected("health")}
        className={`${
          selected === "health"
            ? "rotate-270 mb-14 text-health transition-all duration-100 scale-105"
            : "rotate-270 mb-14 text-inactive duration-100 transition-all"
        }`}
      >
        HEALTH
      </button>
      <button
        onClick={() => setSelected("media")}
        className={`${
          selected === "media"
            ? "rotate-270 text-media transition-all duration-100 scale-105"
            : "rotate-270 text-inactive duration-100 transition-all"
        }`}
      >
        MEDIA
      </button>
    </div>
  );
}

export default CategoryBar;
