import Link from "next/link";
import React from "react";
import { Dancing_Script } from "next/font/google";
import { FaGithub } from "react-icons/fa";

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const Page = () => {
  return (
    <div className='flex flex-col gap-6 justify-center text-white items-center md:ml-20'>
      <div className=' flex flex-col w-3/4 py-5'>
        <h1 className={`text-xl md:text-4xl mt-5 mb-5 ${dancingScript.className}`}>Works.</h1>
       
        <p className='font-bold text-gray-500'>
          Some cool stuff I've built
         
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

    

      <div className=' md:grid md:grid-cols-3 flex flex-col gap-4  mx-4 mb-60'>


      <Link href='https://looplearn.app'>
          <div className='flex flex-col p-4 bg-[#142149] rounded-lg hover:bg-[#1a2957] transition-colors'>
            <div className='flex flex-row justify-between m-2 '>
              <h1 className='text-xl'>Procesaur</h1>
              <p className='border border-gray-800 p-1 rounded-lg bg-green-400'>
                tool
              </p>
            </div>
            <p>
              Procesaur is a platform that allows you to turn Web Data Into Actionable Insights using an AI powered smart web scraper agent.
            </p>
          </div>
        </Link>

      <Link href=''>
          <div className='flex flex-col p-4 bg-[#142149] rounded-lg hover:bg-[#1a2957] transition-colors'>
            <div className='flex flex-row justify-between m-2 '>
              <h1 className='text-xl'>Viralytics</h1>
              <p className='border border-gray-800 p-1 rounded-lg bg-green-400'>
                tool
              </p>
            </div>
            <p>
              Viralytics is a platform that allows you to track your social media analytics and get insights on your audience
              along with AI powered content ideas .
            </p>
          </div>
        </Link>
      

      <Link href='https://looplearn.app'>
          <div className='flex flex-col p-4 bg-[#142149] rounded-lg hover:bg-[#1a2957] transition-colors'>
            <div className='flex flex-row justify-between m-2 '>
              <h1 className='text-xl'>looplearn</h1>
              <p className='border border-gray-800 p-1 rounded-lg bg-green-400'>
                Startup
              </p>
            </div>
            <p>
              looplearn is a talent factory and pipeline built to enable
              universities to train their students in in-demand skills and get
              them employed at scale
            </p>
          </div>
        </Link>
        <Link href='https://youtu.be/fkluyMvBKTs'>
          <div className='flex flex-col p-4 bg-[#142149] rounded-lg hover:bg-[#1a2957] transition-colors'>
            <div className='flex flex-row justify-between m-2 '>
              <h1 className='text-xl'>WorkPilot</h1>
              <p className='border border-gray-800 p-1 rounded-lg bg-green-400'>
                Open Source Project
              </p>
            </div>
            <p>
              WorkPilot is a Project and Task management platforms that allows
              teams to collaborate through chat, video and voice calls, and
              schedule tasks using a collaborative Kanban Board.
            </p>
          </div>
        </Link>
   

      
        <Link href='https://skill-sphere.vercel.app/'>
          <div className='flex flex-col p-4 bg-[#142149] rounded-lg hover:bg-[#1a2957] transition-colors'>
            <div className='flex flex-row justify-between m-2'>
              <h1 className='text-xl'>SkillSphere</h1>
              <p className='border border-gray-800 p-1 rounded-lg bg-blue-600'>
                Hackathon Project
              </p>
            </div>
            <p>
              SkillSphere is a Edtech plaform that allows anyone to teach online
              by creating live classes and allowing students to join from
              anywhere in the world
            </p>
          </div>
        </Link>
        <Link href='https://www.youtube.com/watch?v=JUCIMcGAh94&t=124s&pp=ygULZ2VuenRlY2hpZXM%3D'>
          <div className='flex flex-col p-4 bg-[#142149] rounded-lg hover:bg-[#1a2957] transition-colors'>
            <div className='flex flex-row justify-between m-2'>
              <h1 className='text-xl'>SkillSphere ai</h1>
              <p className='border border-gray-800 p-1 rounded-lg bg-blue-600'>
                Hackathon Project
              </p>
            </div>
            <p>
              SkillSphere ai is a realistic digital human chatbot that you can
              interact with, you can ask questions and it gives responses in
              real-time
            </p>
          </div>
        </Link>
      
      </div>
    </div>
  );
};

export default Page;
