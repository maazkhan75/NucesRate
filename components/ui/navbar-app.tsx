import Link from "next/link";
import HeaderAuth from "@/components/header-auth";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import SearchBar from "./navbar_search_bar";
import { EnvVarWarning } from "../env-var-warning";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export function NavbarApp() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5  bg-black text-foreground">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-semibold">NucesHub</span>
        </Link>
          <div className="hidden md:flex gap-4 items-center">
            <SearchBar />
            <Link href={"/professors/0"}>
              <h2 style={{ textDecoration: "underline", cursor: "pointer" }}>Professors</h2>
            </Link>
            {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
          </div>
        <Sheet>
          <SheetTrigger asChild>
            <div className="md:hidden">
              <Button size="icon">
                <span className="h-6 w-6 ">
                  <MenuIcon />
                </span>
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid w-[200px] p-4 gap-10">
              <Link href={"/professors/0"}>
                <h2 style={{ textDecoration: "underline", cursor: "pointer" }}>Professors</h2>
              </Link>
              {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
          </SheetContent>
        </Sheet>
      </div>
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
