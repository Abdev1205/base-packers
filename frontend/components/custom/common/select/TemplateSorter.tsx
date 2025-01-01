import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import React from "react";
import { LuListFilter } from "react-icons/lu";
import { RiCloseLargeLine } from "react-icons/ri";

interface TemplateSorterProps {
  options: { label: string; value: string }[];
  selected: string;
  onChange: (value: string) => void;
}

const TemplateSorter: React.FC<TemplateSorterProps> = ({
  options,
  selected,
  onChange,
}) => {
  const handleSelectType = (type: string) => {
    onChange(type);
  };

  const handleRemoveType = () => {
    onChange("");
  };

  return (
    <div className="flex items-center w-full">
      {/* Selected Filter Display */}
      <div className=" ml-[-7rem] absolute   ">
        {selected && (
          <div className="flex  items-center text-white/50 ">
            <div className="w-0 h-0 border-t-[14px] border-b-[14px] border-r-[20px] border-transparent border-r-[#2b2a2a] "></div>
            <div className="text-sm flex items-center gap-[.5rem] bg-[#2b2a2a] w-fit px-[.4rem] py-[.3rem]">
              {`${selected}`}
              <RiCloseLargeLine
                onClick={handleRemoveType}
                className="text-white/50 cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
      {/* Filter Dropdown */}
      <Select value={selected || undefined} onValueChange={handleSelectType}>
        <SelectTrigger className="flex border-none text-white/50 items-center gap-[.3rem] cursor-pointer bg-[#2b2a2a] p-[.3rem] px-[.5rem] rounded-[.3rem] focus:ring-0">
          <LuListFilter className="text-lg  " />
          <span>Sort</span>
        </SelectTrigger>
        <SelectContent className=" rounded-[.3rem] bg-[#2b2a2a] border-none text-white/70">
          {options.map((option) => (
            <SelectItem
              className=" cursor-pointer focus:bg-[#3b3a3a] focus:text-white/80  "
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TemplateSorter;
