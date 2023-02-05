import React from "react";
import ThumbnailTLMLPR from "./ThumbnailTLMLPR";
import GridPostThumbnail from "./GridPostThumbnail";
import PostThumbnailTest from "./PostThumbnailTest";

function Feed({ selected }) {
  return (
    <div className="flex flex-col w-full h-full ml-1 mr-5 mt-10 scrollbar-none">
      <section className="overflow-hidden scrollbar-none">
        {/* <PostThumbnailTest /> */}
        {/* <GridPostThumbnail /> */}
        <GridPostThumbnail />
        <ThumbnailTLMLPR
          link="/about"
          title="Test"
          titleSize="text-2xl"
          date="02.02.23"
          category="misc"
          duration="5 min"
        />
        <ThumbnailTLMLPR
          link="/about"
          title="Second test to see what a different title looks like"
          titleSize="text-xl"
          date="02.04.23"
          category="tech"
          duration="10 min"
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
