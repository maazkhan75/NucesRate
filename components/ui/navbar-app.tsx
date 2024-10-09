import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logoImage from "../../public/assets/imgs/logo.png";
import "../../app/globals.css";
import { googleAuthSignIn } from "@/app/actions";
import HeaderAuth from "@/components/header-auth";
import { EnvVarWarning } from "../env-var-warning";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import menu from '@/public/assets/icons/menu.png'

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
        <div className="hidden md:flex gap-4 items-center text-white/80">
          {/* <Link href={"/privacyPolicy"}>
            <h3 className="redirection-link">Privacy Policy</h3>
          </Link>
          <Link href={"/termsOfService"}>
            <h3 className="redirection-link">Terms of Service</h3>
          </Link> */}

          {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
        </div>

        {/* for smaller screens */}
        <Sheet>
          {/* button for opening navbar in smaller screens */}
          <SheetTrigger asChild>
            <div className="md:hidden justify-center items-center ">
              <Button className="bg-transparent mb-0 pb-0">
                  <Image
                    src={menu}
                    alt="NucesHub logo"
                    className="h-[30px] w-[30px]"
                  />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </div>
          </SheetTrigger>

          <SheetContent side="right">
            <div className="grid w-[200px] p-4 gap-10">
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

