"use client";
import Image from "next/image";
import React, { useState } from "react";
import Hacker from "@/public/Hacker.svg";
import { motion } from "framer-motion";
import { skillIcons } from "@/utils/Skills";

const About = () => {
  const [isShown, setShown] = useState(false);
  return (
    <section className="w-full px-4 lg:px-32">
      <p className="text-center text-3xl font-semibold tracking-widest text-primary lg:text-left">
        Who I am
      </p>
      <div className="my-6 flex flex-row items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-primary"></div>
        <div className="h-2 w-2 rounded-full bg-primary"></div>
        <div className="h-1 w-full bg-primary lg:w-1/2"></div>
      </div>
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-center text-primary lg:text-left">
            I am a Computer Science Grad with a Masters in Information
            Technology from The University of Texas Rio Grande Valley and I have
            2 years of experience working as a Web Developer/ Digital Marketing
            Assistant at UTRGV.
          </p>
          <p className="text-center text-primary lg:text-left">
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
          </p>
          <p className="text-center text-primary lg:text-left">
            Some of my hobbies are: playing video games, reading stuff about the
            universe, watching/playing soccer, playing with my dogs and
            listening to music.
          </p>
          <div className="mt-8 flex flex-col gap-8">
            <p
              className="cursor-pointer text-center font-semibold text-primary underline underline-offset-4 lg:text-left"
              onClick={() => setShown(!isShown)}
            >
              Here are a few technologies I have been working with recently:
            </p>

            {isShown && (
              <ul className="flex w-full flex-row flex-wrap justify-center gap-4 lg:justify-start">
                {skillIcons.map((item, index) => {
                  return (
                    <motion.li
                      key={index}
                      className="text-primary"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                      whileHover={{ scale: 1.5 }}
                    >
                      {item.icon}
                    </motion.li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="w-[90%] md:w-[50%] lg:min-w-[40%] xl:min-w-[30%]">
          <Image src={Hacker} alt="Hacker" className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
};

export default About;

//SiHtml5, SiPython, SiNodedotjs, SiNextdotjs, SiJavascript, SiTypescript, SiReact, SiCss3, SiTailwindcss, SiBootstrap, SiPhp, SiExpress, SiFirebase, SiMongodb, SiMysql, SiFigma, SiGithub, SiVite
