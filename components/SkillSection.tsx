import { Heading } from "./Heading";
import { Skills } from "./Skills";

export const SkillSection = () => (
  <section className="col-span-1 mt-8 first:mt-0" id="skills">
    <Heading title="Skills" />

    {/* Programming Languages */}
    <Skills
      title="Programming Languages and Databases"
      skills={[
        "JavaScript (Advanced)",
        "TypeScript",
        "Dart",
        "Java (Intermediate)",
        "SQL (Intermediate)",
        "MongoDB",
        "PostgreSQL",
      ]}
    />

    {/* Frontend & Backend Frameworks */}
    <Skills
      title="Frontend & Backend Frameworks and Libraries"
      skills={[
        "React",
        "Next.js",
        "Nest.js",
        "Axios",
        "Tailwind",
        "Bootstrap",
        "Styled Components",
        "Redux",
        "React Query",
        "Express",
        "Java Spring MVC",
        "Flutter"
      ]}
    />

    {/* DevOps, Tools & Build Systems */}
    <Skills
      title="DevOps, Tools & Build Systems"
      skills={[
        "Git",
        "CI / CD",
        "SonarQube",
        "Jenkins",
        "ESLint",
        "Docker",
        "VSCode",
        "NPM",
        "Yarn",
        "Webpack",
        "Vite",
      ]}
    />

    {/* Cloud, Analytics, CMS & Communication */}
    <Skills
      title="Cloud, Analytics, CMS & Communication"
      skills={[
        "AWS CloudFront",
        "Firebase",
        "Google Analytics",
        "Contentful CMS",
        "Netlify CMS",
        "Netlify",
        "Vercel",
      ]}
    />

    {/* Testing & Related Skills */}
    <Skills
      title="Testing libraries"
      skills={["Jest", "Testing Library", "Vitest"]}
    />
    <Skills
      title="Personal Interests"
      skills={["IoT", "AI", "Personalized MCP servers", "Game Development (UE)", "Home Lab (Tinkering)"]}
    />
  </section>
);
