"use client";

import React, { useContext, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import CustomIcon from "./CustomIcon";
import CustomLink from "./CustomLink";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { navLinks, reactIcons } from "@/utils/navUtils";
import { GrMailOption } from "react-icons/gr";
import { ModalContext } from "@/app/context/ModalContext";
import Modal from "./Modal";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { openModal, isModalOpen } = useContext(ModalContext);
  const pathname = usePathname();

  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-primary transition ease transform duration-300`;
  return (
    <>
      {isModalOpen ? <Modal /> : null}
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
          <div className="rounded-full bg-primary p-2" onClick={openModal}>
            <GrMailOption size={25} />
          </div>
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
    </>
  );
};

export default Navbar;
