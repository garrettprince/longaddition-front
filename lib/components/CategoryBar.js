import React from "react";
import { motion } from "framer-motion";

function CategoryBar({
  selected,
  setSelected,
  tech,
  latest,
  misc,
  travel,
  media,
  health,
  music,
}) {
  return (
    // TODO: Make category bar sticky so doesn't change when scrolling

    // TODO: Make this justify-evenly after you find out how to make the category bar sticky to ensure electing an option doesn't push the last one down further

    // TODO: Find a way to style so that when category is selected, they all have the same margin. I know it's an issue with the formatting as they are rotated, may have to hard code UPDATE: Fixed with setting a min height

    // TODO: Remove scrollbar, either here or index, find out why

    <div className="ml-[-0.25rem] mt-16 flex flex-col font-mono text-sm min-w-[4.5rem]  justify-between">
      <button
        onClick={() => setSelected("latest")}
        className={`${
          selected === "latest"
            ? "rotate-270 mb-12 transition-all duration-100 scale-105 bg-white rounded-md px-2 pt-[.12rem] text-black "
            : "rotate-270 mb-12 text-inactive duration-100 transition-all"
        }`}
      >
        {/* <div className="bg-music h-2 w-2 rounded-full"></div> */}
        LATEST
      </button>
      <button
        onClick={() => setSelected("misc")}
        className={`${
          selected === "misc"
            ? "rotate-270 mb-12 transition-all duration-100 scale-105 bg-misc rounded-md px-2 pt-[.12rem] mr-[.15rem] text-white"
            : "rotate-270 mb-10 text-inactive duration-100 transition-all"
        }`}
      >
        MISC
      </button>
      <button
        onClick={() => setSelected("tech")}
        className={`${
          selected === "tech"
            ? "rotate-270 mb-12 transition-all duration-100 scale-105 bg-tech rounded-md px-2 pt-[.12rem] mr-[.15rem] text-white"
            : "rotate-270 mb-12 text-inactive duration-100 transition-all"
        }`}
      >
        TECH
      </button>
      <button
        onClick={() => setSelected("travel")}
        className={`${
          selected === "travel"
            ? "rotate-270 mb-12 transition-all duration-100 scale-105 bg-travel rounded-md  px-2 pt-[.15rem] text-white"
            : "rotate-270 mb-14 text-inactive duration-100 transition-all"
        }`}
      >
        TRAVEL
      </button>
      <button
        onClick={() => setSelected("music")}
        className={`${
          selected === "music"
            ? "rotate-270 mb-12 transition-all duration-100 scale-105 bg-music rounded-md px-2 pt-[.15rem] text-black"
            : "rotate-270 mb-14 text-inactive duration-100 transition-all"
        }`}
      >
        MUSIC
      </button>
      <button
        onClick={() => setSelected("health")}
        className={`${
          selected === "health"
            ? "rotate-270 mb-12 transition-all duration-100 scale-105 bg-health rounded-md px-2 pt-[.15rem] text-black"
            : "rotate-270 mb-14 text-inactive duration-100 transition-all"
        }`}
      >
        HEALTH
      </button>
      <button
        onClick={() => setSelected("media")}
        className={`${
          selected === "media"
            ? "rotate-270 mb-12 transition-all duration-100 scale-105 bg-media rounded-md px-2 pt-[.15rem] text-white"
            : "rotate-270 text-inactive duration-100 transition-all"
        }`}
      >
        MEDIA
      </button>
    </div>
  );
}

export default CategoryBar;
