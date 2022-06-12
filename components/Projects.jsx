import React from 'react';
import WilmImage from '../public/assets/projects/Wilm3.PNG';
import GetIt from '../public/assets/projects/getIt1.PNG';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Wilm System"
            backgroundImg={WilmImage}
            projectUrl="/wilm"
          />
          <ProjectItem
            title="Get It Shopping"
            backgroundImg={GetIt}
            projectUrl="/getIt"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
