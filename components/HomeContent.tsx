"use client";

import React from "react";
import Image from "next/image";
import programmerSvg from "@/public/Programmer.svg";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
};

const HomeContent = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-4 lg:flex-row lg:items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-[70%] md:w-[60%] lg:min-w-[50%] xl:min-w-[40%]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src={programmerSvg}
          alt="Programmer"
          className="h-auto w-full"
          priority
        />
      </motion.div>

      <motion.div className="flex flex-col gap-4">
        <motion.p
          className="text-center text-2xl font-bold text-primary md:text-3xl lg:text-left lg:text-4xl xl:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your online success story starts with a passionate web developer
          dedicated to your vision.
        </motion.p>
        <motion.p
          className="text-light text-center text-xs text-primary/90 md:text-sm lg:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Committed to delivering quality results and constantly challenging
          myself to take on new projects and broaden my skillset. Explore my
          latest projects showcasing my web development expertise.
        </motion.p>
        <motion.div
          className="flex justify-center gap-3 lg:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://drive.google.com/file/d/1B2CbK3lByJfjf3jeD14Av3XPxVROWja7/view?usp=sharing"
            target="_blank"
          >
            <button className="rounded-md bg-[#17191e] px-5 py-3 text-sm font-medium text-primary hover:bg-[#17191e]/60">
              Resume
            </button>
          </a>
          <Link href="/contact">
            <button className="px-5 py-3  text-sm font-medium text-primary underline underline-offset-4">
              Contact
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomeContent;
