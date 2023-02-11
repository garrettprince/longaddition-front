import React from "react";

function Marquee() {

    // TODO: Figure out way for marquee to repeat smoothly, maybe do 10? who's going to stay looking at it for that long?

  return (
    // <div className="flex overflow-x-hidden items-center space-x-3">
    //   {/* <div className="flex space-x-1 mb-[.15rem] ml-3">
    //     <div className="bg-media h-2 w-2 rounded-full"></div>
    //     <div className="bg-travel h-2 w-2 rounded-full"></div>
    //     <div className="bg-misc h-2 w-2 rounded-full"></div>
    //   </div> */}
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
    //   <div className="flex space-x-1">
    //     <div className="bg-media h-2 w-2 rounded-full"></div>
    //     <div className="bg-travel h-2 w-2 rounded-full"></div>
    //     <div className="bg-misc h-2 w-2 rounded-full"></div>
    //   </div>
    // </div>
  );
}

export default Marquee;
