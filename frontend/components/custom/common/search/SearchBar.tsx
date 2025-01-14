"use client";

import React, { useEffect, useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import debounce from "lodash.debounce";
import useTemplate from "@/hooks/useTemplates";

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { refetchTemplate } = useTemplate();
  const searchParams = useSearchParams(); // To fetch query parameters
  const [searchText, setSearchText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  // Populate searchText if a query is present in the URL
  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchText(query);
      setIsExpanded(true); // Expand if a query exists
    }
  }, [searchParams]);

  // Debounced search to minimize unnecessary navigation calls
  const handleSearch = debounce(() => {
    const sanitizedQuery = searchText.trim();
    const newParams = new URLSearchParams(searchParams.toString());

    if (sanitizedQuery) {
      newParams.set("q", sanitizedQuery);
    } else {
      newParams.delete("q");
    }

    router.push(`?${newParams.toString()}`);
    refetchTemplate();
  }, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const clearSearch = () => {
    setSearchText("");

    // Create a new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString());

    // Remove the 'q' parameter
    params.delete("q");

    // Update the URL with the modified parameters
    const newQuery = params.toString();
    router.push(newQuery ? `?${newQuery}` : pathname); // Keep other params, or fallback to pathname
  };

  return (
    <div className="flex items-center h-9  font-openSans">
      <div
        className={`flex items-center gap-2 border-2 bg-[#2b2a2a] border-white/10 px-2 rounded-[0.5rem] transition-all duration-300 ease-in-out h-full ${
          isExpanded ? "w-[20rem]" : "w-9"
        }`}
      >
        <IoSearch
          onClick={toggleExpand}
          className="text-[1.3rem]  cursor-pointer text-white/50"
        />
        {isExpanded && (
          <>
            <input
              value={searchText}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder="Type here to Search"
              className="flex-grow focus-visible:ring-0 text-[0.95rem] outline-none border-none text-white/50 placeholder:text-white/50 placeholder:font-[400] bg-transparent"
            />
            {searchText && (
              <IoClose
                onClick={clearSearch}
                className="text-[1.3rem] cursor-pointer text-white/50"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
