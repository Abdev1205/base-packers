"use client";

import NoResultAnimation from "@/components/animation/NoResultAnimation";
import TemplateFilter from "@/components/custom/common/filter/TemplateFilter";
import SearchBar from "@/components/custom/common/search/SearchBar";
import TemplateCardSkeltonPage from "@/components/custom/skelton/TemplateCardSkelton";
import TemplateCard from "@/components/custom/templates/TemplateCard";
import { templateCardData } from "@/constants/constant";
import useTemplate from "@/hooks/useTemplates";
import { useUser } from "@clerk/nextjs";
import React, { Suspense, useEffect, useState } from "react";

const TemplatePage = () => {
  const {
    templateData,
    templateLoading,
    templateCardData,
    handleStarTemplate,
  } = useTemplate();

  return (
    <>
      <div className=" flex w-full   absolute top-[3.8rem]  py-[.5rem] px-[1rem] z-[200] justify-end ">
        <div className=" flex fixed top-[4.8rem]   gap-[.5rem]  ">
          <Suspense fallback={<div>Loading...</div>}>
            <SearchBar />
            <TemplateFilter />
          </Suspense>
        </div>
      </div>

      {templateLoading || !templateCardData ? (
        <div className=" flex-col w-full flex px-[5rem]  ">
          <div className=" flex gap-[1rem] justify-center flex-wrap my-[2rem] ">
            <TemplateCardSkeltonPage />
          </div>
        </div>
      ) : !templateLoading && templateCardData.length === 0 ? (
        <div>
          <NoResultAnimation />
        </div>
      ) : (
        <div className=" flex-col w-full min-h-[calc(100vh-20rem)] flex px-[5rem]  ">
          <div className=" flex gap-[1rem] justify-center flex-wrap my-[2rem] ">
            {templateCardData &&
              templateCardData.map((template, idx) => (
                <TemplateCard
                  key={idx}
                  data={template}
                  handleStarTemplate={(templateId: string) =>
                    handleStarTemplate(templateId)
                  }
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TemplatePage;
