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
import { useSkillTagStore } from "@/provider/store/useSkillTagStore";
import { SkillTagtype } from "@/types";
import useSkillTags from "@/hooks/useSkillTags";
import TechTagSelect from "../select/TechTagSelect";
import useTemplate from "@/hooks/useTemplates";

const TemplateFilter: React.FC = () => {
  const { skillTags } = useSkillTags();
  const { refetchTemplate } = useTemplate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState<SkillTagtype[]>([]);
  const [suggestions, setSuggestions] = useState<SkillTagtype[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      // When emptying the search box, show all available tags
      const availableTags = skillTags.filter(
        (tag) => !tags.some((t) => t.id === tag.id)
      );
      setSuggestions(availableTags);
    }
  };

  const handleAddTag = (tag: SkillTagtype) => {
    setTags((prev) => [...prev, tag]);
    setQuery("");

    // After adding a tag, show remaining available tags
    const remainingSuggestions = skillTags.filter(
      (t) =>
        !tags.some((existingTag) => existingTag.id === t.id) && t.id !== tag.id
    );
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
    refetchTemplate();
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    // Show all available tags when focusing
    const remainingSuggestions = skillTags.filter(
      (tag) => !tags.some((t) => t.id === tag.id)
    );
    setSuggestions(remainingSuggestions);
  };

  const handleInputBlur = () => {
    // Don't immediately blur - we handle this with the click outside effect
    // This allows for clicking on suggestions
    setIsFocused(false);
    // We don't clear suggestions here anymore
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const filter = searchParams.get("filter");
    const sort = searchParams.get("sort");

    if (filter && Array.isArray(skillTags)) {
      const filterTags = filter
        .split(",")
        .map((name) => skillTags?.find((tag) => tag.tagValue === name))
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
        onClick={toggleDropdown}
      >
        <BsSliders className="text-lg text-white/50 mt-[0.2rem]" />
      </div>

      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute w-[20rem] mt-2 ml-[-20rem] h-[30rem] bg-[#1c1c1c] border border-white/10 rounded-md p-4 shadow-lg z-10"
        >
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
          {/* Tech Tags Section */}

          <TechTagSelect
            activeIndex={activeIndex}
            handleAddTag={handleAddTag}
            handleKeyDown={handleKeyDown}
            handleInputChange={handleInputChange}
            query={query}
            suggestions={suggestions}
            tags={tags}
            handleRemoveTag={handleRemoveTag}
            handleInputFocus={handleInputFocus}
          />

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
