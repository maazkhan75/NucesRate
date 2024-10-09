"use client";
import GithubIcon from "../../public/assets/icons/github.png";
import Image from "next/image";
import Link from "next/link";
import "../../app/globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div
          className={`${outfit.className} flex flex-row gap-4 justify-between`}
        >
          <div className="text-center">© NucesHub, Inc.</div>
          <ul className="flex justify-center items-center gap-5">
            <li className="hidden sm:block">
              <Link href={"/privacyPolicy"}>
                <h2 className="redirection-link">Privacy Policy</h2>
              </Link>
            </li>
            <li className="hidden sm:block">
              <p>|</p>
            </li>
            <li className="hidden sm:block">
              <Link href={"/termsOfService"}>
                <h2 className="redirection-link">Terms of Service</h2>
              </Link>
            </li>
            <li>
              <a href="https://github.com/maazkhan75/NucesHub">
                <Image
                  src={GithubIcon}
                  alt="GitHub Icon"
                  width={50}
                  height={50}
                  style={{ marginTop: "-2px" }}
                  className="custom-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};