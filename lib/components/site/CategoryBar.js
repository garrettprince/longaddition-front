import React from 'react'

function CategoryBar() {
  return (
    <div className="mt-16 mx-2 flex flex-col font-mono">
      <button className="rotate-270 mb-12">LATEST</button>
      <button className="rotate-270 mb-10">MISC</button>
      <button className="rotate-270 mb-12">TECH</button>
      <button className="rotate-270 mb-14">TRAVEL</button>
      <button className="rotate-270 mb-14">MUSIC</button>
      <button className="rotate-270 mb-14">HEALTH</button>
      <button className="rotate-270">MEDIA</button>
    </div>
  );
}

export default CategoryBar