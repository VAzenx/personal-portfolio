
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SKILLS = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'GraphQL',
  'AWS',
];

const experiences = [
  {
    year: '2024',
    title: 'Frontend Developer',
    company: 'BlueTech Co.',
    description:
      'Developed and maintained modern web applications using React, TypeScript, and Tailwind CSS.',
  },
  {
    year: '2022',
    title: 'Web Developer Intern',
    company: 'Creative Minds Inc.',
    description:
      'Worked on UI components, fixed bugs, and collaborated with designers to improve UX.',
  },
  {
    year: '2021',
    title: 'Freelance Developer',
    company: 'Self-employed',
    description:
      'Built landing pages and small web apps for clients using HTML, CSS, JS.',
  },
];


const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50">
      <div className="section-padding" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className={`lg:w-3/5 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-2">
              <span className="heading-gradient">About Me</span>
            </h2>
            <div className="h-1 w-20 bg-portfolio-accent mb-8"></div>
            <div className="space-y-4 text-portfolio-slate">
              <p>
                Hello! I'm Wutthipong Wongwai, Call me Bank!! , a software engineer based in San Francisco, CA. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
              </p>
              <p>
                I graduated from the University of California with a degree in Computer Science in 2018, and since then I've been working in various engineering roles. Currently, I'm focused on building accessible, human-centered products at <a href="#" className="text-portfolio-accent">Acme Corporation</a>.
              </p>
              <p>
                Beyond coding, I'm passionate about design systems, user experience, and the intersection of technology and art. When I'm not at my desk, you can find me hiking, photographing landscapes, or exploring new coffee shops.
              </p>
              <div>
                <h3 className="text-xl font-semibold text-portfolio-navy mb-3">
                  Technologies I've been working with:
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {SKILLS.map((skill, index) => (
                    <li key={index} className="flex items-center font-mono text-sm">
                      <span className="text-portfolio-accent mr-2">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className={`lg:w-2/5 flex justify-center items-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-portfolio-accent/20 rounded-md absolute -top-4 -right-4"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 border-2 border-portfolio-accent rounded-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-portfolio-accent/30 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img 
                  src="https://scontent.futp1-1.fna.fbcdn.net/v/t39.30808-6/486064395_1844421902985868_9190342069794530121_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vSl4C44oztkQ7kNvwFTP32e&_nc_oc=AdnYtc-78IuyEO9BCRhpavPsI4K_g9662cnOdFZvtpvNxfJDc3V9ZDG93j4VT4Z3H-1OtT4duPq16Zqdwsz9O7KP&_nc_zt=23&_nc_ht=scontent.futp1-1.fna&_nc_gid=HA8WFMIIslhtMUUJabgGhA&oh=00_AfHScyoOxBUB_3GjIqajE4xwtUHpthJLmRj3xo_ZSvQt6g&oe=68043C4C" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
              

          {/* Exper Timeline */}
          {/* <div className="max-w-5xl mx-auto px-4">
  <h3 className="text-3xl font-bold heading-gradient mb-8">Experience Timeline</h3>
  <div className="relative border-l-4 border-sky-300 pl-6">
    {experiences.map((exp, index) => (
      <div
        key={index}
        className={`mb-12 relative transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="absolute w-4 h-4 rounded-full bg-sky-500 ring-4 ring-white -left-[35px] top-2 shadow-md"></div>
        <p className="text-sm text-sky-400 font-mono mb-1">{exp.year}</p>
        <h4 className="text-lg font-semibold heading-gradient">{exp.title}</h4>
        <p className="text-portfolio-slate font-medium mb-1">{exp.company}</p>
        <p className="text-portfolio-slate leading-relaxed">{exp.description}</p>
      </div>
    ))}
  </div>
</div> */}




        </div>
      </div>
    </section>
  );
};

export default About;
