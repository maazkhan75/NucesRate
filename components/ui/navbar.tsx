"use client";
import { useState } from "react";
import Image from "next/image";
import logoImage from "@/public/assets/imgs/Logo.png";
import { BiMenu, BiX } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/navigation"; // For Next.js 13 App Router
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { EnvVarWarning } from "../env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { googleAuthSignIn } from "@/app/actions";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the menu
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  const handleLinkClick = (path: string) => {
    closeMenu();
    router.push(path);
  };

  return (
    <div className="bg-black relative z-100">
      <div className="px-4 py-2 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={logoImage}
            alt="NucesHub logo"
            className="h-[7rem] w-auto"
          />
        </Link>

        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-white text-black focus:outline-none transition duration-300"
        >
          <BiMenu size={24} />
        </button>
      </div>

      {/* Full-screen Navbar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-85 flex flex-col items-start justify-center transition-transform duration-300 transform origin-center scale-100 z-20">
          <div className="flex flex-row w-full justify-center align-center mt-5">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-white hover:bg-[#00a8f3] text-black focus:outline-none transition duration-300"
            >
              <BiX size={24} />
            </button>
          </div>

          <div
            className="flex flex-col items-start p-8 space-y-5 text-white text-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="border-b border-gray-400 w-full pb-2 cursor-pointer navbar-link"
              onClick={() => handleLinkClick("/professors/0")}
            >
              Reviews
            </div>
            <div
              className="border-b border-gray-400 w-full pb-2 navbar-link cursor-pointer"
              onClick={() => googleAuthSignIn("google")}
            >
              Sign In
            </div>
            <div
              className="border-b border-gray-400 w-full pb-2 navbar-link cursor-pointer"
              onClick={() => handleLinkClick("/privacyPolicy")}
            >
              Privacy Policy
            </div>
            <div
              className="border-b border-gray-400 w-full pb-2 navbar-link cursor-pointer"
              onClick={() => handleLinkClick("/terms&conditions")}
            >
              Terms and Conditions
            </div>
            <div
              className="border-b border-gray-400 w-full pb-2 navbar-link cursor-pointer"
              onClick={() => handleLinkClick("/sign-up")}
            >
              Log Out
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
