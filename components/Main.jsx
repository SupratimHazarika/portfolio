import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import me from '../public/assets/projects/meNew.jpeg';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="mt-10 uppercase text-sm tracking-widest text-grey-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-grey-700">
            Hi, I'm <span className="text-[#5651e5]">Supratim</span>
          </h1>
          <Image
            className="rounded-[50%] object-contain hover:scale-75 ease-in duration-300"
            width="160" height="160"
            src="/assets/projects/meNew.jpg"
            alt="/"
          />
          <h1 className="py-2 text-grey-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-500 max-w-[70%] m-auto">
            {' '}
            I’m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building awesome web applications with front-end and
            back-end technologies.
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
            <Link href="/">
              <div className="rounded-full shadow-lg shadow-indigo-500/40 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/">
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
