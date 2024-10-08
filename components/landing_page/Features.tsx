"use client";
import { Outfit, Fira_Sans } from "next/font/google";
import AnonymousReviewIcon from "../../public/assets/icons/anonymous.png";
import ModeratedFeedbackIcon from "../../public/assets/icons/moderation.png";
import FiltersIcon from "../../public/assets/icons/filter.png";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

import {Feature} from '../../components/landing_page/Feature'

const features = [
  {
    title: "Anonymous Review System",
    description:
      "Students can submit anonymous reviews and ratings, protecting their privacy and encouraging honest feedback in a transparent environment.",
    icon: AnonymousReviewIcon,
  },
  {
    title: "Moderated Feedback System",
    description:
      "All reviews are moderated for appropriate content. Feedback must follow guidelines, and moderators ensure a respectful environment by approving or rejecting reviews.",
    icon: ModeratedFeedbackIcon,
  },
  {
    title: "Filters for Efficient Search",
    description:
      "NucesHub offers advanced search filters for students to find professors by ratings, recent reviews, or specific campuses, streamlining access to relevant information.",
    icon: FiltersIcon,
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[100px] sm:py-30">
      <div className="container">
        <h2 className="custom-accent-gradient-text text-center font-bold text-5xl sm:6xl tracking-tighter">
          Everything you need
        </h2>

        <div className="max-w-xl mx-auto">
          <p
            className={`${outfit.className} text-center mt-5 text-lg text-white/70`}
          >
            Especially tailored for enhancing learning experience at FAST
          </p>
        </div>
        <div className="mt-5 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description, icon }) => (
            <Feature
              title={title}
              description={description}
              icon={icon}
              key={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
