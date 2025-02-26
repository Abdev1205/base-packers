import assets from "@/public/assetsManager";
import { UserDataApiRes } from "@/types";
import Image from "next/image";
import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";

const UserInfoStats = ({
  userData,
  stats,
}: {
  userData: UserDataApiRes;
  stats: {
    totalStarReceived?: number;
    totalCreatedTemplates?: number;
  };
}) => {
  return (
    <div className=" flex gap-[2rem] justify-between w-full mt-[8rem]  ">
      <div className=" flex flex-col gap-[.5rem] w-[20rem]  bg-[#262626] p-[1.2rem] rounded-[.8rem]  ">
        <h2 className=" font-openSans flex items-center gap-[.5rem] font-[500] text-[1.3rem] text-white/70">
          <MdAlternateEmail />
          {userData?.username}
        </h2>
        <p className=" font-openSans flex mt-[-.4rem] items-center gap-[1rem] ml-[.2rem] font-[400] text-[.8rem] text-white/50 ">
          <FaCalendarDays />
          Joined on: {new Date(userData?.createdAt as Date).toDateString()}
        </p>

        <div className=" mt-[.3rem] border-t-[1px] border-neutral-700/70 ">
          <div className=" font-openSans mt-[1rem] flex items-center gap-[.5rem] font-[400] text-[1rem] text-white/70">
            <Image src={assets.LogoImage} alt="logo" className=" w-[1.5rem] " />
            <h2>{userData?.name}</h2>
          </div>
          <h3 className=" font-openSans line-clamp-2 mt-[.5rem] font-[400] text-[.9rem] text-white/50 ">
            {userData?.about ||
              "Passionate Web Developer who wants to explore every Tech Fields I'm Abhay Mishra I am a Mern-Stack Web developer from Korba Chhattisgarh India."}
          </h3>
        </div>
      </div>

      {/* stats */}

      <div className=" flex w-[calc(100%-20rem)] gap-[2rem]  ">
        {/* Template Starred */}
        <div className=" w-[15rem] flex justify-center gap-[1rem] flex-col relative bg-[#262626] p-[1.5rem] rounded-[.8rem] h-full ">
          <div className=" font-openSans flex w-full justify-center  font-[400] mt-[-2rem] text-center  text-[6rem] text-white/70 text-[#FFCD05] ">
            <h2 className=" leading-none text-[#FFCD05]  ">
              {stats.totalStarReceived || 0}
            </h2>
            <TiStarFullOutline className=" text-[#FFCD05]  text-[1.3rem] " />
          </div>
          <div className=" font-openSans absolute bottom-[1rem] flex items-center w-full right-0  text-center font-[400] text-[1rem] text-white/60 ">
            <p className=" text-center mx-auto text-[#FFCD05]/70 ">
              Total Stars Received
            </p>
          </div>
        </div>

        {/* Template Created */}
        <div className=" w-[15rem] flex justify-center gap-[1rem] flex-col relative bg-[#262626] p-[1.5rem] rounded-[.8rem] h-full ">
          <div className=" font-openSans flex text-[#018cff] w-full justify-center  font-[400] mt-[-2rem] text-center  text-[6rem] ">
            <h2 className=" leading-none  ">
              {stats.totalCreatedTemplates || 0}
            </h2>
            <LuPackageCheck className=" text-[#018cff]  text-[1.3rem] " />
          </div>
          <div className=" font-openSans absolute bottom-[1rem] flex items-center w-full right-0  text-center font-[400] text-[1rem]  ">
            <p className=" text-center mx-auto text-[#018cff] ">
              Total Template Created
            </p>
          </div>
        </div>

        {/* Error Solved */}
        <div className=" w-[15rem] flex justify-center gap-[1rem] flex-col relative bg-[#262626] p-[1.5rem] rounded-[.8rem] h-full ">
          <div className=" font-openSans flex text-green-500 w-full justify-center  font-[400] mt-[-2rem] text-center  text-[6rem] text-white/70 ">
            <h2 className=" leading-none text-green-500  ">{0}</h2>
            <FaHandsHelping className=" text-green-500  text-[1.3rem] " />
          </div>
          <div className=" font-openSans absolute bottom-[1rem] flex items-center w-full right-0  text-center font-[400] text-[1rem] text-white/60 ">
            <p className=" text-center mx-auto text-green-500 ">
              Total Error Solved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoStats;
