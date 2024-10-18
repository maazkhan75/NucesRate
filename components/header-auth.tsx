import Link from "next/link";
import { signOutAction } from "@/app/actions";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import signoutIcon from "@/public/assets/icons/signout.png";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { SigninBtn } from "./ui/googleSignIn-btn"; 

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default async function Auth() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return user ? (
    <div
      className={`${outfit.className} flex flex-col gap-6 text-xl text-white/80 items-center justify-center`}
    >
      <form action={signOutAction}>
        <Button
          type="submit"
          className={`${outfit.className} mb-6 rounded-full bg-black text-white/80 border-2 border-white/20 hover:bg-transparent hover:border-white/35 hover:text-white transition-all duration-300 ease-in-out`}
        >
          Sign out
          <Image
            src={signoutIcon}
            alt="google icon"
            className="pl-2 h-[1rem] w-auto"
          />
        </Button>
      </form>

      <Link href={"/userReviews"}>
        <h3 className="redirection-link">My Reviews</h3>
      </Link>
      <Link href={"/professors/0"}>
        <h3 className="redirection-link">Professors</h3>
      </Link>
      <Link href={"/privacyPolicy"}>
        <h3 className="redirection-link">Privacy Policy</h3>
      </Link>
      <Link href={"/termsOfService"}>
        <h2 className="redirection-link">Terms of Service</h2>
      </Link>
      <Link href={"/requestProfessor"}>
        <h3 className="redirection-link">Request to add Professor</h3>
      </Link>
    </div>
  ) : (
    <div
      className={`${outfit.className} flex flex-col gap-6 text-xl text-white/80 items-center justify-center`}
    >
      <SigninBtn />

      <Link href={"/professors/0"}>
        <h3 className="redirection-link">Professors</h3>
      </Link>
      <Link href={"/privacyPolicy"}>
        <h3 className="redirection-link">Privacy Policy</h3>
      </Link>
      <Link href={"/termsOfService"}>
        <h2 className="redirection-link">Terms of Service</h2>
      </Link>
      <Link href={"/requestProfessor"}>
        <h3 className="redirection-link">Request to add Professor</h3>
      </Link>
    </div>
  );
}
