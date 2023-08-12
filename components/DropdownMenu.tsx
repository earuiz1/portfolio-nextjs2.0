import React from "react";
import CustomLink from "./CustomLink";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/utils/navUtils";

type DropdownMenuProps = {
  pathname: string | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DropdownMenu = ({ setOpen, pathname }: DropdownMenuProps) => {
  return (
    <>
      {/* Dropdown Menu */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute left-0 right-0 top-full z-10 rounded-md bg-slate-950 py-10 shadow-lg md:hidden"
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
      </AnimatePresence>
    </>
  );
};

export default DropdownMenu;
