import React from "react";
import PostThumbnailTest from "./PostThumbnailTest";

function Feed({ selected }) {
  return (
    <div className="flex flex-col w-full ml-1 mr-5 mt-10">
      <section className="">
        <PostThumbnailTest />
      </section>
      <p></p>
    </div>
  );
}

export default Feed;
