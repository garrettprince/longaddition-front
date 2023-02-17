import React from "react";
import ThumbnailTLMLPB from "./ThumbnailTLMLPB";
import ThumbnailTLMLPR from "./ThumbnailTLMLPR";
import ThumbnailTRMRPL from "./ThumbnailTRMRPL";
import { motion } from "framer-motion";

function PostTemplate() {
  return (
    <div className="mt-20">
      <header className="mx-8">
        <ThumbnailTRMRPL
          key="misc"
          link="/posts/template"
          title="Second test to see what a different title looks like"
          titleSize="text-4xl"
          date=""
          category=""
          duration=""
          photo="/assets/brand/flippedtest.png"
        />

        {/* Need to find a way to fix bottom margin spacing on the actual post, too much brought over from the component */}

        <section id="info" className="flex justify-between mb-5">
          <div>
            <p className="text-sm font-mono text-inactive">BY GARRETT PRINCE</p>
            <p className="text-sm bg-transparent text-inactive font-mono ">
              02.23.23
            </p>
          </div>
          <div>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              MISC
            </p>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              10 MIN
            </p>
          </div>
        </section>
      </header>
      <body className="ml-8 mr-3">
        <p id="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
      </body>
    </div>
  );
}

export default PostTemplate;
