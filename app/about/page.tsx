import { experiences } from '@/data/experience';

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">About Me</h1>
          <div className="h-2 w-24 bg-accent mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border-2 border-gray-100 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] transition-transform duration-300 hover:-translate-y-2">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Who Am I
              </h2>
              <p className="text-lg leading-relaxed text-secondary">
                Hello! I am <strong>Javier Nur Hidayat</strong>, also known as <strong>Vier</strong>.
                I am a 5th-semester student majoring in Information Systems for Business (ISB) with a focus on Data Science at Universitas Ciputra, and an alumnus of SMA Negeri 1 Samarinda.
              </p>
            </div>

            <div className="bg-primary p-8 border-2 border-primary shadow-[8px_8px_0px_0px_rgba(37,99,235,1)] transition-transform duration-300 hover:-translate-y-2">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                What I Do
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I have a deep interest in developing intelligent systems and modern user experiences. With a CGPA of 3.79, my academic journey is colored with various researches, one of which is <em>"The Effect of Grab Application User Experience (UX) on Customer Loyalty in the CitraLand Surabaya Area"</em>.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  In the technical field, I specialize in <strong>Machine Learning</strong> and data analysis using Python. Furthermore, I have strong expertise in <strong>Backend & Web development</strong>, encompassing HTML, CSS, Tailwind CSS, Laravel, PHP, MySQL, NextJS, ReactJS, as well as system design and UI/UX prototyping using Figma.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-primary mb-12">Organizations & Committees</h2>

          <div className="relative border-l-4 border-accent ml-4 md:ml-0 pl-8 md:pl-12 space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[42px] md:-left-[58px] top-1 w-6 h-6 bg-accent rounded-full border-4 border-background"></div>

                <div className="bg-white p-6 border-2 border-gray-100 shadow-sm hover:shadow-[8px_8px_0px_0px_rgba(37,99,235,1)] transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-primary font-mono text-sm mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-primary mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-accent font-medium mb-4">{exp.organization}</h4>
                  <p className="text-secondary leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
