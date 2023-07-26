"use client";
import React from "react";
import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
};

const divVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <motion.div
      className="mb-10 flex w-full flex-col gap-4"
      variants={divVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.4, delay: 0.4 }}
    >
      <h2 className="text-center text-3xl font-bold tracking-widest text-primary md:text-4xl lg:text-left xl:text-5xl">
        {title}
      </h2>
      <div className="flex flex-row items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-primary"></div>
        <div className="h-2 w-2 rounded-full bg-primary"></div>
        <div className="h-1 w-full bg-primary lg:w-1/2"></div>
      </div>
    </motion.div>
  );
};

export default SectionTitle;
