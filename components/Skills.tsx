import { Badge } from "./Badge";

type SkillsProps = {
  title: string;
  skills: string[];
};

export const Skills = ({ title, skills }: SkillsProps) => (
  <section className="mt-1" id="programming-languages">
    <header>
      <h3 className="text-sm font-semibold text-zinc-200 leading-snugish">
        {title}
      </h3>
    </header>
    <div className="my-2.5 last:pb-1.5">
      <div className="flex flex-wrap text-md leading-relaxed gap-1">
        {skills?.map((skill, key) => (
          <Badge content={skill} key={key} />
        ))}
      </div>
    </div>
  </section>
);
