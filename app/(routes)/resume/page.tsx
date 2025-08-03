import React from "react";
import {  FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { techStack } from "@/lib/stack";

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


  return (
    <div className="container mx-auto px-4 py-12 md:py-20 text-white md:mx-20">
      <div className="bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl transition-all duration-500 hover:border-indigo-500/30 group flex-1 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl opacity-100 transition-opacity duration-700"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl opacity-100 transition-opacity duration-700"></div>
        
        <div className="max-w-6xl mx-auto rounded-lg p-8 md:p-12 shadow-xl relative z-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start mb-12 gap-8">
            {/* Profile Image */}
            <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0">
              <Image
                src="/john-amao.jpeg"
                alt="John Amao"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-indigo-500/30"
              />
            </div>
            
            {/* Header Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">John Amao.</h1>
              <h2 className="text-lg md:text-xl text-indigo-400 mb-2">FullStack + AI Engineer</h2>
              <p className="text-indigo-300 mb-4">www.johnamao.com</p>
              
              <div className="flex space-x-4">
                <a href="mailto:amaojohn767@gmail.com" className="text-white hover:text-indigo-400 transition-colors">
                  <FaEnvelope className="text-xl" />
                </a>
                <a href="https://linkedin.com/in/john-amao-7352631b7/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="https://github.com/john-amao" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* About me Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">About me:</h2>
            <div className="bg-[#1a2547]/50 rounded-lg p-6 border border-white/10">
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                I am a Full Stack Developer with a strong foundation in both front-end and back-end technologies capable of building both on the web and mobile. 
                I am Experienced in developing and deploying scalable web applications using modern frameworks and tools.
                I also have experience integrating AI capabilities into web applications, to significantly improve functionality.
                I love to create intuitive user interfaces and optimizing backend systems for peak performance.
                Here are some things you might find interesting: I have singlehandedly implemented the architecture and functionality of a full on agentic system capable of extracting structured spreadsheet data from the web check procesaur in <Link href="/projects" className="text-blue-500 hover:text-blue-400 transition-colors">projects</Link> page.
              </p>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8  text-sm md:text-base">
            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Projects.</h2>
              <div className="bg-[#1a2547]/50 rounded-lg p-6 border border-white/10">
                <p className="text-sm text-gray-400 mb-4 italic">To View All: <Link href="/projects" className="text-blue-500 hover:underline"> johnamao.com/projects </Link> </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-gray-300">Procesaur</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">Latest</span>
                  </li>
                  <li className="text-gray-300">WorkPilot</li>
                  <li className="text-gray-300">xHangout</li>
                  <li className="text-gray-300">SkillSphere</li>
                  <li className="text-gray-300">Spectrum Bank</li>
                  <li className="text-gray-300">SkillSphere AI</li>
                  <li className="text-gray-300">looplearn</li>
                  <li className="text-gray-300">Viralytics</li>
                </ul>
              </div>
            </section>

            {/* Skills and Technologies Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Skills and Technologies</h2>
              <div className="bg-[#1a2547]/50 rounded-lg p-6 border border-white/10 space-y-8">
                {Object.entries(techStack).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-indigo-400 mb-4 border-b border-indigo-500/20 pb-2">{category}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 "
                        >
                          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-md overflow-hidden">
                            <Image
                              src={item.svg}
                              alt={item.name}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain p-[0.2rem]"
                            />
                          </div>
                          <span className="text-gray-300 text-sm font-medium">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Page;
