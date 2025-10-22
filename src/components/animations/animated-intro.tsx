"use client";

import { motion, easeOut } from "framer-motion";

const sentence = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

function AnimatedLine({
  text,
  className,
}: Readonly<{
  text: string;
  className?: string;
}>) {
  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={sentence}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={char + index}
          variants={letter}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default function AnimatedIntro() {
  return (
    <div className="flex flex-col w-full justify-around h-auto  p-10">
      <AnimatedLine
        text="Hi, I'm"
        className="text-base md:text-3xl lg:text-4xl font-medium text-left ml-18 text-[#9E49D4]  "
      />

      <AnimatedLine
        text="EDUARDO HENRIQUE"
        className="text-4xl text-center md:text-6x1 lg:text-8xl font-extrabold bg-gradient-to-r from-[#401259] via-[#9E49D4] to-[#C893ED] bg-clip-text text-transparent m-8 "
      />

      <AnimatedLine
        text="FULL STACK DEVELOPER"
        className="text-sm text-center md:text-2xl font-semibold text-[#9E49D4] "
      />
    </div>
  );
}
