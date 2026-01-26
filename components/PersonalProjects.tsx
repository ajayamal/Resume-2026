import { Experience } from "./Experience";
import { List } from "./ExperienceSection";
import { Heading } from "./Heading";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Project = ({
  title,
  projects,
}: {
  title: string;
  projects: string[];
}) => (
  <div className="flex gap-2 pt-2 items-center">
    <div className="text-white font-medium">{title}:</div>
    <div className="flex flex-wrap gap-1">
      {projects?.map((project, key) => (
        <div
          key={key}
          className="px-3 text-xs font-semibold py-1 rounded-full bg-zinc-800 text-zinc-400"
        >
          {project}
        </div>
      ))}
    </div>
  </div>
);

export const PersonalProjects = () => (
  <section className="col-span-3 mt-6" id="education">
    <Heading title="Projects" />

    {/* <!-- Education 1 --> */}
    <div className="relative border-s border-gray-200 ml-4">
      <Experience
        icon={faRocket}
        companyName="PowerKick"

      >
        <Project title="Tech stack" projects={["Flutter, Java Spring Boot"]} />
        <div className="text-[13px] leading-1">
          Developed a Flutter-based mobile app for Power Kick, a South Korean on-the-go charging startup, integrating with a Java Spring Boot backend.
        </div>
      </Experience>
      <Experience
        icon={faRocket}
        companyName="ARTO"
      >
        <Project title="Tech stack" projects={["Flutter, Java Spring Boot"]} />
        <div>
          Arto is a digital art discovery platform that connects artists, galleries, and collectors, enabling users to explore artworks, book viewings, and purchase art.
        </div>
      </Experience>
    </div>
    {/* <!-- End Education 1 --> */}
  </section>
);
