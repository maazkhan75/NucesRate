"use client";
import GithubIcon from "../../public/assets/icons/github.png";
import Image from "next/image";
import "../../app/globals.css";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-row gap-4 justify-between">
          <div className="text-center">© NucesHub, Inc.</div>
          <ul className="flex justify-center items-center gap-5">
            <li>
              <a>Privary Policy</a>
            </li>
            <li>
              <p>|</p>
            </li>
            <li>
              <a>Terms & Conditions</a>
            </li>
            <li>
              <a href="https://github.com/maazkhan75/NucesHub">
                <Image
                  src={GithubIcon}
                  alt="GitHub Icon"
                  width={60}
                  height={60}
                  style={{ marginTop:'-2px' }}
                  className="github-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};