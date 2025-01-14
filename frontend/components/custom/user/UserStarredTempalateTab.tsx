import { TemplateCardDataType } from "@/types";
import React from "react";
import TemplateCard from "../templates/TemplateCard";
import useTemplate from "@/hooks/useTemplates";
import useUserData from "@/hooks/useUserData";
import NoResultAnimation from "@/components/animation/NoResultAnimation";

const UserStarredTempalateTab = ({
  userName,
  data,
}: {
  userName: string;
  data: TemplateCardDataType[];
}) => {
  const { handleStarTemplate } = useTemplate({
    userName: userName,
  });

  return (
    <div className="w-full flex gap-[1rem] mt-[2rem] ">
      {data?.length === 0 ? (
        <div className="w-full h-fit   flex justify-center items-center">
          <NoResultAnimation
            className=" h-fit "
            containerClassName=" h-fit mt-0 "
          />
        </div>
      ) : (
        data?.map((template) => {
          return (
            <TemplateCard
              data={template}
              key={template.id}
              handleStarTemplate={(id: string) => {
                handleStarTemplate(id);
              }}
            />
          );
        })
      )}
    </div>
  );
};

export default UserStarredTempalateTab;
