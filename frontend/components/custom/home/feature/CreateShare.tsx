"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Image from "next/image";
import { LogoImage } from "@/public/assetsManager";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full  bg-transparent shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function CreateShare({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);
  const div12Ref = useRef<HTMLDivElement>(null);

  const skills = [
    {
      id: 1,
      name: "React Js",
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
      name: "Github",
      image: "https://i.postimg.cc/qM7DbbKP/github-6980894-640.png",
    },
    {
      id: 7,
      name: "Bash packer",
      image: LogoImage,
    },
    {
      id: 8,
      name: "u1",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 9,
      name: "u2",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 10,
      name: "u3",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 11,
      name: "u4",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 12,
      name: "u5",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
  ];

  return (
    <div
      className={cn(
        "relative flex  w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10 md:shadow-xl",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between  max-w-lg">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Image
              height={100}
              width={100}
              src={skills[0].image}
              alt={skills[0].name}
              className=" object-cover rounded-full h-full w-full group-hover:scale-105 group-hover:z-30 border-white/40 shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500  "
            />
          </Circle>
          <Circle ref={div2Ref}>
            <Image
              height={100}
              width={100}
              src={skills[1].image}
              alt={skills[1].name}
              className="object-cover rounded-full h-full w-full group-hover:scale-105 group-hover:z-30 border-white/40 shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500  "
            />
          </Circle>
          <Circle ref={div3Ref}>
            <Image
              height={100}
              width={100}
              src={skills[2].image}
              alt={skills[2].name}
              className="object-cover rounded-full h-full w-full group-hover:scale-105 group-hover:z-30 border-white/40 shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500  "
            />
          </Circle>
          <Circle ref={div4Ref}>
            <Image
              height={100}
              width={100}
              src={skills[3].image}
              alt={skills[3].name}
              className="object-cover rounded-full h-full w-full group-hover:scale-105 group-hover:z-30 border-white/40 shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500  "
            />
          </Circle>
          <Circle ref={div5Ref}>
            <Image
              height={100}
              width={100}
              src={skills[4].image}
              alt={skills[4].name}
              className="object-cover rounded-full h-full w-full group-hover:scale-105 group-hover:z-30 border-white/40 shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500  "
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref}>
            <Image
              height={100}
              width={100}
              src={skills[5].image}
              alt={skills[5].name}
              className="object-cover rounded-full h-full w-full group-hover:scale-105 group-hover:z-30 border-white/40 shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500  "
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="size-16">
            <Image
              height={100}
              width={100}
              src={skills[6].image}
              alt={skills[6].name}
              className="object-cover rounded-full h-full w-full group-hover:scale-105 group-hover:z-30  relative transition duration-500  "
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div8Ref}>
            <Image
              height={100}
              width={100}
              src={skills[7].image}
              alt={skills[7].name}
              className="object-cover rounded-full size-8 group-hover:scale-105 group-hover:z-30 border-white/40 shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500  "
            />
          </Circle>
          <Circle ref={div9Ref}>
            <Image
              height={100}
              width={100}
              src={skills[8].image}
              alt={skills[8].name}
              className="object-cover rounded-full size-8 group-hover:scale-105 group-hover:z-30 border-white/40 shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500  "
            />
          </Circle>

          <Circle ref={div10Ref}>
            <Image
              height={100}
              width={100}
              src={skills[9].image}
              alt={skills[9].name}
              className="object-cover rounded-full size-8 group-hover:scale-105 group-hover:z-30 border-white/40 shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500  "
            />
          </Circle>

          <Circle ref={div11Ref}>
            <Image
              height={100}
              width={100}
              src={skills[10].image}
              alt={skills[10].name}
              className="object-cover rounded-full size-8 group-hover:scale-105 group-hover:z-30 border-white/40 shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500  "
            />
          </Circle>
          <Circle ref={div12Ref}>
            <Image
              height={100}
              width={100}
              src={skills[11].image}
              alt={skills[11].name}
              className="object-cover rounded-full size-8 group-hover:scale-105 group-hover:z-30 border-white/40 shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500  "
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div8Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div9Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div10Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div11Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div12Ref}
      />
    </div>
  );
}
