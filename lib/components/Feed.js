import React from "react";
import ThumbnailTLMLPR from "./ThumbnailTLMLPR";
import GridPostThumbnail from "./GridPostThumbnail";
import PostThumbnailTest from "./PostThumbnailTest";
import ThumbnailTRMRPL from "./ThumbnailTRMRPL";
import ThumbnailTLMLPB from "./ThumbnailTLMLPB";

function Feed({ selected, tech, latest, misc, travel, media, health, music }) {
  const thumbnailArray = [
    ///////////////////
    // NEWEST UP TOP //
    ///////////////////

    <ThumbnailTRMRPL
      key={misc}
      link="/about"
      title="Second test to see what a different title looks like"
      titleSize="text-2xl"
      date="02.04.23"
      category="misc"
      duration="10 min"
      photo="/assets/brand/flippedtest.png"
    />,
    <ThumbnailTLMLPR
      key={tech}
      link="/about"
      title="Test to see other things"
      titleSize="text-3xl"
      date="02.04.23"
      category="tech"
      duration="10 min"
      photo="/assets/brand/garretttest.png"
    />,
    <ThumbnailTLMLPR
      key={media}
      link="/about"
      title="Another test to see what the media tag looks like"
      titleSize="text-3xl"
      date="02.04.23"
      category="media"
      duration="10 min"
      photo="/assets/brand/smokingkid.png"
    />,
  ];

  const miscFilter = thumbnailArray.filter(
    (thumbnail) => thumbnail.key === "misc"
  );

  const travelFilter = thumbnailArray.filter(
    (thumbnail) => thumbnail.key === "travel"
  );

  const techFilter = thumbnailArray.filter(
    (thumbnail) => thumbnail.key === "tech"
  );

  const musicFilter = thumbnailArray.filter(
    (thumbnail) => thumbnail.key === "music"
  );

  const mediaFilter = thumbnailArray.filter(
    (thumbnail) => thumbnail.key === "media"
  );

  const healthFilter = thumbnailArray.filter(
    (thumbnail) => thumbnail.key === "health"
  );

  return (
    <div className="flex flex-col w-full ml-20 mr-6 mt-10">
      {selected === "latest"
        ? thumbnailArray
        : selected === "misc"
        ? miscFilter
        : selected === "travel"
        ? travelFilter
        : selected === "tech"
        ? techFilter
        : selected === "music"
        ? musicFilter
        : selected === "media"
        ? mediaFilter
        : selected === "health"
        ? healthFilter
        : thumbnailArray}
    </div>
  );
}

export default Feed;
