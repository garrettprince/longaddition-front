/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Nav from '../lib/components/Nav'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
      initial={{ y: 6, opacity: 0 }}
      animate={{ y: -3, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="mt-32 flex flex-col justify-center"
    >
      <img
        src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1677184908/Long%20Addition/About%20Me%20Page/Troll_bmhsyg.png"
        alt=""
      />
    </motion.div>
  );
}