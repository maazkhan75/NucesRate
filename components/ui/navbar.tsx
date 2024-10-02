import Image from "next/image";
import logoImage from "../../public/assets/imgs/logo.png";
import MenuIcon from "../../public/assets/icons/menu.svg";
import { BiLogInCircle } from "react-icons/bi";
import Link from "next/link";
import GoogleSignInButton from "@/components/ui/google_sign_in";
import HeaderAuth from "@/components/header-auth";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import SearchBar from "./navbar_search_bar";
import { EnvVarWarning } from "../env-var-warning";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";



export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-2 flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={logoImage}
              alt="NucesHub logo"
              className="h-[5rem] w-auto"
            />
          </Link>
          <div className="inline-flex justify-center gap-4 items-center">
            <SearchBar />
            <Link href={"/professors/0"}>
              <h2 style={{ textDecoration: "underline", cursor: "pointer" }}>Professors</h2>
            </Link>
            {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
          </div>
        </div>
      </div>
    </div>
  );
};