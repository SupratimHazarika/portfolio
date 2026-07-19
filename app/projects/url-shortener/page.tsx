import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const image = '/assets/projects/wilm48.PNG';

export default function UrlShortenerProject() {
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
          <h2 className="py-2">Production-Grade URL Shortener</h2>
          <h3>Node.js / Express / PostgreSQL / Redis</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="pt-2 text-gray-400">
            Built a production-minded URL shortener backend focused on
            performance engineering and clean architecture. PostgreSQL is the
            source of truth, with Redis used in a cache-aside strategy for hot
            redirects. Load testing with autocannon improved redirect
            throughput by ~40% and reduced P99 latency by ~33%.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-indigo-500/40 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {[
                'Node.js',
                'Express',
                'PostgreSQL',
                'Redis',
                'autocannon',
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
