import Navbar from "@/components/custom/common/nav/Navbar";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import React from "react";

const ContributeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-black ">
      <Navbar primary={false} />
      <HeroHighlight
        containerClassName="  bg-black  h-[100vh] w-full absolute top-0 left-0 z-[10] "
        mouseAnimation={false}
        className=" w-full "
      >
        <div className=" w-full h-[calc(100vh-4rem)] mt-[4rem] overflow-y-auto ">
          {children}
        </div>
      </HeroHighlight>
    </div>
  );
};

export default ContributeLayout;
