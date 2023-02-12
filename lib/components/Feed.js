import React from "react";
import ThumbnailTLMLPR from "./ThumbnailTLMLPR";
import GridPostThumbnail from "./GridPostThumbnail";
import PostThumbnailTest from "./PostThumbnailTest";
import ThumbnailTRMRPL from "./ThumbnailTRMRPL";
import ThumbnailTLMLPB from "./ThumbnailTLMLPB";

function Feed({ selected, tech, latest, misc, travel, media, health, music }) {

  // switch (selected) {
  //   case misc:
  //     break;

  //   default:
  //     break;
  // }

  // if (selected === category={misc}) {

  // }

  return (
    <div className="flex flex-col w-full ml-20 mr-6 mt-10">
      <section className="">
  
        <ThumbnailTRMRPL
          link="/about"
          title="Second test to see what a different title looks like"
          titleSize="text-2xl"
          date="02.04.23"
          category={misc}
          duration="10 min"
          photo="/assets/brand/flippedtest.png"
        />
        <ThumbnailTLMLPR
          link="/about"
          title="Test to see other things"
          titleSize="text-3xl"
          date="02.04.23"
          category="tech"
          duration="10 min"
          photo="/assets/brand/garretttest.png"
        />
        <ThumbnailTLMLPB
          link="/about"
          title="Test to see other things in a third more traditional way"
          titleSize="text-2xl"
          date="02.04.23"
          category="tech"
          duration="10 min"
          photo="/assets/brand/logowhiteupdated.png"
        />
      
      </section>

    </div>
  );
}

export default Feed;
