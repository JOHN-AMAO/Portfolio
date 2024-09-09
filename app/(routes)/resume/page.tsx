import React from "react";
import { FaCode, FaDatabase, FaTools, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

const SkillCategory = ({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) => (
  <div className="bg-[#1a2547] rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-bold ml-2">{title}</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {skills.map((skill: string, index: number) => (
        <span key={index} className="bg-[#0e1631] text-white rounded-full px-3 py-2 text-sm flex items-center justify-center">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Page = () => {
  const languages = ["Python", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"];
  const frameworks = [
    "React", "Next.js", "Node.js", "Express.js", "Django", "Flask",
    "Tailwind CSS", "Bootstrap", "Material-UI", "Shadcn UI", "Redux", "GraphQL"
  ];
  const tools = [
    "Git", "GitHub", "Docker", "Kubernetes", "AWS", "Vercel", "Heroku",
    "Postman", "Jest", "Cypress", "Webpack", "Babel", "ESLint", "Prettier"
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 text-white">
      <div className="max-w-6xl mx-auto bg-[#1a2547] rounded-lg p-8 md:p-12 shadow-xl">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-48 h-48 md:w-64 md:h-64 relative mb-6 md:mb-0 md:mr-12">
            <Image
              src="/myimage.png"
              alt="John Amao"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
              John Amao
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-4">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-4">
              Passionate developer with over 2 years of experience in building robust and scalable web applications.
            </p>
            <div className="flex space-x-6">
              <a href="mailto:johnamao@example.com" className="text-white hover:text-indigo-400 transition-colors">
                <FaEnvelope className="text-2xl" />
              </a>
              <a href="https://linkedin.com/in/johnamao" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://github.com/johnamao" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
          <p className="text-lg leading-relaxed">
            Full Stack Developer with a strong foundation in both front-end and back-end technologies. Experienced in developing and deploying scalable web applications using modern frameworks and tools. Passionate about creating intuitive user interfaces and optimizing backend systems for peak performance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory title="Languages" icon={<FaCode className="text-indigo-500 text-2xl" />} skills={languages} />
            <SkillCategory title="Frameworks & Libraries" icon={<FaDatabase className="text-purple-500 text-2xl" />} skills={frameworks} />
            <SkillCategory title="Tools & Technologies" icon={<FaTools className="text-pink-500 text-2xl" />} skills={tools} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Senior Full Stack Developer</h3>
            <p className="text-indigo-400 mb-2">TechInnovate Solutions | 2022 - Present</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Lead development of a high-traffic e-commerce platform using Next.js, Node.js, and MongoDB</li>
              <li>Implemented advanced state management with Redux, improving application performance by 35%</li>
              <li>Mentored junior developers and conducted code reviews to ensure best practices</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
            <p className="text-indigo-400 mb-2">WebCraft Studios | 2021 - 2022</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Developed responsive web applications using React and Express.js</li>
              <li>Optimized database queries, resulting in a 40% improvement in application load times</li>
              <li>Integrated third-party APIs and implemented OAuth 2.0 for secure authentication</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div>
            <h3 className="text-2xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-indigo-400">University of Technology | 2017 - 2021</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
