"use client";
import Image from "next/image"
import appScreen from "../../public/assets/imgs/prodImage.jpg";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef} from "react"
import React from "react";
import PlusIcon from "../../public/assets/icons/plus.svg";
import MinusIcon from "../../public/assets/icons/minus.svg";
import clsx from "clsx";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300"],
});



const items = [
  {
    question: "Will my identity be exposed if I review any professor?",
    answer:
      "No, privacy is our top priority. Your review will be displayed anonymously, protecting your identity while allowing you to provide valuable feedback.",
  },
  {
    question: "How are the reviews moderated on NucesHub?",
    answer:
      "All student reviews are moderated to ensure appropriate content before being displayed. Moderators have the authority to approve or reject feedback based on community standards, and a history of moderator actions, including approvals and rejections, is maintained for transparency.",
  },
  {
    question:
      "Can I request the addition of professors or courses?",
    answer:
      "Yes, Students can request the addition of professors or courses that are not currently available on NucesHub by submitting a basic form and the moderator can approve addition if he finds your data authentic.",
  },
  {
    question: "Can anyone post reviews here?",
    answer:
      "No, only users with a nu.edu.pk Google account are allowed to post reviews and like or dislike other students' reviews. This ensures that feedback is provided by verified FAST University students.",
  },
  {
    question: "Are there any rules for writing a review?",
    answer:
      "Yes, there are rules for writing reviews. You should not use slang words, and while you can point out negative aspects of a professor, it must be done in appropriate language. Using violent or abusive language may result in a ban from the platform.",
  },
];

const AccordianItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold mr-5">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>

      {/* below clsx for having multiple classes with conditions and first one is
      default(for learning...)
      className={clsx("mt-4", { hidden: !isOpen, "": isOpen === true })} */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "16px",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            <span className="text-md font-[200] leading-normal text-base">
              {answer}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export const ProductShowcaseAndFAQs = () => {

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
    <div className="bg-gradient-to-b from-black via-[#01152b] to-black py-[72px] sm:py-24 text-white">
      <div className="container">
        <h2 className="custom-accent-gradient-text text-center text-5xl sm:6xl font-bold tracking-tighter">
          User-friendly interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5 ">
            Experience an effortlessly navigable design that allows students to
            share their feedback and access reviews with ease.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <motion.div
            style={{
              opacity: changeOpacity, //changing opacity
              rotateX: rotateX, //how much rotated
              transformPerspective: "800px", //transformPerspective refers to the distance between the viewer and the 3D object being transformed
            }}
          >
            <Image
              src={appScreen}
              className="mt-14"
              width={700}
              height={400}
              alt="the product screenshot"
              ref={appImage}
            />
          </motion.div>
        </div>

        <h2 className="custom-accent-gradient-text text-center font-bold text-5xl sm:6xl sm:max-w-[648px] mx-auto tracking-tighter pt-40">
          Frequently Asked Questions
        </h2>
        <div
          className={`${outfit.className} text-white text-lg mb-3 mt-12 max-w-[648px] mx-auto`}
        >
          {items.map(({ question, answer }) => (
            <AccordianItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};