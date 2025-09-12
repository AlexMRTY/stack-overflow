"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { useSearchParams } from "next/navigation";

interface LocalSearchProps {
  route: string;
  imgSrc: string;
  otherClasses?: string;
  placeholder: string;
}
const LocalSearch = ({
  route,
  imgSrc,
  otherClasses,
  placeholder,
}: LocalSearchProps) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <Image
        src={imgSrc}
        width={24}
        height={24}
        alt="Search"
        className="crusor-pointer"
      />

      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        className="paragraph-regular bg-none no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
