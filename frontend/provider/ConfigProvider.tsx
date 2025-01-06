"use client";
import Progress from "@/components/custom/common/progress/Progress";
import React, { useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ConfigProviders = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <div>
      <ClerkProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <Progress />
        </QueryClientProvider>
      </ClerkProvider>
    </div>
  );
};

export default ConfigProviders;
