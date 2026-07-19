import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="mt-10 uppercase text-sm tracking-widest text-grey-600">
            Let&apos;s build intelligent products together
          </p>
          <h1 className="py-4 text-grey-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Supratim</span>
          </h1>
          <Image
            className="mx-auto block rounded-[50%] object-contain hover:scale-75 ease-in duration-300"
            width={160}
            height={160}
            src="/assets/projects/meNew.jpg"
            alt="Supratim Hazarika"
          />
          <h1 className="py-2 text-grey-700">
            Fullstack &amp; Applied AI Engineer
          </h1>
          <p className="py-4 text-gray-500 max-w-[70%] m-auto">
            Software engineer with 6+ years of experience building scalable,
            API-driven applications — from React/Next.js interfaces to Node.js
            backends with PostgreSQL and Redis. Currently an SDE-2 at Reliance
            Jio, and applying GenAI/RAG through an EPGP in AI &amp; Machine
            Learning at IIIT Bangalore.
          </p>
          <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/supratim-hazarika-079808160/">
              <div className="rounded-full shadow-lg shadow-indigo-500/40 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/SupratimHazarika">
              <div className="rounded-full shadow-lg shadow-indigo-500/40 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-indigo-500/40 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-indigo-500/40 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
