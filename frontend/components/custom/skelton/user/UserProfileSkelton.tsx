import React from "react";
import UserProfileHeroSkeleton from "./UserProfileHeroSkelton";
import UserInfoStatsSkeleton from "./UserInfoStatsSkeleton";

const UserProfileSkelton = () => {
  return (
    <div className=" flex flex-col my-[2rem]    w-full  relative ">
      <UserProfileHeroSkeleton />
      <UserInfoStatsSkeleton />
    </div>
  );
};

export default UserProfileSkelton;
