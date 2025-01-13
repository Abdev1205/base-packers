import React from "react";

const UserProfilePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div className=" min-h-[calc(100vh-20rem)] z-[30] "></div>;
};

export default UserProfilePage;
