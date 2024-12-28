import Navbar from "@/components/custom/common/nav/Navbar";
import Hero from "@/components/custom/home/hero/Hero";
import React from "react";

const Home = () => {
  return (
    <div className=" bg-black ">
      <Navbar />
      <Hero />

      <div className=" h-[200vh] "></div>
    </div>
  );
};

export default Home;
