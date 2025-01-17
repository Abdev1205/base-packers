import assets from "@/public/assetsManager";
import Image from "next/image";
import React from "react";

const NotLoggedIn = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center ">
      <Image
        src={assets.NotLoggedInImage}
        alt="Not Logged In"
        width={1000}
        height={1000}
        className="w-[30rem]"
      />
      <div className="text-center relative  flex flex-col">
        <span className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text leading-none tracking-tighter text-transparent text-[2.5rem] mt-[2rem] mb-[4rem] animate-fade-in py-[1rem] [--animation-delay:200ms] font-poppins font-[600] w-full">
          You need to login to access this page
        </span>
      </div>
    </div>
  );
};

export default NotLoggedIn;
