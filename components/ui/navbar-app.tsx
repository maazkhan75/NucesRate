import Link from "next/link";
import HeaderAuth from "@/components/header-auth";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import SearchBar from "./navbar_search_bar";
import { ThemeSwitcher } from "../theme-switcher";
import { EnvVarWarning } from "../env-var-warning";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export function NavbarApp() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 bg-white dark:bg-black">
      <div className="flex items-center justify-between w-full">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          {/* <span className="h-6 w-6">icon</span> */}
          <span className="text-lg font-semibold">AcadLens</span>
        </Link>
        <div className="hidden md:flex gap-4">
          <SearchBar />
          <Link href={"/professors/0"}>
            <h2 style={{ textDecoration: "underline", cursor: "pointer" }}>Professors</h2>
          </Link>
          <ThemeSwitcher />
          {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <span className="h-6 w-6">
                <MenuIcon />
              </span>
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid w-[200px] p-4">
              <Link href={"/professors/0"}>
                <h2 style={{ textDecoration: "underline", cursor: "pointer" }}>Professors</h2>
              </Link>
              <ThemeSwitcher />
              {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* Search Bar for Mobile */}
      <div className="w-full mt-2 md:hidden">
        <SearchBar />
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
