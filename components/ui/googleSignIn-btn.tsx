"use client";
import { Button } from "@/components/ui/button";
import { googleAuthSignIn } from "@/app/actions";
import GoogleIcon from "@/public/assets/icons/google.png"
import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500"],
});


export function SigninBtn() {
  return (
    <Button
      className={`${outfit.className} mb-2 rounded-full bg-black text-white/80 border-2 border-white/20 hover:bg-transparent hover:border-white/35 hover:text-white transition-all duration-300 ease-in-out`}
      onClick={() => googleAuthSignIn("google")}
    >
      Sign in
      <Image
        src={GoogleIcon}
        alt="google icon"
        className="pl-2 h-[1rem] w-auto"
      />
    </Button>
  );
}
