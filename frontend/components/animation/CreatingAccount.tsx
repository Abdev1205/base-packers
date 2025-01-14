"use client";

import assets from "@/public/assetsManager";
import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

const CreatingAccount = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto   ">
      <div className=" w-[28rem]    z-10 z-index-10 ">
        <DynamicLottie
          animationData={assets.animation.CreatingAccountLottie}
          autoplay={true}
          loop={true}
          className="z-10 z-index-10"
        />
      </div>
    </div>
  );
};

export default CreatingAccount;
