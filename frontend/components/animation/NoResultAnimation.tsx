import assets from "@/public/assetsManager";
import Lottie from "lottie-react";
import React from "react";

const NoResultAnimation = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] w-full items-center justify-center mx-auto mt-[-3rem]  ">
      <div className=" w-[35rem]   z-10 z-index-10 ">
        <Lottie
          animationData={assets.animation.NoResultLottie}
          autoplay={true}
          loop={true}
          className="z-10 z-index-10"
        />

        <div className="text-center relative w-full  flex flex-col">
          <span className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text leading-none tracking-tighter text-transparent text-[1.8rem] mt-[1rem]   animate-fade-in py-[1rem] [--animation-delay:200ms] font-poppins font-[600] w-full">
            No Result found for your search
          </span>
        </div>
      </div>
    </div>
  );
};

export default NoResultAnimation;
