import Image from "next/image";
import logoImage from "../../public/assets/imgs/logo.png";
import MenuIcon from "../../public/assets/icons/menu.svg";
import Link from "next/link";
import HeaderAuth from "@/components/header-auth";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import SearchBar from "./navbar_search_bar";
import { EnvVarWarning } from "../env-var-warning";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";


export function NavbarApp() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5  bg-background text-foreground">
      <div className="flex items-center justify-between w-full">
        <Link href={"/"}>
              <Image
                src={logoImage}
                alt="NucesHub logo"
                className="h-[5rem] w-auto"
              />
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
