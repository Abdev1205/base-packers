"use client";

import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  wordInterval = 3000,
}: {
  words: string[];
  className?: string;
  filter?: boolean;
  duration?: number;
  wordInterval?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [key, setKey] = useState(0); // Force re-render on word change

  useEffect(() => {
    // Cycle through words at the given interval
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % words.length;
        setKey((prevKey) => prevKey + 1); // Update key to force re-render
        return newIndex;
      });
    }, wordInterval);

    return () => clearInterval(interval);
  }, [words, wordInterval]);

  useEffect(() => {
    // Animate current letters
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.1),
      }
    );
  }, [currentWordIndex, key]); // Add `key` to ensure reset

  const renderWord = () => {
    const letters = words[currentWordIndex].split(""); // Split word into letters
    return (
      <motion.div ref={scope} key={key}>
        {letters.map((letter, idx) => (
          <motion.span
            key={letter + idx + key} // Unique key for every render
            className="text-[#008cff] opacity-0 text-[5rem] leading-none tracking-tighter  "
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="">
        <div className="text-[#008cff] text-2xl leading-snug tracking-wide">
          {renderWord()}
        </div>
      </div>
    </div>
  );
};
