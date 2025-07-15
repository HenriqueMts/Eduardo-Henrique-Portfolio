"use client";

import { motion } from "framer-motion";

export default function AnimatedDescription() {
  return (
    <motion.p
      className=" text-sm md:text-2xl max-w-2xl text-left mr-20 bg-gradient-to-r from-[#C893ED] via-[#9E49D4] to-[#401259] bg-clip-text text-transparent "
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
    >
      I build interactive, high-performance web experiences using modern
      technologies.
    </motion.p>
  );
}
