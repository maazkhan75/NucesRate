"use client";
import Image from "next/image";
import logoImage from "../../public/assets/imgs/logo.png";
import MenuIcon from "../../public/assets/icons/menu.svg";
import { BiLogInCircle } from "react-icons/bi";
import Link from "next/link";
import GoogleSignInButton from "@/components/ui/google_sign_in";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-2 flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={logoImage}
              alt="NucesHub logo"
              className="h-[7rem] w-auto"
            />
          </Link>

          <div className="inline-flex justify-center">
            <a
              href=""
              className="flex items-center transition duration-300  px-4 py-1"
            >
              <GoogleSignInButton />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};