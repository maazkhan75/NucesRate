import { signOutAction } from "@/app/actions";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import {SigninBtn} from "./ui/googleSignIn-btn"
import { Outfit } from "next/font/google";
import profileIconPath from "../public/assets/icons/profile.png"
import Image from "next/image";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500"],
});


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
 
export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={`${outfit.className} mb-2 text-sm rounded-full bg-black text-white/80 border-2 border-white/20 hover:bg-transparent hover:border-white/35 hover:text-white transition-all duration-300 ease-in-out`}
          >
            My Profile
            <Image
              src={profileIconPath}
              alt="profile icon"
              className="pl-2 h-[1rem] w-auto"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
          <form action={signOutAction}>
            <Button type="submit" variant={"outline"}>
              Sign out
            </Button>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ) : (
    <SigninBtn />
  );
}
