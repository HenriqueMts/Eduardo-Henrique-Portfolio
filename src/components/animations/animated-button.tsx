"use client";

import { motion } from "framer-motion";
import { AiOutlineSend } from "react-icons/ai";

export default function AnimatedButton() {
  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open("mailto:henrique.mts@outlook.com.br", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className="w-full flex justify-center lg:absolute lg:bottom-32"
    >
      <button
        onClick={handleEmailClick}
        className="
          border-box
          w-[200px] md:w-[28%] 
          px-4 md:px-8 
          py-2 md:py-4 
          border border-ring 
          rounded-full 
          backdrop-blur-sm 
          hover:bg-ring/12 
          transition-ease duration-500
          text-base md:text-2xl 
          text-muted-foreground 
          mt-4 lg:mt-0
          mb-6 lg:mb-0
          cursor-pointer
          hover:scale-105
          flex items-center justify-center gap-2
          group
        "
      >
        Get in Touch
        <AiOutlineSend className="text-xl md:text-2xl transform transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
}
