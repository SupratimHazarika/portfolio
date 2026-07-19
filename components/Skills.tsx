import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiTailwindcss,
  SiPython,
} from 'react-icons/si';
import { FaServer, FaBrain } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface SkillItem {
  name: string;
  Icon: IconType;
}

const skills: SkillItem[] = [
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'React.js', Icon: SiReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Express.js', Icon: SiExpress },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'Redis', Icon: SiRedis },
  { name: 'GraphQL', Icon: SiGraphql },
  { name: 'Tailwind', Icon: SiTailwindcss },
  { name: 'Python', Icon: SiPython },
  { name: 'REST APIs', Icon: FaServer },
  { name: 'Micro Frontends', Icon: FaServer },
  { name: 'GenAI / RAG', Icon: FaBrain },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ name, Icon }) => (
            <div
              key={name}
              className="p-6 shadow-xl shadow-indigo-500/40 rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto text-[#5651e5]">
                  <Icon size={48} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-center">{name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
