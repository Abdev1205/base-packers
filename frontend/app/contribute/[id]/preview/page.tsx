"use client";

import { useRouter } from "next/navigation";
import { Template, useTemplateStore } from "@/provider/store/useTemplateStore";
import { useEffect, useState } from "react";
import MarkdownEditor from "@/components/custom/common/MdEditor/MarkdownEditor";
import Image from "next/image";

import { TiStarFullOutline } from "react-icons/ti";
import { useSession, useUser } from "@clerk/nextjs";
import { MdCancel, MdEdit } from "react-icons/md";
import SkillsTagGroup, {
  SkillsTagGroupProps,
  SkillTag,
} from "@/components/custom/common/SkillsTagGroup";
import { heroSkillsAvatarData } from "@/constants/constant";
import { SkillTagtype } from "@/types";
import MarkdownPreview from "@uiw/react-markdown-preview";
import rehypeSanitize from "rehype-sanitize";
import { Button } from "@/components/ui/button";
import assets from "@/public/assetsManager";

const PreviewPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { user } = useUser();
  const { id } = params;
  const { template } = useTemplateStore();
  const [templateData, setTemplateData] = useState<Template | null>(null);

  useEffect(() => {
    if (id && typeof id === "string" && template?.id === id) {
      setTemplateData(template);
    }
  }, [id, template]);

  if (!templateData) {
    return <div>Loading...</div>;
  }

  return (
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
            {templateData.name}
          </h1>
          <p className="text-[.95rem] w-[90%] font-openSans font-[400] text-white/50">
            {templateData.description}
          </p>

          <div className="flex flex-col gap-[1rem] mt-[.7rem]  ">
            {/* Author and Stars */}
            <div className="flex items-center gap-3 ">
              <Image
                src={
                  user?.imageUrl ||
                  "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
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
                  {"500"}
                </span>
              </div>
              <div className="flex items-center gap-[.1rem] ">
                <MdEdit className="text-[#575656] text-[.9rem] " />
                <span className=" text-white/60 font-montserrat text-[.7rem]  ">
                  {"12-12-2024"}
                </span>
              </div>
            </div>

            <div className="flex items-center w-full justify-between gap-4">
              <div>
                <SkillsTagGroup
                  items={template?.tags as SkillTagtype[]}
                  preview={true}
                />
              </div>

              <button className=" border-[1px] border-[#404040] bg-[#171717] hover:bg-black transition-all duration-200 rounded-full px-[1rem] py-[.5rem] text-white/70 font-montserrat text-[.85rem] ">
                View Kit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" "> </div>
        <MarkdownPreview
          source={templateData.guidelines || ""}
          className=" bg- p-[2rem] mb-[2rem] rounded-lg "
          style={{
            backgroundColor: "#171717",
          }}
          rehypePlugins={[rehypeSanitize]}
        />
      </div>

      <Button
        onClick={() => router.back()}
        variant={"secondary"}
        className=" absolute right-4 bottom-0 mb-4"
      >
        <MdCancel className="mr-2" />
        Cancel Preview
      </Button>
    </div>
  );
};

export default PreviewPage;
