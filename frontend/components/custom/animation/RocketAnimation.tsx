"use client";

import assets from "@/public/assetsManager";
import Lottie from "lottie-react";

const RocketAnimation = () => {
  return (
    <div className="  flex mx-auto justify-center   ">
      <Lottie
        animationData={assets.animation.RocketAnimationJson}
        autoplay={true}
        loop={true}
      />
    </div>
  );
};

export default RocketAnimation;
