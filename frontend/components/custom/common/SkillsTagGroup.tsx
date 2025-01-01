"use client";

import Image from "next/image";
import React from "react";

interface SkillsTagGroupProps {
  items: {
    id: number;
    name: string;
    image: string;
  }[];
  maxVisible?: number; // Maximum number of avatars to show before the +X tag
}

const SkillsTagGroup: React.FC<SkillsTagGroupProps> = ({
  items,
  maxVisible = 4,
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
          {/* <AnimatePresence mode="popLayout">
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black  z-50 shadow-xl px-4 py-2"
            >
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
              <div className="font-bold text-white relative z-30 text-base">
                {item.name}
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
          <Image
            // onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-[2rem] w-[2rem] border-[1px]  group-hover:z-30 border-[#3C3A3A] shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500  "
          />
        </div>
      ))}

      {remainingCount > 0 && (
        <div className="flex items-center justify-center size-[2rem] border border-[#3C3A3A] rounded-full bg-[#222] text-white/60 text-[.68rem] ">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default SkillsTagGroup;
