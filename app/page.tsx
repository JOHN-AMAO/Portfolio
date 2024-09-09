"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHover] = useState(false);
  return (
    <main className='bg-[#0e1631] min-h-screen'>
      <div className='container mx-auto px-4 py-12 md:py-20'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          <div className='flex flex-col gap-6 max-w-2xl'>
            <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight'>
              Hi, I&apos;m{" "}
              <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
                John Amao
              </span>
            </h1>
            <div className='p-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-2xl md:text-3xl lg:text-4xl font-extrabold'>
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
            <p className='text-white opacity-70 text-lg md:text-xl'>
              Developer, Reader, Writer, Learner, Thinker
            </p>
          </div>
          <Image
            className='rounded-2xl w-full max-w-md h-auto'
            src='/aime.jpeg'
            alt='a landscape picture of me'
            width={400}
            height={300}
          />
        </div>
        <div className='mt-12 md:mt-20'>
          <div
            className='bg-[#1a2547] border border-gray-700 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className='flex items-center gap-4 mb-4'>
              <Image
                className={`transition-all duration-500 ${
                  isHovered ? 'rotate-45 translate-x-2' : ''
                }`}
                src='/rocket.svg'
                width={35}
                height={35}
                alt='rocket icon'
              />
              <h2 className={`text-2xl text-white font-extrabold transition-opacity duration-300 ${
                isHovered ? 'opacity-0' : 'opacity-100'
              }`}>
                Let&apos;s Build Together.
              </h2>
            </div>
            <p className='mb-6 text-white text-lg'>
              I am a Fullstack Engineer interested in and studying machine
              learning. I think of myself as a product person, as I like to
              envision projects from ideas to end users. I also employ
              various technologies and frameworks in building products.
            </p>
            <Link href='/about'>
              <Button variant='outline' className='text-white border-white hover:bg-white hover:text-[#0e1631]'>
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
