import Footer from "@/components/custom/common/footer/Footer";
import Navbar from "@/components/custom/common/nav/Navbar";
import Faq from "@/components/custom/home/Faq";
import { FeatureBento } from "@/components/custom/home/feature/Feature";
import TabbedCarousel from "@/components/custom/home/feature/TabbedCarousel";
import Hero from "@/components/custom/home/hero/Hero";
import TechMarquee from "@/components/custom/home/tech-marquee/TechMarquee";
import UserFeedback from "@/components/custom/home/UserFeedback";
import React from "react";

const Home = () => {
  return (
    <div className=" bg-black ">
      <Navbar />
      <Hero />
      <TechMarquee />
      {/* <FeatureBento /> */}
      <TabbedCarousel />
      <UserFeedback />
      <Faq />
      <Footer />
      {/* <div className=" h-[200vh] "></div> */}
    </div>
  );
};

export default Home;
