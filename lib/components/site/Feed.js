import React from "react";

function Feed({ selected }) {
  return (
    <div className="flex flex-col w-full mr-5 mt-11">
      <section className="flex bg-gray-500 w-full h-56">{selected}</section>
    </div>
  );
}

export default Feed;
