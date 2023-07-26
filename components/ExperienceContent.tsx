"use client";
import React from "react";
import utrgvLogo from "@/public/utrgv-horse-logo.svg";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.2 } },
};

const divVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const ulVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.8, staggerChildren: 0.4 } },
};

const liVariant = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const ExperienceContent = () => {
  const jobDuties = [
    {
      text: `Functioned as a special project assistant under the direct
    supervision of the Director of Digital Marketing & Analytics,
    overseeing the creation and launch of landing pages and web
    applications for UTRGV.`,
    },
    {
      text: `Ensured full compliance with ADA regulations on Unbounce landing
  pages, guaranteeing that all users, including those with
  disabilities, can easily access and navigate the content, resulting
  in a 30% increase in overall website accessibility rating.`,
    },
    {
      text: `Collaborated closely with web content specialists to optimize all
  landing pages for both desktop and mobile devices, ensuring a
  seamless user experience across all platforms, resulting in a 20%
  decrease in bounce rate and a 15% increase in conversion rate.`,
    },
    {
      text: `Provided timely and effective web support to all team members,
  offering valuable technical expertise and troubleshooting assistance
  as needed, resulting in a 35% decrease in average resolution time
  for critical issues.`,
    },
    {
      text: `Mentored other team members on the latest front-end development
  techniques and best practices, resulting in a 40% increase in team
  productivity.`,
    },
    {
      text: `Contributed to two major website redesign initiatives, leveraging
  CASCADE software to streamline the design and development process
  and create a more engaging and user-friendly web experience for
  UTRGV target audiences.`,
    },
  ];
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <SectionTitle title="Professional Journey" />
      <div className="flex w-full flex-col gap-4 rounded-lg border-l-4 border-[#F05023] bg-slate-950/40 p-8 ">
        <motion.div
          className="flex flex-col gap-3"
          initial="initial"
          animate="animate"
          variants={divVariants}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="flex flex-row items-center gap-2">
            <p className="text-center text-lg font-medium text-primary lg:text-left lg:text-xl xl:text-2xl w-full">
              Web Developer Graduate Assistant (University of Texas Rio Grande
              Valley)
            </p>
            <Image
              src={utrgvLogo}
              alt="utrgv logo"
              width={100}
              height={100}
              className="hidden lg:inline"
            />
          </div>
          <p className="text-center text-xs font-medium italic text-primary md:text-sm lg:text-left xl:text-base">
            Mar 2019 - May 2021
          </p>
          <Image
            src={utrgvLogo}
            alt="utrgv logo"
            width={100}
            height={100}
            className="mx-auto lg:hidden"
          />
        </motion.div>
        <motion.ul
          className="flex flex-col gap-4 text-center text-xs font-light text-primary/90 md:text-sm lg:text-left xl:text-base"
          variants={ulVariants}
          initial="initial"
          animate="animate"
        >
          {jobDuties.map((item, index) => {
            return (
              <motion.li key={index} variants={liVariant}>
                {item.text}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default ExperienceContent;
