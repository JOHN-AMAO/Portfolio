"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaHome, FaUser, FaBlog, FaEnvelope, FaRProject, FaFilePdf, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";

export default function Home() {
  const [isHovered, setIsHover] = useState(false);
  const [isMobileDockOpen, setIsMobileDockOpen] = useState(false);

  const items = [
    { title: "Home", icon: <FaHome />, href: "/" },
    { title: "About", icon: <FaUser />, href: "/about" },
    { title: "Blog", icon: <FaBlog />, href: "/blog" },
    { title: "Contact", icon: <FaEnvelope />, href: "/contact" },
    { title: "Projects", icon: <CheckCheck />, href: "/projects" },
    { title: "Resume", icon: <FaFilePdf />, href: "/resume" },
    { title: "Github", icon: <FaGithub />, href: "https://github.com/JOHN-AMAO" },
    { title: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/john-amao-7352631b7/" },
    { title: "X", icon: <FaTwitter />, href: "https://x.com/JOHNAMAO4" },
  ];

  useEffect(() => {
    if (isMobileDockOpen) {
      document.body.style.backgroundColor = "black";
      document.body.style.transition = "background-color 0.3s ease";
    } else {
      document.body.style.backgroundColor = "";
    }

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.transition = "";
    };
  }, [isMobileDockOpen]);

  return (
    <main className={`bg-[#0e1631] min-h-screen md:ml-24 transition-colors duration-300 ${isMobileDockOpen ? 'bg-black' : ''}`}>
      <div className='container mx-auto px-4 py-12 md:py-20 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-64 items-center'>
          <div className='flex flex-col gap-6 max-w-xl'>
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
          <div className='flex justify-center lg:justify-end'>
            <Image
              className='rounded-2xl w-full max-w-md h-auto'
              src='/aime.jpeg'
              alt='a landscape picture of me'
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-64 items-center mt-12 md:mt-16 lg:mt-20'>
          <div
            className='bg-[#1a2547] border border-gray-700 rounded-lg shadow-lg p-6 lg:p-8 transition-all duration-300 hover:shadow-xl max-w-3xl mx-auto'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className='flex items-center gap-4 mb-4'>
              <Image
                className={`transition-all duration-500 ${
                  isHovered ? 'rotate-45 translate-x-80 ' : ''
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
              <Button variant='outline' className='text-black border-white hover:bg-white hover:text-[#0e1631]'>
                Learn More
              </Button>
            </Link>
          </div>
          <div className="relative h-64">
            <motion.div 
              className="absolute bottom-0 left-0 right-0 z-0"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="h-16 bg-indigo-600 opacity-20 rounded-lg transform -rotate-2 mb-2"
              
              ></motion.div>
              <motion.div 
                className="h-16 bg-purple-600 opacity-20 rounded-lg transform -rotate-1 mb-2"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.div 
                className="h-16 bg-pink-600 opacity-20 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FloatingDock 
                items={items} 
                desktopClassName="hidden md:flex bg-[#1a2547] bg-opacity-90 backdrop-blur-sm z-10 relative"
                mobileClassName="flex md:hidden bg-opacity-90 backdrop-blur-sm z-10 relative"
                onOpenChange={setIsMobileDockOpen}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
