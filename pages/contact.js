import Link from "next/link";
import { contactPagePhrases } from "../lib/data/phrases";

export default function contact() {
  const contactPagePhraseVar =
    contactPagePhrases[Math.floor(Math.random() * contactPagePhrases.length)];

  // TODO: The const above does not work for some reason, next says it's an issue with hydration, will have to ask Jadon about it

  return (
    <div className="mt-32 flex flex-col justify-center">
      {/* Have a picture of me with an open mouth and the Let's talk inside of it, maybe sideways so it doesn't take up too much vertical space */}
      <div className="text-center font-bold text-4xl mb-20">Lets talk</div>
      <Link
        href="https://www.instagram.com/garrettjprince/"
        className="font-mono text-xl py-1  px-1 mx-auto border-none rounded-xl bg-gradient-to-tr from-cta-gradient-1 to-cta-gradient-2 mb-5"
      >
        <div className="bg-black py-1 px-5 rounded-lg">INSTAGRAM DM</div>
      </Link>
      <Link
        href="mailto:garrett@longaddition.com"
        className="font-mono text-xl py-1  px-1 mx-auto border-none rounded-xl bg-gradient-to-tr from-cta-gradient-1 to-cta-gradient-2 mb-2"
      >
        <div className="bg-black py-1 px-5 rounded-lg">EMAIL ME</div>
      </Link>
    </div>
  );
}
