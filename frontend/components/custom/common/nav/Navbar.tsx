"use client";

import { LogoImage } from "@/public/assetsManager";
import Image from "next/image";
import React from "react";
import { SingleLink } from "./SingleLink";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className=" supports-backdrop-blur:bg-background/90 fixed w-full  top-0 z-50 bg-background/90 backdrop-blur-lg md:bg-background/40 flex justify-between h-[4rem] px-[5rem] ">
      <div className="  flex items-center gap-[.5rem] ">
        <Image src={LogoImage} alt="logo" className=" w-[2.5rem] " />
        <h2 className=" text-white/80 font-poppins font-[400] text-[1.4rem] ">
          Base Packers
        </h2>
      </div>

      <div className=" flex items-center  ">
        <SingleLink label="Home" path="/" />
        <SingleLink label="Templates" path="/templates" />
        <SingleLink label="Contribute" path="/contribute" />
        <SingleLink label="Blog" path="/blogs" />
        <SingleLink label="Contact" path="/contact" />
        <Button className=" bg-neutral-900 ml-[3rem] relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] ">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
