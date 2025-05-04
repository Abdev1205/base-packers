"use client";

import dynamic from "next/dynamic";
// const ShineBorder = dynamic(() => import("@/components/magicui/shine-border"), { ssr: false });
import React, { useRef, useEffect } from "react";
const ShineBorder = dynamic(
  () =>
    import("@/components/magicui/shine-border").then((mod) => mod.ShineBorder),
  {
    ssr: false,
  }
);
interface VideoFeatureProps {
  duration?: number;
  videoPath?: string;
  autoplay?: boolean;
}

const VideoFeature = ({
  duration = 10,
  videoPath = "/assets/home/filter-skill-feature.mp4",
  autoplay = true,
}: VideoFeatureProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();

      // Handle autoplay with muted to comply with browser policies
      if (autoplay) {
        // Many browsers require videos to be muted for autoplay
        videoRef.current.muted = true;

        // Try to play the video
        const playPromise = videoRef.current.play();

        // Handle play promise to avoid uncaught promise errors
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Auto-play was prevented:", error);
          });
        }
      }
    }
  }, [autoplay]);

  return (
    <div className="w-full h-full flex flex-col blue-glow-bg">
      <div className="flex items-center justify-center w-full h-full rounded-lg   ">
        <video ref={videoRef} className="w-full h-full " playsInline loop muted>
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoFeature;
