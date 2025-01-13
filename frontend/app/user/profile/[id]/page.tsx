"use client";

import useUserData from "@/hooks/useUserData";
import assets from "@/public/assetsManager";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdAlternateEmail, MdModeEdit } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { LuPackageCheck } from "react-icons/lu";
import { FaHandsHelping } from "react-icons/fa";

import { FaCalendarDays } from "react-icons/fa6";

const UserPrivateProfilePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const { userData, isUserFetching, isUserLoading, refetchUser } =
    useUserData(id);

  const totalStarReceived = userData?.createdTemplates.reduce(
    (total: number, template: any) => total + template.starCount,
    0
  );

  console.log("userData", userData);
  return (
    <div className=" min-h-[calc(100vh-20rem)] z-[30] text-white flex flex-col px-[5rem] ">
      {isUserFetching || isUserLoading ? (
        <div className=" flex justify-center items-center h-[100vh] w-full  bg-[#171717]  text-white  text-[2rem]  font-bold  z-[30]  animate-pulse  ">
          Loading...
        </div>
      ) : (
        <div className="flex flex-col my-[2rem]    w-full  relative ">
          <div className=" flex gap-[1rem] w-full mt-[6rem] justify-center items-center relative z-[10] rounded-lg bg-[#171717] ">
            {/* Banner Image */}
            <Image
              src={assets.BannerImage}
              alt="star"
              className=" w-full h-[12rem] absolute rounded-lg  select-none pointer-events-none    z-[5]  "
            />

            {/* Avatar */}
            <div className=" size-[9rem] rounded-full z-[20] absolute top-[3.5rem]  left-[2rem] overflow-hidden ">
              <Image
                src={userData?.avatar || ""}
                width={1000}
                height={1000}
                alt="profile pic"
                className=" w-full h-full object-cover    "
              />
            </div>

            {/* Base Packer data */}
            <div className=" flex z-[20]  ">
              <div className="  flex items-center gap-[.5rem] ">
                <Image
                  src={assets.LogoImage}
                  alt="logo"
                  className=" w-[6.5rem] "
                />
                <h2 className=" text-white font-poppins font-[400] text-[2rem] ">
                  Base Packers
                </h2>
              </div>
            </div>

            {/* Author and Stars */}
            <div className=" flex flex-col z-[20] absolute right-[.5rem] top-[6rem]  ">
              {/* <h2 className=" font-openSans font-[400] text-white/80 text-[1.6rem] ">
                {userData?.name}
              </h2> */}
              <h3 className=" font-openSans font-[400] text-white/70 text-[1.2rem] ">
                @ {userData?.username}
              </h3>

              <Link
                href={`/user/profile/${id}/edit`}
                className=" flex items-center mt-[2rem]  text-white/50 gap-[.3rem] hover:text-white transition duration-200"
              >
                <MdModeEdit />
                Edit Profile
              </Link>
            </div>
          </div>

          <div className=" flex gap-[2rem] justify-between w-full mt-[8rem]  ">
            <div className=" flex flex-col gap-[.5rem] w-[20rem]  bg-neutral-900 p-[1.2rem] rounded-[.8rem]  ">
              <h2 className=" font-openSans flex items-center gap-[.5rem] font-[500] text-[1.3rem] text-white/70">
                <MdAlternateEmail />
                {userData?.username}
              </h2>
              <p className=" font-openSans flex mt-[-.4rem] items-center gap-[1rem] ml-[.2rem] font-[400] text-[.8rem] text-white/50 ">
                <FaCalendarDays />
                Joined on: {new Date(userData?.createdAt).toDateString()}
              </p>

              <div className=" mt-[.3rem] border-t-[1px] border-neutral-700/70 ">
                <div className=" font-openSans mt-[1rem] flex items-center gap-[.5rem] font-[400] text-[1rem] text-white/70">
                  <Image
                    src={assets.LogoImage}
                    alt="logo"
                    className=" w-[1.5rem] "
                  />
                  <h2>{userData?.name}</h2>
                </div>
                <h3 className=" font-openSans line-clamp-2 mt-[.5rem] font-[400] text-[.9rem] text-white/50 ">
                  {userData?.desc ||
                    "Passionate Web Developer who wants to explore every Tech Fields I'm Abhay Mishra I am a Mern-Stack Web developer from Korba Chhattisgarh India."}
                </h3>
              </div>
            </div>

            {/* stats */}

            <div className=" flex w-[calc(100%-20rem)] gap-[2rem]  ">
              {/* Template Starred */}
              <div className=" w-[15rem] flex justify-center gap-[1rem] flex-col relative bg-neutral-900 p-[1.5rem] rounded-[.8rem] h-full ">
                <div className=" font-openSans flex w-full justify-center  font-[400] mt-[-2rem] text-center  text-[6rem] text-white/70 text-[#FFCD05] ">
                  <h2 className=" leading-none text-[#FFCD05]  ">
                    {totalStarReceived || 0}
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
              <div className=" w-[15rem] flex justify-center gap-[1rem] flex-col relative bg-neutral-900 p-[1.5rem] rounded-[.8rem] h-full ">
                <div className=" font-openSans flex text-[#018cff] w-full justify-center  font-[400] mt-[-2rem] text-center  text-[6rem] text-white/70 ">
                  <h2 className=" leading-none  ">
                    {userData?.createdTemplates?.length || 0}
                  </h2>
                  <LuPackageCheck className="  text-[1.3rem] " />
                </div>
                <div className=" font-openSans absolute bottom-[1rem] flex items-center w-full right-0  text-center font-[400] text-[1rem] text-white/60 ">
                  <p className=" text-center mx-auto text-[#018cff] ">
                    Total Template Created
                  </p>
                </div>
              </div>

              {/* Error Solved */}
              <div className=" w-[15rem] flex justify-center gap-[1rem] flex-col relative bg-neutral-900 p-[1.5rem] rounded-[.8rem] h-full ">
                <div className=" font-openSans flex text-green-500 w-full justify-center  font-[400] mt-[-2rem] text-center  text-[6rem] text-white/70 ">
                  <h2 className=" leading-none  ">{0}</h2>
                  <FaHandsHelping className="  text-[1.3rem] " />
                </div>
                <div className=" font-openSans absolute bottom-[1rem] flex items-center w-full right-0  text-center font-[400] text-[1rem] text-white/60 ">
                  <p className=" text-center mx-auto text-green-500 ">
                    Total Error Solved
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* content start from here */}
        </div>
      )}

      {/* <div>
        <div className=" "> </div>
        <MarkdownPreview
          source={templateData?.guidelines || ""}
          className=" bg- p-[2rem] mb-[2rem] rounded-lg "
          style={{
            backgroundColor: "#171717",
          }}
          rehypePlugins={[rehypeSanitize]}
        />
      </div> */}
    </div>
  );
};

export default UserPrivateProfilePage;
