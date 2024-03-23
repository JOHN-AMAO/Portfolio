import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className=''>
      <div className='flex md:flex-row flex-col-reverse gap-5 mt-10 items-center justify-between mb-60'>
        <div className='flex flex-col gap-6 justify-center   md:ml-20 md:mt-[-200px]'>
          <h1 className=' text-white  mb-4 text-xl font-extrabold tracking-tight leading-none md:text-4xl dark:text-white'>
            Hi, I&apos;m{" "}
            <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-fill-transparent'>
              John Amao
            </span>
          </h1>
          <div className='text-white border rounded-2xl p-4  text-left max-w-xl'>
            <h2 className='font-bold text-2xl text-white'>Bio:</h2>
            <p>
              I am an 18 year old builder currently based in Lagos, Nigeria.
              I&apos;m passionate about building products that solve problems
              for lots of people ranging from education to commerce.
            </p>
            <p className=' leading-relaxed mt-4'>
              I love developing intuitive user interfaces, optimizing backend
              systems, or deploying scalable solutions, I enjoy every aspect of
              the development process.
            </p>
            <p className=' leading-relaxed mt-4'>
              Outside of coding, you can find me exploring new technologies,
              attending tech meetups, or brainstorming new project ideas. I
              believe that continuous learning and collaboration are essential
              in the fast-paced world of technology, and I&apos;m always eager
              to learn and grow alongside like-minded individuals.
            </p>
          </div>
        </div>
        <Image
          className='rounded-2xl md:ml-16 w-1/2 md:w-1/3 md:mt-10 lg:rotate-1'
          src='/myimage.png'
          alt='my image'
          width={400}
          height={200}
        />
      </div>
    </div>
  );
};

export default Page;
