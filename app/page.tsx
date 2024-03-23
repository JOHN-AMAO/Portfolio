"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHover] = useState(false);
  return (
    <main className='bg-[#0e1631]'>
      <div className='relative'>
        <div className='flex flex-col justify-center  h-screen md:ml-10 mt-20 sm:mt-0 '>
          <div className='flex md:flex-row flex-col justify-evenly'>
            <div className='flex flex-col mr-20 gap-4'>
              <h1 className=' text-white  mb-4 text-xl font-extrabold tracking-tight leading-none md:text-3xl dark:text-white'>
                Hi, I&apos;m{" "}
                <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-fill-transparent'>
                  John Amao
                </span>
              </h1>
              <div className='p-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mb-4 text-xl font-extrabold  md:text-4xl dark:text-white'>
                <div className='mb-2'>I</div>
                <Typewriter
                  options={{
                    strings: [
                      "Build My Ideas",
                      "Write and test Code",
                      "Ship products",
                      "Learn Everyday",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className='max-w-2xl mb-6 font-light text-white opacity-30 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
                Developer, Reader , Writer, Learner, Thinker
              </p>
            </div>
            <Image
              className='rounded-2xl md:ml-10'
              src='/aime.jpeg'
              alt='a landscape picture of me'
              width={400}
              height={300}
            />
          </div>
          <div className='mt-10 lg:mt-0'>
            <div
              className='max-w-sm p-6 bg-[#0e1631] border border-gray-200 rounded-lg shadow '
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <div className='flex gap-4'>
                <Image
                  className={` ${
                    isHovered
                      ? "md:rotate-45 md:translate-x-60 transition-all duration-500"
                      : "transition-all duration-500"
                  }`}
                  src='/rocket.svg'
                  width={35}
                  height={35}
                  alt='rocket icon'
                />
                {isHovered ? (
                  ""
                ) : (
                  <h2 className='md:text-2xl sm:text-xl text-white font-extrabold '>
                    Let&apos;s Build Together.
                  </h2>
                )}
              </div>

              <p className='mb-3 font-normal text-white'>
                I am a Fullstack Engineer interested in and studying machine
                learning, I think of myself as a product person, as I like to
                envision projects from Ideas to the end users. I also employ
                various technologies and frameworks in building products
              </p>
              <Link
                href='/about'
                className='inline-flex font-medium items-center text-blue-900'
              >
                <Button variant='outline'>Continue</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
