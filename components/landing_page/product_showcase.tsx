"use client";
import Image from "next/image"
import appScreen from "../../public/assets/imgs/prodImage.png";
import { motion,useScroll, useTransform } from "framer-motion"
import { useEffect, useRef} from "react"

export const ProductShowcase = () => {

const appImage = useRef<HTMLImageElement>(null);

const {scrollYProgress}= useScroll({
  target: appImage,
  offset: ["start end","end end"],

})

//for viewing scrollProgress values in console
// useEffect(() => {
//    scrollYProgress.on('change',(latestValue) => console.log('latestValue: ', latestValue));
// }, []);

// As our srollYProgress values go from 0,1 we want our rotateX values to go from 15 to 0
const rotateX=useTransform(scrollYProgress,[0, 1], [40, 0])

const changeOpacity = useTransform(scrollYProgress,[0,1],[.5, 1])

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

        <div className="flex justify-center items-center">
          <motion.div
            style={{
              opacity: changeOpacity,   //changing opacity
              rotateX: rotateX,    //how much rotated
              transformPerspective: "800px",   //transformPerspective refers to the distance between the viewer and the 3D object being transformed
            }}
          >
            <Image
              src={appScreen}
              className="mt-14"
              width={400}
              height={400}
              alt="the product screenshot"
              ref={appImage}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};