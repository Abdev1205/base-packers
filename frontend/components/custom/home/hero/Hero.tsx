import React from "react";
import HeroBackground from "../../background/HeroBackground";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const Hero = () => {
  const words = ["Developer", "Startup", "Freelancer", "Innovator"];
  const people = [
    {
      id: 1,
      name: "JavaScript",
      image: "https://i.postimg.cc/TY9H1Zbs/image.png",
    },
    {
      id: 2,
      name: "Node JS",
      image: "https://i.postimg.cc/KctWSK8x/nodejs-inner.webp",
    },
    {
      id: 3,
      name: "MongoDB",
      image:
        "https://i.postimg.cc/tRKGjQbG/d6e4b7bd3a0ae010ed3107618ee5128f5c6d919f-400x400.png",
    },
    {
      id: 4,
      name: "Next JS",
      image: "https://i.postimg.cc/W3qYWzhF/image.jpg",
    },
    {
      id: 5,
      name: "PostgreSQL",
      image: "https://i.postimg.cc/SQ73wXgC/postgress-logo.webp",
    },
    {
      id: 6,
      name: "Tailwind CSS",
      image: "https://i.postimg.cc/rpwSgwf1/plus-tailwind.jpg",
    },
  ];

  return (
    <div>
      <HeroBackground>
        <div className="w-full relative h-[100vh] flex flex-col justify-center items-center">
          <Spotlight className="-top-40 left-0" fill="white" />

          <AnimatedGradientText className="bg-transparent mb-[1rem] ">
            🎉
            <span
              className={`inline ml-[.3rem] animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`}
            >
              Simplify Your Development
            </span>
            <ChevronRight className="ml-1 size-3 text-white/70 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>

          <div className="text-center relative w-[66rem] flex flex-col">
            <span className="  bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text leading-none tracking-tighter text-transparent text-[5rem]  animate-fade-in py-[1rem] [--animation-delay:200ms] font-poppins font-[600] w-full">
              Ready-to-Go Starter Kits for
            </span>
            <span className=" relative bg-gradient-to-br  from-white from-30% to-white/40 bg-clip-text leading-none tracking-tighter text-transparent text-[5rem]  animate-fade-in [--animation-delay:200ms] font-poppins font-[600] mx-auto left-[-8rem] ">
              Every{" "}
              <span className=" w-fit absolute ml-[1rem] ">
                <TextGenerateEffect words={words} className="   " />
              </span>
            </span>

            <p className=" text-white/90 font-montserrat font-[300] w-[40rem] mx-auto text-[.93rem] mt-[2rem] ">
              Discover curated starter templates for every tech stack. With Base
              Packer, kickstart your projects in minutes and focus on building,
              not setup.
            </p>

            <div className="flex flex-col gap-[.4rem] items-center justify-center mt-[1.5rem] w-full">
              <div className="flex flex-row items-center justify-center">
                <AnimatedTooltip items={people} />
              </div>
              <div className="flex flex-col  items-center justify-center ml-[2rem] ">
                <p className=" text-white/80  ">
                  Powering Ideas with 100+ Tools
                </p>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            {/* <p className=" text-white/80 mt-[.5rem]  ">
              Powering Ideas with 100+ Tools
            </p> */}
            <Link
              href="/templates"
              className="bg-neutral-900 mt-[2rem] relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-montserrat font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] w-fit mx-auto "
            >
              Explore Starter Kits ✨
            </Link>
          </div>
        </div>
      </HeroBackground>
    </div>
  );
};

export default Hero;
