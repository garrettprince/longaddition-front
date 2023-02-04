import React from "react";

function CategoryBar({ selected, setSelected }) {

  return (
    <div className="mt-16 flex flex-col font-mono text-sm">
      <button
        onClick={() => setSelected("latest")}
        className={`${
          selected === "latest"
            ? "rotate-270 mb-12"
            : "rotate-270 mb-12 text-inactive"
        }`}
      >
        LATEST
      </button>
      <button
        onClick={() => setSelected("misc")}
        className={`${
          selected === "misc"
            ? "rotate-270 mb-10 text-misc"
            : "rotate-270 mb-10 text-inactive"
        }`}
      >
        MISC
      </button>
      <button
        onClick={() => setSelected("tech")}
        className={`${
          selected === "tech"
            ? "rotate-270 mb-12 text-tech"
            : "rotate-270 mb-12 text-inactive"
        }`}
      >
        TECH
      </button>
      <button
        onClick={() => setSelected("travel")}
        className={`${
          selected === "travel"
            ? "rotate-270 mb-14 text-travel"
            : "rotate-270 mb-14 text-inactive"
        }`}
      >
        TRAVEL
      </button>
      <button
        onClick={() => setSelected("music")}
        className={`${
          selected === "music"
            ? "rotate-270 mb-14 text-music"
            : "rotate-270 mb-14 text-inactive"
        }`}
      >
        MUSIC
      </button>
      <button
        onClick={() => setSelected("health")}
        className={`${
          selected === "health"
            ? "rotate-270 mb-14 text-health"
            : "rotate-270 mb-14 text-inactive"
        }`}
      >
        HEALTH
      </button>
      <button
        onClick={() => setSelected("media")}
        className={`${
          selected === "media"
            ? "rotate-270 text-media"
            : "rotate-270 text-inactive"
        }`}
      >
        MEDIA
      </button>
    </div>
  );
}

export default CategoryBar;
