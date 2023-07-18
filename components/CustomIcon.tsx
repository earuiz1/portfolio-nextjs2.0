import React from "react";
import Link from "next/link";

type IconProps = {
  name: React.ReactNode;
  href: string;
};

const CustomIcon = ({ name, href }: IconProps) => {
  return (
    <div className="rounded-full bg-primary p-2">
      <Link href={href}>{name}</Link>
    </div>
  );
};

export default CustomIcon;
