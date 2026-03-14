import { Heading } from "./Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const EducationCard = ({ title, duration }: { title: string; duration: string }) => (
  <li className="flex-1 bg-zinc-900 border border-zinc-700 p-3 rounded-lg flex items-center gap-3 list-none">
    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
      <FontAwesomeIcon icon={faGraduationCap} className="text-black text-sm" />
    </div>
    <div className="flex flex-col">
      <div className="font-semibold text-white leading-tight">{title}</div>
      <div className="text-xs text-zinc-400">{duration}</div>
    </div>
  </li>
);

export const EducationSection = () => (
  <section className="mt-8" id="education">
    <Heading title="Education" />
    <ul className="flex flex-col sm:flex-row gap-4 p-0 list-none">
      <EducationCard title="MCA" duration="2017 - 2019" />
      <EducationCard title="BCA" duration="2014 - 2017" />
    </ul>
  </section>
);
