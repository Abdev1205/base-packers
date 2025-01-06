"use client";

import React, { useEffect, useRef, useState } from "react";
import { BsSliders } from "react-icons/bs";
import { X } from "lucide-react"; // ShadCN-compatible close icon
import TemplateSorter from "@/components/custom/common/select/TemplateSorter";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
// import { skillTags } from "@/constants/constant";
import { useSkillTagStore } from "@/provider/store/useSkillTagStore";
import { SkillTagtype } from "@/types";
import useSkillTags from "@/hooks/useSkillTags";

const TemplateFilter: React.FC = () => {
  const { skillTags } = useSkillTags();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState<SkillTagtype[]>([]);
  const [suggestions, setSuggestions] = useState<SkillTagtype[]>(skillTags);
  const [activeIndex, setActiveIndex] = useState(-1); // Track active suggestion
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setActiveIndex(-1); // Reset active index

    if (value.trim()) {
      const filteredSuggestions = skillTags.filter(
        (tag) =>
          tag.name.toLowerCase().includes(value.toLowerCase()) &&
          !tags.some((t) => t.id === tag.id)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleAddTag = (tag: SkillTagtype) => {
    setTags((prev) => [...prev, tag]);
    setQuery("");
    setSuggestions([]);
    setActiveIndex(-1); // Reset active index
  };

  const handleRemoveTag = (tagId: number) => {
    setTags((prev) => prev.filter((t) => t.id !== tagId));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleAddTag(suggestions[activeIndex]);
    }
  };

  const handleSearch = () => {
    const newParams = new URLSearchParams(searchParams.toString());

    const filter = tags.map((tag) => tag.tagValue).join(",");
    if (filter) newParams.set("filter", filter);
    else newParams.delete("filter");

    if (sortValue) newParams.set("sort", sortValue);
    else newParams.delete("sort");

    router.push(`?${newParams.toString()}`);
    setDropdownOpen(false);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    if (query.trim() === "") {
      const remainingSuggestions = skillTags.filter(
        (tag) => !tags.some((t) => t.id === tag.id)
      );
      setSuggestions(remainingSuggestions);
    }
  };

  useEffect(() => {
    const filter = searchParams.get("filter");
    const sort = searchParams.get("sort");

    if (filter) {
      const filterTags = filter
        .split(",")
        .map((name) => skillTags.find((tag) => tag.tagValue === name))
        .filter(Boolean) as SkillTagtype[];
      setTags(filterTags);
    }

    if (sort) {
      setSortValue(sort);
    }
  }, [searchParams, skillTags]);

  return (
    <div className="relative">
      <div
        className="flex h-9 items-center gap-2 cursor-pointer border-2 bg-[#2b2a2a] border-white/10 p-2 rounded-md focus:ring-0"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <BsSliders className="text-lg text-white/50 mt-[0.2rem]" />
      </div>

      {dropdownOpen && (
        <div className="absolute w-[20rem] mt-2 ml-[-20rem] h-[30rem] bg-[#1c1c1c] border border-white/10 rounded-md p-4 shadow-lg z-10">
          <div className="mb-4 flex justify-end">
            <div className="w-fit">
              <TemplateSorter
                options={[
                  { label: "Most Popular", value: "popular" },
                  { label: "Newest", value: "newest" },
                  { label: "Oldest", value: "oldest" },
                ]}
                selected={sortValue}
                onChange={setSortValue}
              />
            </div>
          </div>

          <div className="relative mb-4">
            <h2 className="text-white/60 mb-[1rem] font-[400] text-[1.2rem]">
              Tech Tags
            </h2>
            <Input
              className="bg-[#2b2a2a] border-white/10 text-white/50"
              placeholder="Add tech tags"
              value={query}
              // ref={tagInputRef}
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
                      index === activeIndex
                        ? "bg-[#3b3b3b]"
                        : "hover:bg-[#3b3b3b]"
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
            {tags.map((tag) => (
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
                  onClick={() => handleRemoveTag(tag.id)}
                />
              </Badge>
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              onClick={handleSearch}
              className="bg-white/30 relative z-10 hover:bg-black/90 border border-transparent text-white/80 text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
            >
              Search
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateFilter;
