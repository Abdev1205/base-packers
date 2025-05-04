"use client";

import React, { useState, useEffect, useRef } from "react";
import { CreateShare } from "./CreateShare";
import dynamic from "next/dynamic";
import FeatureDemo from "./FeatureDemo";

// Use dynamic import with no SSR to avoid hydration issues
const VideoFeature = dynamic(() => import("./VideoFeature"), { ssr: false });

const TabbedCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(true);
  const carouselRef = useRef(null);

  const slideDurations = [31, 29, 10, 8];

  const content = [
    {
      title: "Create and Share Templates",
      description:
        "Easily link GitHub repositories to create and share starter packages with auto-fetched details.",
      type: "component",
      src: "https://app.supademo.com/embed/cma8ey8kn5oei13m0nhr2asfj?embed_v=2",
      duration: slideDurations[0],
    },
    {
      title: "Discover Tailored Templates",
      description:
        "Find templates curated for your tech stack using filters and tags for quick discovery.",
      type: "component",
      src: "https://app.supademo.com/embed/cma88w0215mv613m0yme9lpmt?v_email=EMAIL&embed_v=2",
      duration: slideDurations[1],
    },
    {
      title: "Save and Spotlight",
      description:
        "Bookmark favorite templates and spotlight standout repositories for easy access.",
      type: "component",
      src: "https://app.supademo.com/embed/cma9lc8co5w8e13m06wfsblce?v_email=EMAIL&embed_v=2",
      duration: slideDurations[2],
    },
    {
      title: "Seamless Documentation Access",
      description:
        "Quickly view guides, usage instructions, and notes with our embedded markdown viewer.",
      type: "component",
      src: "https://app.supademo.com/embed/cma9lnjpg5wig13m0uba29iot?v_email=EMAIL&embed_v=2",
      duration: slideDurations[3],
    },
  ];

  useEffect(() => {
    setProgress(0);
  }, [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  const currentSlideDuration = content[activeIndex]?.duration || 10;

  useEffect(() => {
    if (!isInView || !isAutoAdvancing) return;

    // Calculate the interval based on current slide's duration
    const intervalDuration = (currentSlideDuration * 1000) / 100;

    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1);
      } else {
        setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
        setProgress(0);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [
    progress,
    isInView,
    isAutoAdvancing,
    content.length,
    currentSlideDuration,
  ]);

  const handleTabClick = (index: any) => {
    setActiveIndex(index);
    setProgress(0);

    setIsAutoAdvancing(false);
    const timer = setTimeout(() => setIsAutoAdvancing(true), 10000);
    return () => clearTimeout(timer);
  };

  return (
    <div ref={carouselRef} className="flex h-screen mt-[8rem] px-[5rem]">
      <div className="mx-auto w-full">
        <div className="w-full justify-center text-center">
          <span className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text leading-none tracking-tighter text-transparent text-[2.5rem] mt-[2rem] mb-[4rem] animate-fade-in py-[1rem] [--animation-delay:200ms] font-poppins font-[600] w-full">
            What We Offer
          </span>
        </div>

        <div className="flex mt-[5rem] gap-16">
          <div className="w-[40%] cursor-pointer text-white flex flex-col justify-center">
            {content.map((item, index) => (
              <div
                onClick={() => handleTabClick(index)}
                key={index}
                className="flex h-[8rem] items-center gap-6"
              >
                <div
                  className={`w-2 h-24 rounded-full relative overflow-hidden ${
                    index === activeIndex ? "bg-gray-800" : "bg-transparent"
                  }`}
                >
                  {index === activeIndex && (
                    <div
                      className="absolute top-0 left-0 w-full bg-[#008cff] rounded-full transition-all duration-500"
                      style={{
                        height: `${progress}%`,
                      }}
                    />
                  )}
                </div>
                <div className="space-y-2">
                  <h3
                    className={`text-xl font-medium ${
                      index === activeIndex
                        ? "text-white"
                        : "text-gray-500 hover:text-white/80"
                    } font-openSans text-[1.3rem] duration-200`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#8a8a8a] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[60%] relative rounded-xl overflow-hidden h-fit min-h-[35rem]">
            {/* Only render the active content */}
            <div className="w-full h-full bg-transparent flex items-center">
              {content[activeIndex].type === "component" && (
                <FeatureDemo
                  src={content[activeIndex].src}
                  key={`demo-${activeIndex}`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabbedCarousel;
