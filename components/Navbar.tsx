"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/public/logo.svg";
import { GrDocumentPdf, GrGithub, GrLinkedinOption } from "react-icons/gr";
import CustomIcon from "./CustomIcon";
import CustomLink from "./CustomLink";
import { usePathname } from "next/navigation";

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
    <header className="flex w-full items-center justify-between px-10 py-8">
      <div className="flex items-center gap-4">
        <div className="inline-block rounded-full border border-primary p-2">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={30}
              height={30}
              className="invert"
            />
          </Link>
        </div>
        <nav className="hidden gap-6 text-lg font-medium text-primary md:flex">
          {navLinks.map((item, index) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <CustomLink
                key={index}
                name={item.name}
                href={item.href}
                isActive={isActive}
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
    </header>
  );
};

export default Navbar;
