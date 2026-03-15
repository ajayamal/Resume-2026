import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Experience } from "./Experience";
import { Heading } from "./Heading";
import { ReactNode } from "react";

const Project = ({
  title,
  projects,
}: {
  title: string;
  projects: string[];
}) => (
  <div className="flex gap-2 pt-2 items-center mb-4">
    <div className="text-white font-medium">{title}:</div>
    <ul className="flex flex-wrap gap-1">
      {projects?.map((project, key) => (
        <li
          key={key}
          className="px-3 text-xs font-semibold py-1 rounded-full bg-zinc-800 text-zinc-400 list-none"
        >
          {project}
        </li>
      ))}
    </ul>
  </div>
);

export const List = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-2 mb-1">
    <div className="flex mt-1 flex-shrink-0">
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
    <div className="text-wrap text-justify">{children}</div>
  </li>
);

export const ExperienceSection = () => (
  <section className="col-span-3" id="experience">
    <Heading title="Experience" />

    <ul className="relative border-s border-gray-200 ml-4 p-0 list-none">
      <Experience
        companyName="Frontend Developer @ TCS - (Full-Time)"
        isPresent
        duration="May 2023 - Present"
        location="Bengaluru, Karnataka, India"
      >
        <div className="flex flex-col gap-4 text-[13px] font-medium">
          {/* Angular + Java Spring MVC Project (Current Project) */}
          <div>
            <div className="font-semibold text-purple-900 mb-1">
              <Project title="Key Clients" projects={["Qualcomm - (Present)", "Amazon"]} />
            </div>
            <ul className="list-none p-0 m-0">
              <List>
                Core contributor to the Qualcomm WWW team, developing and maintaining qualcomm.com using React for the frontend and Adobe Experience Manager (AEM) as the backend CMS.
              </List>
              <List>
                Built reusable, modular React components aligned with AEM authoring workflows, collaborating closely with designers, backend engineers, and content teams.
              </List>
              <List>
                Worked on performance optimization, cross-browser compatibility, accessibility, and SEO best practices for a high-traffic enterprise website.
              </List>
              <List>
                Supported Amazon CodeWhisperer as part of the data analytics team, creating and validating code samples for predefined prompts used in AI-assisted code generation.
              </List>
              <List>
                Optimized code performance and efficiency to ensure correctness and quality standards.
              </List>
            </ul>
          </div>
        </div>
      </Experience>
      <Experience
        companyName="Full Stack Developer  @ WEB3 CITADEL - (Full-Time)"
        duration="Jun 2021 - Dec 2022"
        location="Chennai, Tamil Nadu, India"
      >
        <div className="flex flex-col gap-4 text-[13px] font-medium">
          {/* Angular + Java Spring MVC Project (Current Project) */}
          <div>
            <div className="font-semibold text-purple-900 mb-1">
              <Project
                title="Projects"
                projects={["Valores NFT marketplace", "8Mint"]}
              />
            </div>
            <ul className="list-none p-0 m-0">
              <List>
                Worked as a Full Stack Developer on Valores and 8Mint, building full-stack features using Next.js (frontend) and NestJS (backend), with PostgreSQL for data persistence.
              </List>
              <List>
                Contributed to 8Mint, a Web3 NFT platform offering creators no-code tools for creating and managing NFTs — including features like allowlist and raffle workflows and branded minting pages.
              </List>
              <List>
                Designed and implemented REST APIs and backend logic using NestJS, handling user flows, permissions, database interactions, and integration points with Web3 interfaces.
              </List>
              <List>
                Built responsive, interactive Next.js frontend features, translating high-level UX flows into reusable components and optimizing for performance and modularity.
              </List>
            </ul>
          </div>
        </div>
      </Experience>
      <Experience
        companyName="Backend Developer @ F22 Labs"
        duration="Jan 2020 - Jul 2020"
        location="Chennai, Tamil Nadu, India"
      >
        <div className="font-semibold text-purple-900 mb-1">
          <Project title="Projects" projects={["JustAct", "Pixlmeet"]} />
        </div>
        <ul className="flex flex-col gap-1 text-[13px] font-medium list-none p-0 m-0">
          <List>
            Built and maintained backend services using Ruby on Rails, Node.js, AdonisJS, and ExpressJS, working across multiple runtime environments.
          </List>
          <List>
            Focused on API architecture and backend workflows, supporting early-stage product development.
          </List>
          <List>
            Gained strong exposure to scalability, performance considerations, and backend design trade-offs.
          </List>
          <List>
            Established a solid foundation in server-side development, later enabling a transition into full-stack and frontend roles.
          </List>
        </ul>
      </Experience>
      <Experience
        companyName="Junior Full Stack Developer @ Altius Technologies - (Full-Time)"
        duration="Jun 2019 - Dec 2019"
        location="Coimbatore, Tamil Nadu, India"
      >
        <ul className="flex flex-col gap-1 text-[13px] font-medium list-none p-0 m-0">
          <List>
            Progressed from Intern to Full-Time Developer, contributing to multiple client-facing applications.
          </List>
          <List>
            Primarily involved in backend development using ExpressJS, MongoDB, and Node.js.
          </List>
          <List>
            Supported frontend development using Angular, working on feature implementation and UI integration.
          </List>
          <List>
            Gained hands-on experience with end-to-end project execution in a collaborative engineering environment.
          </List>
        </ul>
      </Experience>
    </ul>
  </section>
);
