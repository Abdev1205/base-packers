import Progress from "@/components/custom/common/progress/Progress";
import React from "react";

const ConfigProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Progress />
    </div>
  );
};

export default ConfigProviders;
