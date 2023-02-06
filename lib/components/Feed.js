import React from "react";
import ThumbnailTLMLPR from "./ThumbnailTLMLPR";
import GridPostThumbnail from "./GridPostThumbnail";
import PostThumbnailTest from "./PostThumbnailTest";
import ThumbnailTRMRPL from "./ThumbnailTRMRPL";
import ThumbnailTLMRPB from "./ThumbnailTLMRPB";

function Feed({ selected }) {
  return (
    <div className="flex flex-col w-full h-full ml-1 mr-6 mt-10 scrollbar-none">
      <section className="overflow-hidden scrollbar-none">
        {/* <PostThumbnailTest /> */}
        {/* <GridPostThumbnail /> */}
        {/* <ThumbnailTLMLPR
          link="/about"
          title="Test"
          titleSize="text-2xl"
          date="02.02.23"
          category="misc"
          duration="5 min"
        /> */}
        <ThumbnailTRMRPL
          link="/about"
          title="Second test to see what a different title looks like"
          titleSize="text-xl"
          date="02.04.23"
          category="tech"
          duration="10 min"
          photo="/assets/brand/flippedtest.png"
        />
        <ThumbnailTLMLPR
          link="/about"
          title="Test to see other things"
          titleSize="text-2xl"
          date="02.04.23"
          category="tech"
          duration="10 min"
          photo="/assets/brand/garretttest.png"
        />
        <ThumbnailTLMRPB
          link="/about"
          title="Test to see other things"
          titleSize="text-2xl"
          date="02.04.23"
          category="tech"
          duration="10 min"
          photo="/assets/brand/logowhiteupdated.png"
        />
        {/* <PostThumbnailTest />
        <PostThumbnailTest />
        <PostThumbnailTest /> */}
      </section>
      <p></p>
    </div>
  );
}

export default Feed;
