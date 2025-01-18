import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const UserProfileHeroSkeleton = () => {
  return (
    <div className="flex gap-[1rem] w-full mt-[3rem] justify-center items-center relative z-[10] rounded-lg bg-[#171717]">
      {/* Banner Image Skeleton */}
      <div className="w-full h-[12rem] bg-[#171717] absolute  rounded-lg z-[5]">
        <Skeleton className="w-full h-full rounded-lg" />
      </div>

      {/* Avatar Skeleton */}
      <div className="size-[9rem] rounded-full bg-[#303030] z-[20] absolute top-[3.5rem] left-[2rem] overflow-hidden">
        <Skeleton className="w-full h-full rounded-full" />
      </div>

      {/* Base Packer data Skeleton */}
      <div className="flex z-[20]">
        <div className="flex items-center gap-[.5rem]">
          <Skeleton className="w-[6.5rem] h-[6.5rem] rounded-full" />
          <Skeleton className="w-[10rem] h-[2rem]" />
        </div>
      </div>

      {/* Author and Stars Skeleton */}
      <div className="flex flex-col z-[20] absolute right-[.5rem] top-[6rem]">
        <Skeleton className="w-[8rem] h-[1.2rem]" />
        {/* <Skeleton className="w-[6rem] h-[1.2rem] mt-[2rem]" /> */}
      </div>
    </div>
  );
};

export default UserProfileHeroSkeleton;
