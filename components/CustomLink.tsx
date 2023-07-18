import React from "react";
import Link from "next/link";

type CustomLinkProps = {
  name: string;
  href: string;
  isActive: boolean;
};
const CustomLink = ({ name, href, isActive }: CustomLinkProps) => {
  return (
    <Link href={href} className="group relative">
      {name}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-1 bg-primary transition-[width] duration-200 group-hover:w-full ${
          isActive ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
