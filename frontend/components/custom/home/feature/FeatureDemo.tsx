"use client";

import React, { useState, useEffect } from "react";

const FeatureDemo = ({ src }: { src: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // When this component mounts, mark it as loaded
  useEffect(() => {
    setIsLoaded(true);

    // Clean up function - when component unmounts
    return () => {
      setIsLoaded(false);
    };
  }, []);

  return (
    <div className="w-full flex h-full items-center justify-center">
      <div className="relative w-full z-[20] h-full overflow-hidden aspect-video rounded-[.8rem]">
        {isLoaded && (
          <iframe
            src={src}
            loading="lazy"
            title="Feature Demo"
            allow="clipboard-write"
            allowFullScreen
            className="w-full h-full rounded-[.8rem] aspect-auto"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default FeatureDemo;
