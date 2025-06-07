import Link from "next/link";
import React from "react";
import { Dancing_Script } from "next/font/google";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

// Add this CSS for background noise effect with blue tint to match card background
const noiseBackground = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0.02 0.04 0.15 0 0.08 0.02 0.04 0.15 0 0.12 0.05 0.08 0.25 0 0.18 0 0 0 0.3 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  backgroundBlendMode: 'soft-light' as const,
  backgroundSize: '200px',
};

const Page = () => {
  return (
    <div className='flex flex-col gap-6 justify-center text-white items-center md:ml-20'>
      <div className=' flex flex-col w-3/4 py-5'>
        <h1 className={`text-xl md:text-4xl mt-5 mb-5 ${dancingScript.className}`}>Works.</h1>
       
        <p className='font-bold text-gray-500'>
          Some cool stuff I&apos;ve built
         
        </p>
                 <p className="font-bold text-gray-500">To view my open source projects, have a look at my github{" "}
           <Link
             className='text-blue-500 inline-flex items-center gap-1 hover:text-blue-400 transition-colors'
             href='https://github.com/JOHN-AMAO'
           >
             <FaGithub className="text-lg" />
           </Link>
         </p>
      </div>

    

      <div className=' md:grid md:grid-cols-3 flex flex-col gap-8 md:gap-x-4 md:gap-y-8 mx-4 mb-60'>


      <Link href='https://looplearn.app' className="group">
          <div className="relative">
            {/* Background stacked card */}
            <div 
              className='absolute top-2 left-0 w-full h-full bg-gradient-to-br from-[#0f1329] to-[#0c1428] rounded-xl border border-gray-800/30 -z-10'
              style={noiseBackground}
            ></div>
            {/* Main card */}
            <div 
              className='flex flex-col bg-gradient-to-br from-[#142149] to-[#0f1937] rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 overflow-hidden border border-gray-700/50 hover:border-blue-500/30 relative'
            >
              <div className='relative w-full h-36 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden'>
                <Image 
                  src="/projects/procesaur.png" 
                  fill
                  className="object-cover"
                  alt="procesaur"
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent'></div>
                <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <FaExternalLinkAlt className="text-white/80 text-sm" />
                </div>
              </div>
              <div className='p-4 relative z-20'>
                <div className='flex flex-row justify-between items-start mb-3'>
                  <h1 className='text-lg font-semibold'>Procesaur</h1>
                  <span className='px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm'>
                    Tool
                  </span>
                </div>
                <p className='text-gray-300 text-sm leading-relaxed'>
                  Procesaur is a platform that allows you to turn Web Data Into Actionable Insights using an AI powered smart web scraper agent.
                </p>
              </div>
            </div>
          </div>
        </Link>

      <Link href='' className="group">
          <div className="relative">
            {/* Background stacked card */}
            <div 
              className='absolute top-2 left-0 w-full h-full bg-gradient-to-br from-[#0f1329] to-[#0c1428] rounded-xl border border-gray-800/30 -z-10'
              style={noiseBackground}
            ></div>
            {/* Main card */}
            <div 
              className='flex flex-col bg-gradient-to-br from-[#142149] to-[#0f1937] rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 overflow-hidden border border-gray-700/50 hover:border-purple-500/30 relative'
            >
              <div className='relative w-full h-36 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden'>
                <Image 
                  src="/projects/viralytics.png" 
                  fill
                  className="object-cover"
                  alt="viralytics"
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent'></div>
                <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <FaExternalLinkAlt className="text-white/80 text-sm" />
                </div>
              </div>
              <div className='p-4 relative z-20'>
                <div className='flex flex-row justify-between items-start mb-3'>
                  <h1 className='text-lg font-semibold'>Viralytics</h1>
                  <span className='px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm'>
                    Tool
                  </span>
                </div>
                <p className='text-gray-300 text-sm leading-relaxed'>
                  Viralytics is a platform that allows you to track your social media analytics and get insights on your audience along with AI powered content ideas.
                </p>
              </div>
            </div>
          </div>
        </Link>
      

      <Link href='https://looplearn.app' className="group">
          <div className="relative">
            {/* Background stacked card */}
            <div 
              className='absolute top-2 left-0 w-full h-full bg-gradient-to-br from-[#0f1329] to-[#0c1428] rounded-xl border border-gray-800/30 -z-10'
              style={noiseBackground}
            ></div>
            {/* Main card */}
            <div 
              className='flex flex-col bg-gradient-to-br from-[#142149] to-[#0f1937] rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105 overflow-hidden border border-gray-700/50 hover:border-green-500/30 relative'
            >
              <div className='relative w-full h-36 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden'>
                <Image 
                  src="/projects/looplearn.png" 
                  fill
                  className="object-cover"
                  alt="looplearn"
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent'></div>
                <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <FaExternalLinkAlt className="text-white/80 text-sm" />
                </div>
              </div>
              <div className='p-4 relative z-20'>
                <div className='flex flex-row justify-between items-start mb-3'>
                  <h1 className='text-lg font-semibold'>Looplearn</h1>
                  <span className='px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm'>
                    Startup
                  </span>
                </div>
                <p className='text-gray-300 text-sm leading-relaxed'>
                  looplearn is a talent factory and pipeline built to enable universities to train their students in in-demand skills and get them employed at scale.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href='https://youtu.be/fkluyMvBKTs' className="group">
          <div className="relative">
            {/* Background stacked card */}
            <div 
              className='absolute top-2 left-0 w-full h-full bg-gradient-to-br from-[#0f1329] to-[#0c1428] rounded-xl border border-gray-800/30 -z-10'
              style={noiseBackground}
            ></div>
            {/* Main card */}
            <div 
              className='flex flex-col bg-gradient-to-br from-[#142149] to-[#0f1937] rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 overflow-hidden border border-gray-700/50 hover:border-orange-500/30 relative'
            >
              <div className='relative w-full h-36 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden'>
                <Image 
                  src="/projects/workpilot.png" 
                  fill
                  className="object-cover"
                  alt="workpilot"
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent'></div>
                <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <FaExternalLinkAlt className="text-white/80 text-sm" />
                </div>
              </div>
              <div className='p-4 relative z-20'>
                <div className='flex flex-row justify-between items-start mb-3'>
                  <h1 className='text-lg font-semibold'>WorkPilot</h1>
                  <span className='px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm'>
                    Open Source
                  </span>
                </div>
                <p className='text-gray-300 text-sm leading-relaxed'>
                  WorkPilot is a Project and Task management platform that allows teams to collaborate through chat, video and voice calls, and schedule tasks using a collaborative Kanban Board.
                </p>
              </div>
            </div>
          </div>
        </Link>
   

      
        <Link href='https://skill-sphere.vercel.app/' className="group">
          <div className="relative">
            {/* Background stacked card */}
            <div 
              className='absolute top-2 left-0 w-full h-full bg-gradient-to-br from-[#0f1329] to-[#0c1428] rounded-xl border border-gray-800/30 -z-10'
              style={noiseBackground}
            ></div>
            {/* Main card */}
            <div 
              className='flex flex-col bg-gradient-to-br from-[#142149] to-[#0f1937] rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 relative'
            >
              <div className='relative w-full h-36 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden'>
                <Image 
                  src="/projects/skillsphere.png" 
                  fill
                  className="object-cover"
                  alt="skillsphere"
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent'></div>
                <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <FaExternalLinkAlt className="text-white/80 text-sm" />
                </div>
              </div>
              <div className='p-4 relative z-20'>
                <div className='flex flex-row justify-between items-start mb-3'>
                  <h1 className='text-lg font-semibold'>SkillSphere</h1>
                  <span className='px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30 backdrop-blur-sm'>
                    Hackathon
                  </span>
                </div>
                <p className='text-gray-300 text-sm leading-relaxed'>
                  SkillSphere is an Edtech platform that allows anyone to teach online by creating live classes and allowing students to join from anywhere in the world.
                </p>
              </div>
            </div>
          </div>
        </Link>

      
      
      </div>
    </div>
  );
};

export default Page;
