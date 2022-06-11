import React from 'react';

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-grey-600">
            I have spent my last 3 years learning and working for startups. At
            first I started learning HTML & CSS and created some websites for my
            learnings and to explore a new road. Being blessed by that decision,
            I have discovered my love and passion for programming.
          </p>
          <p className="py-2 text-grey-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started my career
            with an startup and there I have had the opportunity to learn new
            technology like React JS, Redux, Redux-saga etc. Currently on top of
            it I am learninng some of the Backend Technologies also.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-grey-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className='rounded-xl' src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
        </div>
      </div>
    </div>
  );
};

export default About;
