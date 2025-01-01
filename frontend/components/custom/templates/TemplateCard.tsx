"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { heroSkillsAvatarData, templateCardData } from "@/constants/constant";
import { MdEdit } from "react-icons/md";

import Image from "next/image";
import { StarBg } from "@/public/assetsManager";
import SkillsTagGroup from "../common/SkillsTagGroup";

interface Author {
  name: string;
  profilePic: string;
  githubUrl: string;
}

interface TemplateCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  stars: number;
  author: Author;
  repoUrl: string;
  lastUpdated: string;
  badges: string[];
  actions: {
    preview: string;
    star: boolean;
  };
}

const TemplateCard = ({
  data,
  handleStarTemplate,
}: {
  data: TemplateCardProps;
  handleStarTemplate: (id: string) => void;
}) => {
  return (
    <MagicCard
      className={cn(
        " cursor-pointer flex-col w-[20rem] relative  p-6 bg-black text-white shadow-2xl rounded-lg  transition-transform duration-300  "
      )}
    >
      {/* Header */}
      <div className="flex font-montserrat justify-between items-start w-[90%] ">
        <div className=" flex flex-col gap-[.4rem] ">
          <h3 className="text-[1.12rem]  text-white line-clamp-1 ">
            {data.title}
          </h3>
          <p className="text-[.75rem]  text-white/60 line-clamp-2 ">
            {data.description}
          </p>
        </div>
      </div>

      {/* Upper star Button  */}

      <div
        onClick={() => handleStarTemplate(data.id)}
        className=" absolute top-[-1.4rem]  right-[-1.65rem]    "
      >
        <Image
          src={StarBg}
          alt="star"
          className=" w-[4rem] rounded-tr-[1rem] select-none pointer-events-none  absolute z-[5]  "
        />

        <div className="flex justify-center items-center  z-[10] size-[4rem]  text-[1.3rem]  ">
          {data.actions.star ? (
            <TiStarFullOutline className="text-[#FFCD05] z-[10]  mt-[-1.1rem] mr-[-1rem]  " />
          ) : (
            <>
              <TiStarOutline className=" text-[#6D6B6B]  z-[10] text-[1.34rem] mt-[-1.1rem] mr-[-1rem]    " />
              <TiStarFullOutline className="text-[#171717] z-[8] text-[1.25rem]  mt-[-1.1rem] mr-[-1rem] absolute  " />
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-[1rem] mt-[.7rem]  ">
        {/* Author and Stars */}
        <div className="flex items-center gap-3 ">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
            }
            alt="author"
            width={100}
            height={100}
            className=" size-[1.7rem] object-cover  rounded-full "
          />
          <div className=" flex flex-col justify-center ">
            <h2 className=" text-white/60 font-montserrat text-[.7rem] ">
              {"Taylor Swift"}
            </h2>
            <p className=" text-white/50 font-montserrat text-[.6rem] mt-[-.1rem]  ">
              @taycodes
            </p>
          </div>

          <div className="flex items-center gap-[.3rem] ">
            <TiStarFullOutline className="text-[#575656] text-[.9rem] " />
            <span className=" text-white/60 font-montserrat text-[.7rem]  ">
              {data.stars}
            </span>
          </div>
          <div className="flex items-center gap-[.1rem] ">
            <MdEdit className="text-[#575656] text-[.9rem] " />
            <span className=" text-white/60 font-montserrat text-[.7rem]  ">
              {data.lastUpdated}
            </span>
          </div>
        </div>

        <div className="flex items-center w-full justify-between gap-4">
          <div>
            <SkillsTagGroup items={heroSkillsAvatarData} />
          </div>

          <button className=" border-[1px] border-[#404040] bg-[#171717] hover:bg-black transition-all duration-200 rounded-full px-[1rem] py-[.4rem] text-white/70 font-montserrat text-[.7rem] ">
            View Kit
          </button>
        </div>
      </div>
    </MagicCard>
  );
};

export default TemplateCard;
