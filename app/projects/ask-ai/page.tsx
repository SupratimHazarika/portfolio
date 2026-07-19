import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const image = '/assets/projects/ask-ai.png';

export default function AskAiProject() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="absolute z-1 object-cover" fill src={image} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Ask AI / Portfolio RAG</h2>
          <h3>Next.js / FastAPI / RAG / Applied AI</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="pt-2 text-gray-400">
            A retrieval-augmented &quot;Ask AI about me&quot; experience built into
            this portfolio. Visitors ask questions about my experience, skills,
            and projects; answers are grounded in portfolio/resume context and
            can surface sources. The frontend talks to a Next.js API proxy that
            forwards requests to a FastAPI RAG service — demonstrating Applied
            AI as a shipped product feature, not just coursework.
          </p>
          <Link href="/#ask-ai">
            <button className="px-8 py-2 mt-4 mr-4">Try Ask AI</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-indigo-500/40 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {[
                'Next.js',
                'TypeScript',
                'FastAPI',
                'RAG',
                'GenAI',
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
