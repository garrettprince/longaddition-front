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
            <p className="text-sm font-mono text-inactive">BY GARRETT PRINCE</p>
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
          I planted my hands firmly on the rolled down window as my Uber driver
          scanned what was visible of me.
        </p>
        <p id="paragraph" className="mb-4">
          He glanced at the dash. 7:36. The doors unlocked and he motioned me
          in. I catapulted my day pack into the seat next to me and greeted his
          Camry’s cloth seats with that morning’s back sweat deposit. I’d only
          been awake a few minutes but with the tropical humidity and my stress
          levels reaching heights previously unknown to the stress level
          measuring community, I looked as though I had ran a marathon moments
          earlier. Or, attempted to, at least, before faking a hamstring injury
          at mile 18.
        </p>
        <p id="paragraph" className="mb-4">
          “You know, there’s traffic headed into the city.{" "}
          <span className="italic">Everyone</span> is headed into the city. I’m
          not going to say we can’t, but-“ he sighed and adjusted his mirror to
          see the desperation in my eyes. “I’ll see what I can do.” He flipped a
          U-turn and made his way back to the main road. Both him and I knew the
          commute from Palm Cove to Cairns on a Friday morning wasn’t without
          it’s metaphorical, and literal, speed bumps.
        </p>
        <p id="paragraph" className="mb-4">
          7:38. I glanced down at the app to see the estimated arrival. 8:07.
          <span className="italic"> Shit</span>.
        </p>
        <p id="paragraph" className="mb-4">
          “Can’t be late for work again?” The driver questioned, trying to make
          conversation as we weaved in and out of traffic on the two lane
          highway. I ignored the factually correct implication that I manage my
          time poorly, even while traveling. “Scuba diving, actually.” I
          responded. “The boat leaves at 8.” We made eye contact in the rearview
          mirror again. This time, he shared a look of disbelief, translating
          to:{" "}
          <span className="italic">I’m speeding so you can look at fish?</span>
        </p>
        <div className="mb-4 mt-10">
          <img
            alt=""
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677906472/Long%20Addition/Posts/Losing%20Money%20In%20Australia/rearview_bdv15d.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10 mr-5">
            FIG 1. DISBELIEF{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          The inertia of each roundabout pushed the limited contents of my
          stomach to its walls. Looking out the window, I found stability in the
          greenery we passed with each mile. 7:52. In hindsight, it would have
          made more sense to schedule the Uber the day previous, considering
          there were so few uber drivers in Palm Cove that I ended up being a
          few drivers’ repeat American customer. In hindsight, five minutes of
          Googling before booking my stay in Queensland, I would have learned
          that Palm Cove was not, in fact, “a short drive to Cairns”.
        </p>
        <p id="paragraph" className="mb-4">
          “Have you been to The Great Barrier Reef?” I asked, deciding to volley
          back some small talk to drown out the car horns. He kept his eyes on
          the road this time. “Uh, yeah.” He signaled to get over a lane. “It
          was… great.” 7:56. Maybe silence isn’t so bad.
        </p>
        <p id="paragraph" className="mb-4">
          I pulled out my phone again. 8:04 arrival.{" "}
          <span className="italic">
            Okay, we’re making up time. Could be worse.
          </span>
        </p>
        <p id="paragraph" className="mb-4">
          I stayed up the previous night nursing some light nausea and a
          headache, making the Formula 1 tryout that was my Uber ride to the
          marina all the more punishing. My first day in Cairns hadn’t exactly
          been smooth sailing, but I was determined to get some sun as a direct
          response to the previous two weeks of downpour in Sydney. Somehow I’d
          managed to book my trip to Australia during one of the country’s
          rainiest springs. Tragedy plus timing, as they say.
        </p>
        <div className="mb-4 mt-10">
          <img
            alt=""
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677907444/Long%20Addition/Posts/Losing%20Money%20In%20Australia/boat_kkx8sb.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10 mr-5">
            FIG 2. DIVE BOAT{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          We pulled into the city and raced to the drop-off point, making sure
          to avoid the swarths of hungover backpackers showing up to their
          temporary shift work. Cairns had this buzz about it that I really took
          to. There were families and tourists, but the city seemed to attract a
          specific type of backpacker that I’d been more inclined to connect
          with than those in Sydney.
        </p>
        <p id="paragraph" className="mb-4">
          The Camry screeched to a halt inches from the marina’s curb. 8:02. My
          departure from his backseat set the land speed record for the quickest
          to unstick a back and fastest to sling a Herschel over their shoulder,
          all while narrowly avoiding the backpack induced decapitation of a
          Romanian family making their way to the pier behind me. “Thank you so
          much! I really cannot express-“ I started but the driver cut me off.
          “Go! What are you waiting for!?”
        </p>
        <p id="paragraph" className="mb-4">
          Back in the humidity, and with the five dollar sandals I purchased in
          Dee Why, I clopped my way to the boat I’d signed on to scuba with. A
          lady with a checklist stood near the stairs to board, verifying the
          passengers as they climbed in. I stopped just short of her, gasping
          for breath.
        </p>
        <p id="paragraph" className="mb-4">
          “Name?” She smiled. 8:05. “Prince. Garrett.” I heaved in response.
          “Garrett Prince. Can I still board?”
        </p>
        <p id="paragraph" className="mb-4">
          She studied her clipboard. “Prince, Prince, Prince… Oh! Got you right
          here.” She marked my name off on the attendance sheet and laughed.
          “Yeah, I don’t see why you couldn’t.” She looked up from her papers,
          “We don’t leave until 8:30.”
        </p>
        <div className="pt-8 pb-12 flex mx-auto justify-center">
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
        </div>
        <p id="paragraph" className="mb-4">
          A month earlier, I sat inches from my monitor rereading my latest
          application rejection email. “The team loved you, but due to economic
          circumstances…”. I knew how it went. I’d been broken up with before.
          Luckily, this time around, I didn’t have to convince the HR rep to let
          me keep the cat.
        </p>
        <p id="paragraph" className="mb-4">
          By that point in September, I’d spent the better part of 2022 coding
          each night. After staring at a computer, working my remote sales
          training position for most of the day, I’d then stare at a computer
          and work on software engineering and music projects until my body
          called it quits for the night. Some nights, I’d end early and walk to
          the Basha’s across the street with my roommate and best friend,
          Tanner. We’d cheers a Topo Chico and talk about doing something big
          with our lives. Some days I’d work until I was so exhausted it looked
          as though I’d been haunting the abandoned house at the end of the lane
          that the neighbor kids dare each other to go inside when there’s a
          full moon and some get scared but others inevitably find strength in
          numbers and form a life long bond. Most nights, I was just tired.
        </p>
        <p id="paragraph" className="mb-4">
          In all of these late nights, and in all of this uncertainty, it got me
          thinking.
        </p>
        <p id="paragraph" className="mb-4">
          When I was a freshman in high school, a friend of a friend informed me
          of another friend that had smoked weed for the first time. Hearing the
          news, I responded with “Oh. Wow. I hope she’s okay.” My 14 year old
          Mormon version of the sign of the cross. My friend told me about how
          the classmate had gotten so high she had thought she was in a
          fishbowl. She banged on the walls, but to no avail. They were so thick
          no one could hear.
        </p>
        <div className="mb-4 mt-10">
          <img
            alt=""
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677906472/Long%20Addition/Posts/Losing%20Money%20In%20Australia/fishbowl_nrfmqh.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10 mr-5">
            FIG 3. STANDARD FISH BOWL{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          Now, I’m well aware of the stories we tell each other around that age.
          I once told a girl I couldn’t date her because I was in a long
          distance letter writing relationship. I also once had a zit so large
          and so deep on my cheek, I told my friends I had fallen and my knee
          hit it at just the right angle but it could also be hereditary “so I
          may have to get my blood checked to see.” Whether my classmate had
          been stretching the truth or not when relaying her experiences to my
          friend, that image stuck with me: Banging on the sides of a fishbowl.
          Trying to escape.
        </p>
        <p id="paragraph" className="mb-4">
          Now, it may seem strange at first, but I often describe pivotal
          moments of my life using that visual: The Fishbowl Effect, if you
          will. Applying for colleges and feeling like I had to get out of my
          hometown in Oregon: Stuck in the fishbowl. Leaving for the University
          of Hawaii: Getting out of the fishbowl. Falling for someone who’s
          engaged to be married: Fishbowl. Starting a new career, moving and
          getting over them: Out.
        </p>
        <p id="paragraph" className="mb-4">
          Engineering nightly, keeping too much to myself, feeling like I wasn’t
          creating things that I actually enjoyed making: There I was, banging
          on the glass again.
        </p>
        <div className="mb-4 mt-10">
          <img
            alt=""
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677906472/Long%20Addition/Posts/Losing%20Money%20In%20Australia/backturngarrett_ow3wd2.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10 mr-5">
            FIG 4. MY PERSONAL FISH BOWL{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          She studied her clipboard. “Prince, Prince, Prince… Oh! Got you right
          here.” She marked my name off on the attendance sheet and laughed.
          “Yeah, I don’t see why you couldn’t.” She looked up from her papers,
          “We don’t leave until 8:30.”
        </p>
        <p id="paragraph" className="mb-4">
          She studied her clipboard. “Prince, Prince, Prince… Oh! Got you right
          here.” She marked my name off on the attendance sheet and laughed.
          “Yeah, I don’t see why you couldn’t.” She looked up from her papers,
          “We don’t leave until 8:30.”
        </p>
      </motion.div>
    </div>
  );
}
