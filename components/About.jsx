import React from 'react';

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-400">
            I have accumulated 6 years of experience in the field, now working at a leading product-based company. My journey began with startups, where I spent 3 years honing my skills. Starting with HTML and CSS, I created websites to learn and explore new avenues. This decision ignited my passion for programming, a passion that continues to drive my career today.
          </p>
          <p className="py-2 text-gray-400">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning JavaScript and was even more
            enthused with making websites interactive. I then started my career
            with a startup and there I have had the opportunity to learn new
            technology like React.js, Next.js, Redux, Redux-saga, Express.js etc. 
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-indigo-500/40 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className='rounded-xl' src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
        </div>
      </div>
    </div>
  );
};

export default About;
