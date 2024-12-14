"use client";

import RocketAnimation from "@/components/custom/animation/RocketAnimation";
import dynamic from "next/dynamic";
import ShimmerButton from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Particles = dynamic(() => import("../components/ui/particles"), {
  ssr: false,
});
const Meteors = dynamic(() => import("@/components/ui/meteors"), {
  ssr: false,
});

const AnimatedGradientText = dynamic(
  () => import("@/components/ui/animated-gradient-text")
);

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center w-full overflow-hidden items-center min-h-screen p-8 gap-16 bg-black text-white">
      {/* Particles Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full inset-0"
        quantity={150}
        ease={80}
        refresh
      />

      {/* Meteors Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Meteors number={30} />
      </div>

      <div className="flex justify-center absolute z-[1] right-[10rem] ">
        <RocketAnimation />
      </div>

      <main className="relative flex flex-col items-center gap-8 z-10">
        {/* Heading Section */}
        <AnimatedGradientText className=" bg-transparent ">
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Introducing Base Packer
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        <h2 className=" text-[3rem] text-white/80 font-montserrat font-[700] text-center">
          Welcome to Base Packer!
        </h2>
        <p className=" text-center text-white/80 text-[.9rem] font-openSans   ">
          A community-driven platform for sharing starter packages and
          templates.
        </p>

        {/* Image Section */}

        {/* Coming Soon Message */}
        <p className="text-xl text-center text-white/60 mt-4">
          We're launching soon. Stay tuned!
        </p>

        {/* Buttons Section */}
        <div className="flex gap-6 items-center mt-8">
          {/* Shimmer Button */}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe0d3IyuSC-RW4C_ZYFf8YZ24rGr_Et_w8vD-ggVFiKubgJNg/viewform?usp=dialog"
            target="_blank"
          >
            <ShimmerButton
              background="#008cff"
              shimmerColor="#FEEC37"
              className="rounded-full  shadow__btn  px-6 py-3 font-openSans  active:scale-95 transition-all duration-200 ease-in-out"
            >
              Join Us Now
            </ShimmerButton>
          </Link>
        </div>
      </main>
    </div>
  );
}
