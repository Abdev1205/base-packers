"use client";

import SkillsTagGroup from "@/components/custom/common/SkillsTagGroup";
import useTemplate from "@/hooks/useTemplates";
import { SkillTagtype, TemplateApiRes, TemplateCardDataType } from "@/types";
import Image from "next/image";
import React, { use, useEffect } from "react";
import { MdCancel, MdEdit } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import MarkdownPreview from "@uiw/react-markdown-preview";
import rehypeSanitize from "rehype-sanitize";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import TemplateAction from "@/actions/template";
import processTemplateData from "@/lib/processTemplateData";
import { useUser } from "@clerk/nextjs";
import TemplateDetailsPageSkelton from "@/components/custom/skelton/TemplateDetailsPageSkelton";
import { useRouter } from "next/navigation";
import assets from "@/public/assetsManager";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const TemplateDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const {
    data: templateData,
    isLoading: templateLoading,
    refetch: refetchTemplate,
    isFetching: isTemplateFetching,
  } = useQuery({
    queryKey: ["templateById"],
    queryFn: async () => {
      const res = (await TemplateAction.getTemplateById(
        id
      )) as unknown as TemplateApiRes;

      const resArray = [res];
      const processData = processTemplateData({
        data: resArray,
        userId: user?.id as string,
      });

      return processData[0] as TemplateCardDataType;
    },
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {templateLoading || !templateData || isTemplateFetching ? (
        <div>
          <TemplateDetailsPageSkelton />
        </div>
      ) : (
        <div className=" text-white flex flex-col px-[5rem] ">
          <div className="flex flex-col my-[2rem] rounded-[.8rem] bg-[#171717] w-full p-[1.5rem] relative ">
            {/* starred button */}
            <div
              // onClick={() => handleStarTemplate(data.id)}
              className=" absolute top-[0rem]  right-[-.5rem]    "
            >
              <Image
                src={assets.StarBg}
                alt="star"
                className=" w-[8rem] rounded-tr-[-1rem] select-none pointer-events-none mr-[-6rem]  absolute z-[5]  "
              />

              <div className="flex justify-center items-center  z-[10] size-[8rem]  text-[1.3rem]  ">
                <TiStarFullOutline className="text-[#FFCD05] z-[10]  mt-[-1.1rem] mr-[-1rem]  " />
              </div>
            </div>

            {/* content start from here */}

            <div className="flex flex-col gap-[.5rem] ">
              <h1 className="text-[2rem] font-openSans font-[500] capitalize text-white/80 ">
                {templateData?.title}
              </h1>
              <p className="text-[.95rem] w-[90%] font-openSans font-[400] text-white/50">
                {templateData?.description}
              </p>

              <div className="flex flex-col gap-[1rem] mt-[.7rem]  ">
                {/* Author and Stars */}
                <div className="flex items-center gap-3 ">
                  <Link
                    href={`/user/${templateData?.author.username}`}
                    className=" flex items-center  gap-[1rem] "
                  >
                    <Image
                      src={
                        templateData?.author.avatar ||
                        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                      }
                      alt="author"
                      width={100}
                      height={100}
                      className=" size-[1.7rem] object-cover  rounded-full "
                    />
                    <div className=" flex flex-col justify-center ">
                      <h2 className=" text-white/60 font-montserrat text-[.7rem] ">
                        {templateData?.author.name}
                      </h2>
                      <p className=" text-white/50 font-montserrat text-[.6rem] mt-[-.1rem]  ">
                        {templateData?.author.username}
                      </p>
                    </div>
                  </Link>

                  <div className="flex items-center gap-[.3rem] ">
                    <TiStarFullOutline className="text-[#575656] text-[.9rem] " />
                    <span className=" text-white/60 font-montserrat text-[.7rem]  ">
                      {templateData?.stars}
                    </span>
                  </div>
                  <div className="flex items-center gap-[.1rem] ">
                    <MdEdit className="text-[#575656] text-[.9rem] " />
                    <span className=" text-white/60 font-montserrat text-[.7rem]  ">
                      {new Date(
                        templateData?.lastUpdated as string
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center w-full justify-between gap-4">
                  <div>
                    <SkillsTagGroup
                      items={templateData?.tags as SkillTagtype[]}
                      preview={true}
                    />
                  </div>

                  <Link
                    href={templateData?.repoUrl}
                    target="_blank"
                    className=" border-[1px] flex items-center gap-[.5rem] border-[#404040] bg-[#171717] hover:bg-black transition-all duration-200 rounded-full px-[1rem] py-[.4rem] text-white/70 font-montserrat text-[.85rem] "
                  >
                    <FaGithub className=" text-[1.2rem] " />
                    Github
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" "> </div>
            <MarkdownPreview
              source={templateData?.guidelines || ""}
              className=" bg- p-[2rem] mb-[2rem] rounded-lg "
              style={{
                backgroundColor: "#171717",
              }}
              rehypePlugins={[rehypeSanitize]}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TemplateDetailPage;
