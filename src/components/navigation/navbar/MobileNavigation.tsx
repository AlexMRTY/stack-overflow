import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "@/src/components/navigation/navbar/NavLinks";
import NavAuthButtons from "@/src/components/navigation/navbar/NavAuthButtons";
import ROUTES from "@/src/app/constants/routes";
import { Button } from "../../ui/button";

const MobileNavigation = () => {
  return (
    <Sheet>
      {/* <div className="p-4"> */}
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none p-6"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="Logo"
          />

          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link>

        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between gap-2 overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>

          <NavAuthButtons isSheet isMobileNav />
        </div>
      </SheetContent>
      {/* </div> */}
    </Sheet>
  );
};

export default MobileNavigation;
