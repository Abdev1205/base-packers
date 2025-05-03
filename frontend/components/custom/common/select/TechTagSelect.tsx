import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SkillTagtype } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

interface TechTagSelectProps {
  tags: SkillTagtype[];
  suggestions: SkillTagtype[];
  query: string;
  activeIndex: number;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleAddTag: (tag: SkillTagtype) => void;
  handleRemoveTag: (tagId: number) => void;
  handleInputFocus: () => void;
  isLabled?: boolean;
}

const TechTagSelect: React.FC<TechTagSelectProps> = ({
  tags,
  suggestions,
  query,
  activeIndex,
  handleInputChange,
  handleKeyDown,
  handleAddTag,
  handleRemoveTag,
  handleInputFocus,
  isLabled = true,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  // Stop click propagation to prevent parent handlers from firing
  const handleContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div ref={componentRef} onClick={handleContainerClick}>
      <div className="relative mb-4">
        <h2
          className={` ${
            isLabled ? "" : "hidden"
          } text-white/60 mb-[1rem] font-[400] text-[1.2rem]`}
        >
          Tech Tags
        </h2>
        <Input
          className="bg-[#2b2a2a] border-white/10 text-white/50"
          placeholder="Add tech tags"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
        />
        {suggestions.length > 0 && (
          <div className="absolute z-[11] max-h-[18rem] overflow-auto mt-1 w-full bg-[#1e1e1e] border border-white/10 rounded-md shadow-lg">
            {suggestions.map((tag, index) => (
              <div
                key={tag.id}
                className={`px-3 py-2 flex items-center gap-2 cursor-pointer ${
                  index === activeIndex ? "bg-[#3b3b3b]" : "hover:bg-[#3b3b3b]"
                } text-white`}
                onClick={() => handleAddTag(tag)}
              >
                <Image
                  src={tag.imageUrl}
                  alt={tag.name}
                  width={100}
                  height={100}
                  className="w-6 h-6 object-cover rounded-full"
                />
                <p className="text-[.8rem] font-[400] text-white/50">
                  {tag.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap max-h-[15rem] overflow-y-auto items-start justify-start gap-2">
        {tags &&
          tags.map((tag) => (
            <Badge
              key={tag.id}
              variant="secondary"
              className="bg-[#3b3b3b] rounded-full h-fit text-sm text-white/40 font-[400] hover:bg-[#4b4b4b] cursor-pointer p-0 pr-[.4rem] gap-2 flex items-center"
            >
              <Image
                src={tag.imageUrl}
                alt={tag.name}
                width={100}
                height={100}
                className="size-[1.5rem] object-cover rounded-full"
              />
              <p className="text-[.8rem] font-openSans text-white/40 font-[400]">
                {tag.name}
              </p>
              <X
                className="cursor-pointer text-white/50"
                size={14}
                onClick={() => handleRemoveTag(tag.id as number)}
              />
            </Badge>
          ))}
      </div>
    </div>
  );
};

export default TechTagSelect;
