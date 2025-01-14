import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const UserInfoStatsSkeleton = () => {
  return (
    <div className="flex gap-[2rem] justify-between w-full mt-[8rem]">
      <div className="flex flex-col gap-[.5rem] w-[20rem] bg-[#262626] p-[1.2rem] rounded-[.8rem]">
        <Skeleton className="h-[1.3rem] w-[10rem]" />
        <Skeleton className="h-[.8rem] w-[15rem] mt-[.5rem]" />

        <div className="mt-[.3rem] border-t-[1px] border-neutral-700/70">
          <div className="mt-[1rem] flex items-center gap-[.5rem]">
            <Skeleton className="w-[1.5rem] h-[1.5rem] rounded-full" />
            <Skeleton className="h-[1rem] w-[10rem]" />
          </div>
          <Skeleton className="h-[.9rem] w-full mt-[.5rem]" />
        </div>
      </div>

      <div className="flex w-[calc(100%-20rem)] gap-[2rem]">
        <div className="w-[15rem] flex justify-center gap-[1rem] flex-col relative bg-[#262626] p-[1.5rem] rounded-[.8rem] h-full">
          <Skeleton className="h-[6rem] w-full " />
          <Skeleton className="h-[1rem] w-full " />
        </div>

        <div className="w-[15rem] flex justify-center gap-[1rem] flex-col relative bg-[#262626] p-[1.5rem] rounded-[.8rem] h-full">
          <Skeleton className="h-[6rem] w-full " />
          <Skeleton className="h-[1rem] w-full " />
        </div>

        <div className="w-[15rem] flex justify-center gap-[1rem] flex-col relative bg-[#262626] p-[1.5rem] rounded-[.8rem] h-full">
          <Skeleton className="h-[6rem] w-full " />
          <Skeleton className="h-[1rem] w-full " />
        </div>
      </div>
    </div>
  );
};

export default UserInfoStatsSkeleton;
