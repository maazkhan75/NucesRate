import { signOutAction } from "@/app/actions";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import { googleAuthSignIn } from "@/app/actions";
import Image from "next/image";
 
export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email?.slice(0, user.email?.indexOf("@"))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Avatar>
              <AvatarImage src={user?.user_metadata.avatar_url} sizes="100" />
              <AvatarFallback>
                {user.email?.slice(0, user.email?.indexOf("@"))}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <form action={signOutAction}>
            <Button type="submit" variant={"outline"}>
              Sign out
            </Button>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ) : (
    <Button onClick={() => googleAuthSignIn("google")} variant="outline">
      Sign in with Google
    </Button>
  );
}
