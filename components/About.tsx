import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-400">
            I&apos;m a fullstack engineer who is equally comfortable owning the
            UI, the API, and the data layer. As an SDE-2 at Reliance Jio, I&apos;ve
            contributed to enterprise products including Jio Assist — a Micro
            Frontend platform used by 50,000+ customer support agents — and
            JioChat, a real-time communication product at Jio scale. My work
            spans React/TypeScript frontends, REST integrations, reusable
            component systems, and close collaboration with backend teams.
          </p>
          <p className="py-2 text-gray-400">
            Earlier roles at Applaunch and Tardigrade made me a true fullstack
            builder: Node.js/Express services, JWT auth, REST APIs, database
            design (PostgreSQL/MongoDB), and Redis-backed performance work.
            I&apos;m now expanding into Applied AI — studying GenAI and RAG at
            IIIT Bangalore and shipping those ideas into real product features,
            including the &quot;Ask AI about me&quot; experience on this site.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-indigo-500/40 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="Developer workspace"
            width={464}
            height={464}
            className="rounded-xl h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
