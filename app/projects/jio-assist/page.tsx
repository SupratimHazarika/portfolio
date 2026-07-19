import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const image = '/assets/projects/Wilm3.PNG';

export default function JioAssistProject() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 object-contain"
          fill
          src={image}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Jio Assist</h2>
          <h3>React.js / TypeScript / Micro Frontends</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="pt-2 text-gray-400">
            Enterprise customer support platform at Reliance Jio, built on a
            Micro Frontend architecture. Developed reusable React.js / TypeScript
            shared UI modules and production features for a system used daily by
            over 50,000 Jio customer support agents. Work spans scalable
            frontend delivery, REST API integration, and cross-domain
            collaboration.
          </p>
          <p className="pt-2 text-gray-400">
            Note: This is proprietary enterprise work — live demos and internal
            links cannot be shared publicly.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-indigo-500/40 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {[
                'React.js',
                'TypeScript',
                'Micro Frontends',
                'REST APIs',
                'Enterprise UI',
              ].map((tech) => (
                <p
                  key={tech}
                  className="text-gray-400 py-2 flex items-center"
                >
                  <RiRadioButtonFill className="pr-1" /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <button className="px-8 py-2 mt-4">Back</button>
        </Link>
      </div>
    </div>
  );
}
