import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className='flex flex-col gap-6 justify-center text-white items-center md:ml-20'>
      <div className=' flex flex-col w-3/4 py-5'>
        <h1 className='text-xl md:text-4xl mt-5 mb-5'>Works.</h1>
        <h1 className='text-lg md:text-4xl mb-4 p-4 rounded font-serif font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
          Some of my works
        </h1>
        <p className='font-bold text-gray-500'>
          Here are some of my works
          <Link
            className='text-blue-500'
            href='https://github.com/JOHN-AMAO'
          >
            {" "}
            Github
          </Link>
        </p>
      </div>
      <div className=' md:grid md:grid-cols-3 flex flex-col gap-4  mx-4 mb-60'>
      <Link href='https://looplearn.app'>
          <div className='flex flex-col p-4 bg-[#142149] rotate-1 hover:rotate-0 rounded-lg '>
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
          <div className='flex flex-col p-4 bg-[#142149] rotate-1 hover:rotate-0 rounded-lg '>
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
        <Link href='https://xhangout.vercel.app/'>
          <div className='flex flex-col p-4 bg-[#142149] rotate-1 hover:rotate-0 rounded-lg '>
            <div className='flex flex-row justify-between m-2 '>
              <h1 className='text-xl'>xHangout</h1>
              <p className='border border-gray-800 p-1 rounded-lg bg-green-400'>
                Open Source Project
              </p>
            </div>
            <p>
              xHangout is a Social Network developed for GenZ college students
              looking for an exclusive but open community of students with the
              same interest
            </p>
          </div>
        </Link>
        <Link href='https://spectrum-finance.vercel.app/'>
          <div className='flex flex-col p-4 bg-[#142149] rotate-1 hover:rotate-0 rounded-lg'>
            <div className='flex flex-row justify-between m-2 '>
              <h1 className='text-xl'>Spectrum finance</h1>
              <p className='border border-gray-800 p-1 rounded-lg bg-green-400'>
                Open Source
              </p>
            </div>
            <p>
              Spectrum finance is an app built for users to be able to make
              transactions, expense tracking and seamless financial management,
              powered by the chimoney api
            </p>
          </div>
        </Link>

        <div className='flex flex-col p-4 bg-[#142149] rotate-2 hover:rotate-0 rounded-lg '>
          <div className='flex flex-row justify-between m-2'>
            <h1 className='text-xl'>LaunchPad</h1>
            <p className='border border-gray-800 p-1 rounded-lg bg-green-600'>
              Private Project
            </p>
          </div>
          <p>
            LaunchPad is a Edtech platform built to help learners kickstart
            their career regardless of their level of expertise, with classes
            ranging from web developement to robotics, LaunchPad has it all
          </p>
        </div>
        <Link href='https://skill-sphere.vercel.app/'>
          <div className='flex flex-col p-4 bg-[#142149] rotate-1 hover:rotate-0 rounded-lg'>
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
          <div className='flex flex-col p-4 bg-[#142149] rotate-1 hover:rotate-0 rounded-lg'>
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
        <Link href='https://github.com/JOHN-AMAO'>
          <div className='flex flex-col p-4 bg-[#142149] rotate-1 hover:rotate-0 rounded-lg'>
            <div className='flex flex-row justify-between m-2 '>
              <h1 className='text-xl'>Django Microservice</h1>
              <p className='border border-gray-800 p-1 rounded-lg bg-green-400'>
                Open Source
              </p>
            </div>
            <p>A Backend Microservice built using the Django REST framework</p>
          </div>
        </Link>
        <Link href='https://github.com/JOHN-AMAO'>
          <div className='flex flex-col p-4 bg-[#142149] rotate-1 hover:rotate-0 rounded-lg'>
            <div className='flex flex-row justify-between m-2 '>
              <h1 className='text-xl'>Express Microservice</h1>
              <p className='border border-gray-800 p-1 rounded-lg bg-green-400'>
                Open Source
              </p>
            </div>
            <p>
              An Express REST api bult to demonstrate my ability to build
              scalable backend Microservices
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
