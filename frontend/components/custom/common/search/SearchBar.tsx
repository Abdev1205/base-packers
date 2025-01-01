"use client";

import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import debounce from "lodash.debounce";

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchText, setSearchText] = useState("");

  // Debounced search to minimize unnecessary navigation calls
  const handleSearch = debounce(() => {
    const sanitizedQuery = searchText.trim();
    console.log("sanitized query: ", sanitizedQuery);

    if (sanitizedQuery) {
      router.push(`?q=${sanitizedQuery}`);
    } else {
      router.push(`${pathname}/`); // Navigate without `q` if search is empty
    }
  }, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === "Enter") return handleSearch();
  };

  return (
    <div className="flex w-[20rem] h-9 font-openSans">
      <div
        // Pass the event to the debounced function
        className="w-[100%] flex items-center gap-[.1rem] border-2 bg-[#2b2a2a] border-white/10 h-full px-[1rem] rounded-[.5rem] "
      >
        <IoSearch
          onClick={handleSearch}
          className="text-[1.3rem] cursor-pointer text-white/50 mr-[.3rem] "
        />
        <input
          value={searchText}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Type here to Search"
          className="focus-visible:ring-0 text-[.95rem] outline-none border-none text-white/50 placeholder:text-white/50 placeholder:font-[400]   bg-transparent w-full"
        />
      </div>
    </div>
  );
};

export default SearchBar;
