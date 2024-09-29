"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-16">
        <div className="flex flex-col gap-6 w-full md:w-1/2 lg:w-3/5">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-extrabold tracking-tight leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent  bg-clip-text">
              John Amao
            </span>
          </h1>
          <div className="space-y-4">
        
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                style={{ zIndex: 1 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl transform rotate-3 -z-10 group-hover:rotate-6 transition-transform duration-300 w-full h-full absolute top-0 left-0"></div>
                <div className="bg-gradient-to-r from-blue-500 to-indigo-400 rounded-2xl transform rotate-2 -z-20 group-hover:rotate-4 transition-transform duration-300 w-full h-full absolute top-1 left-1"></div>
                <div className="bg-[#1a2547] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 mt-2 ml-2">
                  <h3 className="text-xl font-semibold mb-2 text-white">About Me</h3>
                  <p className="text-white text-lg ">
                   
                  I&apos;m John, a passionate fullstack developer based in Nigeria 📍 . With 3 years of experience in programming, I&apos;ve dedicated my time to building digital solutions to problems.
                  <br />
                  When I&apos;m not coding, you can find me reading about new technology and philosophy, or watching random YouTube videos. I&apos;m always eager to explore and
                   collaborate on new technologies and ideas, and <Link href="mailto:amaojohn767@gmail.com" className="text-blue-500">connect </Link> with like-minded professionals. 

                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                style={{ zIndex: 1 }}
              >
                <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl transform rotate-3 -z-10 group-hover:rotate-6 transition-transform duration-300 w-full h-full absolute top-0 left-0"></div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-400 rounded-2xl transform rotate-2 -z-20 group-hover:rotate-4 transition-transform duration-300 w-full h-full absolute top-1 left-1"></div>
                <div className="bg-[#1a2547] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 mt-2 ml-2">
                  <h3 className="text-xl font-semibold mb-2 text-white">Interests 🌟</h3>
                  <ul className="text-white text-lg  list-disc pl-5">
                    <li>🎵 Rap music, Afrobeats, Pop music</li>
                    <li>🤔 Philosophy - absurdism, stoicism, nihilism</li>
                    <li>🎮 Gaming</li>
                    <li>🎻 Watching movies, stand-up comedy</li>
                    <li>📚 Reading</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                style={{ zIndex: 1 }}
              >
                <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl transform rotate-3 -z-10 group-hover:rotate-6 transition-transform duration-300 w-full h-full absolute top-0 left-0"></div>
                <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl transform rotate-2 -z-20 group-hover:rotate-4 transition-transform duration-300 w-full h-full absolute top-1 left-1"></div>
                <div className="bg-[#1a2547] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 mt-2 ml-2">
                  <h3 className="text-xl font-semibold mb-2 text-white">Soft Skills</h3>
                  <p className="text-white text-lg">
                    <ul className="list-disc pl-5">
                      <li>Problem-solving</li>
                      <li> Leadership</li>
                      <li>Critical thinking</li>
                      <li>Attention to detail</li>
                      <li> Time management</li>
                      <li> Teamwork</li>
                      <li> Communication</li>
                      <li> Creativity</li>
                      <li> Adaptability</li>
                     
                    </ul>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
          <Image
            className="rounded-2xl w-3/4 md:w-full max-w-md transform md:rotate-3 transition-transform duration-300 hover:rotate-0"
            src="/myimage.png"
            alt="John Amao"
            width={400}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
