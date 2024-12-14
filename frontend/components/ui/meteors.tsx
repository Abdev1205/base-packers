"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number; // Number of meteors
}

const Meteors: React.FC<MeteorsProps> = ({ number = 20 }) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const generateStyles = () =>
        Array.from({ length: number }, () => ({
          top: "-10px", // Ensure it starts off-screen
          left: `${Math.random() * window.innerWidth}px`,
          animationDelay: `${Math.random() * 1 + 0.2}s`,
          animationDuration: `${Math.random() * 8 + 2}s`,
        }));

      setMeteorStyles(generateStyles());
    }
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "h-1 w-1" // Ensures a consistent size for meteor heads
          )}
          style={style}
        >
          <div className="pointer-events-none absolute top-1/2 left-0 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

export default Meteors;
