import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LogoImgPath from "../../public/assets/imgs/logo.png";
import "../../app/globals.css";
import HeaderAuth from "@/components/header-auth";
import { EnvVarWarning } from "../env-var-warning";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Menu from '@/public/assets/icons/menu.svg'

export function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 bg-black text-foreground">
      <div className="flex items-center justify-between w-full">
        <Link href={"/"}>
          <Image
            src={LogoImgPath}
            alt="NucesRate logo"
            className="h-[6rem] w-auto pl-5"
          />
        </Link>

        <Sheet>
          {/* button for opening navbar */}
          <SheetTrigger asChild>
            <div className="justify-center items-center ">
              <Button className="bg-transparent mt-1 px-3 py-2 w-16 h-16 rounded-full focus:outline-none focus:ring-0 active:bg-transparent hover:bg-transparent">
                <Menu />
                <span className="sr-only">Toggle navigation menu</span>{" "}
                {/* for screen readers */}
              </Button>
            </div>
          </SheetTrigger>

          <SheetContent side="right">
            <div className="grid w-50 mt-20">
              {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

