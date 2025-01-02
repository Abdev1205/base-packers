import React from "react";
import { LuListFilter, LuFilter } from "react-icons/lu";
import { FaFilter } from "react-icons/fa";
import { BsSliders } from "react-icons/bs";

const TemplateFilter = () => {
  return (
    <div className="flex h-9  text-white/50 items-center gap-[.3rem] cursor-pointer border-2 bg-[#2b2a2a] border-white/10 p-[.3rem] px-[.5rem] rounded-[.3rem] focus:ring-0">
      <BsSliders className="text-lg mt-[.2rem]  " />
      {/* <span>Filter</span> */}
    </div>
  );
};

export default TemplateFilter;
