const experiences = [
  {
    company: 'Reliance Jio Platforms Ltd',
    role: 'SDE-2',
    location: 'Bengaluru',
    period: 'Sep 2022 – Present',
    points: [
      'Building production features for Jio Assist on a Micro Frontend architecture with reusable React modules across domains.',
      'Delivering enterprise UX for a platform used daily by 50,000+ customer support agents.',
      'Contributed to JioChat and collaborated on real-time messaging architecture at Jio scale.',
      'Partnering with backend teams on REST APIs, workflows, and scalable product delivery.',
    ],
  },
  {
    company: 'Applaunch.io',
    role: 'Software Engineer (Fullstack / Project Lead)',
    location: 'Bengaluru',
    period: 'Oct 2021 – Sep 2022',
    points: [
      'Led fullstack dashboard delivery spanning React UI and Node/Express APIs.',
      'Implemented JWT authentication and authorization for client systems.',
      'Designed REST APIs for complex workflows and data processing.',
      'Owned client-facing feature delivery and cross-team coordination.',
    ],
  },
  {
    company: 'Tardigrade Technologies Pvt Ltd',
    role: 'Software Engineer',
    location: 'Bengaluru',
    period: 'Apr 2019 – Feb 2021',
    points: [
      'Built fullstack web platforms in a fast-moving startup environment.',
      'Developed backend services with Node.js and Express.',
      'Designed database schemas and integrated third-party APIs.',
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Experience
        </p>
        <h2 className="py-4">Where I&apos;ve Worked</h2>
        <div className="space-y-8">
          {experiences.map((job) => (
            <div
              key={job.company}
              className="w-full shadow-xl shadow-indigo-500/40 rounded-xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl">{job.role}</h3>
                  <p className="text-[#5651e5] pt-1">
                    {job.company} · {job.location}
                  </p>
                </div>
                <p className="text-sm uppercase tracking-wider text-gray-400">
                  {job.period}
                </p>
              </div>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
