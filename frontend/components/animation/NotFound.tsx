import { cn } from "@/lib/utils";
import assets from "@/public/assetsManager";
import React from "react";
import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
const NotFoundAnimation = ({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col h-[calc(100vh-10rem)] w-full items-center justify-center mx-auto mt-[-3rem]  ",
        containerClassName
      )}
    >
      <div className={cn(" w-[35rem]   z-10 z-index-10 ", className)}>
        <DynamicLottie
          animationData={assets.animation.NotFoundLottie}
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

export default NotFoundAnimation;
