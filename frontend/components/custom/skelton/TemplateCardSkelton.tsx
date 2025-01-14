import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TemplateCardSkelton = () => {
  return (
    <div className="cursor-pointer flex-col w-[20rem] h-[13rem] relative p-6 bg-[#171717] text-white shadow-2xl rounded-lg">
      {/* Header Skeleton */}
      <div className="flex flex-col gap-[.4rem] z-[5] justify-between items-start min-w-[90%]">
        <Skeleton className="w-[80%] h-[2rem]" />
        <Skeleton className="w-[60%] h-[1rem] mt-[.3rem] " />
      </div>

      {/* Footer Skeleton */}
      <div className="flex flex-col justify-center gap-[1rem] mt-[.7rem]">
        {/* Author and Stars Skeleton */}
        <div className="flex  items-center gap-3">
          <Skeleton className="size-[1.7rem] rounded-full" />
          <div className="flex flex-col justify-center">
            <Skeleton className="w-[4rem] h-[0.7rem]" />
            <Skeleton className="w-[3rem] h-[0.6rem] mt-1" />
          </div>

          <div className="flex items-center gap-[.3rem]">
            <Skeleton className="w-[1rem] h-[1rem] rounded" />
            <Skeleton className="w-[2rem] h-[0.7rem]" />
          </div>

          <div className="flex items-center  gap-[.1rem]">
            <Skeleton className="w-[1rem] h-[1rem] rounded" />
            <Skeleton className="w-[4rem] h-[0.7rem] " />
          </div>
        </div>

        <div className="flex items-center w-full justify-between gap-4">
          <div className="flex items-center  ">
            <div className="size-[1.8rem] bg-neutral-800 rounded-full mr-[-.5rem] " />
            <div className=" size-[1.8rem] bg-neutral-800 rounded-full mr-[-.5rem] " />
            <div className=" size-[1.8rem] bg-neutral-800 rounded-full mr-[-.5rem]" />
            <div className=" size-[1.8rem] bg-neutral-800 rounded-full mr-[-.5rem]" />
          </div>

          <Skeleton className="w-[6rem] h-[2.1rem] rounded-full" />
        </div>
      </div>
    </div>
  );
};

const TemplateCardSkeltonPage = () => {
  return (
    <>
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <TemplateCardSkelton key={index} />
        ))}
    </>
  );
};

export default TemplateCardSkeltonPage;
