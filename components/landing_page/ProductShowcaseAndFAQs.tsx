"use client";
import Image from "next/image"
import appScreen from "../../public/assets/imgs/prodImage.png";
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

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
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
        <span className="flex-1 text-lg font-bold">{question}</span>
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
            {answer}
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

    <div className="bg-gradient-to-b from-black via-[#0d2542] to-black py-[72px] sm:py-24 text-white">
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
              opacity: changeOpacity, //changing opacity
              rotateX: rotateX, //how much rotated
              transformPerspective: "800px", //transformPerspective refers to the distance between the viewer and the 3D object being transformed
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

        <h2 className="text-center font-bold text-5xl sm:6xl sm:max-w-[648px] mx-auto tracking-tighter pt-40">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordianItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};