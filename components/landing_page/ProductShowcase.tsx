import Image from "next/image"
import appScreen from "../../public/assets/imgs/prodImage.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#027cf5] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>

        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5 ">
            wait is over to see a masterpiece making your academic journey
            simpler
          </p>
        </div>

        <div className="flex justify-center items-center ">
          <Image
            src={appScreen}
            className="mt-14"
            width={400}
            height={400}
            alt="the product screenshot"
          />
        </div>
      </div>
    </div>
  );
};
