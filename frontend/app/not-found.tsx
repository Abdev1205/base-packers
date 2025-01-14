"use client";

import Footer from "@/components/custom/common/footer/Footer";
import Navbar from "@/components/custom/common/nav/Navbar";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import assets from "@/public/assetsManager";
import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="w-full bg-black ">
      <Navbar primary={false} />
      <HeroHighlight
        containerClassName="  bg-black  h-full   w-full  top-0 left-0 z-[10] "
        mouseAnimation={false}
        className=" w-full  "
      >
        <div className=" w-full flex flex-col items-center   mt-[4rem] min-h-[80vh] overflow-y-auto ">
          <Image
            src={assets.NotFoundImage}
            alt="not found"
            className=" w-[30rem] mt-[3rem] "
          />
          <div className="text-center relative flex flex-col">
            <span className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text leading-none tracking-tighter text-transparent text-[2.5rem] mt-[2rem] mb-[4rem] animate-fade-in py-[1rem] [--animation-delay:200ms] font-poppins font-[600] w-full">
              Page Not Found
            </span>
          </div>

          {/* <NotFoundAnimation /> */}
        </div>
        <Footer />
      </HeroHighlight>
    </div>
  );
};

export default NotFoundPage;
