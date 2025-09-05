import React from "react";
import NavLinks from "./navbar/NavLinks";
import NavAuthButtons from "./navbar/NavAuthButtons";

const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <NavLinks />

      <NavAuthButtons />
    </section>
  );
};

export default LeftSideBar;
