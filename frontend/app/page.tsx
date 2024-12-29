import Navbar from "@/components/custom/common/nav/Navbar";
import Hero from "@/components/custom/home/hero/Hero";
import TechMarquee from "@/components/custom/home/tech-marquee/TechMarquee";
import React from "react";

const Home = () => {
  return (
    <div className=" bg-black ">
      <Navbar />
      <Hero />
      <TechMarquee />

      <div className=" h-[200vh] "></div>
    </div>
  );
};

export default Home;
