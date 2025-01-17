import assets from "@/public/assetsManager";
import { UserDataApiRes } from "@/types";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdModeEdit } from "react-icons/md";

const UserProfileHero = ({
  userData,
  id,
}: {
  userData: UserDataApiRes;
  id: string;
}) => {
  const { user, isLoaded } = useUser();

  return (
    <div className=" flex gap-[1rem] w-full mt-[3rem] justify-center items-center relative z-[10] rounded-lg bg-[#171717] ">
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
          <Image src={assets.LogoImage} alt="logo" className=" w-[6.5rem] " />
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

        {isLoaded && user?.username === userData?.username ? (
          <Link
            href={`/user/${id}/profile`}
            className=" flex items-center mt-[2rem]  text-white/50 gap-[.3rem] hover:text-white transition duration-200"
          >
            <MdModeEdit />
            Edit Profile
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default UserProfileHero;
