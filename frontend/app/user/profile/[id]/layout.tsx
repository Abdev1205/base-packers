import Footer from "@/components/custom/common/footer/Footer";
import Navbar from "@/components/custom/common/nav/Navbar";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import React from "react";

const UserPrivateProfileLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full bg-black ">
      <Navbar primary={false} />
      <HeroHighlight
        containerClassName="  bg-black  h-full   w-full  top-0 left-0 z-[10] "
        mouseAnimation={false}
        className=" w-full  "
      >
        <div className=" w-full   mt-[4rem] overflow-y-auto ">{children}</div>
        <Footer />
      </HeroHighlight>
    </div>
  );
};

export default UserPrivateProfileLayout;
