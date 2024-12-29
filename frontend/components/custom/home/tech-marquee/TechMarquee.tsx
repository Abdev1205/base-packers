import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import React from "react";
import { techStack } from "@/constants/constant";

const rows = [
  techStack.slice(0, Math.ceil(techStack.length / 3)),
  techStack.slice(
    Math.ceil(techStack.length / 3),
    2 * Math.ceil(techStack.length / 3)
  ),
  techStack.slice(
    2 * Math.ceil(techStack.length / 3),
    3 * Math.ceil(techStack.length / 3)
  ),
  techStack.slice(3 * Math.ceil(techStack.length / 3)),
];

const TechCard = ({ logo, name }: { logo: string; name: string }) => {
  return (
    <div
      className={cn(
        "relative w-24 h-24 cursor-pointer overflow-hidden rounded-xl border flex items-center justify-center",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <img className="max-w-[80%] max-h-[80%]" alt={name} src={logo} />
    </div>
  );
};

const TechMarquee = () => {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden">
      <div className="text-center relative w-[66rem] flex flex-col">
        <span className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text leading-none tracking-tighter text-transparent text-[2.5rem] mt-[2rem] mb-[4rem] animate-fade-in py-[1rem] [--animation-delay:200ms] font-poppins font-[600] w-full">
          Powered by Popular Tech Stack
        </span>
      </div>

      {rows.map((row, index) => (
        <Marquee
          key={index}
          pauseOnHover
          className="[--duration:20s]"
          reverse={index % 2 !== 0}
        >
          {row.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
      ))}

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default TechMarquee;
