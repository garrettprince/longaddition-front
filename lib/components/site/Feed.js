import React from "react";
import GridPostThumbnail from "./GridPostThumbnail";
import PostThumbnailTest from "./PostThumbnailTest";

function Feed({ selected }) {
  return (
    <div className="flex flex-col w-full h-full ml-1 mr-5 mt-10 scrollbar-none">
      <section className="overflow-hidden scrollbar-none">
        <PostThumbnailTest />
        <GridPostThumbnail />
        {/* <PostThumbnailTest />
        <PostThumbnailTest />
        <PostThumbnailTest /> */}
      </section>
      <p></p>
    </div>
  );
}

export default Feed;
