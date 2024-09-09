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

const ExperienceCard = ({ title, company, date, responsibilities }: { title: string, company: string, date: string, responsibilities: string[] }) => (
  <div className="bg-[#1a2547] rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl mb-6">
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-indigo-400 mb-4">{company} | {date}</p>
    <ul className="list-disc list-inside space-y-2">
      {responsibilities.map((responsibility, index) => (
        <li key={index}>{responsibility}</li>
      ))}
    </ul>
  </div>
);

const EducationCard = ({ degree, institution, date }: { degree: string, institution: string, date: string }) => (
  <div className="bg-[#1a2547] rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
    <h3 className="text-2xl font-semibold mb-2">{degree}</h3>
    <p className="text-indigo-400">{institution} | {date}</p>
  </div>
);

const Page = () => {
  const languages = ["Python", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"];
  const frameworks = [
    "React", "Next.js", "Node.js", "Express.js", "Django", 
    "Tailwind CSS", "Bootstrap", "Material-UI", "Shadcn UI", "Redux", 
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
              <a href="mailto:amaojohn767@gmail.com" className="text-white hover:text-indigo-400 transition-colors">
                <FaEnvelope className="text-2xl" />
              </a>
              <a href="https://linkedin.com/in/john-amao-7352631b7/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://github.com/john-amao" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
                <FaGithub className="text-2xl" />
              </a>
            </div>

          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
          <p className="text-lg leading-relaxed">
            I am a Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
            Experienced in developing and deploying scalable web applications using modern frameworks and tools.
            I also have experience integrating AI capabilities into web applications, to significantly improve functionality.
            I love to create intuitive user interfaces and optimizing backend systems for peak performance.
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
          <ExperienceCard 
            title="Full Stack Developer"
            company="Building my Ideas"
            date="2023 - Present"
            responsibilities={[
              "Conducting extensive market research and user interviews to identify pain points and opportunities in various industries",
              "Designing and developing multiple full-stack applications from concept to deployment, utilizing technologies such as Next.js, Node.js, and MongoDB",
              "Integrating AI capabilities into web applications to significantly improve functionality"
            ]}
          />
          <ExperienceCard 
            title="Frontend Developer"
            company="SkyFig technologies"
            date="May 2022 - August 2022"
            responsibilities={[
              "Developed responsive web applications using HTML, CSS, and JavaScript",
              "In charge of onboarding and training interns and junior developers"
            ]}
          />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <EducationCard 
            degree="Bachelor of Science in Computer Science (in view)"
            institution="University of Lagos"
            date="2023 - 2027"
          />
        </section>
      </div>
    </div>
  );
};

export default Page;
