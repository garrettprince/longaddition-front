import React from "react";
import ThumbnailTLMLPR from "./ThumbnailTLMLPR";
import ThumbnailTRMRPL from "./ThumbnailTRMRPL";
import ThumbnailTLMLPB from "./ThumbnailTLMLPB";
import Thumbnail from "./Thumbnail";

function Feed({ selected }) {
  const thumbnailArray = [
    {
      title: "Scoring 5 Javascript frameworks by how attracted I am to them",
      type: "TLMLPR",
      link: "/posts/losing-money-australia",
      titleSize: "text-2xl",
      date: "02.04.23",
      category: "tech",
      duration: "5 min",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677050120/Long%20Addition/Posts/,Losing%20Money%20In%20Australia/australiagroup_mm4z0a.png",
      marginBottom: "mb-20",
    },
    {
      title: "Second test to see what a different title looks like",
      type: "TRMRPL",
      link: "/posts/template",
      titleSize: "text-3xl",
      date: "02.04.23",
      category: "misc",
      duration: "10 min",
      photo: "/assets/brand/flippedtest.png",
      marginBottom: "mb-20",
    },
  ];

  // const thumbnailArray = [
  //   ///////////////////
  //   // NEWEST UP TOP //
  //   ///////////////////
  //   <ThumbnailTLMLPR
  //     key="audio"
  //     link="/posts/losing-money-australia"
  //     title="Scoring 5 Javascript frameworks by how attracted I am to them"
  //     titleSize="text-2xl"
  //     date="02.04.23"
  //     category="tech"
  //     duration="5 min"
  //     photo="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677050120/Long%20Addition/Posts/Losing%20Money%20In%20Australia/australiagroup_mm4z0a.png"
  //     marginBottom="mb-20"
  //   />,
  //   <ThumbnailTRMRPL
  //     key="misc"
  //     link="/posts/template"
  //     title="Second test to see what a different title looks like"
  //     titleSize="text-3xl"
  //     date="02.04.23"
  //     category="misc"
  //     duration="10 min"
  //     photo="/assets/brand/flippedtest.png"
  //     marginBottom="mb-20"
  //   />,
  //   <ThumbnailTRMRPL
  //     key="health"
  //     link="/posts/site-build-part-1"
  //     title="WHOOP For The Non-Athlete"
  //     titleSize="text-3xl"
  //     date="02.04.23"
  //     category="health"
  //     duration="20 min"
  //     photo="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677969604/Long%20Addition/Posts/WHOOP%204.0:%20Am%20I%20An%20Athlete%20Now/whoopupdated_cmlm6k.png"
  //     marginBottom="mb-20"
  //   />,
  //   <ThumbnailTRMRPL
  //     key="tech"
  //     link="/posts/site-build-part-1"
  //     title="Long Addition Site Build Pt. 1: I Don't Know What I'm Doing"
  //     titleSize="text-3xl"
  //     date="02.04.23"
  //     category="tech"
  //     duration="20 min"
  //     photo="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677734937/Long%20Addition/Posts/Long%20Addition%20Site%20Build%20Pt.%201:%20I%20Don%27t%20Know%20What%20I%27m%20Doing/orangemac_bwp8xa.png"
  //     marginBottom="mb-20"
  //   />,
  //   <ThumbnailTLMLPR
  //     key="travel"
  //     link="/posts/losing-money-australia"
  //     title="The Fishbowl Effect"
  //     titleSize="text-4xl"
  //     date="02.04.23"
  //     category="travel"
  //     duration="20 min"
  //     photo="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677050120/Long%20Addition/Posts/Losing%20Money%20In%20Australia/australiagroup_mm4z0a.png"
  //     marginBottom="mb-20"
  //   />,
  //   <ThumbnailTLMLPB
  //     key="visual"
  //     link="/about"
  //     title="Another test to see what the media tag looks like"
  //     titleSize="text-3xl"
  //     date="02.04.23"
  //     category="visual"
  //     duration="10 min"
  //     photo=""
  //     marginBottom="mb-20"
  //   />,
  // ];

  // const miscFilter = thumbnailArray.filter(
  //   (thumbnail) => thumbnail.key === "misc"
  // );

  // const travelFilter = thumbnailArray.filter(
  //   (thumbnail) => thumbnail.key === "travel"
  // );

  // const techFilter = thumbnailArray.filter(
  //   (thumbnail) => thumbnail.key === "tech"
  // );

  // const audioFilter = thumbnailArray.filter(
  //   (thumbnail) => thumbnail.key === "audio"
  // );

  // const visualFilter = thumbnailArray.filter(
  //   (thumbnail) => thumbnail.key === "visual"
  // );

  // const healthFilter = thumbnailArray.filter(
  //   (thumbnail) => thumbnail.key === "health"
  // );

  const filteredThumbnails = thumbnailArray.filter(
    (thumbnail) => thumbnail.category === selected
  );

  return (
    <div className="flex flex-col w-full ml-20 mr-6 mt-10">
      {filteredThumbnails.map((thumbnail) => (
        <Thumbnail
          title={thumbnail.title}
          type={thumbnail.type}
          key={thumbnail.title}
          link={thumbnail.link}
          category={thumbnail.category}
          titleSize={thumbnail.titleSize}
          date={thumbnail.date}
          duration={thumbnail.duration}
          photo={thumbnail.photo}
        />
      ))}
      {/* {selected === "latest"
        ? thumbnailArray
        : selected === "misc"
        ? miscFilter
        : selected === "travel"
        ? travelFilter
        : selected === "tech"
        ? techFilter
        : selected === "audio"
        ? audioFilter
        : selected === "visual"
        ? visualFilter
        : selected === "health"
        ? healthFilter
        : thumbnailArray} */}
    </div>
  );
}

export default Feed;
