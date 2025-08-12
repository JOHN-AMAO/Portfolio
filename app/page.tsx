"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const socialLinks = [
    { title: "Mail", icon: <FaEnvelope />, href: "mailto:amaojohn767@gmail.com" }, 
    { title: "Github", icon: <FaGithub />, href: "https://github.com/JOHN-AMAO" },
    { title: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/john-amao-7352631b7/" },
    { title: "X", icon: <FaTwitter />, href: "https://x.com/JOHNAMAO4" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
  };

  return (
    <main className="min-h-screen relative overflow-hidden w-full flex-1">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[#0a0f24]">
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-indigo-600/20 blur-[100px]" />
        <div className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-pink-600/20 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-5 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02]" />

      <div className="mx-auto px-4 sm:px-6 md:px-8 py-16 relative z-10 w-full max-w-7xl">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32 mx-auto max-w-6xl"
        >
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-8 lg:max-w-xl w-full">
            <motion.div 
              custom={0} 
              variants={fadeIn} 
              className="inline-flex w-fit items-center px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for new projects
            </motion.div>
            
            <motion.h1 
              custom={1} 
              variants={fadeIn}
              className="text-white text-3xl md:text-4xl font-bold tracking-tight leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text relative z-10">
                  John Amao
                </span>
                <span className="absolute -bottom-1 left-0 h-3 w-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-sm -z-0"></span>
              </span>
            </motion.h1>
            
            <motion.div 
              custom={2} 
              variants={fadeIn}
              className="relative rounded-xl shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-sm"></div>
              <div className="backdrop-blur-sm bg-gray-900/40 border border-white/10 p-6 rounded-xl relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mb-1 text-white/80 text-xl font-mono">I</div>
                <div className="text-white text-2xl md:text-3xl font-bold font-mono">
                  <Typewriter
                    options={{
                      strings: [
                        "Build My Ideas",
                        "Write and test Code",
                        "Ship products(fast)",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                </div>
              </div>
            </motion.div>
            

            <motion.div 
              custom={4} 
              variants={fadeIn}
              className="flex gap-4 items-center"
            >
              <Link href="/projects">
                <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 rounded-xl px-8 py-6 text-base font-medium">
                  View My Work
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="bg-gray-900/60 border-white/20 text-white hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-xl px-8 py-6 text-base font-medium backdrop-blur-sm">
                  About Me
                </Button>
              </Link>
            
            </motion.div>
            
            <FloatingDock 
                items={socialLinks} 
                desktopClassName="hidden md:flex bg-gray-900/50 border border-white/10 backdrop-blur-lg z-10 relative shadow-xl"
                mobileClassName="flex md:hidden bg-gray-900/50 border border-white/10 backdrop-blur-lg z-10 relative shadow-xl"
               
              />
          </div>
          
          {/* Right Column - Image */}
          <motion.div 
            custom={1}
            variants={fadeIn}
            style={{
              perspective: '1000px',
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
            className="w-full lg:max-w-md relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-70"></div>
            <div className="absolute inset-0 rounded-2xl bg-gray-900/80 backdrop-blur-sm"></div>
            <Image
              className="rounded-2xl w-full h-auto relative z-10 shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
              src="/aime.jpeg"
              alt="a landscape picture of me"
              width={500}
              height={350}
              priority
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${scrollY * 0.01}deg) rotateX(${scrollY * -0.01}deg)`,
              }}
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl opacity-60 z-0"></div>
          </motion.div>
        </motion.div>
        
        {/* About Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col lg:flex-row gap-16 items-start mx-auto max-w-6xl"
        >

               {/* Right Column - Social Links */}
        

          {/* Left Column - About Card */}
          <div
            className="bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-8 transition-all duration-500 hover:border-indigo-500/30 group flex-1 relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <Image
                  className={`transition-all duration-500 ${
                    isHovered ? 'rotate-[360deg]' : ''
                  }`}
                  src="/rocket.svg"
                  width={30}
                  height={30}
                  alt="rocket icon"
                />
              </div>
              <h2 className={`text-2xl text-white font-bold transition-all duration-300 ${
                isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500' : ''
              }`}>
                Let&apos;s Build Together.
              </h2>
            </div>
            
            <p className="mb-8 text-white/80 text-lg leading-relaxed">
           
          I am a Software Engineer with expertise in web, mobile, and AI development. I excel at solving complex problems
          spanning architecture and systems design, while also focusing on how technology can optimize business operations.
          I leverage diverse technologies and frameworks to build comprehensive products.   
            </p>
            
            <Link href="/about">
              <Button 
                variant="outline" 
                className="text-white bg-gray-900/60 border-white/30 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:border-transparent hover:text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
            
           
          </div>
          
         
        </motion.div>
        
      
      </div>
    </main>
  );
}
