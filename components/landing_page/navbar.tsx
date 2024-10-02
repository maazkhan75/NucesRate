"use client";
import Image from "next/image";
import logoImage from "../../public/assets/imgs/logo.png";
import MenuIcon from "../../public/assets/icons/menu.svg";
import { BiLogInCircle } from "react-icons/bi";
import Link from "next/link";

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
              className="flex items-center text-white text-sm text-opacity-80 hover:text-opacity-100 transition duration-300 border-2 border-white/80 hover:border-white rounded-xl rounded-xl px-4 py-1 font-[500] mr-5 tracking-widest "
            >
              Log In
              <BiLogInCircle className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};