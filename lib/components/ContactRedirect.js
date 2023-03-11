import Link from 'next/link';
import React from 'react'
import EmojiReact from './EmojiReact'

function ContactRedirect() {
  return (
    <div className='flex my-10'>
      {/* <EmojiReact emoji1={"🥹"} emoji2={"🥵"} emoji3={"🫡"} /> */}

      {/* Create a Contact button */}
      <Link
      href="/contact"
        className="cursor-pointer flex rounded-2xl px-3 py-1 bg-white/20 justify-center items-center space-x-2"
      >
        <p className="font-mono text-sm bg-transparent">CONTACT</p>
      </Link>
      {/* Create a share link button */}
    </div>
  );
}

export default ContactRedirect