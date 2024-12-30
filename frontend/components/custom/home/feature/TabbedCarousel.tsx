"use client";

import React, { useState, useEffect, useRef } from "react";
import { CreateShare } from "./CreateShare";

const TabbedCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef(null);

  const content = [
    {
      title: "Create and Share Templates",
      description:
        "Easily link GitHub repositories to create and share starter packages with auto-fetched details.",
      type: "component",
      component: <CreateShare />,
    },
    {
      title: "Discover Tailored Templates",
      description:
        "Find templates curated for your tech stack using filters and tags for quick discovery.",
      type: "image",
      image: "/api/placeholder/800/600",
    },
    {
      title: "Save and Spotlight",
      description:
        "Bookmark favorite templates and spotlight standout repositories for easy access.",
      type: "image",
      image: "/api/placeholder/800/600",
    },
    {
      title: "Seamless Documentation Access",
      description:
        "Quickly view guides, usage instructions, and notes with our embedded markdown viewer.",
      type: "image",
      image: "/api/placeholder/800/600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold to control how much of the component must be visible
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

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1);
      } else {
        setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
        setProgress(0);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress, isInView, content.length]);

  return (
    <div ref={carouselRef} className="flex h-screen mt-[8rem] px-[5rem] ">
      <div className=" mx-auto  w-full">
        <div className=" w-full  justify-center text-center ">
          <span className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text leading-none tracking-tighter text-transparent text-[2.5rem] mt-[2rem] mb-[4rem] animate-fade-in py-[1rem] [--animation-delay:200ms] font-poppins font-[600] w-full">
            What We Offer
          </span>
        </div>

        <div className="flex mt-[5rem] gap-16">
          <div className="w-[40%] cursor-pointer text-white flex flex-col justify-center">
            {content.map((item, index) => (
              <div
                onClick={() => {
                  setActiveIndex(index);
                  setProgress(0);
                }}
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
                        : "text-gray-500 hover:text-white/80  "
                    } font-openSans text-[1.3rem] duration-200 `}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#8a8a8a] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[60%] relative rounded-xl overflow-hidden">
            {content.map((item, index) => (
              <div
                key={index}
                className={` flex h-full inset-0  transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Placeholder for images */}
                {item.type === "image" && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Placeholder for components */}
                {item.type === "component" && item.component}
                {/* <div className="w-full h-full bg-white"></div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabbedCarousel;
