"use client";

import TemplateFilter from "@/components/custom/common/filter/TemplateFilter";
import SearchBar from "@/components/custom/common/search/SearchBar";
import TemplateSorter from "@/components/custom/common/select/TemplateSorter";
import TemplateCard from "@/components/custom/templates/TemplateCard";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { templateCardData } from "@/constants/constant";
import { StarredCardImage, UnStarredCardImage } from "@/public/assetsManager";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";

const TemplateSort = [
  {
    label: "Most Popular",
    value: "popular",
  },
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Oldest",
    value: "oldest",
  },
];

const TemplatePage = () => {
  const [refresh, setRefresh] = useState(false);
  const [templateSortValue, setTemplateSortValue] = useState("");

  const handleStarTemplate = (id: string) => {
    const starObj = templateCardData.find((template) => template.id === id);
    if (starObj) {
      starObj.actions.star = !starObj.actions.star;
      setRefresh(!refresh);
    }
  };

  useEffect(() => {}, [refresh]);

  return (
    <>
      <div className=" flex w-full  absolute top-[3.8rem]  py-[.5rem] px-[1rem] z-[200] justify-end ">
        <div className=" flex fixed   gap-[.5rem]  ">
          <Suspense fallback={<div>Loading...</div>}>
            <SearchBar />
            <TemplateFilter />
          </Suspense>
        </div>
      </div>
      <div className=" flex-col w-full flex px-[5rem]  ">
        <div className=" flex gap-[1rem] justify-center flex-wrap my-[2rem] ">
          {templateCardData.map((template, idx) => (
            // <Image
            //   src={template.img}
            //   key={idx}
            //   alt="template"
            //   className=" w-[20rem]  "
            // />
            <TemplateCard
              key={idx}
              data={template}
              handleStarTemplate={handleStarTemplate}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TemplatePage;
