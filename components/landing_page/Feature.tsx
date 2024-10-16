"use client";
import { Outfit, Fira_Sans } from "next/font/google";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500"],
});



export const Feature = ({
  title,
  description,
  icon: Icon, // Renamed for clarity, it's the icon image source
}: {
  title: string;
  description: string;
  icon: string | StaticImageData; // Type remains string as we are passing the image path
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current.getBoundingClientRect();
      offsetX.set(e.clientX - borderRect.x);
      offsetY.set(e.clientY - borderRect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      key={title}
      className="border border-white/30 px-5 py-10 mt-1 text-center rounded-xl sm:flex-1 relative"
    >
      <motion.div
        className="absolute inset-0 border-4 border-[#0073ff] rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="inline-flex justify-center items-center">
        <Image src={Icon} alt={`${title} icon`} className="h-12 w-12" />
      </div>
      <h3 className={`${outfit.className} pt-6 font-bold tracking-widest`}>{title}</h3>
      <p className={`${outfit.className} mt-2 text-white/70`}>{description}</p>
    </div>
  );
};
