import { DiVim } from "react-icons/di";
import EcosystemIcon from '../assets/icons/ecosystem.svg'
import {Feature} from '../../components/landing_page/Feature'

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return <div className="bg-black text-white py-[72px] sm:py-24">
    <div className="container">
      <h2 className="text-center font-bold text-5xl sm:6xl tracking-tighter">Everything you need</h2>

      <div className="max-w-xl mx-auto">
      <p className="text-center mt-5 text-xl text-white/70">From accessing study materials to exploring reviews of the professors, a student can benifit from NucesHub </p>
      </div>
      <div className="mt-16 flex flex-col sm:flex-row gap-4">
        {features.map(({title,description}) => (
          <Feature title={title} description={description} key={title}/>

        ))}
      </div>
    </div>

  </div>;
};