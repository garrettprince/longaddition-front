import React from "react";
import ThumbnailTLMLPR from "./ThumbnailTLMLPR";
import ThumbnailTRMRPL from "./ThumbnailTRMRPL";
import ThumbnailTLMLPB from "./ThumbnailTLMLPB";

function Feed({ selected }) {
  const thumbnailArray = [
    ///////////////////
    // NEWEST UP TOP //
    ///////////////////

    <ThumbnailTRMRPL
      key="misc"
      link="/posts/template"
      title="Second test to see what a different title looks like"
      titleSize="text-3xl"
      date="02.04.23"
      category="misc"
      duration="10 min"
      photo="/assets/brand/flippedtest.png"
      marginBottom="mb-20"
    />,
    <ThumbnailTLMLPR
      key="travel"
      link="/posts/losing-money-australia"
      title="The Fishbowl Effect"
      titleSize="text-4xl"
      date="02.04.23"
      category="travel"
      duration="20 min"
      photo="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677050120/Long%20Addition/Posts/Losing%20Money%20In%20Australia/australiagroup_mm4z0a.png"
      marginBottom="mb-20"
    />,
    <ThumbnailTLMLPB
      key="media"
      link="/about"
      title="Another test to see what the media tag looks like"
      titleSize="text-3xl"
      date="02.04.23"
      category="media"
      duration="10 min"
      photo="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1658206953/samples/bike.jpg"
      marginBottom="mb-20"
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
