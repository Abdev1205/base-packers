import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { GitRepo } from "@/types";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuListFilter } from "react-icons/lu";
interface GitRepoSelectProps {
  options: GitRepo[];
  selected: GitRepo;
  handleSelectType: (type: GitRepo) => void;
}
const GitRepoSelect: React.FC<GitRepoSelectProps> = ({
  options,
  selected,
  handleSelectType,
}) => {
  return (
    <Select
      value={selected?.name || ""}
      onValueChange={(value) => {
        const selectedOption = options.find((option) => option.name === value);
        if (selectedOption) handleSelectType(selectedOption);
      }}
    >
      <SelectTrigger className="flex w-fit h-[2.5rem] border border-white/10 text-white/50 items-center gap-[.3rem] cursor-pointer bg-[#2b2a2a] p-[.2rem] px-[.5rem] rounded-[.3rem] focus:ring-0">
        <FaGithub className="text-lg" />
        <span className=" px-[.5rem] ">
          {selected?.name || "Select a Repository"}
        </span>
      </SelectTrigger>
      <SelectContent className="rounded-[.3rem] bg-[#2b2a2a] border-none text-white/70">
        {/* {
        console.log("option is", options)
      } */}
        {options &&
          options?.map((option) => (
            <SelectItem
              className="cursor-pointer focus:bg-[#3b3a3a] focus:text-white/80"
              key={option.id}
              value={option.name}
            >
              <div className="flex items-center gap-[.3rem]">
                <FaGithub className="text-lg" />
                <span className=" px-[.5rem] ">{option.name}</span>
              </div>
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default GitRepoSelect;
