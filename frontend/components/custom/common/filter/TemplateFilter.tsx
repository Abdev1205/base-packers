import React from "react";
import { LuListFilter, LuFilter } from "react-icons/lu";
import { FaFilter } from "react-icons/fa";

const TemplateFilter = () => {
  return (
    <div className="flex h-9 border-none text-white/50 items-center gap-[.3rem] cursor-pointer bg-[#2b2a2a] p-[.3rem] px-[.5rem] rounded-[.3rem] focus:ring-0">
      <LuFilter className="text-lg mt-[.2rem]  " />
      <span>Filter</span>
    </div>
  );
};

export default TemplateFilter;
