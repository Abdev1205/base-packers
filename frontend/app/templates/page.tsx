import { HeroHighlight } from "@/components/ui/hero-highlight";
import React from "react";

const TemplatePage = () => {
  return (
    <div className=" flex-col w-full flex items-center justify-center  ">
      <h2 className=" text-white bg-red-500 w-fit h-fit ">
        Hello fromm the Template Page
      </h2>
      <div className=" h-[100vh] w-full   "></div>
      <div className=" h-[100vh] w-full  "></div>
    </div>
  );
};

export default TemplatePage;
