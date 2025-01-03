import Progress from "@/components/custom/common/progress/Progress";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

const ConfigProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider>
        {children}
        <Progress />
      </ClerkProvider>
    </div>
  );
};

export default ConfigProviders;
