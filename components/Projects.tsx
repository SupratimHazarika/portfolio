import ProjectItem from './ProjectItem';

const WilmImage = '/assets/projects/Wilm3.PNG';
const GetIt = '/assets/projects/getIt1.PNG';
const AskAiImage = '/assets/projects/ask-ai.png';
const FoodOrderingImage = '/assets/projects/food-ordering.png';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Wilm System"
            backgroundImg={WilmImage}
            projectUrl="/project1"
            tech="React JS / Node.js"
          />
          <ProjectItem
            title="Get It Shopping"
            backgroundImg={GetIt}
            projectUrl="/project2"
            tech="React JS"
          />
          <ProjectItem
            title="Food Ordering Platform"
            backgroundImg={FoodOrderingImage}
            projectUrl="/projects/food-ordering"
            tech="React / Node.js / Auth0"
          />
          <ProjectItem
            title="Ask AI / Portfolio RAG"
            backgroundImg={AskAiImage}
            projectUrl="/projects/ask-ai"
            tech="Next.js / FastAPI / RAG"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
