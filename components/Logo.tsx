import React from "react";
import logoSvg from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="inline-block rounded-full border border-primary p-2">
      <Link href="/">
        <Image
          src={logoSvg}
          alt="Logo"
          width={30}
          height={30}
          className="invert"
        />
      </Link>
    </div>
  );
};

export default Logo;
