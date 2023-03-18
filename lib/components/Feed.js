import React from "react";
import Thumbnail from "./Thumbnail";

function Feed({ selected }) {
  const thumbnailArray = [
    ///////////////////
    // NEWEST UP TOP //
    ///////////////////
    {
      title:
        "Scoring 5 Javascript Frameworks On How Physically Attracted I Am To Them",
      type: "photoRight",
      link: "/posts/tech/scoring-javascript-frameworks",
      titleSize: "text-2xl",
      date: "02.04.23",
      category: "tech",
      duration: "7 min",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679097973/Long%20Addition/Posts/Scoring%205%20Javascript%20Frameworks%20By%20How%20Attracted%20I%20Am%20To%20Them/roses2_p4fset.png",
      marginBottom: "mb-20",
    },
    {
      // use this when newsletter is live, every 6-8 posts
      // type: "newsletterCtaLarge1",
      // membership: false,
    },
    {
      title: "Long Addition Site Build Pt. 1: I Don't Know What I'm Doing",
      type: "photoLeft",
      link: "/posts/tech/site-build-part-1",
      titleSize: "text-3xl",
      date: "02.04.23",
      category: "tech",
      duration: "10 min",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677734937/Long%20Addition/Posts/Long%20Addition%20Site%20Build%20Pt.%201:%20I%20Don%27t%20Know%20What%20I%27m%20Doing/orangemac_bwp8xa.png",
      marginBottom: "mb-20",
    },
    {
      title: "The Fishbowl Effect",
      type: "photoRight",
      link: "/posts/travel/the-fishbowl-effect",
      titleSize: "text-4xl",
      date: "02.04.23",
      category: "travel",
      duration: "20 min",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677050120/Long%20Addition/Posts/Losing%20Money%20In%20Australia/australiagroup_mm4z0a.png",
      marginBottom: "mb-20",
    },
    {
      title: "Template Check",
      type: "photoLeft",
      link: "/posts/template",
      titleSize: "text-3xl",
      date: "02.04.23",
      category: "tech",
      duration: "10 min",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677734937/Long%20Addition/Posts/Long%20Addition%20Site%20Build%20Pt.%201:%20I%20Don%27t%20Know%20What%20I%27m%20Doing/orangemac_bwp8xa.png",
      marginBottom: "mb-20",
    },
  ];

  const filteredThumbnails =
    selected === "latest"
      ? thumbnailArray.sort((thumbnail) => thumbnail)
      : thumbnailArray.filter((thumbnail) => thumbnail.category === selected);

  return (
    <div className="flex flex-col w-full ml-20 mr-6 mt-12">
      {/* <h1 className="font-bold mb-10 text-xl">Hey, check out my latest writing below. Thanks for visiting!</h1> */}
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
    </div>
  );
}

export default Feed;
