import React from "react";
import Thumbnail from "./Thumbnail";


function Feed({ selected }) {
  const thumbnailArray = [
    ///////////////////
    // NEWEST UP TOP //
    ///////////////////
    {
      title: "The Divine Comfort Of Mix Channels On Youtube",
      type: "photoRight",
      link: "/posts/audio/mix-channels-youtube",
      titleSize: "text-3xl",
      date: "02.04.23",
      category: "audio",
      duration: "5 min",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1680657574/Long%20Addition/Posts/Mix%20Channels%20on%20Youtube/thumbnail_skwygo.png",
      marginBottom: "mb-20",
      premium: false,
    },
    {
      title: "I Made A Mad Lib For The Whole Family",
      type: "photoLeft",
      link: "/posts/misc/madlib-for-the-family",
      titleSize: "text-3xl",
      date: "02.04.23",
      category: "misc",
      duration: "5 min",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1680049461/Long%20Addition/Posts/I%20Made%20A%20Madlib/thumbnailraised_j068qn.png",
      marginBottom: "mb-20",
      premium: false,
    },
    {
      title: "Not Vocal Enough? Here Are My Top 10 Things To Say During Sex",
      type: "photoRight",
      link: "/posts/health/10-things-to-say-during-sex",
      titleSize: "text-2xl",
      date: "02.04.23",
      category: "health",
      duration: "5 min",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679861498/Long%20Addition/Posts/Not%20Vocal%20Enough/thumbnailraised_v9a4rc.png",
      marginBottom: "mb-20",
      premium: false,
    },
    {
      title: "What Ever Happened To My Crunchlings?",
      type: "photoLeft",
      link: "/posts/visual/what-happened-to-crunchlings",
      titleSize: "text-3xl",
      date: "02.04.23",
      category: "visual",
      duration: "15 min",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679793057/Long%20Addition/Posts/What%20Happened%20To%20My%20Crunchlings/crunchgroup2_vwuvzq.png",
      marginBottom: "mb-20",
      premium: false,
    },
    {
      title: "The Search For King Peenty's Big Red Rubies",
      type: "photoLeft",
      link: "/posts/travel/king-peenty-red-rubies",
      titleSize: "text-3xl",
      date: "02.04.23",
      category: "travel",
      duration: "10 min",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679810837/Long%20Addition/Posts/The%20Search%20For%20King%20Peenty%27s%20Big%20Red%20Rubies/actionraised2_s499xr.png",
      marginBottom: "mb-20",
      premium: false,
    },
    {
      title:
        "Scoring 5 Javascript Frameworks By How Physically Attracted I Am To Them",
      type: "photoRight",
      link: "/posts/tech/scoring-javascript-frameworks",
      titleSize: "text-2xl",
      date: "02.04.23",
      category: "tech",
      duration: "7 min",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679806795/Long%20Addition/Posts/Scoring%205%20Javascript%20Frameworks%20By%20How%20Attracted%20I%20Am%20To%20Them/roseraised2_dx4gcy.png",
      marginBottom: "mb-20",
      premium: false,
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
      titleSize: "text-2xl",
      date: "02.04.23",
      category: "tech",
      duration: "10 min",
      photo:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1680712453/Long%20Addition/Posts/Long%20Addition%20Site%20Build%20Pt.%201:%20I%20Don%27t%20Know%20What%20I%27m%20Doing/thumbnail_tkabhr.png",
      marginBottom: "mb-20",
      premium: false,
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
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679812065/Long%20Addition/Posts/Losing%20Money%20In%20Australia/collageraised_w9snh3.png",
      marginBottom: "mb-20",
      premium: false,
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
      premium: false,
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
          premium={thumbnail.premium}
        />
      ))}
    </div>
  );
}

export default Feed;
