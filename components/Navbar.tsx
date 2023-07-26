"use client";

import React, { useState } from "react";
import { GrDocumentPdf, GrGithub, GrLinkedinOption } from "react-icons/gr";
import CustomIcon from "./CustomIcon";
import CustomLink from "./CustomLink";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const reactIcons = [
    {
      name: <GrDocumentPdf size={25} />,
      href: "",
    },
    {
      name: <GrGithub size={25} />,
      href: "",
    },
    {
      name: <GrLinkedinOption size={25} />,
      href: "",
    },
  ];

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Experience",
      href: "/experience",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-primary transition ease transform duration-300`;
  return (
    <header
      className={`relative flex w-full items-center justify-between px-10 py-8`}
    >
      <div className="flex items-center gap-10">
        <Logo />
        <nav className="hidden gap-6 text-lg font-medium text-primary md:flex">
          {navLinks.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <CustomLink
                key={index}
                name={item.name}
                href={item.href}
                isActive={isActive}
                setOpen={setOpen}
              />
            );
          })}
        </nav>
      </div>
      <nav className="flex gap-3">
        {reactIcons.map((item, index) => {
          return <CustomIcon key={index} name={item.name} href={item.href} />;
        })}
      </nav>
      <button
        className="group flex flex-col items-center justify-center md:hidden"
        onClick={() => setOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "translate-y-2 rotate-45 group-hover:opacity-90"
              : "group-hover:opacity-90"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "group-hover:opacity-90"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-translate-y-2 -rotate-45 group-hover:opacity-90"
              : "group-hover:opacity-90"
          }`}
        />
      </button>
      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="absolute left-0 right-0 top-full z-10 rounded-md border-t-4 border-slate-600 bg-[#17191e] py-10 shadow-lg md:hidden"
          >
            <nav className="flex flex-col items-center gap-4 text-lg font-medium text-primary">
              {navLinks.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <CustomLink
                    key={index}
                    name={item.name}
                    href={item.href}
                    isActive={isActive}
                    setOpen={setOpen}
                  />
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
