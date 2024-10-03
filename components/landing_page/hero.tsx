import { Outfit } from "next/font/google";
import Link from "next/link";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"], // Choose weights based on your need
});

import { Fira_Sans } from "next/font/google";

const fira_sans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});


export const Hero = () => {
  return (
    <div className="bg-black bg-[linear-gradient(to_bottom,#000,#0d2542_36%,##0d2542)] pt-[10px] pb-[75px] relative overflow-clip text-center">
      <div className="container">
        {/* <p className="text-white ">Community Driven Platform</p> */}
        <div className="inline-flex relative">
          <h1 className="custom-accent-gradient-text text-6xl font-bold mb-3 tracking-tighter mt-6 inline-flex">
            Your Guide to <br /> Professors
          </h1>
        </div>
        <p className={`${outfit.className} text-white/80 text-lg mb-1`}>
          NucesHub helps you choose top professors with anonymous reviews for
          academic success.
        </p>

        <div className="items-center justify-center pt-10">
          <Link
            href="/professors/0"
            className={`${fira_sans.className} text-md mb-3 text-white bg-black bg-opacity-85 hover:bg-opacity-100 transition duration-300 font-[500] border-2 border-white rounded-xl px-4 py-2 mr-2`}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};