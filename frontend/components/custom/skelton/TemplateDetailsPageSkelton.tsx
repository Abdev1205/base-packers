import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TemplateDetailsPageSkelton = () => {
  return (
    <div className="text-white flex flex-col px-[5rem]">
      <div className="flex flex-col my-[2rem] rounded-[.8rem] bg-[#171717] w-full p-[1.5rem] relative">
        {/* Content starts here */}
        <div className="flex flex-col  gap-[.5rem]">
          <Skeleton className="h-[2rem] w-[60%] rounded" />
          <Skeleton className="h-[1rem] w-[90%] rounded mt-2" />
          <Skeleton className="h-[1rem] w-[80%] rounded mt-1" />

          <div className="flex flex-col gap-[1rem] mt-[.7rem]">
            {/* Author and Stars */}
            <div className="flex items-center gap-3">
              <Skeleton className="h-[1.7rem] w-[1.7rem] rounded-full" />
              <div className="flex flex-col justify-center gap-[0.3rem]">
                <Skeleton className="h-[0.7rem] w-[5rem] rounded" />
                <Skeleton className="h-[0.6rem] w-[4rem] rounded mt-1" />
              </div>
              <div className="flex items-center gap-[.3rem]">
                <Skeleton className="h-[0.9rem] w-[0.9rem] rounded" />
                <Skeleton className="h-[0.7rem] w-[2rem] rounded ml-1" />
              </div>
              <div className="flex items-center gap-[.3rem]">
                <Skeleton className="h-[0.9rem] w-[0.9rem] rounded" />
                <Skeleton className="h-[0.7rem] w-[3rem] rounded ml-1" />
              </div>
            </div>

            <div className="flex items-center w-full justify-between gap-4">
              <Skeleton className="h-[1rem] w-[30%] rounded" />
              <Skeleton className="h-[2rem] w-[6rem] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="my-[2rem] p-[1.5rem] rounded-[1rem] bg-[#171717]">
          {/* Title Skeleton */}
          <Skeleton className="h-[2rem] w-[17rem] rounded-lg mb-[1rem]" />

          {/* Paragraph Skeletons */}
          <Skeleton className="h-[1rem] w-[12rem] rounded-lg mb-[1rem]" />

          <div className="flex flex-col gap-[1rem] mt-[2.7rem]">
            <Skeleton className="h-[6.2rem] w-[100%] rounded-lg mb-[1rem]" />
          </div>
          <Skeleton className="h-[1.2rem] w-[10rem] rounded-lg mb-[1rem]" />
          <Skeleton className="h-[1.2rem] w-[10rem] rounded-lg mb-[1rem]" />

          {/* Additional Content (e.g., button, small elements) */}
          <Skeleton className="h-[7rem] w-[80%] mt-[5rem] rounded-lg " />
        </div>
      </div>
    </div>
  );
};

export default TemplateDetailsPageSkelton;
