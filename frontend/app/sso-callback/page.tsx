"use client";

const CreatingAccount = dynamic(
  () => import("@/components/animation/CreatingAccount"),
  { ssr: false }
);
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import React, { useEffect, useState } from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import dynamic from "next/dynamic";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SSOCallback: React.FC = () => {
  const { handleRedirectCallback } = useClerk();
  const router = useRouter();

  useEffect(() => {
    const completeSignIn = async () => {
      try {
        await handleRedirectCallback({}, (to: string) => {
          return new Promise((resolve) => {
            router.replace(to);
            resolve(true);
          });
        });
      } catch (error) {
        console.error("Error completing sign-in:", error);
      }
    };

    completeSignIn();
  }, [handleRedirectCallback, router]);

  const loadingStates = [
    {
      text: "Creating an account",
    },
    {
      text: "Logging you in",
    },
    {
      text: "Redirecting to Home",
    },
  ];

  const [loading] = useState(true);

  return (
    <HeroHighlight
      className=" h-[100vh]  "
      containerClassName="  bg-black h-[100vh] "
    >
      <div className="flex flex-col relative  w-full  items-center  ">
        <CreatingAccount />

        <div className="w-fit mt-[2rem]  ">
          <MultiStepLoader
            loadingStates={loadingStates}
            loading={loading}
            duration={2000}
            loop={false}
          />
        </div>
      </div>
    </HeroHighlight>
  );
};

export default SSOCallback;
