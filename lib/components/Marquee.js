import React from "react";

function Marquee() {
  // TODO: Figure out way for marquee to repeat smoothly, maybe do 10? who's going to stay looking at it for that long?

  return (
    <section className="mx-10">
      <div class="overflow-x-hidden my-2">
        <div class="flex py-6 animate-marquee whitespace-nowrap">
          <p class="mx-4 font-mono text-inactive text-xs">
            {"Adding value in the long run".toUpperCase()}{" "}
          </p>
          <p className="text-inactive text-[.5rem] font-mono pb-1 ml-[-.7rem]">
            TM
          </p>
          <p class="mx-4 font-mono text-inactive text-xs">
            {"Adding value in the long run".toUpperCase()}{" "}
          </p>
          <p className="text-inactive text-[.5rem] font-mono pb-1 ml-[-.7rem]">
            TM
          </p>
          <p class="mx-4 font-mono text-inactive text-xs">
            {"Adding value in the long run".toUpperCase()}{" "}
          </p>
          <p className="text-inactive text-[.5rem] font-mono pb-1 ml-[-.7rem]">
            TM
          </p>
          <p class="mx-4 font-mono text-inactive text-xs">
            {"Adding value in the long run".toUpperCase()}{" "}
          </p>
          <p className="text-inactive text-[.5rem] font-mono pb-1 ml-[-.7rem]">
            TM
          </p>
        </div>
      </div>
    </section>
  );
}

export default Marquee;
