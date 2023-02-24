/* eslint-disable @next/next/no-img-element */
import ThumbnailTLMLPB from "/lib/components/ThumbnailTLMLPB.js";
import ThumbnailTLMLPR from "/lib/components/ThumbnailTLMLPR.js";
import ThumbnailTRMRPL from "/lib/components/ThumbnailTRMRPL.js";
import { motion } from "framer-motion";
import Link from "next/link";

export default function losingmoneyaus() {
    return (
      <div className="mt-20">
        <header className="mx-7">
          <ThumbnailTLMLPR
            key="misc"
            link="/posts/losing-money-australia"
            title="The Fishbowl Effect"
            titleSize="text-4xl"
            date=""
            category=""
            duration=""
            photo="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677050120/Long%20Addition/Posts/Losing%20Money%20In%20Australia/australiagroup_mm4z0a.png"
            marginBottom=""
          />

          <motion.div
            id="info"
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: -3, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="flex justify-between mb-5"
          >
            <div>
              <p className="text-sm font-mono text-inactive">
                BY GARRETT PRINCE
              </p>
              <p className="text-sm bg-transparent text-inactive font-mono ">
                02.23.23
              </p>
            </div>
            <div>
              <p className="text-sm bg-transparent text-inactive font-mono text-right">
                TRAVEL
              </p>
              <p className="text-sm bg-transparent text-inactive font-mono text-right">
                20 MIN
              </p>
            </div>
          </motion.div>
        </header>
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: -3, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className=" ml-7 mr-4 text-lg"
        >
          <p id="first-paragraph" className="mb-4">
            <span className="font-bold">
              “I’ll tip you as much as this app will let me if you can get me to
              the marina before 8am.”
            </span>{" "}
            I said, with hands on the rolled down window as the Uber slowed to a
            stop.
          </p>
          <p id="paragraph" className="mb-4">
            My driver looked at the dash. 7:36. The doors unlocked. I catapulted
            my day pack into the seat next to me and greeted his Camry’s cloth
            seats with that morning’s back sweat deposit. I’d only been awake a
            few minutes but with the tropical humidity and my stress levels
            reaching heights previously unknown to the stress level measuring
            community, I looked as though I had ran a marathon moments earlier.
            Or, attempted to, at least, before faking a hamstring injury at mile
            18.
          </p>
          <p id="paragraph" className="mb-4">
            “You know, there’s traffic headed into the city.{" "}
            <span className="italic">Everyone</span> is headed into the city.
            I’m not going to say we can’t, but-“ he sighed and adjusted his
            mirror to see the desperation in my eyes. “I’ll see what I can do.”
            He flipped a U-turn and made his way back to the main road. Both him
            and I knew the commute from Palm Cove to Cairns on a Friday morning
            wasn’t without it’s metaphorical, and literal, speed bumps.
          </p>
          <p id="paragraph" className="mb-4">
            7:38. I glanced down at the app to see the estimated arrival. 8:07.
            <span className="italic"> Shit</span>.
          </p>
          <p id="paragraph" className="mb-4">
            “Can’t be late for work again?” The driver questioned, trying to
            make conversation as we weaved in and out of traffic on the two lane
            highway. I ignored the factually correct implication that I manage
            my time poorly, even when traveling. “Scuba diving, actually.” I
            responded. “The boat leaves at 8.” We made eye contact in the
            rearview mirror again. This time, he shared shared a look of
            disbelief, roughly translating to: I’m speeding so you can look at
            fish?
          </p>
          <div className="mb-4 mt-10">
            <img
              alt=""
              src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677009350/Long%20Addition/Posts/Losing%20Money%20In%20Australia/Rearview_mirror_whi2i4.png"
            />
            <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10 mr-5">
              FIG 1. DISBELIEF{" "}
            </p>
          </div>
          <p id="paragraph" className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            explicabo fugiat qui recusandae accusantium quia autem facilis
            pariatur enim! Sed magni minima sequi nisi nulla optio non quod
            debitis ipsum.
          </p>
          <p id="paragraph" className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            explicabo fugiat qui recusandae accusantium quia autem facilis
            pariatur enim! Sed magni minima sequi nisi nulla optio non quod
            debitis ipsum.
          </p>
          <p id="paragraph" className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            explicabo fugiat qui recusandae accusantium quia autem facilis
            pariatur enim! Sed magni minima sequi nisi nulla optio non quod
            debitis ipsum.
          </p>
          <h2
            id="pullquote"
            className="mb-10 mt-10 text-3xl font-bold text-center mr-5"
          >
            This is a <span className=" ">pullquote</span> with multiple lines
            and even more text
          </h2>
          <p id="paragraph" className="mb-4">
            Lorem ipsum{" "}
            <Link href="/" className="border-b-[4px] border-misc">
              dolor
            </Link>{" "}
            sit amet consectetur adipisicing elit. Atque, explicabo fugiat qui
            recusandae accusantium quia autem facilis pariatur enim! Sed magni
            minima sequi nisi nulla optio non quod debitis ipsum.
          </p>
          <p id="paragraph" className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            explicabo fugiat qui recusandae accusantium quia autem facilis
            pariatur enim! Sed magni minima sequi nisi nulla optio non quod
            debitis ipsum.
          </p>
          <p id="paragraph" className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            explicabo fugiat qui recusandae accusantium quia autem facilis
            pariatur enim! Sed magni minima sequi nisi nulla optio non quod
            debitis ipsum.
          </p>
        </motion.div>
      </div>
    );
}