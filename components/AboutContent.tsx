"use client";
import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Hacker from "@/public/Hacker.svg";
import { motion } from "framer-motion";
import { skillIcons } from "@/utils/Skills";

const containerVariants = {
  initial: { opacity: 0, y:-50},
  animate: { opacity: 1, y:0 , transition: { duration: 1.4, delay: 0.2 } },
};

const paragraphVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const divVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const imageVariant = {
  initial: {opacity: 0}, 
  animate: {
    opacity:1 , transition : {
      delay: 1.4, duration: 1.4
    }
  }, 
  hover: { scale: 1.1, transition: { type: "tween", duration: 0.2}}
}

const liVariant = {
  initial: { opacity: 0, y:50},
  hover: { scale: 1.2, transition: { type: "tween", duration: 0.2}}
}

const AboutContent = () => {
  const [isShown, setShown] = useState(false);
  return (
    <motion.div variants={containerVariants} initial="initial" animate="animate">
      <SectionTitle title="Who I Am"/>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-3">
          <motion.p
            className="text-center text-xs xl:text-base text-primary/90 md:text-sm lg:text-left"
            variants={paragraphVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.4, delay: 0.6 }}
          >
            I am a Computer Science Grad with a Masters in Information
            Technology from The University of Texas Rio Grande Valley and I have
            2 years of experience working as a Web Developer/ Digital Marketing
            Assistant at UTRGV.
          </motion.p>
          <motion.p
            className="text-center text-xs xl:text-base text-primary/90 md:text-sm lg:text-left"
            variants={paragraphVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.4, delay: 0.8 }}
          >
            My educational background and professional experience have given me
            a strong foundation in web development and digital marketing, as
            well as an understanding of the latest technologies and trends in
            the industry. I am passionate about using my skills to create
            engaging and user-friendly websites, and I am constantly seeking new
            opportunities to learn and grow in my field. I am a fast learner,
            hard worker, and team player who is dedicated to delivering
            high-quality results. I am excited to continue my career as a web
            developer and digital marketer, and look forward to the challenges
            and opportunities that lie ahead.
          </motion.p>
          <motion.p
            className="text-center text-xs xl:text-base text-primary/90 md:text-sm lg:text-left"
            variants={paragraphVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.4, delay: 1 }}
          >
            Some of my hobbies are: playing video games, reading stuff about the
            universe, watching/playing soccer, playing with my dogs and
            listening to music.
          </motion.p>
        </div>
        <motion.div
          className="w-[60%] md:w-[50%] xl:text-base lg:min-w-[40%] xl:min-w-[30%]"
          variants={imageVariant}
          initial="initial"
          animate="animate"
          whileHover ="hover"
        >
          <Image src={Hacker} alt="Hacker" className="h-auto w-full" />
        </motion.div>
      </div>
      <motion.div
            className="mt-8 xl:mt-4 flex flex-col gap-8"
            variants={divVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.4, delay: 1.2 }}
          >
            <p
              className="cursor-pointer text-center text-base xl:text-lg font-semibold text-primary underline underline-offset-4 lg:text-left"
              onClick={() => setShown(true)}
            >
              Check out some of the technologies I have been working with recently >
            </p>

            {isShown && (
              <motion.ul className="flex w-full flex-row flex-wrap justify-center gap-4 lg:justify-start">
                {skillIcons.map((item, index) => {
                  return (
                    <motion.li
                      key={index}
                      className="cursor-pointer text-primary bg-slate-950/60 px-3 py-2 rounded-md flex flex-row items-center gap-2"
                      variants={liVariant}
                      initial="initial"
                      animate={{ opacity: 1, y: 0, transition: {delay: index * 0.06 } }}
                      whileHover="hover"
                    >
                      {item.icon}
                      <span className="font-medium text-xs text-primary/80">{item.name}</span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            )}
          </motion.div>
    </motion.div>
  );
};

export default AboutContent;
