"use client";

import useUserData from "@/hooks/useUserData";
import React, { useEffect, useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@/components/ui/tabs";
import UserGitHubStatsTab from "@/components/custom/user/UserGitHubStatsTab";
import UserStarredTempalateTab from "@/components/custom/user/UserStarredTempalateTab";
import UserProfileHero from "@/components/custom/user/UserProfileHero";
import { UserDataApiRes } from "@/types";
import UserCreatedTemplateTab from "@/components/custom/user/UserCreatedTemplateTab";
import useTemplate from "@/hooks/useTemplates";
import UserInfoStats from "@/components/custom/user/UserInfoStats";
import UserProfileSkelton from "@/components/custom/skelton/user/UserProfileSkelton";

const UserProfilePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const { userData, isUserFetching, isUserLoading, refetchUser } =
    useUserData(id);

  const { templateCardDataByUsername, refetchTemplateByUsername } = useTemplate(
    {
      userName: id,
    }
  );

  const starredTemplates = useMemo(() => {
    return (
      templateCardDataByUsername?.filter((template) => template.actions.star) ||
      []
    );
  }, [templateCardDataByUsername]);

  const createdTemplates = useMemo(() => {
    return (
      templateCardDataByUsername?.filter(
        (template) => template.author.username
      ) || []
    );
  }, [templateCardDataByUsername]);

  const totalStarReceived = useMemo(() => {
    return (
      userData?.createdTemplates.reduce(
        (total: number, template: any) => total + template.starCount,
        0
      ) || 0
    );
  }, [userData]);

  useEffect(() => {
    refetchUser();
    refetchTemplateByUsername();
  }, []);

  return (
    <div className=" min-h-[calc(100vh-20rem)] z-[30] text-white flex flex-col px-[5rem] ">
      {isUserFetching || isUserLoading || !userData ? (
        <UserProfileSkelton />
      ) : (
        <div className="flex flex-col my-[2rem]    w-full  relative ">
          <UserProfileHero userData={userData as UserDataApiRes} id={id} />

          <UserInfoStats
            userData={userData as UserDataApiRes}
            stats={{
              totalStarReceived: totalStarReceived || 0,
              totalCreatedTemplates: userData?.createdTemplates.length || 0,
            }}
          />

          {/* Github Stats */}

          <Tabs defaultValue="stats" className="mt-[3rem] w-full ">
            <TabsList className="w-fit">
              <TabsTrigger
                value="stats"
                className=" data-[state=active]:text-white/80 "
              >
                Github Stats
              </TabsTrigger>
              <TabsTrigger
                value="starred"
                className=" data-[state=active]:text-white/80 "
              >
                Starred Templates
              </TabsTrigger>
              <TabsTrigger
                value="created"
                className=" data-[state=active]:text-white/80 "
              >
                Created Templates
              </TabsTrigger>
            </TabsList>

            {/* Github Stats */}
            <TabsContent value="stats">
              <UserGitHubStatsTab id={id} />
            </TabsContent>

            {/* Starred Templates  */}
            <TabsContent value="starred">
              {/* <UserStarredTempalateTab userName={id} /> */}
              <UserStarredTempalateTab userName={id} data={starredTemplates} />
            </TabsContent>

            {/* Created Templates */}
            <TabsContent value="created">
              <UserCreatedTemplateTab userName={id} data={createdTemplates} />
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};
export default UserProfilePage;
