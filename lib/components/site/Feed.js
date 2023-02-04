import React from "react";
import PostThumbnailTest from "./PostThumbnailTest";

function Feed({ selected }) {
  return (
    <div className="flex flex-col w-full h-full ml-1 mr-5 mt-10 overflow-scroll scrollbar-none">
      <section className="">
        <PostThumbnailTest />
        <PostThumbnailTest />
      </section>
      <p></p>
    </div>
  );
}

export default Feed;
