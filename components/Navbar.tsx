"use client";

import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import {
  GrDocumentPdf,
  GrGithub,
  GrLinkedinOption,
  GrMailOption,
} from "react-icons/gr";
import CustomIcon from "./CustomIcon";
import CustomLink from "./CustomLink";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export const navLinks = [
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
  // {
  //   name: "Contact",
  //   href: "/contact",
  // },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const reactIcons = [
    {
      name: <GrMailOption size={25} />,
      href: "",
    },
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
      {isOpen && <DropdownMenu setOpen={setOpen} pathname={pathname} />}
    </header>
  );
};

export default Navbar;
