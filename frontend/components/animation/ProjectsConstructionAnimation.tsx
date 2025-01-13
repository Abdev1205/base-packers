"use client";

import assets from "@/public/assetsManager";
import Lottie from "lottie-react";

const ProjectsConstructionAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-[-3rem]  ">
      <div className=" w-[28rem]   z-10 z-index-10 ">
        <Lottie
          animationData={assets.animation.ProjectUnderConstruction}
          autoplay={true}
          loop={true}
          className="z-10 z-index-10"
        />
      </div>
    </div>
  );
};

export default ProjectsConstructionAnimation;
