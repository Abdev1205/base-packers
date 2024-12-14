import { RocketAnimationJson } from "@/public/assetsManager";
import Lottie from "lottie-react";

const RocketAnimation = () => {
  return (
    <div className="  flex mx-auto justify-center   ">
      <Lottie animationData={RocketAnimationJson} autoplay={true} loop={true} />
    </div>
  );
};

export default RocketAnimation;
