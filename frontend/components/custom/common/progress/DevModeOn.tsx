"use client";

import dynamic from "next/dynamic";
const ProjectsConstructionAnimation = dynamic(
  () => import("@/components/animation/ProjectsConstructionAnimation"),
  { ssr: false }
);

const DevModeOn = () => {
  return (
    <div className="  ">
      <ProjectsConstructionAnimation />
    </div>
  );
};

export default DevModeOn;
