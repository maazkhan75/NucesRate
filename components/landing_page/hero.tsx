import { Quicksand } from "next/font/google";
import Link from "next/link";


const quicksand = Quicksand({
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
    <div className="bg-black bg-[linear-gradient(to_bottom,#000,#0d2542_36%,#00a0f0_75%)] pt-[10px] pb-[75px] relative overflow-clip text-center">
      <div className="absolute h-[400px] w-[1536px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#00a0f0] bg-[radial-gradient(closest-side,#000_86%,#00a0f0)] top-[calc(100%-96px)]"></div>

      <div className="container relative">
        <p className="custom-accent-gradient-text">Community Driven Platform</p>
        <div className="inline-flex relative">
          <h1 className="text-white text-6xl font-bold mb-3 tracking-tighter mt-10 inline-flex">
            Your Guide to <br /> Professors
          </h1>
        </div>
        <p className={`${quicksand.className} text-white text-lg mb-3`}>
          NucesHub supports your academic journey by offering anonymous reviews
          , helping you choose the best professors and excel in your studies.
        </p>

        <div className="items-center justify-center pt-10">
          <Link
            href="/professors/0"
            className={`${fira_sans.className} text-lg mb-3 text-black bg-white bg-opacity-85 hover:bg-opacity-100 transition duration-300 font-[500] rounded-lg px-4 py-2 mr-2`}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};