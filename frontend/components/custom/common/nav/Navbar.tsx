"use client";

import Image from "next/image";
import React from "react";
import { SingleLink } from "./SingleLink";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton, useSession, useSignIn } from "@clerk/nextjs";
import { div } from "framer-motion/client";
import assets from "@/public/assetsManager";
import UserProfileMenu from "../menu/UserProfileMenu";
import Link from "next/link";

const Navbar = ({ primary = true }: { primary?: boolean }) => {
  const { signIn, isLoaded } = useSignIn();
  const { session, isSignedIn } = useSession();

  type OAuthProvider =
    | "facebook"
    | "google"
    | "hubspot"
    | "github"
    | "tiktok"
    | "gitlab"
    | "discord"
    | "twitter"
    | "twitch"
    | "linkedin"
    | "linkedin_oidc"
    | "dropbox"
    | "bitbucket"
    | "microsoft"
    | "notion"
    | "apple"
    | "x";

  type OAuthStrategy = `oauth_${OAuthProvider}` | "saml" | "enterprise_sso";

  const handleSignIn = async (provider: OAuthStrategy) => {
    if (!isLoaded) return;
    try {
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      });
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <div
      className={`supports-backdrop-blur:bg-background/90 fixed w-full  top-0 z-50 bg-background/90 backdrop-blur-lg md:bg-background/40 flex justify-between h-[4rem] px-[5rem] ${
        primary ? " " : " border-b border-white/10 "
      }  `}
    >
      <Link href="/" className="  flex items-center gap-[.5rem] ">
        <Image src={assets.LogoImage} alt="logo" className=" w-[2.5rem] " />
        <h2 className=" text-white/80 font-poppins font-[400] text-[1.4rem] ">
          Base Packers
        </h2>
      </Link>

      <div className=" flex items-center  ">
        <SingleLink label="Home" path="/" />
        <SingleLink label="Templates" path="/templates" />
        <SingleLink label="Contribute" path="/contribute" />
        <SingleLink label="Blog" path="/blogs" />
        <SingleLink label="Contact" path="/contact" />
        <div className="flex items-center justify-end w-[5rem] gap-[.5rem] ">
          {!isLoaded ? (
            <div className=" bg-neutral-900  relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full h-[2rem] w-[4rem] flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] "></div>
          ) : !isSignedIn ? (
            <>
              <Button
                onClick={() => handleSignIn("oauth_github")}
                className=" bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] "
              >
                Login
              </Button>
            </>
          ) : (
            <div className="  ">
              <UserProfileMenu />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
