"use client";
import { DiVim } from "react-icons/di";
import EcosystemIcon from '../assets/icons/ecosystem.svg'
import AnonymousReviewIcon from "../../public/assets/icons/anonymous.png";
import ModeratedFeedbackIcon from "../../public/assets/icons/moderation.png";
import FiltersIcon from "../../public/assets/icons/filter.png";




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
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="custom-accent-gradient-text text-center font-bold text-5xl sm:6xl tracking-tighter">
          Everything you need
        </h2>

        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Especially tailored for enhancing learning experience at FAST
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description, icon }) => (
            <Feature title={title} description={description} icon={icon} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
