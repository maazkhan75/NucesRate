"use client"; 



// import HeaderAuth from "@/components/header-auth";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logoImage from "../../public/assets/imgs/logo.png";
import "../../app/globals.css";
import { googleAuthSignIn } from "@/app/actions";

import { EnvVarWarning } from "../env-var-warning";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export function NavbarApp() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 bg-black text-foreground">
      <div className="flex items-center justify-between w-full">
        <Link href={"/"}>
          <Image
            src={logoImage}
            alt="NucesHub logo"
            className="h-[6rem] w-auto"
          />
        </Link>

        {/* for bigger screens */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href={"/privacyPolicy"}>
            <h2 className="navbarLink">Privacy Policy</h2>
          </Link>

          <Link href={"/termsOfService"}>
            <h2 className="navbarLink">Terms of Service</h2>
          </Link>

          <button
            onClick={() => googleAuthSignIn("google")}
            className="navbarLink"
          >
            Log In
          </button>

          {/* {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />} */}
        </div>

        {/* for smaller screens */}
        <Sheet>
          {/* button for opening navbar in smaller screens */}
          <SheetTrigger asChild>
            <div className="md:hidden">
              <Button size="icon">
                <span className="h-6 w-6">
                  <MenuIcon />
                </span>
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </div>
          </SheetTrigger>

          <SheetContent side="right">
            <div className="grid w-[200px] p-4 gap-10">
              <Link href={"/privacyPolicy"}>
                <h2 className="navbarLink">Privacy Policy</h2>
              </Link>

              <Link href={"/termsOfService"}>
                <h2 className="navbarLink">Terms of Service</h2>
              </Link>

              <button
                onClick={() => googleAuthSignIn("google")}
                className="navbarLink"
              >
                Log In
              </button>

              {/* {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />} */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );

}
