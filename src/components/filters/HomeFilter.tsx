"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/src/lib/utils";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/src/lib/url";
const filters = [
  { name: "Javascript", value: "javascript" },
  { name: "Typescript", value: "typescript" },
];

const HomeFilter = () => {
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [active, setActive] = useState(filterParams || "");
  const router = useRouter();

  const handleTypeClick = (filter: string) => {
    let newUrl = "";

    if (filter === active) {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
      setActive("");
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter,
      });
      setActive(filter);
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => {
        return (
          <Button
            key={filter.name}
            className={cn(
              `body-medium rounded-lg px-6 py-3 capitalize shadow-none`,
              active === filter.value
                ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
                : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
            )}
            onClick={() => handleTypeClick(filter.value)}
          >
            {filter.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilter;
