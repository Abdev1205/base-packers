"use client";

import { SkillTagtype } from "@/types";
import Image from "next/image";
import React from "react";

export interface SkillTag {
  id: string | number;
  name: string;
  imageUrl: string;
  createdAt?: string;
  updatedAt?: string;
  tagValue?: string;
}

export interface SkillsTagGroupProps {
  items: SkillTagtype[];
  maxVisible?: number;
  preview?: boolean;
}

const SkillsTagGroup: React.FC<SkillsTagGroupProps> = ({
  items,
  maxVisible = 4,
  preview = false,
}) => {
  // Determine the visible items and the count of remaining items
  const visibleItems = items.slice(0, maxVisible);
  const remainingCount = items.length - maxVisible;

  return (
    <div className="flex items-center gap-2">
      {visibleItems.map((item) => (
        <div
          className="-mr-4  relative group"
          key={item.name}
          // onMouseEnter={() => setHoveredIndex(item.id)}
          // onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image
            // onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.imageUrl}
            alt={item.name}
            className={`  rounded-full  border-[1px]  group-hover:z-30 border-[#3C3A3A] shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500 bg-neutral-800 ${
              preview
                ? "w-[2.3rem] h-[2.3rem] object-scale-down "
                : "w-[2rem] h-[2rem] object-cover"
            }   `}
          />
        </div>
      ))}

      {remainingCount > 0 && (
        <div
          className={`flex items-center justify-center  border border-[#3C3A3A] rounded-full bg-[#222] text-white/60  ${
            preview
              ? "w-[2.3rem] h-[2.3rem] text-[.8rem] "
              : "w-[2rem] h-[2rem] text-[.68rem] "
          }  `}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default SkillsTagGroup;
