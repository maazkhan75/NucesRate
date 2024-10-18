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
            className="h-[7rem] w-auto pl-5"
          />
        </Link>

        {/* for bigger screens */}
        <div className="hidden md:flex gap-4 items-center text-white/80">
          
          {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
        </div>

        {/* for smaller screens */}
        <Sheet>
          {/* button for opening navbar in smaller screens */}
          <SheetTrigger asChild>
            <div className="md:hidden justify-center items-center ">
              <Button className="bg-transparent mt-1 px-3 py-2 w-16 h-16 rounded-full focus:outline-none focus:ring-0 active:bg-transparent hover:bg-transparent">
                <Menu />
                <span className="sr-only">Toggle navigation menu</span>{" "}
                {/* for screen readers */}
              </Button>
            </div>
          </SheetTrigger>

          <SheetContent side="right">
            <div className="grid w-[200px] mt-20 gap-10">
              <Link href={"/privacyPolicy"}>
                <h3 className="redirection-link">Privacy Policy</h3>
              </Link>
              <Link href={"/termsOfService"}>
                <h3 className="redirection-link">Terms of Service</h3>
              </Link>
              {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

