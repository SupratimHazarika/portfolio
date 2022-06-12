import React from 'react';
import Image from 'next/image';
import htmlLogo from '../public/assets/skills/html.png';
import CssLogo from '../public/assets/skills/css.png';
import JSLogo from '../public/assets/skills/javascript.png';
import ReactLogo from '../public/assets/skills/react.png';
import ReduxLogo from '../public/assets/skills/redux-logo.png';
import ReduxSagaLogo from '../public/assets/skills/redux-saga2.png';
import TailwindLogo from '../public/assets/skills/tailwind.png';
import NextJsLogo from '../public/assets/skills/nextjs.png';

const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={htmlLogo} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={CssLogo} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={JSLogo} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={ReactLogo} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={ReduxLogo} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redux</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={ReduxSagaLogo} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redux-saga</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={TailwindLogo} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image src={NextJsLogo} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
