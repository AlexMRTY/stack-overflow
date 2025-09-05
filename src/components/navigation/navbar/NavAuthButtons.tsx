import ROUTES from "@/src/app/constants/routes";
import React from "react";
import { Button } from "@/src/components/ui/button";
import { SheetClose } from "@/src/components/ui/sheet";
import Link from "next/link";
import { auth, signOut } from "@/auth";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

const NavAuthButtons = async ({
  isSheet = false,
  isMobileNav = false,
}: {
  isSheet?: boolean;
  isMobileNav?: boolean;
}) => {
  const session = await auth();
  if (session) {
    return (
      <Link
        href={ROUTES.SIGN_IN}
        className="flex items-center justify-start bg-transparent p-4"
        onClick={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Image
          src="/icons/log-out.svg"
          alt="Log Out"
          width={20}
          height={20}
          className="invert-colors"
        />
        <p
          className={cn(
            "min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ",
            `${!isMobileNav ? "max-lg:hidden" : ""}`
          )}
        >
          Log out
        </p>
      </Link>
    );
  }

  const logInButton = (
    <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
      <Link
        href={ROUTES.SIGN_IN}
        className="flex items-center justify-start gap-4"
      >
        <Image
          src="/icons/account.svg"
          alt="Account"
          width={20}
          height={20}
          className="invert-colors lg:hidden"
        />
        <span
          className={cn(
            "primary-text-gradient",
            `${!isMobileNav ? "max-lg:hidden" : ""}`
          )}
        >
          Log In
        </span>
      </Link>
    </Button>
  );

  const signUpButton = (
    <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
      <Link
        href={ROUTES.SIGN_UP}
        className="flex items-center justify-start gap-4"
      >
        <Image
          src="/icons/sign-up.svg"
          alt="Account"
          width={20}
          height={20}
          className="invert-colors lg:hidden"
        />
        <span className={!isMobileNav ? "max-lg:hidden" : ""}>Sign Up</span>
      </Link>
    </Button>
  );

  if (isSheet)
    return (
      <div className="flex flex-col gap-3">
        <SheetClose>{logInButton}</SheetClose>

        <SheetClose asChild>{signUpButton}</SheetClose>
      </div>
    );
  else
    return (
      <div className="flex flex-col gap-3">
        {logInButton}
        {signUpButton}
      </div>
    );
};

export default NavAuthButtons;
