import { Outfit} from "next/font/google";
import Link from "next/link";
import styles from "./hero.module.css"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500"],
});


export const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#011021] to-black pt-[10px] pb-[75px] text-center overflow-clip">
      <div className="container">
        <div className="inline-flex">
          <h1 className="text-white text-6xl font-bold mb-3 tracking-tighter mt-20 sm:mt-10 inline-flex">
            Your Guide to <br /> Professors
          </h1>
        </div>
        <p className={`${outfit.className} text-white/70 text-lg mb-1`}>
          NucesRate helps you choose top professors with anonymous reviews for
          academic success.
        </p>

        <div className="flex items-center justify-center pt-5">
          <div className="btn-wrapper w-[140px] h-[40px]">
            <div className="btn-content flex justify-center items-center">
              <Link
                href="/professors/0"
                className={`
              ${outfit.className}
              text-md text-white
              font-[500]
              overflow-hidden
              group
            `}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
